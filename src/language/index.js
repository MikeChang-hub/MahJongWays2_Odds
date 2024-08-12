import { createI18n } from 'vue-i18n'
import list from './lang/index.js'

const messages = list
const lang = (navigator.language || 'en').toLocaleLowerCase()
const language = localStorage.getItem('language') || lang.split('-')[0] || 'en';
localStorage.setItem('language', language)
const i18n = new createI18n({
  locale: language,
  legacy: false,
  messages
});
export default i18n;
