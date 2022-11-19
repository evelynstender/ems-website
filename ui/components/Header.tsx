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
    <div className="grid grid-cols-3">
      <Link className="m-8 place-self-start" href="/">
        Evelyn Stender
      </Link>
      <div className="place-self-center">
        {links.map((link, index) => {
          return (
            <Link key={index} className="px-4" href={link.href}>
              {link.label}
            </Link>
          );
        })}
      </div>
      <div className="m-8 place-self-center justify-self-end">theme</div>
    </div>
  );
};

export default Header;
