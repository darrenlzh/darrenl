import React from 'react';
import { withLocalize } from 'react-localize-redux';

const LanguageToggler = ({ languages, activeLanguage, setActiveLanguage, open}) => (

  <ul className={open? 'open': ''}>
    {
      languages.map(lang => {
        return (
          <li key={lang.code}
          onClick={() => setActiveLanguage(lang.code)}>{lang.name}</li>
        );
      })
    }
  </ul>
);

export default withLocalize(LanguageToggler);
