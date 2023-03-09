import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ENUS from './locales/en-us/en-us.json'
import PTBR from './locales/pt-br/pt-br.json'

const resources = {
    "pt-BR": PTBR,
    "en-US": ENUS
}

let lgn = localStorage.getItem('lgn');

i18n
    .use(initReactI18next)
    .init({
        debug:true,
        resources,
        lng: `${lgn}`,
        interpolation: {
            escapeValue: false
        },
    })

export default i18n;