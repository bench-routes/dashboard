/* eslint-disable */
import { useEffect, useReducer, useRef } from "react";
import axios, { AxiosRequestConfig } from "axios";

interface Response<T> {
  status: "init" | "fetching" | "error" | "fetched";
  data?: T | undefined;
  error?: string | undefined;
}

// used if you want to reference
// persistent storage
interface Cache<T> {
  [url: string]: T;
}

type Action<T> =
  | { type: "request" }
  | { type: "success"; payload: T }
  | { type: "failure"; payload: string };

/*  Reusable fetch service for making requests to api endpoints 
    input - url,options
    output - data,error,status
*/
const useFetch = <T = unknown>(
  url: string,
  options?: AxiosRequestConfig
): Response<T> => {
  const cache = useRef<Cache<T>>({});
  const cancelRequest = useRef<boolean>(false);

  const initialState: Response<T> = {
    status: "init",
    error: undefined,
    data: undefined,
  };

  // main function
  const fetchReducer = (state: Response<T>, action: Action<T>): Response<T> => {
    switch (action.type) {
      case "request":
        return { ...initialState, status: "fetching" };
      case "success":
        return { ...initialState, status: "fetched", data: action.payload };
      case "failure":
        return { ...initialState, status: "error", error: action.payload };
      default:
        return state;
    }
  };

  // useReducer instead of use state could make the function
  // easier to debug across multiple usages.
  const [state, dispatch] = useReducer(fetchReducer, initialState);
  useEffect(() => {
    if (!url) {
      return;
    }

    const fetchData = async () => {
      dispatch({ type: "request" });

      if (cache.current[url]) {
        dispatch({ type: "success", payload: cache.current[url] });
      } else {
        try {
          const response = options
            ? await axios.get(url, options)
            : await axios.get(url);

          cache.current[url] = response.data;

          if (cancelRequest.current) return;

          dispatch({ type: "success", payload: response.data });
        } catch (error: any) {
          // Let's keep error handling to another day,
          // hence the type for error is "any" here.
          if (cancelRequest.current) return;

          // server should return a message, else use a custom message such as "something went wrong"
          dispatch({ type: "failure", payload: error.message });
        }
      }
    };

    fetchData();
  }, [url]);

  useEffect(() => {
    // runs when component is destroyed.
    return () => {
      cancelRequest.current = true;
    };
  }, []);

  return state;
};

export default useFetch;
