import { memo } from 'react';
import { Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

const Index = memo(() => (
  <Typography>
    <Title>目的</Title>
    <Paragraph>
      同一个含义的中文文本，出现在不同项目内时，可能会被翻译成不同的英文文本，比如{' '}
      <Text code>分店</Text> 可能会出现 <Text code>branch</Text> 和 <Text code>store</Text>{' '}
      两种翻译。这种情况导致了在不同项目间频繁流动的开发者需要花额外的时间去了解文本含义。
    </Paragraph>
    <Paragraph>
      此外，某些专业术语难以理解或翻译，往往会使开发者困惑，比如 <Text code>vendor</Text> 和{' '}
      <Text code>chunk</Text>。
    </Paragraph>
    <Paragraph>
      该项目旨在 <Text strong>统一</Text> 跨项目的日常中英文本对照，同时也提供{' '}
      <Text strong>部分专业术语对照</Text>。
    </Paragraph>
    <Paragraph>
      该项目可以视为学习英语的捷径，但捷径往往意味着基础不牢固。在此推荐{' '}
      <Link href="https://github.com/yujiangshui/A-Programmers-Guide-to-English" target="_blank">
        程序员英语学习指南
      </Link>
      。
    </Paragraph>
  </Typography>
));

export default Index;
