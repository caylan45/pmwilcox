import React from 'react';
import './NavigationBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTwitter, faFacebookF, faInstagram, 
  faYoutube, faTiktok, faSpotify, 
  faSoundcloud 
} from '@fortawesome/free-brands-svg-icons';

const NavigationBar = () => {
  return (
    <nav>
      <span>WILCOX LEGACY</span>
      <ul className="nav-links">
        <li><a href="#home">MUSIC</a></li>
        <li><a href="#about">EVENTS</a></li>
        <li><a href="#services">SHOP</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
      <div className="social-media-icons">
        <a href="https://twitter.com" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://facebook.com" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="https://instagram.com" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://youtube.com" aria-label="YouTube"><FontAwesomeIcon icon={faYoutube} /></a>
        <a href="https://tiktok.com" aria-label="TikTok"><FontAwesomeIcon icon={faTiktok} /></a>
        <a href="https://spotify.com" aria-label="Spotify"><FontAwesomeIcon icon={faSpotify} /></a>
        <a href="https://soundcloud.com" aria-label="SoundCloud"><FontAwesomeIcon icon={faSoundcloud} /></a>
      </div>
    </nav>
  );
};

export default NavigationBar;
