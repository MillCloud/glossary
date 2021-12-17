import { defineConfig } from 'windicss/helpers';
import windiColors from 'windicss/colors';
import {
  red as antdRed,
  volcano as antdVolcano,
  orange as antdOrange,
  gold as antdGold,
  yellow as antdYellow,
  lime as antdLime,
  green as antdGreen,
  cyan as antdCyan,
  blue as antdBlue,
  geekblue as antdGeekBlue,
  purple as antdPurple,
  magenta as antdMagenta,
  grey as antdGray,
} from '@ant-design/colors';

export default defineConfig({
  preflight: false,
  attributify: true,
  theme: {
    extend: {
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1600px',
        xxl: '1600px',
      },
      colors: {
        pink: windiColors.pink,
        rose: windiColors.rose,
        red: {
          ...(windiColors.red as Record<string | number, string>),
          ...antdRed.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
          default: antdRed.primary ?? antdRed[5],
        },
        orange: {
          ...(windiColors.orange as Record<string | number, string>),
          ...antdOrange.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
          default: antdOrange.primary ?? antdOrange[5],
        },
        yellow: {
          ...(windiColors.yellow as Record<string | number, string>),
          ...antdYellow.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
          default: antdYellow.primary ?? antdYellow[5],
        },
        amber: windiColors.amber,
        lime: {
          ...(windiColors.lime as Record<string | number, string>),
          ...antdLime.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
          default: antdLime.primary ?? antdLime[5],
        },
        green: {
          ...(windiColors.green as Record<string | number, string>),
          ...antdGreen.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
          default: antdGreen.primary ?? antdGreen[5],
        },
        emerald: windiColors.emerald,
        teal: windiColors.teal,
        cyan: {
          ...(windiColors.cyan as Record<string | number, string>),
          ...antdCyan.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
          default: antdCyan.primary ?? antdCyan[5],
        },
        blue: {
          ...(windiColors.blue as Record<string | number, string>),
          ...antdBlue.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
          default: antdBlue.primary ?? antdBlue[5],
        },
        indigo: windiColors.indigo,
        purple: {
          ...(windiColors.purple as Record<string | number, string>),
          ...antdPurple.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
          default: antdPurple.primary ?? antdPurple[5],
        },
        violet: windiColors.violet,
        fuchsia: windiColors.fuchsia,
        gray: {
          ...(windiColors.gray as Record<string | number, string>),
          ...antdGray.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
          default: antdGray.primary ?? antdGray[6],
        },
        blueGray: windiColors.blueGray,
        coolGray: windiColors.coolGray,
        warmGray: windiColors.warmGray,
        trueGray: windiColors.trueGray,
        light: windiColors.light,
        dark: windiColors.dark,
        black: windiColors.black,
        white: windiColors.white,
        sky: windiColors.sky,
        volcano: {
          ...antdVolcano.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
          default: antdVolcano.primary ?? antdVolcano[5],
        },
        gold: {
          ...antdGold.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
          default: antdGold.primary ?? antdGold[5],
        },
        geekBlue: {
          ...antdGeekBlue.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
          default: antdGeekBlue.primary ?? antdGeekBlue[5],
        },
        magenta: {
          ...antdMagenta.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
          default: antdMagenta.primary ?? antdMagenta[5],
        },
        primary: {
          ...antdBlue.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
          default: antdBlue.primary ?? antdBlue[5],
        },
        success: {
          ...antdGreen.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
          default: antdGreen.primary ?? antdGreen[5],
        },
        warning: {
          ...antdGold.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
          default: antdGold.primary ?? antdGold[5],
        },
        error: {
          ...antdRed.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
          default: antdRed.primary ?? antdRed[5],
        },
        danger: {
          ...antdRed.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
          default: antdRed.primary ?? antdRed[5],
        },
        info: {
          ...antdBlue.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
          default: antdBlue.primary ?? antdBlue[5],
        },
      },
    },
  },
});
