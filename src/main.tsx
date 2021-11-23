import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.variable.min.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from 'virtual:generated-pages-react';
import Layout from '@/layout';
import 'virtual:windi.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Number.POSITIVE_INFINITY,
      refetchOnWindowFocus: false,
      retry: (failureCount, error) => {
        if ((error as Error)?.message.includes('rate limit exceeded')) {
          return false;
        }
        return failureCount < 3;
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider locale={zhCN}>
        <HashRouter basename={import.meta.env.BASE_URL}>
          <Layout>{renderRoutes(routes)}</Layout>
        </HashRouter>
      </ConfigProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.querySelector('#root'),
);
