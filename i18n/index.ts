/* eslint-disable */
import './index.d';
import zh from './zh.yml';
import en from './en.yml';

export const messages = {
  zh,
  en
};

export type Languages = keyof typeof messages;

export const Locales = [
  ['zh', '中文'],
  ['en', 'English']
];
