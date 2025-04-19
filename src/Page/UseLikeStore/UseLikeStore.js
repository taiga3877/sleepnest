import { create } from 'zustand';

const useLikeStore = create((set, get) => ({
  likedItems: JSON.parse(localStorage.getItem('likedItems')) || [],

  toggleLike: (item) => {
    const { likedItems } = get();
    const isAlreadyLiked = likedItems.find(i => i.id === item.id);

    let updatedLikes;

    if (isAlreadyLiked) {
      updatedLikes = likedItems.filter(i => i.id !== item.id);
    } else {
      updatedLikes = [...likedItems, item];
    }

    // Save to localStorage
    localStorage.setItem('likedItems', JSON.stringify(updatedLikes));

    // Update Zustand state
    set({ likedItems: updatedLikes });
  }
}));

export { useLikeStore };
