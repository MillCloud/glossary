import { memo } from 'react';
import { Typography } from 'antd';

const { Title, Paragraph, Text } = Typography;

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
      <Text>chunk</Text>。
    </Paragraph>
    <Paragraph>该项目旨在统一跨项目的日常中英文本对照，同时也提供部分专业术语对照。</Paragraph>
  </Typography>
));

export default Index;
