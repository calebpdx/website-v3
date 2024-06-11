import { client } from "@/sanity/lib/client";
import { FOOTER_QUERY } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import { SiGithub, SiX, SiLinkedin } from "@icons-pack/react-simple-icons";
import NavBar from "../Navigation/NavBar";

const socials = [
  {
    name: "Github",
    url: "https://www.github.com/calebpdx",
    icon: <SiGithub size={24} />,
  },
  {
    name: "X",
    url: "https://www.x.com/goldfinger",
    icon: <SiX size={24} />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/calebawhite",
    icon: <SiLinkedin size={24} />,
  },
];

const Footer = async ({ data }: { data: SanityDocument }) => {
  const date = new Date();
  const footer = await client.fetch(FOOTER_QUERY, {
    id: data._ref,
  });

  if (!footer) {
    return null;
  }

  return (
    <footer className="min-h-24 w-full text-white flex justify-center py-16 dark:bg-black bg-primary-dark">
      <div className="container flex flex-col justify-between px-8 xl:px-0">
        <div className="flex justify-between pb-12">
          <Image
            src="/signature-v3-darkmode.png"
            height={80}
            width={195}
            alt="Caleb White signature Logo"
          />
          {footer.links[0] && <NavBar data={footer.links[0].links} />}
        </div>
        <div className="flex justify-between items-center border-t-2 border-primary-light border-opacity-5 pt-4">
          <div className="flex flex-col opacity-50">
            <small>&copy; {date.getFullYear()} Caleb White</small>
            <small>Designed & Developed by Caleb White</small>
          </div>
          <ul className="flex gap-4">
            {socials.map((social, index) => (
              <li key={`${social.name}-${index}`}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-50 text-primary-light hover:opacity-100 transition-opacity"
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
