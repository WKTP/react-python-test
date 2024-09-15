import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Name": "Name",
      "Age": "Age",
      "Actions": "Actions",
      "Add Person": "Add Person",
      "Delete": "Delete",
    }
  },
  th: {
    translation: {
      "Name": "ชื่อ",
      "Age": "อายุ",
      "Actions": "การดำเนินการ",
      "Add Person": "เพิ่มบุคคล",
      "Delete": "ลบ",
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', 
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
