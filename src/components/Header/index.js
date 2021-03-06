import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaSearch } from 'react-icons/fa';

import logo from '../../assets/logo.svg';
import './styles.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="headerLeft">
        <Link to="/">
          <img src={logo} alt="Logo da Aplicação" />
        </Link>
        <ul>
          <li>
            <Link to="/deputados/">Deputados</Link>
          </li>
          <li>
            <Link to="/partidos/">Partidos</Link>
          </li>
        </ul>
      </div>

      <div className="headerRight">
        <ul>
          <li>
            <FaSearch className="iconMenu" size={25} />
          </li>
          <li>
            <a
              href="https://github.com/richecr/CamaraDosDeputados"
              target="_blank"
              rel="noopener noreferrer"
              className="iconMenu"
            >
              <FaGithub size={25} color="#2f2f2f" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
