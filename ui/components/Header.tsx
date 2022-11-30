'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SkateboardIcon from './SkateboardIcon';

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
  const pathName = usePathname();

  return (
    <div className="sm:align-center sm:flex sm:flex-col sm:flex-wrap sm:justify-center md:grid md:grid-cols-3">
      <div className="flex flex-row self-center">
        <Link
          className="sm:m-4 sm:justify-self-center md:m-8 md:justify-self-start"
          href="/"
        >
          Evelyn Stender
        </Link>
        <div className="sm:align-center sm:justify-center sm:self-center sm:justify-self-end md:hidden">
          theme
        </div>
      </div>

      <div className="flex flex-row place-self-center md:self-end">
        {links.map((link, index) => {
          return (
            <div className="flex flex-col items-center">
              <Link key={index} className="px-4" href={link.href}>
                {link.label}
              </Link>
              {pathName === link.href ? (
                <SkateboardIcon
                  className="-ml-px -mt-3"
                  width={50}
                  height={50}
                  // green-bright
                  color="#5CC4C4"
                />
              ) : null}
            </div>
          );
        })}
      </div>
      <div className="place-self-center justify-self-end sm:hidden md:m-8 md:block">
        theme
      </div>
    </div>
  );
};

export default Header;
