
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductsPage = () => {
  const { category } = useParams();
  const [activeCategory, setActiveCategory] = useState(category || 'all');
  
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'chairs', name: 'Chairs' },
    { id: 'shelves', name: 'Shelves' },
    { id: 'tables', name: 'Tables' },
    { id: 'cabinet', name: 'Cabinet' },
    { id: 'bed', name: 'Bed' },
    { id: 'wardrobe', name: 'Wardrobe' },
    { id: 'nightstand', name: 'Night Stand' }
  ];
  
  // Product data (normally this would come from an API)
  const products = [
    { id: 1, name: 'Mid Century Modern Nightstand', category: 'nightstand', price: 299, image: '/lovable-uploads/9809808c-bd68-4e2e-af87-b5ea99f6fe3c.png' },
    { id: 2, name: 'Teak Side Chair', category: 'chairs', price: 199, image: '/lovable-uploads/9809808c-bd68-4e2e-af87-b5ea99f6fe3c.png' },
    { id: 3, name: 'Modern Bookshelf', category: 'shelves', price: 349, image: '/lovable-uploads/9809808c-bd68-4e2e-af87-b5ea99f6fe3c.png' },
    { id: 4, name: 'Walnut Coffee Table', category: 'tables', price: 499, image: '/lovable-uploads/9809808c-bd68-4e2e-af87-b5ea99f6fe3c.png' },
    { id: 5, name: 'Storage Cabinet', category: 'cabinet', price: 599, image: '/lovable-uploads/9809808c-bd68-4e2e-af87-b5ea99f6fe3c.png' },
    { id: 6, name: 'Platform Bed Frame', category: 'bed', price: 899, image: '/lovable-uploads/9809808c-bd68-4e2e-af87-b5ea99f6fe3c.png' },
    { id: 7, name: 'Two-Door Wardrobe', category: 'wardrobe', price: 1299, image: '/lovable-uploads/9809808c-bd68-4e2e-af87-b5ea99f6fe3c.png' },
    { id: 8, name: 'Minimalist Nightstand', category: 'nightstand', price: 249, image: '/lovable-uploads/9809808c-bd68-4e2e-af87-b5ea99f6fe3c.png' },
    { id: 9, name: 'Dining Chair Set', category: 'chairs', price: 799, image: '/lovable-uploads/9809808c-bd68-4e2e-af87-b5ea99f6fe3c.png' },
    { id: 10, name: 'Wall-Mounted Shelf', category: 'shelves', price: 149, image: '/lovable-uploads/9809808c-bd68-4e2e-af87-b5ea99f6fe3c.png' },
    { id: 11, name: 'Round Dining Table', category: 'tables', price: 649, image: '/lovable-uploads/9809808c-bd68-4e2e-af87-b5ea99f6fe3c.png' },
    { id: 12, name: 'Media Console', category: 'cabinet', price: 549, image: '/lovable-uploads/9809808c-bd68-4e2e-af87-b5ea99f6fe3c.png' }
  ];
  
  // Filter products based on active category
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);
    
  return (
    <div className="min-h-screen bg-sand">
      {/* Page Header */}
      <div className="wood-bg-cover py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif text-white text-center">
            {activeCategory === 'all' ? 'All Products' : categories.find(cat => cat.id === activeCategory)?.name}
          </h1>
        </div>
      </div>
      
      {/* Category Navigation */}
      <div className="container mx-auto px-4 py-8 overflow-x-auto">
        <div className="flex space-x-4 min-w-max pb-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`category-button ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className="product-card group">
              <div className="aspect-square bg-gray-100 overflow-hidden rounded-t-3xl">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <span className="text-sm text-wood-medium capitalize">{product.category}</span>
                <h3 className="font-medium text-wood-darker mt-1">{product.name}</h3>
                <p className="font-medium text-wood-dark mt-2">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl text-wood-darker mb-4">No products found</h3>
            <p className="text-wood-dark mb-8">Try selecting a different category</p>
            <button 
              onClick={() => setActiveCategory('all')} 
              className="btn btn-secondary"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
