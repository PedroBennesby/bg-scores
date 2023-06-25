import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}>
      <a href='/affo'>
        <Image src='/images/affo-logo.png' width={500} height={500} alt='A feast for Odin logo' />
      </a>
    </main>
  );
}
