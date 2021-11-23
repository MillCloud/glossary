import { memo, useMemo } from 'react';
import { Layout as ALayout, Typography, Image, Row, Menu, BackTop, Space } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';
import pkg from '@/../package.json';
import logoUrl from '@/assets/logo.png';

const { Header, Content, Footer } = ALayout;
const { Title, Link } = Typography;

const routes = [
  {
    path: '/',
    name: 'index',
  },
  {
    path: '/introduction',
    name: 'introduction',
  },
];

const Layout = memo(({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const history = useHistory();
  const selectedKeys = useMemo(
    () => routes.filter((route) => route.path === location.pathname).map((route) => route.name),
    [location],
  );
  return (
    <ALayout className="min-h-screen">
      <Header className="fixed z-1 w-full" style={{ padding: '0 24px' }}>
        <Row align="middle" className="h-full flex-nowrap">
          <a
            href="https://www.millcloud.cn"
            className="flex flex-row items-center flex-none"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={logoUrl} preview={false} alt="MillCloud" className="w-20" />
          </a>
          <Title level={5} className="!text-white !mb-0 mx-4 flex-none">
            词汇表
          </Title>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={selectedKeys}
            onClick={({ key }) => {
              history.push(`/${key}`);
            }}
          >
            <Menu.Item key="index">列表</Menu.Item>
            <Menu.Item key="introduction">说明</Menu.Item>
          </Menu>
        </Row>
      </Header>
      <Content style={{ marginTop: 64, padding: 24 }}>{children}</Content>
      <Footer>
        <Row justify="center">v{pkg.version}</Row>
        <Row justify="center">
          <Space size="large">
            <Link href={`https://millcloud.github.io/MillCloud/${pkg.name}`} target="_blank">
              Github Pages
            </Link>
            <Link href={`https://millcloud.gitee.io/MillCloud/${pkg.name}`} target="_blank">
              Gitee Pages
            </Link>
            <Link href={`https://github.com/MillCloud/${pkg.name}`} target="_blank">
              Github Pages Repo
            </Link>
            <Link href={`https://gitee.com/MillCloud/${pkg.name}`} target="_blank">
              Gitee Pages Repo
            </Link>
            <Link href={`https://github.com/MillCloud/${pkg.name}-json/`} target="_blank">
              Github Data Repo
            </Link>
            <Link href={`https://gitee.com/MillCloud/${pkg.name}-json/`} target="_blank">
              Gitee Data Repo
            </Link>
          </Space>
        </Row>
      </Footer>
      <BackTop />
    </ALayout>
  );
});

export default Layout;
