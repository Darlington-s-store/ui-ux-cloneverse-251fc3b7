import React, { useState, useEffect } from 'react';
import { X, Image as ImageIcon } from 'lucide-react';

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
  const [imageErrors, setImageErrors] = useState<boolean[]>([]);
  
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
    return ["https://ae01.alicdn.com/kf/S7de15e8536664332b478d953ea4e444dN/Global-Version-Xiaomi-Redmi-Note-13-Pro-5G-Smartphone-120Hz-AMOLED-200MP-Camera-67W-Fast-Charging.jpg_220x220.jpg"];
  }, [images, defaultImage]);
  
  // Initialize imageErrors array
  useEffect(() => {
    setImageErrors(new Array(productImages.length).fill(false));
  }, [productImages]);
  
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
  
  const handleImageError = (index: number) => {
    setImageErrors(prev => {
      const newErrors = [...prev];
      newErrors[index] = true;
      return newErrors;
    });
  };
  
  // Improved fallback images based on category
  const fallbackImage = "https://ae01.alicdn.com/kf/S7de15e8536664332b478d953ea4e444dN/Global-Version-Xiaomi-Redmi-Note-13-Pro-5G-Smartphone-120Hz-AMOLED-200MP-Camera-67W-Fast-Charging.jpg_220x220.jpg";
  
  return (
    <div>
      <div 
        className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden cursor-pointer"
        onClick={() => openLightbox(activeImage)}
      >
        {imageErrors[activeImage] ? (
          <div className="flex flex-col items-center justify-center p-6 text-gray-400">
            <ImageIcon size={64} />
            <span className="mt-2 text-sm">{name}</span>
          </div>
        ) : (
          <img
            src={productImages[activeImage]}
            alt={name}
            className="max-h-full max-w-full object-contain transition-transform hover:scale-105"
            onError={() => handleImageError(activeImage)}
          />
        )}
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
              {imageErrors[index] ? (
                <div className="flex items-center justify-center h-full text-gray-400">
                  <ImageIcon size={24} />
                </div>
              ) : (
                <img
                  src={image}
                  alt={`${name} - view ${index + 1}`}
                  className="w-full h-full object-contain"
                  onError={() => handleImageError(index)}
                />
              )}
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
                {imageErrors[activeImage] ? (
                  <div className="flex flex-col items-center justify-center p-6 text-gray-400">
                    <ImageIcon size={96} />
                    <span className="mt-2 text-sm">{name}</span>
                  </div>
                ) : (
                  <img
                    src={productImages[activeImage]}
                    alt={name}
                    className="max-h-full max-w-full object-contain"
                    onError={() => handleImageError(activeImage)}
                  />
                )}
              </div>
              
              <button 
                className="text-white bg-black bg-opacity-50 rounded-full p-2 mx-2 hover:bg-opacity-70"
                onClick={nextImage}
              >
                &gt;
              </button>
            </div>
            
            {productImages.length > 1 && (
              <div className="flex justify-center mt-4 overflow-x-auto">
                {productImages.map((image, index) => (
                  <div
                    key={index}
                    className={`w-16 h-16 bg-white mx-1 rounded cursor-pointer ${
                      activeImage === index ? 'ring-2 ring-white' : ''
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    {imageErrors[index] ? (
                      <div className="flex items-center justify-center h-full text-gray-400">
                        <ImageIcon size={16} />
                      </div>
                    ) : (
                      <img
                        src={image}
                        alt={`${name} - view ${index + 1}`}
                        className="w-full h-full object-contain"
                        onError={() => handleImageError(index)}
                      />
                    )}
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
