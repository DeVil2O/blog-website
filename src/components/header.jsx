import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="p-4 font-primary flex justify-center">
      <nav className="flex w-4/5">
        <h1 className="text-2xl font-bold w-1/4">CodeNChips</h1>
        <div className='flex w-1/2 items-center justify-center'>
          <Link to="/" className="mr-8">Home</Link>
          <Link to="/about" className="mr-8">About</Link>
          <Link to="/gallery" className="mr-8">Gallery</Link>
          <Link to="/swags" className="mr-8">Swags</Link>
          <Link to="/contact-us" className="mr-8">Get in Touch</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
