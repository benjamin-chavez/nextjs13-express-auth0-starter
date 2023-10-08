// client/src/components/navbar.tsx

// frontend/app/components/navbar.tsx
'use client';

import clsx from 'clsx';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export type NavItem = {
  name: string;
};

const navItems = {
  nextLinks: [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Public',
      href: '/public',
    },
    {
      name: 'Private',
      href: '/private',
    },
  ],
};

export default function Navbar() {
  let pathname = usePathname();

  return (
    <div>
      <nav className="bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
          <div className="w-full md:block md:w-auto" id="navbar-default">
            <div className="flex gap-8">
              {navItems.nextLinks.map((item) => {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={clsx(
                      'block rounded md:p-0 text-white hover:opacity-70',

                      item.href === pathname ? 'text-red-500' : 'text-white'
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
