import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.variable.min.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HashRouter, useRoutes } from 'react-router-dom';
import '@/styles/global.css';
import browserUpdate from 'browser-update';
import routes from '~react-pages';
import Layout from '@/layouts';

browserUpdate({
  required: { e: 79, f: 67, o: 50, s: 12, c: 63 },
  insecure: true,
  unsupported: true,
});

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

function App() {
  return useRoutes(routes);
}

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider locale={zhCN}>
        <HashRouter>
          <Layout>
            <App />
          </Layout>
        </HashRouter>
      </ConfigProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.querySelector('#root'),
);
