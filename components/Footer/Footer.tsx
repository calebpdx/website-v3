import { FC } from "react";

const Footer = ({ data }: { data: Footer }) => {
  console.log("footer data", data);
  return (
    <footer className="container bg-black min-h-24 text-white flex justify-between">
      <small>&copy; Designed & Developed by Caleb White </small>
      <div>Links here</div>
      <ul>
        <li>test</li>
      </ul>
    </footer>
  );
};

export default Footer;
