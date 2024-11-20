import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function UseRouterMain() {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', url => {
      console.log(`Loading: ${url}`);
    });
    router.events.on('routeChangeComplete', url => {
      console.log(`Loaded: ${url}`);
    });
  }, [router.events]);
  return (
    <main className="p-10">
      <ol>
        <li>{router.pathname}</li>
        <li>{router.query.query}</li>
        <li>{router.asPath}</li>
        <li>
          <button onClick={() => router.back()}>Back</button>
        </li>
        <li>
          <button onClick={() => router.forward()}>Forward</button>
        </li>
      </ol>
    </main>
  );
}
