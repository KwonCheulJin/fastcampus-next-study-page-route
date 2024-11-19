import { baskervville, noto_sans } from '@/styles/fonts';
import Head from 'next/head';
import styles from './index.module.css';

const fontSize = { fontSize: 50 };
export function GoogleMain() {
  return (
    <main>
      <p style={fontSize}>FONT: DEFAULT</p>
      <p>CLS TEST</p>
      <hr />
      <p className={noto_sans.className} style={fontSize}>
        FONT: NOTO SANS
      </p>
      <p>CLS TEST</p>
      <hr />
      <p className={baskervville.className} style={fontSize}>
        FONT: NEXT BASKERVVILLE
      </p>
      <p>CLS TEST</p>
      <hr />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baskervville+SC&display=swap"
          rel="stylesheet"
        />
      </Head>
      <p className={styles.baskervville} style={fontSize}>
        FONT: REMOTE
      </p>
      <p>CLS TEST</p>
    </main>
  );
}
