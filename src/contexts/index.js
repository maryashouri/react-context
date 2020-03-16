import React,{createContext} from "react";

const  languages={
    en:
    {
        language: "English",
        words: {
           home: "Home",
           events: "Events",
           aboutUs: "About Us",
           contactUs: "Contact Us",
           language: "Language"
      }
    },
    f:
    {
        language: "Persian",
        words: {
           home: "خانه",
           events: "رویداد ها",
           aboutUs: "درباره ما",
           contactUs: "تماس با ما",
           language: "زبان"
       }
    },

};
const LanguageContext = React.createContext(languages.f);
export default LanguageContext;