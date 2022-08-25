import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import type { Endpoints, Alphabet } from '@/constants';

declare global {
  interface IResponseData {
    content: string;
    download_url: string;
    encoding: string;
    git_url?: string;
    html_url: string;
    name: string;
    path: string;
    sha: string;
    size: number;
    type: string;
    url: string;
    _links: {
      git?: string;
      html: string;
      self: string;
    };
  }

  interface IResponse extends AxiosResponse<IResponseData> {}

  interface IResponseError extends AxiosError<IResponseData> {
    response?: IResponse;
  }

  interface IRequestConfig extends AxiosRequestConfig {}

  interface Form {
    search: string;
    endpoint: typeof Endpoints[number];
  }

  type Char = typeof Alphabet[number];
}

export {};
