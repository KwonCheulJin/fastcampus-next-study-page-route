import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link href="/routing">STATIC</Link>
        </li>
        <li>
          <Link href="/routing/dynamic/1">DYNAMIC 1</Link>
        </li>
        <li>
          <Link href="/routing/nested/1/routing">NESTED 1</Link>
        </li>
        <li>
          <Link href="/routing/catch-all-segments/1/2/3/4">
            CATCH-ALL-SEGMENTS
          </Link>
        </li>
      </ul>
    </main>
  );
}
