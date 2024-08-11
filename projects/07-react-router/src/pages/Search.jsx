import { useEffect } from 'react';
import { enSearchPage } from '../i18n/en.js';
import { esSearchPage } from '../i18n/es.js';
import { useI18n } from '../utils/useI18n.js';

export default function SearchPage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es', enSearchPage, esSearchPage);
  useEffect(() => {
    document.title = `${i18n.documentTitle} ${routeParams.query}`;
  }, []);
  return (
    <>
      <h1>{i18n.title}</h1>
      <p>{i18n.description}</p>
      <p>
        {i18n.paragraph} {routeParams.query}
      </p>
    </>
  );
}
