import Link from 'next/link';

const Header = () => {
  return (
    <div className="mt-8 grid grid-cols-3">
      <>Evelyn Stender</>
      <div>
        <Link className="px-4" href="/about">
          About
        </Link>
        <Link className="px-4" href="/projects">
          Projects
        </Link>
        <Link className="px-4" href="/blog">
          Blog
        </Link>
        <Link className="px-4" href="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
