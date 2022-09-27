import '../styles/globals.css';

/*
 * Wondering what this file is? It is essentially a single place to add overrides
 * for all pages. Things like holding a single state object,
 * adding global CSS (such as above), or providing essential data to all pages.
 *
 * Official documentation here: https://nextjs.org/docs/advanced-features/custom-app
 */

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
