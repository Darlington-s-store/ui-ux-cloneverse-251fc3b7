import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface ProductImagesProps {
  images: string[];
  defaultImage: string;
  name: string;
}

const ProductImages: React.FC<ProductImagesProps> = ({ 
  images, 
  defaultImage, 
  name 
}) => {
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  
  // Create an array of images, ensuring there's at least one valid image
  const productImages = React.useMemo(() => {
    // Filter out any invalid image URLs
    const validImages = (images && images.length > 0) 
      ? images.filter(img => img && !img.includes('undefined') && !img.includes('null'))
      : [];
    
    // If there are valid images from the array, use them
    if (validImages.length > 0) {
      return validImages;
    }
    
    // Otherwise, use the default image if it's valid
    if (defaultImage && !defaultImage.includes('undefined') && !defaultImage.includes('null')) {
      return [defaultImage];
    }
    
    // Last resort: use a placeholder
    return ["https://s.alicdn.com/@sc04/kf/H40a7f4a3dc6f41aea2d0b0cdd1eecc0aM.jpg_300x300.jpg"];
  }, [images, defaultImage]);
  
  // Reset active image when images change
  useEffect(() => {
    setActiveImage(0);
  }, [productImages]);
  
  const openLightbox = (index: number) => {
    setActiveImage(index);
    setLightboxOpen(true);
  };
  
  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  
  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % productImages.length);
  };
  
  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };
  
  return (
    <div>
      <div 
        className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden cursor-pointer"
        onClick={() => openLightbox(activeImage)}
      >
        <img
          src={productImages[activeImage]}
          alt={name}
          className="max-h-full max-w-full object-contain transition-transform hover:scale-105"
          onError={(e) => {
            // If image fails to load, replace with placeholder
            (e.target as HTMLImageElement).src = "https://s.alicdn.com/@sc04/kf/H40a7f4a3dc6f41aea2d0b0cdd1eecc0aM.jpg_300x300.jpg";
          }}
        />
      </div>
      
      {productImages.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {productImages.map((image, index) => (
            <div
              key={index}
              className={`aspect-square bg-gray-100 rounded-lg cursor-pointer ${
                activeImage === index ? 'ring-2 ring-exclusive' : ''
              }`}
              onClick={() => setActiveImage(index)}
            >
              <img
                src={image}
                alt={`${name} - view ${index + 1}`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  // If thumbnail fails to load, replace with placeholder
                  (e.target as HTMLImageElement).src = "https://s.alicdn.com/@sc04/kf/H40a7f4a3dc6f41aea2d0b0cdd1eecc0aM.jpg_300x300.jpg";
                }}
              />
            </div>
          ))}
        </div>
      )}
      
      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-4xl mx-auto p-4">
            <button 
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>
            
            <div className="flex items-center justify-center">
              <button 
                className="text-white bg-black bg-opacity-50 rounded-full p-2 mx-2 hover:bg-opacity-70"
                onClick={prevImage}
              >
                &lt;
              </button>
              
              <div className="bg-white p-2 rounded max-h-[80vh] flex items-center justify-center">
                <img
                  src={productImages[activeImage]}
                  alt={name}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    // If lightbox image fails to load, replace with placeholder
                    (e.target as HTMLImageElement).src = "https://s.alicdn.com/@sc04/kf/H40a7f4a3dc6f41aea2d0b0cdd1eecc0aM.jpg_300x300.jpg";
                  }}
                />
              </div>
              
              <button 
                className="text-white bg-black bg-opacity-50 rounded-full p-2 mx-2 hover:bg-opacity-70"
                onClick={nextImage}
              >
                &gt;
              </button>
            </div>
            
            {productImages.length > 1 && (
              <div className="flex justify-center mt-4">
                {productImages.map((image, index) => (
                  <div
                    key={index}
                    className={`w-16 h-16 bg-white mx-1 rounded cursor-pointer ${
                      activeImage === index ? 'ring-2 ring-white' : ''
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img
                      src={image}
                      alt={`${name} - view ${index + 1}`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        // If thumbnail fails to load, replace with placeholder
                        (e.target as HTMLImageElement).src = "https://s.alicdn.com/@sc04/kf/H40a7f4a3dc6f41aea2d0b0cdd1eecc0aM.jpg_300x300.jpg";
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductImages;
