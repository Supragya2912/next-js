"use client"
import Link from 'next/link';

import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/productlist');
  };

  return (
    <>
      <h1>hello</h1>
      <Link href="/productlist">Product List page</Link>
      <button onClick={handleClick}>visit product page</button>
    </>
  );
}
