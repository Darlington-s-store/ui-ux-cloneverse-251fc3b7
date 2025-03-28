
const brands = [
  { id: 1, name: 'Apple', logo: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGUlMjBsb2dvfGVufDB8fDB8fHww' },
  { id: 2, name: 'Samsung', logo: 'https://images.unsplash.com/photo-1662219708489-dd8a69c1aae6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNhbXN1bmclMjBsb2dvfGVufDB8fDB8fHww' },
  { id: 3, name: 'Sony', logo: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29ueSUyMGxvZ298ZW58MHx8MHx8fDA%3D' },
  { id: 4, name: 'Microsoft', logo: 'https://images.unsplash.com/photo-1642132652168-6549c279b5d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWljcm9zb2Z0JTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D' },
  { id: 5, name: 'Google', logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29vZ2xlJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D' },
  { id: 6, name: 'Asus', logo: 'https://images.unsplash.com/photo-1563459802257-2a97df940f11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXN1c3xlbnwwfHwwfHx8MA%3D%3D' }
];

const BrandsShowcase = () => {
  return (
    <div className="container-custom py-16">
      <h2 className="section-heading mb-10 text-center">Featured Brands</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {brands.map(brand => (
          <div 
            key={brand.id} 
            className="bg-white p-4 rounded-lg border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow"
          >
            <div className="h-16 w-full flex items-center justify-center">
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="max-h-full max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity" 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsShowcase;
