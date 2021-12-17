import { memo, useState, useMemo, useCallback, useLayoutEffect } from 'react';
import {
  Row,
  Col,
  Input,
  Typography,
  Divider,
  List,
  Card,
  Spin,
  Result,
  Space,
  Select,
  Tooltip,
} from 'antd';
import { useScroll } from 'ahooks';
import { useQueries } from 'react-query';
import { useLocation } from 'react-use';
import { decode } from 'js-base64';
import { findLast } from '@modyqyw/utils';

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

type JSONData = [Alphabet, [string, string[]][]][];

const GithubResourceUrl = 'https://api.github.com/repos/MillCloud/glossary-json/contents/';
const GiteeResourceUrl = 'https://gitee.com/api/v5/repos/MillCloud/glossary-json/contents/';
const resources = [
  {
    label: 'Github',
    value: GithubResourceUrl,
  },
  {
    label: 'Gitee',
    value: GiteeResourceUrl,
  },
];

const Index = memo(() => {
  const location = useLocation();
  const [resource, setResource] = useState(() =>
    location.href?.includes('gitee') ? GiteeResourceUrl : GithubResourceUrl,
  );

  const [searchText, setSearchText] = useState('');

  const url = useCallback((name: string) => `${resource}${name}.json`, [resource]);
  const headers: Record<string, any> = useMemo(
    () => ({
      Accept: resource.includes('gitee') ? 'application/json' : 'application/vnd.github.v3+json',
    }),
    [resource],
  );
  const results = useQueries(
    alphabet.map((item) => ({
      queryKey: [resource, item],
      queryFn: () =>
        fetch(url(item), { headers }).then(async (response) => {
          const json = await response.json();
          if (!response.ok) {
            throw new Error(`${json.message} Documentation URL: ${json.documentation_url}.`);
          }
          return JSON.parse(decode(json.content));
        }),
    })),
  );
  const isLoading = useMemo(() => results.some((item) => item.isLoading), [results]);
  const error = useMemo(() => results.find((item) => item.error)?.error, [results]);
  const data = useMemo(
    () =>
      (
        results.map((result, index) => [
          alphabet[index],
          Object.entries(result.data ?? {}),
        ]) as JSONData
      )
        .filter(
          ([char, entries]) =>
            char.includes(searchText) ||
            entries.some(
              ([k, v]) => k.includes(searchText) || v.some((item) => item.includes(searchText)),
            ),
        )
        .map(([char, entries]) => [
          char,
          entries
            .map(([k, v]) => [
              k,
              v.filter((item) => k.includes(searchText) || item.includes(searchText)),
            ])
            .filter(([, v]) => v.length > 0),
        ]) as JSONData,
    [results, searchText],
  );

  const scrollPosition = useScroll(document);
  const [activeAlphabet, setActiveAlphabet] = useState('A');
  useLayoutEffect(() => {
    setActiveAlphabet(
      findLast(
        alphabet,
        (item) =>
          (document.querySelector<HTMLElement>(`.divider-${item}`)?.offsetTop ?? 0) <=
          (scrollPosition?.top ?? 0),
      ) ?? 'A',
    );
  }, [scrollPosition]);

  return (
    <>
      <Row justify="center">
        <Col xs={24} md={12} xl={8}>
          <Input.Search
            addonBefore={
              <Select
                value={resource}
                className="w-auto"
                options={resources}
                onChange={(value) => setResource(value)}
              />
            }
            placeholder="输入中文或英文查询"
            allowClear
            enterButton
            loading={isLoading}
            defaultValue=""
            onSearch={(value) => {
              setSearchText(value);
            }}
          />
        </Col>
      </Row>
      <Row justify="center" className="my-4">
        找不到想要的？看看别的：
        <Space size="large">
          <Link href="https://github.com/kettanaito/naming-cheatsheet" target="_blank">
            naming-cheatsheet
          </Link>
          <Link href="https://dictionary.cambridge.org/" target="_blank">
            剑桥词典
          </Link>
          <Link href="https://unbug.github.io/codelf/" target="_blank">
            codelf
          </Link>
          <Link href="https://fe.js.org/#/doc/naming" target="_blank">
            命名宝典
          </Link>
        </Space>
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
      {!isLoading && !error && (
        <Row>
          <Col span={24}>
            {data.map(([char, entries]) => (
              <>
                <Divider orientation="left" className={`divider-${char}`}>
                  {char}
                </Divider>
                <List
                  grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 1,
                    md: 2,
                    lg: 3,
                    xl: 3,
                    xxl: 4,
                  }}
                  dataSource={entries}
                  rowKey={(item) => item[0]}
                  renderItem={(item) => (
                    <List.Item key={item[0]}>
                      <Card title={<Tooltip title={item[0]}>{item[0]}</Tooltip>}>
                        {item[1].map((string) => (
                          <Typography>{string}</Typography>
                        ))}
                      </Card>
                    </List.Item>
                  )}
                />
              </>
            ))}
          </Col>
          <Col span={1} className="flex flex-col items-center fixed right-0 top-64px">
            {alphabet.map((item) => (
              <Row
                key={item}
                role="button"
                className={`cursor-pointer w-20px justify-center items-center ${
                  activeAlphabet === item ? 'text-blue-6' : ''
                }`}
                onClick={() => {
                  document
                    .querySelector(`.divider-${item}`)
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item}
              </Row>
            ))}
          </Col>
        </Row>
      )}
    </>
  );
});

export default Index;
