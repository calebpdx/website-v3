const Footer = ({ data }: { data: Footer }) => {
  console.log("footer data", data);
  return (
    <footer className="container min-h-24 text-white flex justify-between">
      <p>&copy; Designed & Developed by Caleb White </p>
      <div>Links here</div>
      <ul>
        <li>test</li>
      </ul>
    </footer>
  );
};

export default Footer;
