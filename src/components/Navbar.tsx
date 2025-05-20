
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="bg-sand-light bg-opacity-95 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <Link to="/" className="text-3xl font-serif text-wood-darker">
          mulyo pahat
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="relative group">
            <Link to="/products" className="nav-link flex items-center gap-1">
              Products
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <div className="absolute z-10 left-0 mt-2 w-48 bg-sand-light rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="p-2 space-y-1">
                <Link to="/products/chairs" className="block px-4 py-2 rounded-md hover:bg-wood-light">Chairs</Link>
                <Link to="/products/shelves" className="block px-4 py-2 rounded-md hover:bg-wood-light">Shelves</Link>
                <Link to="/products/tables" className="block px-4 py-2 rounded-md hover:bg-wood-light">Tables</Link>
                <Link to="/products/cabinet" className="block px-4 py-2 rounded-md hover:bg-wood-light">Cabinet</Link>
                <Link to="/products/bed" className="block px-4 py-2 rounded-md hover:bg-wood-light">Bed</Link>
                <Link to="/products/wardrobe" className="block px-4 py-2 rounded-md hover:bg-wood-light">Wardrobe</Link>
                <Link to="/products/nightstand" className="block px-4 py-2 rounded-md hover:bg-wood-light">Night Stand</Link>
              </div>
            </div>
          </div>
          <Link to="/sales" className="nav-link">Sales</Link>
          <Link to="/about" className="nav-link">About Us</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search Bar"
              className="pl-3 pr-10 py-1.5 rounded-full border border-wood-light focus:outline-none focus:ring-1 focus:ring-wood-medium"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-wood-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          
          {/* User */}
          <Link to="/login" className="text-wood-darker hover:text-wood-dark">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>
          
          {/* Cart */}
          <Link to="/cart" className="text-wood-darker hover:text-wood-dark">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-wood-darker" 
            onClick={() => setShowMenu(!showMenu)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden bg-sand-light py-4 px-4 shadow-md">
          <div className="space-y-3">
            <Link to="/products" className="block py-2 px-4 hover:bg-wood-light rounded-md">Products</Link>
            <Link to="/sales" className="block py-2 px-4 hover:bg-wood-light rounded-md">Sales</Link>
            <Link to="/about" className="block py-2 px-4 hover:bg-wood-light rounded-md">About Us</Link>
            <div className="relative mt-3">
              <input
                type="text"
                placeholder="Search Bar"
                className="w-full pl-3 pr-10 py-2 rounded-md border border-wood-light focus:outline-none focus:ring-1 focus:ring-wood-medium"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-wood-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
