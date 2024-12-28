const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-8">
      <aside>
        <p className="text-xl font-bold">
          Copyright © {new Date().getFullYear()} - All right reserved by Kyria
          MATONDO
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
