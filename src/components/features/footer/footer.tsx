import { forwardRef } from 'react';

import Link from 'next/link';

import Heading1 from '@/element/heading1';
import Heading2 from '@/element/heading2';

export interface ContactItemProps {
  label: string;
  hrefLabel?: string;

  href: string;
}

const ContactItem = ({ label, href, hrefLabel }: ContactItemProps) => {
  return (
    <Link href={href} target="_blank" className="group flex flex-col text-lg">
      <span className="font-medium text-secondary">{label}</span>
      <span className="text-secondary/80 group-hover:underline">{hrefLabel ?? href}</span>
    </Link>
  );
};

export interface FooterProps {}

const Footer = forwardRef<HTMLDivElement, FooterProps>((_, ref) => {
  return (
    <footer ref={ref} className="bg-primary-darker fixed top-full z-20 grid w-svw grid-cols-2 gap-x-32 gap-y-8 p-24">
      <Heading1 className="text-secondary">
        Looking to collaborate or have questions? Reach out — I’d love to connect and create something great together
      </Heading1>

      <div className="col-start-2 flex flex-col gap-5">
        <Heading2 className="uppercase text-secondary/60">Contact</Heading2>

        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <ContactItem label="Github" href="https://github.com/ctrl-plus-w" />
          <ContactItem label="Email" href="mailto:lukas.ldrn@gmail.com" hrefLabel="lukas.ldrn@gmail.com" />
          <ContactItem label="LinkedIn" href="www.linkedin.com/in/lukaslaudrain" />
          <ContactItem label="Phone" href="tel:+33766324438" hrefLabel="+33 7 66 32 44 38" />
        </div>
      </div>
    </footer>
  );
});
Footer.displayName = 'Footer';

export default Footer;
