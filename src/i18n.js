import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import Backend from "i18next-http-backend";
import LanguageDetector from 'i18next-browser-languagedetector';
 i18n
 .use(initReactI18next)
 .use(LanguageDetector)
 .use(Backend)
 .init({
    debug:true,
 fallbacklng:'en',
 error:{
     404:"Not found",
     other:"Other error is occured"
 },
 saveMissing:true,
 backend:{
loadpath:"/locales/{{lng}}/translation.json"
 }
 })