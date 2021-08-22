import React from 'react';
import { Helmet } from 'react-helmet';
import Resume from '../components/Resume';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Hartley the PM'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Hartley the PM'} />
      </Helmet>
      <Resume />
    </>
  );
};
