
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Institution {
  id: string;
  name: string;
  location: string;
  type: string;
  applicationFee: number;
}

interface ApplicationCartContextType {
  cartItems: Institution[];
  addToCart: (institution: Institution) => void;
  removeFromCart: (institutionId: string) => void;
  clearCart: () => void;
  getTotalFee: () => number;
}

const ApplicationCartContext = createContext<ApplicationCartContextType | undefined>(undefined);

export const useApplicationCart = () => {
  const context = useContext(ApplicationCartContext);
  if (!context) {
    throw new Error('useApplicationCart must be used within an ApplicationCartProvider');
  }
  return context;
};

interface ApplicationCartProviderProps {
  children: ReactNode;
}

export const ApplicationCartProvider: React.FC<ApplicationCartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Institution[]>([]);

  const addToCart = (institution: Institution) => {
    setCartItems(prev => {
      if (prev.find(item => item.id === institution.id)) {
        return prev; // Already in cart
      }
      return [...prev, institution];
    });
  };

  const removeFromCart = (institutionId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== institutionId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalFee = () => {
    return cartItems.reduce((total, item) => total + item.applicationFee, 0);
  };

  return (
    <ApplicationCartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      getTotalFee
    }}>
      {children}
    </ApplicationCartContext.Provider>
  );
};
