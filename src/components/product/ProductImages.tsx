
import React, { useState } from 'react';

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
  
  // Create an array of images if there's only one
  const productImages = images && images.length > 0 ? images : [defaultImage];
  
  return (
    <div>
      <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
        <img
          src={productImages[activeImage]}
          alt={name}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      
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
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
