import React,{ useEffect, useState} from "react";
import Link from 'next/link';

import { MdNightlightRound, MdWbSunny } from "react-icons/md";

function Header() {
  
  const [color, setColor] = useState('hidden')

//  useEffect(() => setColor('hidden'), [])

  return (
    <main className="container">
      <nav>
        <ul>

          <li>

            <a href="/">
              <strong>Rajdeep Singh</strong>
            </a>

          </li>

        </ul>

        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/pages/about">About us</Link>
          </li>

          <li>
            <Link href="/pages/contact">Contact</Link>
          </li>

          <li>
            <button id="theme-toggle" type="button"  className="theme-toggle-button" data-theme-switcher="light">
              <MdNightlightRound className={color} id="theme-toggle-dark-icon" />
              <MdWbSunny className={color} id="theme-toggle-light-icon"/>
            </button>
          </li>
        </ul>
      </nav>
    </main>
  );
}

export default Header;