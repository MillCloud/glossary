import { reactive } from 'vue';
import axios from 'axios';
import qs from 'qs';
import { QueryClient } from 'vue-query';
import type { VueQueryPluginOptions } from 'vue-query';

const instance = axios.create({
  timeout: 30_000,
  headers: {
    Accept: 'application/json',
  },
  paramsSerializer: (params: any) =>
    qs.stringify(
      Object.fromEntries(
        Object.entries(params).filter(
          ([, v]) =>
            !['', 'undefined', 'null', undefined, null].includes((v as any)?.toString() ?? v),
        ),
      ),
    ),
});

export { instance as axiosInstance };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        // console.log('');
        // console.log('queryKey', queryKey);
        // console.log('');
        const key = reactive(queryKey);
        const urlParams = Array.isArray(key[1]) ? key[1] : [];
        let url = (key[0] as any).toString() as string;
        for (const [idx, param] of urlParams.entries()) {
          url = url.replace(`:${idx}`, param.toString() as string);
        }
        const params = key[2] as Record<string, any>;
        const config = key[3] as IRequestConfig;
        const response = await instance.request<IResponseData>({
          method: 'GET',
          url,
          params,
          ...config,
        });
        return response?.data;
      },
      refetchOnWindowFocus: false,
    },
    mutations: {
      mutationFn: async (variables) => {
        // console.log('');
        // console.log('variables', variables);
        // console.log('');
        const config = reactive({ ...(variables as IRequestConfig) });
        const response = await instance.request<IResponseData>({
          method: 'POST',
          ...config,
        });
        return response?.data;
      },
    },
  },
});

export const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClient,
};
