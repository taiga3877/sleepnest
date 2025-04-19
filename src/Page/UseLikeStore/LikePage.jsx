import React from 'react';
import { useLikeStore } from '../UseLikeStore/UseLikeStore';
import { Link } from 'react-router-dom';

const LikePage = () => {
  const { likedItems, toggleLike } = useLikeStore();

  return (
    <div className="p-6 max-w-[1440px] mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Liked Items</h1>

      {likedItems.length === 0 ? (
        <p className="text-gray-500 text-lg">You haven't liked anything yet 💔</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {likedItems.map(item => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition relative">
              <Link to={`/collection/${item.id}`}>
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
              </Link>

              <span
                className="absolute top-4 right-4 text-red-600 text-2xl bg-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 hover:text-red-800"
              >
                <button onClick={() => toggleLike(item)}>
                  💖
                </button>
              </span>

              <Link to={`/collection/${item.id}`}>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LikePage;
