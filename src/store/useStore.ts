
import { create } from 'zustand';

export interface CartItem {
  barcode: string;
  name: string;
  price: number;
  quantity: number;
  subtotal: number;
}

interface StoreState {
  // Auth state
  authToken: string | null;
  setAuthToken: (token: string | null) => void;
  getAuthToken: () => string | null;
  
  // Cart state
  cartItems: CartItem[];
  addProductToCart: (product: Omit<CartItem, 'quantity' | 'subtotal'>) => void;
  deleteProductFromCart: (barcode: string) => void;
  adjustQuantity: (barcode: string, amount: number) => void;
  clearCart: () => void;
  getCartItems: () => CartItem[];
  getCartTotal: () => number;
}

const useStore = create<StoreState>((set, get) => ({
  // Auth state
  authToken: null,
  setAuthToken: (token) => set({ authToken: token }),
  getAuthToken: () => get().authToken,
  
  // Cart state
  cartItems: [],
  
  addProductToCart: (product) => set((state) => {
    const existingItemIndex = state.cartItems.findIndex(item => item.barcode === product.barcode);
    
    if (existingItemIndex >= 0) {
      const updatedItems = [...state.cartItems];
      updatedItems[existingItemIndex].quantity += 1;
      updatedItems[existingItemIndex].subtotal = updatedItems[existingItemIndex].price * 
        updatedItems[existingItemIndex].quantity;
      return { cartItems: updatedItems };
    } else {
      const newItem: CartItem = {
        ...product,
        quantity: 1,
        subtotal: product.price
      };
      return { cartItems: [...state.cartItems, newItem] };
    }
  }),
  
  deleteProductFromCart: (barcode) => set((state) => ({
    cartItems: state.cartItems.filter(item => item.barcode !== barcode)
  })),
  
  adjustQuantity: (barcode, amount) => set((state) => {
    const updatedItems = state.cartItems.map(item => {
      if (item.barcode === barcode) {
        const newQuantity = Math.max(1, item.quantity + amount);
        return {
          ...item,
          quantity: newQuantity,
          subtotal: item.price * newQuantity
        };
      }
      return item;
    });
    
    return { cartItems: updatedItems };
  }),
  
  clearCart: () => set({ cartItems: [] }),
  
  getCartItems: () => get().cartItems,
  
  getCartTotal: () => {
    return get().cartItems.reduce((sum, item) => sum + item.subtotal, 0);
  }
}));

export default useStore;
