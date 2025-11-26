import FacebookIcon from '@/assets/socialIcons/fb_icon';
import InstagramIcon from '@/assets/socialIcons/ig_icon';
import MailIcon from '@/assets/socialIcons/mail_icon';
import XIcon from '@/assets/socialIcons/x_icon';
import Image from 'next/image';
import React from 'react';

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-3">
      <a
        href="https://facebook.com/datamares"
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="Síguenos en Facebook"
        title="Facebook"
        itemProp="sameAs"
      >
        <FacebookIcon className="group h-8 w-8 transition-transform duration-200 hover:scale-110" />
      </a>
      <a
        href="https://instagram.com/datamares_/"
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="Síguenos en Instagram"
        title="Instagram"
        itemProp="sameAs"
      >
        <InstagramIcon className="group h-8 w-8 transition-transform duration-200 hover:scale-110" />
      </a>
      <a href="mailto:catalina@gocmarineprogram.org" aria-label="Envíanos un email" title="Email">
        <MailIcon className="group h-8 w-8 transition-transform duration-200 hover:scale-110" />
      </a>
      <a
        href="https://x.com/dataMares"
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="Síguenos en X (Twitter)"
        title="X (Twitter)"
        itemProp="sameAs"
      >
        <XIcon className="group h-8 w-8 transition-transform duration-200 hover:scale-110" />
      </a>
    </div>
  );
}
