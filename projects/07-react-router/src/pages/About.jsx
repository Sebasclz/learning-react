import { Link } from '../components/Link.jsx';
import { enAboutPage } from '../i18n/en.js';
import { esAboutPage } from '../i18n/es.js';
import { useI18n } from '../utils/useI18n.js';

export default function AboutPage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es', enAboutPage, esAboutPage);

  const link = `/${routeParams.lang}`;
  return (
    <>
      <h1>{i18n.title}</h1>
      <p>{i18n.description}</p>
      <img src="https://midu.dev/images/this-is-fine-404.gif" alt={i18n.alt} />
      <Link to={link}>{i18n.button}</Link>
    </>
  );
}
