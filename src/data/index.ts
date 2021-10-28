import A from './A.json';
import B from './B.json';
import C from './C.json';
import D from './D.json';
import E from './E.json';
import F from './F.json';
import G from './G.json';
import H from './H.json';
import I from './I.json';
import J from './J.json';
import K from './K.json';
import L from './L.json';
import M from './M.json';
import N from './N.json';
import O from './O.json';
import P from './P.json';
import Q from './Q.json';
import R from './R.json';
import S from './S.json';
import T from './T.json';
import U from './U.json';
import V from './V.json';
import W from './W.json';
import X from './X.json';
import Y from './Y.json';
import Z from './Z.json';

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

const data = ([
  ['A', A],
  ['B', B],
  ['C', C],
  ['D', D],
  ['E', E],
  ['F', F],
  ['G', G],
  ['H', H],
  ['I', I],
  ['J', J],
  ['K', K],
  ['L', L],
  ['M', M],
  ['N', N],
  ['O', O],
  ['P', P],
  ['Q', Q],
  ['R', R],
  ['S', S],
  ['T', T],
  ['U', U],
  ['V', V],
  ['W', W],
  ['X', X],
  ['Y', Y],
  ['Z', Z],
] as unknown) as [Alphabet, { [propName: string]: string[] }][];

export default data;
