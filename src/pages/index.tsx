import { memo, useState, useMemo, useCallback } from 'react';
import { Row, Col, Input, Typography, Divider, List, Card, Spin, Result } from 'antd';
import { useQueries } from 'react-query';
import { useLocation } from 'react-use';

const { Link } = Typography;

type Alphabet =
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z';

const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

type JSONData = [Alphabet, { [propName: string]: string[] }][];

const Index = memo(() => {
  const [searchText, setSearchText] = useState('');

  const location = useLocation();
  const url = useCallback(
    (name: string) => {
      const { href } = location;
      if (href?.includes('gitee')) {
        return `https://gitee.com/millcloud/glossary-json/raw/main/${name}.json`;
      }
      return `https://raw.githubusercontent.com/MillCloud/glossary-json/main/${name}.json`;
    },
    [location],
  );
  const headers: Record<string, any> = useMemo(() => {
    const { href } = location;
    if (href?.includes('gitee')) {
      return {
        'Content-Type': 'application/json;charset=UTF-8',
      };
    }
    // eslint-disable-next-line consistent-return
    return {
      'Content-Type': 'application/json;charset=UTF-8',
      Accept: 'application/vnd.github.v3+json',
    };
  }, [location]);
  const results = useQueries(
    alphabet.map((item) => ({
      queryKey: ['json', item],
      queryFn: () =>
        fetch(url(item), { headers, mode: 'cors' }).then((response) => response.json()),
    })),
  );
  const isLoading = useMemo(() => results.some((item) => item.isLoading), [results]);
  const error = useMemo(() => results.find((item) => item.error)?.error, [results]);
  const data = useMemo(
    () =>
      (results.map((item, index) => [alphabet[index], item.data]) as JSONData).filter(
        ([, object = {}]) =>
          Object.keys(object).length > 0 &&
          Object.entries(object).some(
            ([k, v]) => k.includes(searchText) || v.some((item) => item.includes(searchText)),
          ),
      ),
    [results, searchText],
  );

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
      {isLoading && (
        <Row justify="center" className="my-4">
          <Spin />
        </Row>
      )}
      {!isLoading && error && (
        // @ts-ignore
        <Result status="error" title={(error?.message ?? error?.toString() ?? error) as string} />
      )}
      {!isLoading &&
        !error &&
        data.map(([char, object]) => (
          <>
            <Divider orientation="left">{char}</Divider>
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
              rowKey={(item) => item[0]}
              renderItem={(item) => (
                <List.Item key={item[0]}>
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
