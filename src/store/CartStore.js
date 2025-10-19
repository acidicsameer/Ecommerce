import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  Noofitem: 0,
  totalCost: 0, 
  shippingCost:0,
  cartItems: [],

  increase: () =>
    set((state) => ({
      count: state.count + 1,
    })),

  addToCart: (data) =>
    set((state) => ({
      cartItems: [...state.cartItems, data],
      Noofitem: state.Noofitem + 1,
      totalCost: state.totalCost + data.price, 
      shippingCost:120,
     
    })),

  removeItem: (id) =>
  set((state) => {
    const itemsToRemove = state.cartItems.filter((item) => item.id === id);
    if (itemsToRemove.length === 0) return state;

    // Filter the cart to exclude items with the matching id
    const newCart = state.cartItems.filter((item) => item.id !== id);

    // Sum up the total price of removed items
    const removedTotal = itemsToRemove.reduce((sum, item) => sum + item.price, 0);
    
    return {
      cartItems: newCart,
      Noofitem: state.Noofitem - itemsToRemove.length,
      totalCost:  Math.round(state.totalCost - removedTotal), 
      count:state.count-1,
        shippingCost: newCart.length > 0 ? 120 : 0,  
    }; 
  }),
  clearCart: () =>
    set({
      cartItems: [],
      count: 0,
      Noofitem: 0,
      totalCost: 0, 
      shippingCost:0,
    }), 
 

       
    
 
    
}));

export default useStore;
