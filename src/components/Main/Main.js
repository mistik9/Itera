import React from 'react';
import Feedback from '../Feedback/Feedback';
import MyApps from '../MyApps/MyApps';
import About from '../About/About';

import SEO from '../SEO/SEO';

function Main() {
  return (
    <main className="main">
      <SEO
        title="ITera"
        description="Мы занимаемся разработкой приложений и интеграций для CRM. Основное направление - интеграции с маркетплейсами и торговыми площадками."
        type="website"
      />
      <About />
      <MyApps />
      <Feedback />
    </main>
  );
}

export default Main;
