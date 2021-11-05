import { memo } from 'react';
import { Layout as ALayout, Typography, Image, Row, BackTop, Space } from 'antd';
import pkg from '@/../package.json';
import logoUrl from '@/assets/logo.png';

const { Header, Content, Footer } = ALayout;
const { Title, Link } = Typography;

const Layout = memo(({ children }) => (
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
      </Row>
    </Header>
    <Content style={{ marginTop: 64, padding: 24 }}>{children}</Content>
    <Footer>
      <Row justify="center">v{pkg.version}</Row>
      <Row justify="center">
        <Space size="large">
          <Link href={`https://github.com/MillCloud/${pkg.name}`} target="_blank">
            Github Repo
          </Link>
          <Link href={`https://gitee.com/MillCloud/${pkg.name}`} target="_blank">
            Gitee Repo
          </Link>
          <Link href={`https://github.com/MillCloud/${pkg.name}-json`} target="_blank">
            Github Data Repo
          </Link>
          <Link href={`https://gitee.com/MillCloud/${pkg.name}-json`} target="_blank">
            Gitee Data Repo
          </Link>
          <Link href={`https://millcloud.github.io/${pkg.name}/`} target="_blank">
            Github Page
          </Link>
          <Link href={`https://millcloud.gitee.io/${pkg.name}/`} target="_blank">
            Gitee Page
          </Link>
        </Space>
      </Row>
    </Footer>
    <BackTop />
  </ALayout>
));

export default Layout;
