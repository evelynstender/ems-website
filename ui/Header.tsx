import Link from 'next/link';

const Header = () => {
  return (
    <div className="font-sans text-purple-100">
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
};

export default Header;
