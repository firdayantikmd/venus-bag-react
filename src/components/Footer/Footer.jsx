import React from 'react';
import './Footer.css';
import { IconArrowUpRight, IconMapPin, IconPhone, IconMail } from '@tabler/icons-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src="/assets/venus-bags-footer.svg" alt="Logo" className='footer-logo' />
        </div>
        <div className="footer-contact">
          <p>
            <IconMapPin size={16} /> Obsidiana 1124, Mexico
          </p>
          <p>
            <IconPhone size={16} /> +52-XX-XXXX-XXXX
          </p>
          <p>
            <IconMail size={16} /> xxxxx@xxxx.com
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © Venus Bags 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
