import {create} from 'zustand';

// Define the store
const useStore = create(set => ({
  isLoggedIn: null,
  updateAuth: () => set(state => ({isLoggedIn: true})),
  reset: () => set({isLoggedIn: null}),
}));

export default useStore;
