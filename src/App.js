
import React, { Component } from 'react';
import { Translation } from 'react-i18next';
import './App.css';


// const {t, i18n} = useTranslation();
// i18n.changeLanguage('ko');



class App extends Component {
  render() {
      return (
        <div className="app-container">  
         <h1>
            <Translation>
              {
                (t, { i18n }) => <p>{t('title')}</p>
              }
            </Translation>
          </h1>===
             {/* common header for entire app  */}
            {/* <AppHeader/> */}

            {/* main section to render pages for different urls  */}
            <main className="page-container">
              {this.props.children}
            </main>
            
        </div>
      );
  }
}

export default App;
