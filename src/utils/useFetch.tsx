/* eslint-disable */
import { useState, useEffect } from "react";
import axios from "axios";

export type APIResponse<T> = { statusText: string; data?: T };

export interface FetchState<T> {
  response: APIResponse<T>;
  error?: Error;
  isLoaded: boolean;
}

type ObjectLiteral = { [key: string]: any };

export const useFetch = <T extends ObjectLiteral>(
  url: string
): FetchState<T> => {
  const [response, setResponse] = useState<APIResponse<T>>({
    statusText: "start fetching",
  });
  const [error, setError] = useState<Error>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoaded(false);
        const res = await axios.get(url);
        const json = res as APIResponse<T>;
        setResponse(json);
        setIsLoaded(true);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url]);

  return { response, error, isLoaded };
};
