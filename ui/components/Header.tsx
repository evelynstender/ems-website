import Link from 'next/link';

const links = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

const Header = () => {
  return (
    <div className="mt-8 grid grid-cols-8">
      <Link className="px-8" href="/">
        Evelyn Stender
      </Link>
      <div className="col-start-4">
        {links.map((link, index) => {
          return (
            <Link key={index} className="px-4" href={link.href}>
              {link.label}
            </Link>
          );
        })}
      </div>
      <div className="col-end-9 px-10">colour theme</div>
    </div>
  );
};

export default Header;
