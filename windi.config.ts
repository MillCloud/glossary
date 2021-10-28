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
import aspectRatioPlugin from 'windicss/plugin/aspect-ratio';
import formsPlugin from 'windicss/plugin/forms';
import filtersPlugin from 'windicss/plugin/filters';
import lineClampPlugin from 'windicss/plugin/line-clamp';
import scrollSnapPlugin from 'windicss/plugin/scroll-snap';
import typographyPlugin from 'windicss/plugin/typography';
// @ts-ignore
import animationsPlugin from '@windicss/plugin-animations';
// @ts-ignore
import scrollbarPlugin from '@windicss/plugin-scrollbar';
// @ts-ignore
import questionMarkPlugin from '@windicss/plugin-question-mark';
// @ts-ignore
import heropatternsPlugin from '@windicss/plugin-heropatterns';
// @ts-ignore
import interactionVariantsPlugin from '@windicss/plugin-interaction-variants';

export default defineConfig({
  preflight: false,
  attributify: true,
  plugins: [
    aspectRatioPlugin,
    formsPlugin,
    filtersPlugin,
    lineClampPlugin,
    scrollSnapPlugin,
    typographyPlugin,
    animationsPlugin,
    scrollbarPlugin,
    questionMarkPlugin,
    heropatternsPlugin,
    interactionVariantsPlugin,
  ],
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
        },
        lightBlue: windiColors.lightBlue,
        blue: {
          ...(windiColors.blue as Record<string | number, string>),
          ...antdBlue.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
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
        },
        gold: {
          ...antdGold.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
        },
        geekBlue: {
          ...antdGeekBlue.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
        },
        magenta: {
          ...antdMagenta.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
        },
      },
    },
  },
});
