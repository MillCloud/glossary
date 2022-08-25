export const Alphabet = [
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
] as const;

export const Endpoints = [
  {
    label: 'Github',
    value: 'https://api.github.com/repos/MillCloud/glossary-json/contents/',
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  },
  {
    label: 'Gitee',
    value: 'https://gitee.com/api/v5/repos/MillCloud/glossary-json/contents/',
    headers: {
      Accept: 'application/json',
    },
  },
] as const;

export const Resources = [
  {
    label: 'GitHub Pages',
    value: 'https://millcloud.github.io/glossary/',
  },
  {
    label: 'Gitee Pages',
    value: 'https://millcloud.gitee.io/glossary/',
  },
  {
    label: 'GitHub Pages Repo',
    value: 'https://github.com/MillCloud/glossary/',
  },
  {
    label: 'Gitee Pages Repo',
    value: 'https://gitee.com/MillCloud/glossary/',
  },
  {
    label: 'GitHub Data Repo',
    value: 'https://github.com/MillCloud/glossary-json/',
  },
  {
    label: 'Gitee Data Repo',
    value: 'https://gitee.com/MillCloud/glossary-json/',
  },
  {
    label: '程序员英语学习指南',
    value: 'https://github.com/yujiangshui/A-Programmers-Guide-to-English',
  },
  {
    label: 'naming-cheatsheet',
    value: 'https://github.com/kettanaito/naming-cheatsheet',
  },
  {
    label: '剑桥词典',
    value: 'https://dictionary.cambridge.org/',
  },
  {
    label: 'Codelf',
    value: 'https://unbug.github.io/codelf/',
  },
  {
    label: '命名宝典',
    value: 'https://fe.js.org/#/doc/naming',
  },
] as const;
