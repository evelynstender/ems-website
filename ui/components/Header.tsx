'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SkateboardIcon from './skateboardIcon';

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
    <div className="grid grid-cols-3">
      <Link className="m-8 place-self-start" href="/">
        Evelyn Stender
      </Link>
      <div className="flex flex-row place-self-center">
        {links.map((link, index) => {
          return (
            <div className="flex flex-col items-center">
              <Link key={index} className="px-4" href={link.href}>
                {link.label}
              </Link>
              {pathName === link.href ? (
                <div className="text-green-bright">
                  <SkateboardIcon
                    className="-ml-px -mt-3 text-green-bright"
                    width={50}
                    height={50}
                  />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
      <div className="m-8 place-self-center justify-self-end">theme</div>
    </div>
  );
};

export default Header;
