import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,

  increase: () => set((state) => ({ count: state.count + 1 })),
  cartItems: [],
  addToCart: (data) => set((state) => ({ cartItems: [...state.cartItems, data],
      clearCart: () => set({ cartItems: [] ,count:0}),
      removeItem: (id) => set((state) => ({cartItems: state.cartItems.filter((data) => data.id !== id),count:state.count-1}))

    }))
 } ))
export default useStore;
