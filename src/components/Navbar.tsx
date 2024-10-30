import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-gray-200 p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <span className="text-lg font-bold">Jyotish Melwani</span>
        </Link>
        <ul className="flex justify-end">
          <li className="mr-4">
            <Link href="/">
              <span>Home</span>
            </Link>
          </li>
          <li className="mr-4">
            <Link href="/projects">
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span>About</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;