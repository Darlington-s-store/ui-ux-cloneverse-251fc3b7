
import { useState } from 'react';
import { X } from 'lucide-react';
import { toast } from 'sonner';

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  image,
  quantity,
  onUpdateQuantity,
  onRemove
}) => {
  const handleIncrease = () => {
    onUpdateQuantity(id, quantity + 1);
  };
  
  const handleDecrease = () => {
    if (quantity > 1) {
      onUpdateQuantity(id, quantity - 1);
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      onUpdateQuantity(id, newQuantity);
    }
  };
  
  const handleRemove = () => {
    onRemove(id);
    toast.success(`${name} removed from cart`);
  };
  
  return (
    <div className="flex items-center py-6 border-b border-gray-200">
      <div className="flex-shrink-0 mr-6">
        <button onClick={handleRemove} className="text-gray-400 hover:text-exclusive">
          <X size={20} />
        </button>
      </div>
      
      <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded overflow-hidden mr-6">
        <img src={image} alt={name} className="w-full h-full object-contain" />
      </div>
      
      <div className="flex-grow">
        <h3 className="font-medium">{name}</h3>
      </div>
      
      <div className="flex-shrink-0 w-32 mx-6">
        <div className="flex">
          <span className="text-gray-800 font-medium">${price.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="flex-shrink-0 w-32 mx-6">
        <div className="flex border border-gray-300 rounded-md">
          <button
            onClick={handleDecrease}
            className="px-3 py-1 border-r border-gray-300"
          >
            -
          </button>
          <input
            type="text"
            value={quantity.toString().padStart(2, '0')}
            onChange={handleChange}
            className="w-12 text-center border-none focus:outline-none py-1"
          />
          <button
            onClick={handleIncrease}
            className="px-3 py-1 border-l border-gray-300"
          >
            +
          </button>
        </div>
      </div>
      
      <div className="flex-shrink-0 w-32 text-right">
        <span className="text-gray-800 font-medium">
          ${(price * quantity).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
