import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from 'virtual:generated-pages-react';
import Layout from '@/layout';
import 'virtual:windi.css';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <HashRouter basename={import.meta.env.BASE_URL}>
        <Layout>{renderRoutes(routes)}</Layout>
      </HashRouter>
    </ConfigProvider>
  </React.StrictMode>,
  document.querySelector('#root'),
);
