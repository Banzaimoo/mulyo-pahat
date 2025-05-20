
import { useState } from 'react';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  const userProfile = {
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@example.com',
    phone: '+1 234 567 8901',
    address: {
      street: '123 Furniture Lane',
      city: 'Woodville',
      state: 'CA',
      zipCode: '12345',
      country: 'United States'
    },
    profileImage: '/lovable-uploads/9809808c-bd68-4e2e-af87-b5ea99f6fe3c.png'
  };
  
  const orders = [
    {
      id: 'ORD-12345',
      date: '2023-05-10',
      total: 548,
      status: 'Delivered',
      items: [
        { id: 1, name: 'Modern Bookshelf', quantity: 1, price: 349 },
        { id: 2, name: 'Teak Side Chair', quantity: 1, price: 199 }
      ]
    },
    {
      id: 'ORD-12346',
      date: '2023-06-15',
      total: 899,
      status: 'Processing',
      items: [
        { id: 6, name: 'Platform Bed Frame', quantity: 1, price: 899 }
      ]
    }
  ];
  
  const wishlist = [
    { id: 3, name: 'Walnut Coffee Table', price: 499, image: '/lovable-uploads/9809808c-bd68-4e2e-af87-b5ea99f6fe3c.png' },
    { id: 7, name: 'Two-Door Wardrobe', price: 1299, image: '/lovable-uploads/9809808c-bd68-4e2e-af87-b5ea99f6fe3c.png' },
    { id: 12, name: 'Media Console', price: 549, image: '/lovable-uploads/9809808c-bd68-4e2e-af87-b5ea99f6fe3c.png' }
  ];
  
  return (
    <div className="min-h-screen bg-sand">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif text-wood-darker mb-8">My Account</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img 
                    src={userProfile.profileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-medium text-wood-darker">{`${userProfile.firstName} ${userProfile.lastName}`}</h2>
                  <p className="text-sm text-wood-medium">{userProfile.email}</p>
                </div>
              </div>
              
              <nav className="space-y-2">
                <button 
                  onClick={() => setActiveTab('profile')} 
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors ${activeTab === 'profile' ? 'bg-wood-light text-wood-darker font-medium' : 'hover:bg-wood-light/50 text-wood-dark'}`}
                >
                  Profile
                </button>
                <button 
                  onClick={() => setActiveTab('orders')} 
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors ${activeTab === 'orders' ? 'bg-wood-light text-wood-darker font-medium' : 'hover:bg-wood-light/50 text-wood-dark'}`}
                >
                  Orders
                </button>
                <button 
                  onClick={() => setActiveTab('wishlist')} 
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors ${activeTab === 'wishlist' ? 'bg-wood-light text-wood-darker font-medium' : 'hover:bg-wood-light/50 text-wood-dark'}`}
                >
                  Wishlist
                </button>
                <button 
                  onClick={() => setActiveTab('addresses')} 
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors ${activeTab === 'addresses' ? 'bg-wood-light text-wood-darker font-medium' : 'hover:bg-wood-light/50 text-wood-dark'}`}
                >
                  Addresses
                </button>
                <Link 
                  to="/chat"
                  className="block w-full text-left px-4 py-2 rounded-md transition-colors hover:bg-wood-light/50 text-wood-dark"
                >
                  Messages
                </Link>
                <Link 
                  to="/"
                  className="block w-full text-left px-4 py-2 rounded-md transition-colors hover:bg-wood-light/50 text-wood-dark"
                >
                  Sign Out
                </Link>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="col-span-1 lg:col-span-3">
            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-medium text-wood-darker mb-6">Profile Information</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-wood-darker mb-1">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        defaultValue={userProfile.firstName}
                        className="input-field"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-wood-darker mb-1">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        defaultValue={userProfile.lastName}
                        className="input-field"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-wood-darker mb-1">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        defaultValue={userProfile.email}
                        className="input-field"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-wood-darker mb-1">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        defaultValue={userProfile.phone}
                        className="input-field"
                      />
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-wood-light">
                    <h3 className="text-lg font-medium text-wood-darker mb-4">Change Password</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="currentPassword" className="block text-sm font-medium text-wood-darker mb-1">
                          Current Password
                        </label>
                        <input
                          id="currentPassword"
                          name="currentPassword"
                          type="password"
                          className="input-field"
                        />
                      </div>
                      
                      <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="newPassword" className="block text-sm font-medium text-wood-darker mb-1">
                            New Password
                          </label>
                          <input
                            id="newPassword"
                            name="newPassword"
                            type="password"
                            className="input-field"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="confirmPassword" className="block text-sm font-medium text-wood-darker mb-1">
                            Confirm New Password
                          </label>
                          <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            className="input-field"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button type="submit" className="btn btn-primary">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {activeTab === 'orders' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-medium text-wood-darker mb-6">Order History</h2>
                
                {orders.length > 0 ? (
                  <div className="space-y-6">
                    {orders.map(order => (
                      <div key={order.id} className="border border-wood-light rounded-lg overflow-hidden">
                        <div className="bg-wood-light bg-opacity-30 px-4 py-3 flex flex-wrap justify-between items-center">
                          <div>
                            <span className="block text-sm font-medium text-wood-darker">Order {order.id}</span>
                            <span className="text-sm text-wood-medium">Placed on {new Date(order.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                            <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${
                              order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                              order.status === 'Processing' ? 'bg-blue-100 text-blue-800' : 
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {order.status}
                            </span>
                            <button className="text-wood-dark hover:text-wood-darker text-sm font-medium">
                              View Details
                            </button>
                          </div>
                        </div>
                        
                        <div className="p-4">
                          {order.items.map(item => (
                            <div key={item.id} className="flex justify-between py-2 border-b border-wood-light last:border-0">
                              <div>
                                <span className="font-medium text-wood-darker">{item.name}</span>
                                <span className="block text-sm text-wood-medium">Qty: {item.quantity}</span>
                              </div>
                              <span className="font-medium text-wood-dark">${item.price}</span>
                            </div>
                          ))}
                          
                          <div className="mt-4 text-right">
                            <span className="block text-sm text-wood-medium">Total</span>
                            <span className="text-lg font-medium text-wood-darker">${order.total}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg text-wood-dark mb-4">You haven't placed any orders yet</p>
                    <Link to="/products" className="btn btn-primary">
                      Start Shopping
                    </Link>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'wishlist' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-medium text-wood-darker mb-6">My Wishlist</h2>
                
                {wishlist.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlist.map(item => (
                      <div key={item.id} className="border border-wood-light rounded-lg overflow-hidden group">
                        <div className="aspect-square overflow-hidden">
                          <img 
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium text-wood-darker mb-1">{item.name}</h3>
                          <p className="font-medium text-wood-dark mb-4">${item.price}</p>
                          <div className="flex space-x-2">
                            <button className="flex-1 btn btn-primary py-2 text-sm">
                              Add to Cart
                            </button>
                            <button className="p-2 border border-wood-light rounded-md text-wood-dark">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg text-wood-dark mb-4">Your wishlist is empty</p>
                    <Link to="/products" className="btn btn-primary">
                      Browse Products
                    </Link>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'addresses' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-medium text-wood-darker">Saved Addresses</h2>
                  <button className="btn btn-secondary">
                    Add New Address
                  </button>
                </div>
                
                <div className="border border-wood-light rounded-lg p-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium text-wood-darker">Default Address</h3>
                    <div className="flex space-x-2">
                      <button className="text-wood-dark hover:text-wood-darker">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button className="text-wood-dark hover:text-wood-darker">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-wood-dark">
                    <p>{`${userProfile.firstName} ${userProfile.lastName}`}</p>
                    <p>{userProfile.address.street}</p>
                    <p>{`${userProfile.address.city}, ${userProfile.address.state} ${userProfile.address.zipCode}`}</p>
                    <p>{userProfile.address.country}</p>
                    <p className="mt-1">{userProfile.phone}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
