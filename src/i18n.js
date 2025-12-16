import i18next from 'i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const apiKey = process.env.REACT_APP_I18N_API_KEY;

i18next
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,
        ns: ['default'],
        defaultNS: 'default',
        supportedLngs: ['en', 'pt-PT'],
        backend: {
            loadPath:
                `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`,
            queryStringParams: {
                api_key: apiKey,
            },
        },
    });

export default i18next;