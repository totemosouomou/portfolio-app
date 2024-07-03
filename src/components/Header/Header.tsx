import React from 'react';
import styles from './Header.module.scss';

interface HeaderProps {
  name: string;
  title: string;
};

const Header: React.FC<HeaderProps> = ({ name, title }) => {
  return (
    <header className={styles.header}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="text-lg font-medium">{title}</p>
        </div>
        <ul className="flex items-center gap-4">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#teams">Teams</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
