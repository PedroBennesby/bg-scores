import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>BG Scores</title>
      </Head>
      <main className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className} gap-20 divide-y`}>
        <Link href='/affo'>
          <Image src='/images/affo-logo.png' width={300} height={300} alt='Um banquete a Odin logo' />
        </Link>
        <Link href='/wingspan' className='pt-10'>
          <Image src='/images/wingspan-logo.png' width={300} height={300} alt='Wingspan logo' />
        </Link>
        <Link href='/gwt' className='pt-10 '>
          <Image src='/images/gwt-logo.png' width={300} height={300} alt='Great Western Trail logo' />
        </Link>
        <Link href='/agricola' className='pt-10 '>
          <Image src='/images/agricola-logo.png' width={300} height={300} alt='Agricola Trail logo' />
        </Link>
      </main>
    </>
  );
}
