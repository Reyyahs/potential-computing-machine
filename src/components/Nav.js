import React, { useState } from 'react';
import Style from './Nav.style.scss';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { info } from '../info/Info';

const navLinks = [
  { name: 'Home', to: '/', key: 'home' },
  { name: 'About Me', to: '/about', key: 'about' },
  { name: 'Portfolio', to: '/portfolio', key: 'portfolio' }
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <Box component="nav" width="100%">
      <Box
        component="ul"
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={{ xs: '2rem', md: '8rem' }}
        textTransform="lowercase"
        fontSize="1rem"
      >
        {navLinks.map((link) => (
          <Box
            key={link.key}
            component="li"
            className={
              link.key === activeLink && !link.type ? Style.active : ''
            }
            sx={{ borderImageSource: info.gradient }}
          >
            <Link
              to={link.to}
              onClick={() => setActiveLink(link.key)}
              className={Style.link}
            >
              {!link.type ? (
                <p style={{ padding: '0.5rem 0' }}>{link.name}</p>
              ) : (
                <h1>{link.name}</h1>
              )}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Navbar;
