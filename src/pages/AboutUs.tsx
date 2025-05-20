
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const team = [
    {
      name: 'Robert Johnson',
      role: 'Founder & Master Craftsman',
      image: '/lovable-uploads/9809808c-bd68-4e2e-af87-b5ea99f6fe3c.png',
      bio: 'With over 30 years of experience, Robert\'s passion for woodworking led him to establish Mulyo Pahat in 1992.'
    },
    {
      name: 'Sarah Williams',
      role: 'Lead Designer',
      image: '/lovable-uploads/9809808c-bd68-4e2e-af87-b5ea99f6fe3c.png',
      bio: 'Sarah brings her background in contemporary design and traditional craftmanship to create pieces that are both functional and beautiful.'
    },
    {
      name: 'Michael Chen',
      role: 'Workshop Manager',
      image: '/lovable-uploads/9809808c-bd68-4e2e-af87-b5ea99f6fe3c.png',
      bio: 'Michael ensures that every piece leaving our workshop meets our high standards of quality and durability.'
    }
  ];

  return (
    <div className="min-h-screen bg-sand">
      {/* Hero Section */}
      <div className="wood-bg-cover py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif text-white mb-6">Our Story</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Dedicated to crafting furniture that tells a story, using traditional techniques and sustainable materials.
          </p>
        </div>
      </div>
      
      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif text-wood-darker mb-6">Crafting with Purpose</h2>
              <p className="text-wood-dark mb-4">
                Mulyo Pahat was founded with a simple mission: to create furniture that lasts generations, tells a story, and brings warmth to your home.
              </p>
              <p className="text-wood-dark mb-4">
                Our name, "Mulyo Pahat," derives from Indonesian, reflecting our appreciation for the rich woodworking traditions of Southeast Asia and our commitment to honoring the natural beauty of wood.
              </p>
              <p className="text-wood-dark">
                Each piece is designed and crafted with intention, combining traditional woodworking methods with contemporary aesthetics to create furniture that's both timeless and modern.
              </p>
            </div>
            <div>
              <img 
                src="/lovable-uploads/9809808c-bd68-4e2e-af87-b5ea99f6fe3c.png" 
                alt="Craftsman working on furniture" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-wood-light bg-opacity-30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-wood-darker text-center mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-wood-medium rounded-full flex items-center justify-center mb-6 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-wood-darker mb-3">Sustainability</h3>
              <p className="text-wood-dark">
                We responsibly source our materials, prioritizing partnerships with sustainable foresters and using every piece of wood to its fullest potential.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-wood-medium rounded-full flex items-center justify-center mb-6 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-wood-darker mb-3">Craftsmanship</h3>
              <p className="text-wood-dark">
                Our team of skilled artisans combines traditional woodworking techniques with modern precision to create pieces of exceptional quality.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-wood-medium rounded-full flex items-center justify-center mb-6 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-wood-darker mb-3">Community</h3>
              <p className="text-wood-dark">
                We believe in supporting our local community, providing fair wages, and investing in the next generation of craftspeople through our apprenticeship program.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Workshop Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/lovable-uploads/9809808c-bd68-4e2e-af87-b5ea99f6fe3c.png" 
                alt="Our workshop" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-serif text-wood-darker mb-6">Our Workshop</h2>
              <p className="text-wood-dark mb-4">
                Based in the heart of the Pacific Northwest, our workshop is a place where creativity and precision meet. Each piece of furniture begins as a thoughtful design and is brought to life through the skilled hands of our craftspeople.
              </p>
              <p className="text-wood-dark mb-4">
                We combine traditional joinery techniques with modern tools to ensure both beauty and durability. Our workshop is also open to visitors who want to see our process firsthand and experience the dedication that goes into every piece.
              </p>
              <Link to="/workshop-tour" className="btn btn-primary">
                Book a Workshop Tour
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-wood-light bg-opacity-30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-wood-darker text-center mb-12">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-wood-darker mb-1">{member.name}</h3>
                  <p className="text-wood-medium mb-4">{member.role}</p>
                  <p className="text-wood-dark">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif text-wood-darker mb-6">Let's Connect</h2>
          <p className="text-wood-dark max-w-2xl mx-auto mb-8">
            Whether you have questions about our products, want to discuss a custom piece, or are interested in visiting our workshop, we'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn btn-primary px-8 py-3">
              Contact Us
            </Link>
            <Link to="/custom" className="btn btn-secondary px-8 py-3">
              Custom Orders
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
