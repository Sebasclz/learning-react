import { Link } from '../components/Link.jsx';

export default function Page404() {
  return (
    <main
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'block',
          width: '490px',
          margin: '0 auto',
        }}
      >
        <div>
          <h1
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            This is NOT fine...
          </h1>
          <img
            src="https://midu.dev/images/this-is-fine-404.gif"
            alt="Gif del perro de This is Fine quemandose vivo"
          />
        </div>
        <Link
          to="/es"
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '1rem',
          }}
        >
          Ir a la página principal
        </Link>
      </div>
    </main>
  );
}
