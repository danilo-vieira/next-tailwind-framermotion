import Image from 'next/image';
import Link from 'next/Link';

const Header: React.FC = ({ children }) => {
  return (
    <header className="flex justify-center md:justify-between py-2 md:py-4 items-center">
      <Image src="/img/logo.svg" alt="Logo" width={150} height={33}/>

      <nav className="hidden md:block space-x-8">
        <Link href="/nextjs">
          <a className="tracking-wide hover:text-pink-300">Next.js</a>
        </Link>

        <Link href="/tailwind">
          <a className="tracking-wide hover:text-pink-600">Tailwind</a>
        </Link>

        <Link href="/framermotion">
          <a className="tracking-wide hover:text-yellow-300">Framer Motion</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header;