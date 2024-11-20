import Script from 'next/script';

export default function SomeScript() {
  return (
    <Script strategy="afterInteractive" id="some-script">
      {`
      console.log('SOME SCRIPT');
    `}
    </Script>
  );
}
