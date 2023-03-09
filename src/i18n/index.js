import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ENUS from './locales/en-us/en-us.json'
import PTBR from './locales/pt-br/pt-br.json'

const resources = {
    "pt-BR": PTBR,
    "en-US": ENUS
}

i18n
    .use(initReactI18next)
    .init({
        debug:true,
        resources,
        lng: 'en-US',
        interpolation: {
            escapeValue: false
        }
    })

export default i18n;