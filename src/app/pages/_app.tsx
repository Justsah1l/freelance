// pages/_app.tsx
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css'; // Import your global CSS

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" 
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
