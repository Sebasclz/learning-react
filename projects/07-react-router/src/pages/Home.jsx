import { Link } from '../components/Link.jsx';
import { enHomePage } from '../i18n/en.js';
import { esHomePage } from '../i18n/es.js';
import { useI18n } from '../utils/useI18n.js';

export default function HomePage({ routeParams }) {
  const link = `/${routeParams.lang}/about`;
  const i18n = useI18n(routeParams.lang ?? 'es', enHomePage, esHomePage);

  return (
    <>
      <h1>{i18n.title}</h1>
      <p>{i18n.description}</p>
      <Link to={link}>{i18n.button}</Link>
    </>
  );
}
