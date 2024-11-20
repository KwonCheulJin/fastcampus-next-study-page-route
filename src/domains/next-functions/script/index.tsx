import SomeScript from '@/domains/next-functions/script/SomeScript';
import Link from 'next/link';
import Script from 'next/script';
import { useState } from 'react';

declare global {
  interface Window {
    dayjs: () => {
      format: (params: string) => string;
    };
  }
}

export default function ScriptMain() {
  const [visible, setVisible] = useState(false);

  const onLoad = () => {
    console.log('ON LOAD');
  };

  const onReady = () => {
    console.log('ON READY', window.dayjs().format('YYYY-MM-DD HH:mm:ss'));
  };
  return (
    <main>
      {visible && <SomeScript />}
      <button onClick={() => setVisible(true)}>LOAD SCRIPT</button>
      <Link href="/next-functions/script/some-route">Go to Other Page</Link>

      <Script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"
        strategy="afterInteractive"
        onLoad={onLoad}
        onReady={onReady}
      />
    </main>
  );
}
