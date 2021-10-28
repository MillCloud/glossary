import { memo, useState, useMemo } from 'react';
import { Row, Col, Input, Typography, Divider, List, Card } from 'antd';
import data from '@/data';

const { Link } = Typography;

const Index = memo(() => {
  const [searchText, setSearchText] = useState('');
  const filteredData = useMemo(
    () =>
      data.filter(
        ([, object]) =>
          Object.keys(object).length > 0 &&
          Object.entries(object).some(
            ([k, v]) => k.includes(searchText) || v.some((item) => item.includes(searchText)),
          ),
      ),
    [searchText],
  );

  console.log('filteredData', filteredData);

  return (
    <>
      <Row justify="center">
        <Col xs={24} md={12} lg={8}>
          <Input.Search
            placeholder="输入中文或英文查询"
            allowClear
            enterButton
            defaultValue=""
            onSearch={(value) => {
              setSearchText(value);
            }}
          />
        </Col>
      </Row>
      <Row justify="center" className="my-4">
        找不到想要的？
        <Link href="https://unbug.github.io/codelf/" target="_blank">
          试试别的
        </Link>
      </Row>
      {filteredData.map(([alphabet, object]) => (
        <>
          <Divider orientation="left">{alphabet}</Divider>
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 3,
              lg: 4,
              xl: 4,
              xxl: 4,
            }}
            dataSource={Object.entries(object)}
            renderItem={(item) => (
              <List.Item>
                <Card title={item[0]}>
                  {item[1].map((string) => (
                    <Typography>{string}</Typography>
                  ))}
                </Card>
              </List.Item>
            )}
          />
        </>
      ))}
    </>
  );
});

export default Index;
