
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  
  // This would normally be fetched from an API
  const product = {
    id: parseInt(id || "1"),
    name: 'Mid Century Modern Nightstand',
    category: 'nightstand',
    price: 299,
    images: [
      '/lovable-uploads/9809808c-bd68-4e2e-af87-b5ea99f6fe3c.png',
      '/lovable-uploads/9809808c-bd68-4e2e-af87-b5ea99f6fe3c.png',
      '/lovable-uploads/9809808c-bd68-4e2e-af87-b5ea99f6fe3c.png'
    ],
    description: 'A beautiful nightstand with clean lines and ample storage. Perfect for your mid-century inspired bedroom.',
    details: [
      'Made from solid teak wood',
      'One drawer with soft-close mechanism',
      'Open shelf for books or decorative items',
      'Dimensions: 18"W x 15"D x 24"H',
      'Handcrafted by skilled artisans'
    ],
    stock: 8,
    reviews: [
      { id: 1, name: 'James Wilson', rating: 5, comment: 'Excellent craftsmanship. Beautiful wood grain and solid construction.' },
      { id: 2, name: 'Amanda Lee', rating: 4, comment: 'Love the design. Slightly smaller than I expected but perfect for my space.' }
    ]
  };
  
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= product.stock) {
      setQuantity(value);
    }
  };
  
  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const relatedProducts = [
    { id: 8, name: 'Minimalist Nightstand', category: 'nightstand', price: 249, image: '/lovable-uploads/9809808c-bd68-4e2e-af87-b5ea99f6fe3c.png' },
    { id: 12, name: 'Media Console', category: 'cabinet', price: 549, image: '/lovable-uploads/9809808c-bd68-4e2e-af87-b5ea99f6fe3c.png' },
    { id: 5, name: 'Storage Cabinet', category: 'cabinet', price: 599, image: '/lovable-uploads/9809808c-bd68-4e2e-af87-b5ea99f6fe3c.png' }
  ];
  
  return (
    <div className="min-h-screen bg-sand">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <div className="text-sm mb-8">
          <Link to="/" className="text-wood-dark hover:text-wood-darker">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="text-wood-dark hover:text-wood-darker">Products</Link>
          <span className="mx-2">/</span>
          <Link to={`/products/${product.category}`} className="text-wood-dark hover:text-wood-darker capitalize">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-wood-darker">{product.name}</span>
        </div>
        
        {/* Product Information */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Product Images */}
            <div className="md:w-1/2 p-4">
              <div className="mb-4 aspect-square overflow-hidden rounded-lg">
                <img 
                  src={selectedImage} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button 
                    key={index}
                    className={`w-20 h-20 rounded-lg overflow-hidden ${selectedImage === image ? 'ring-2 ring-wood-dark' : ''}`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Details */}
            <div className="md:w-1/2 p-6 md:p-8">
              <span className="text-sm text-wood-medium capitalize">{product.category}</span>
              <h1 className="text-3xl font-serif text-wood-darker mt-2 mb-4">{product.name}</h1>
              <p className="text-2xl font-medium text-wood-dark mb-6">${product.price}</p>
              
              <p className="text-wood-darker mb-6">{product.description}</p>
              
              <div className="mb-6">
                <h3 className="font-medium text-wood-darker mb-2">Details:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {product.details.map((detail, index) => (
                    <li key={index} className="text-wood-dark">{detail}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center mb-6">
                <span className="font-medium text-wood-darker mr-4">Quantity:</span>
                <div className="flex border border-wood-light rounded-md">
                  <button 
                    onClick={decreaseQuantity} 
                    className="px-3 py-1 border-r border-wood-light"
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    value={quantity} 
                    onChange={handleQuantityChange}
                    className="w-12 text-center py-1 border-none focus:outline-none"
                    min="1"
                    max={product.stock}
                  />
                  <button 
                    onClick={increaseQuantity} 
                    className="px-3 py-1 border-l border-wood-light"
                  >
                    +
                  </button>
                </div>
                <span className="ml-4 text-sm text-wood-medium">{product.stock} in stock</span>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="btn btn-primary flex-grow sm:flex-grow-0 px-8">Add to Cart</button>
                <button className="btn btn-secondary flex-grow sm:flex-grow-0 px-8">Buy Now</button>
                <button className="flex items-center justify-center p-2 border border-wood-light rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <Link to="/chat" className="flex items-center justify-center p-2 border border-wood-light rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Reviews Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-serif text-wood-darker mb-6">Customer Reviews</h2>
          
          <div className="bg-white rounded-lg p-6">
            {product.reviews.map(review => (
              <div key={review.id} className="mb-6 pb-6 border-b border-wood-light last:border-0 last:mb-0 last:pb-0">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-500 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5" 
                        viewBox="0 0 20 20" 
                        fill={i < review.rating ? 'currentColor' : 'none'}
                        stroke="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-medium text-wood-darker">{review.name}</span>
                </div>
                <p className="text-wood-dark">{review.comment}</p>
              </div>
            ))}
            
            <button className="btn btn-secondary mt-4">Write a Review</button>
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-serif text-wood-darker mb-6">You Might Also Like</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map(product => (
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
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
