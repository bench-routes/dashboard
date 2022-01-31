/* eslint-disable */
import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";

/*  Reusable fetch service for making requests to api endpoints 
    input - uniqueName, url, options
    output - data, error, status
*/
const useFetch = <T = unknown>(
  uniqueName: string,
  url: string,
  options?: AxiosRequestConfig
) => {
  return useQuery<AxiosResponse<T>, AxiosError>(uniqueName, () =>
    options ? axios.get(url, options) : axios.get(url)
  );
};

export default useFetch;
