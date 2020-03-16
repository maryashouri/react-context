import React, {Component} from 'react';
import Navbar from "./Navbar";
import LanguageContext from "../contexts/index"


export default class App extends Component {

    
    constructor(props) {
        super(props);
        let languages={
            f:
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
            en:
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
    
        this.changeToEnglish = () => {
          this.setState(state => ({
            language : languages.en,
          }));
        };
        this.changeToPersian = () => {
            this.setState(state => ({
                language:languages.f
            
            }));
          };

        this.state = {
        
            language:languages.f,
            changeToEnglish: this.changeToEnglish,
            changeToPersian:this.changeToPersian
        };
      }
    render() {
        return (    
             <LanguageContext.Provider value={this.state}>
                <Navbar/> 
            </LanguageContext.Provider>        
             
        )

    }
  
    
}