
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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
  
  // Product data with updated images
  const products = [
    { id: 1, name: 'Mid Century Modern Nightstand', category: 'nightstand', price: 299, image: '/lovable-uploads/2c537559-9a72-4b4a-96f6-2f84a61cd717.png' },
    { id: 2, name: 'Teak Side Chair', category: 'chairs', price: 199, image: '/lovable-uploads/064d8a7d-7f7c-4109-b7e5-e0ad75e783b9.png' },
    { id: 3, name: 'Modern Bookshelf', category: 'shelves', price: 349, image: '/lovable-uploads/2c537559-9a72-4b4a-96f6-2f84a61cd717.png' },
    { id: 4, name: 'Walnut Coffee Table', category: 'tables', price: 499, image: '/lovable-uploads/064d8a7d-7f7c-4109-b7e5-e0ad75e783b9.png' },
    { id: 5, name: 'Storage Cabinet', category: 'cabinet', price: 599, image: '/lovable-uploads/2a60c225-99f7-48cb-b671-07609fded7c5.png' },
    { id: 6, name: 'Platform Bed Frame', category: 'bed', price: 899, image: '/lovable-uploads/2c537559-9a72-4b4a-96f6-2f84a61cd717.png' },
    { id: 7, name: 'Two-Door Wardrobe', category: 'wardrobe', price: 1299, image: '/lovable-uploads/2a60c225-99f7-48cb-b671-07609fded7c5.png' },
    { id: 8, name: 'Minimalist Nightstand', category: 'nightstand', price: 249, image: '/lovable-uploads/2c537559-9a72-4b4a-96f6-2f84a61cd717.png' },
    { id: 9, name: 'Dining Chair Set', category: 'chairs', price: 799, image: '/lovable-uploads/064d8a7d-7f7c-4109-b7e5-e0ad75e783b9.png' },
    { id: 10, name: 'Wall-Mounted Shelf', category: 'shelves', price: 149, image: '/lovable-uploads/2c537559-9a72-4b4a-96f6-2f84a61cd717.png' },
    { id: 11, name: 'Round Dining Table', category: 'tables', price: 649, image: '/lovable-uploads/064d8a7d-7f7c-4109-b7e5-e0ad75e783b9.png' },
    { id: 12, name: 'Media Console', category: 'cabinet', price: 549, image: '/lovable-uploads/2a60c225-99f7-48cb-b671-07609fded7c5.png' }
  ];
  
  // Filter products based on active category
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);
    
  return (
    <div className="min-h-screen bg-sand">
      {/* Page Header - Split Hero */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-[50vh] bg-cover bg-center" style={{backgroundImage: `url('/lovable-uploads/2c537559-9a72-4b4a-96f6-2f84a61cd717.png')`}}>
          <div className="h-full w-full bg-wood-darker bg-opacity-40 flex items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-serif text-white">Handcrafted Furniture</h2>
          </div>
        </div>
        <div className="h-[50vh] bg-cover bg-center" style={{backgroundImage: `url('/lovable-uploads/4ace7f0d-178e-487c-9149-50b86b899d79.png')`}}>
          <div className="h-full w-full bg-wood-darker bg-opacity-40 flex items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-serif text-white">Natural Materials</h2>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-serif text-wood-darker mb-4">
          {activeCategory === 'all' ? 'All Products' : categories.find(cat => cat.id === activeCategory)?.name}
        </h1>
        <p className="text-wood-dark max-w-2xl mx-auto mb-8">
          Discover our collection of handcrafted furniture pieces, designed with attention to detail and built to last.
        </p>
      </div>
      
      {/* Category Navigation */}
      <div className="container mx-auto px-4 py-8">
        <Carousel className="w-full max-w-full">
          <CarouselContent className="flex-nowrap">
            {categories.map(cat => (
              <CarouselItem key={cat.id} className="flex-none max-w-fit">
                <button
                  onClick={() => setActiveCategory(cat.id)}
                  className={`category-button whitespace-nowrap ${activeCategory === cat.id ? 'active' : ''}`}
                >
                  {cat.name}
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
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
