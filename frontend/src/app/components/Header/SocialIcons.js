import FacebookIcon from '@/assets/socialIcons/fb_icon'
import InstagramIcon from '@/assets/socialIcons/ig_icon'
import MailIcon from '@/assets/socialIcons/mail_icon'
import XIcon from '@/assets/socialIcons/x_icon'
import Image from 'next/image'
import React from 'react'

export default function SocialIcons() {
    return (
        <div className="flex items-center gap-3">
            <a href="http://" target="_blank" rel="noopener noreferrer">
                <FacebookIcon className="h-8 w-8 hover:scale-110 transition-transform duration-200 group" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="h-8 w-8 hover:scale-110 transition-transform duration-200 group" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
                <MailIcon className="h-8 w-8 hover:scale-110 transition-transform duration-200 group" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
                <XIcon className="h-8 w-8 hover:scale-110 transition-transform duration-200 group" />
            </a>
        </div>
    )
}
