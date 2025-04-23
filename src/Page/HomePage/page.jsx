import React, { useEffect, useState } from 'react';
import img1 from '../assets/image.png';
import img2 from '../assets/image copy.png'
import img3 from '../assets/image copy 12.png'
import img4 from '../assets/image copy 23.png'
import { CiDeliveryTruck } from "react-icons/ci";
import { GiAchievement } from "react-icons/gi";
import { FaHeadphones } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import mebel1 from '../assets/image copy 2.png'
import mebel2 from '../assets/image copy 3.png'
import mebel3 from '../assets/image copy 4.png'
import mebel4 from '../assets/image copy 5.png'
import mebel5 from '../assets/image copy 6.png'
import mebel6 from '../assets/image copy 7.png'
import mebel7 from '../assets/image copy 8.png'
import mebel8 from '../assets/image copy 9.png'
import mebel9 from '../assets/image copy 10.png'
import mebel10 from '../assets/image copy 11.png'

import autumn1 from '../assets/image copy 13.png'
import autumn2 from '../assets/image copy 14.png'
import autumn3 from '../assets/image copy 15.png'
import autumn4 from '../assets/image copy 16.png'
import autumn5 from '../assets/image copy 17.png'
import autumn6 from '../assets/image copy 18.png'
import autumn7 from '../assets/image copy 19.png'
import autumn8 from '../assets/image copy 20.png'
import autumn9 from '../assets/image copy 21.png'
import autumn10 from '../assets/image copy 22.png'

import summer1 from '../assets/image copy 24.png'
import summer2 from '../assets/image copy 25.png'
import summer3 from '../assets/image copy 26.png'
import summer4 from '../assets/image copy 27.png'
import summer5 from '../assets/image copy 28.png'
import summer6 from '../assets/image copy 29.png'
import summer7 from '../assets/image copy 30.png'
import summer8 from '../assets/image copy 31.png'
import summer9 from '../assets/image copy 32.png'
import summer10 from '../assets/image copy 33.png'

import news1 from '../assets/image copy 34.png'
import news2 from '../assets/image copy 35.png'
import news3 from '../assets/image copy 36.png'
import { Link } from 'react-router-dom';
import { useLikeStore } from '../UseLikeStore/UseLikeStore';

const HomePage = () => {
    const [color, setColor] = useState('#FFFFFF'); // Initial color is white

    useEffect(() => {
        const colors = [
            '#D1B27B', '#8E6E3D', '#C0A86D', '#6E4F3B', '#B8A15B',
            '#B09A60', '#5E3A2D', '#BFC8A5', '#A06E3F', '#D4B97E'
        ];
        let index = 0;

        const intervalId = setInterval(() => {
            setColor(colors[index]);
            index = (index + 1) % colors.length; // Loop back to the first color after reaching the end
        }, 1500); // Change color every 1 second

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);


    const product = [
        {
            icon: <CiDeliveryTruck />,
            title: "Free Shipping",
            info: "Free shipping on all orders"
        },
        {
            icon: <GiAchievement />,
            title: "Return Guarantee",
            info: "30 days refund"
        },
        {
            icon: <FaHeadphones />,
            title: "24/7 online support",
            info: "24/7 technical support"
        },
        {
            icon: <MdOutlinePayment />,
            title: "Secure Payment",
            info: "All payment methods accepted"
        },

    ]

    const mebel = [
        { id: 1, img: mebel1, title: "Squares", price: 450, brand: "winter" },
        { id: 2, img: mebel2, title: "Ikat", price: 520, brand: "winter" },
        { id: 3, img: mebel3, title: "Circles", price: 610, brand: "winter" },
        { id: 4, img: mebel4, title: "Geometry Blue", price: 720, brand: "winter" },
        { id: 5, img: mebel5, title: "Tropical Leaves", price: 395, brand: "winter" },
        { id: 6, img: mebel6, title: "Bambi", price: 485, brand: "winter" },
        { id: 7, img: mebel7, title: "Byzantium", price: 765, brand: "winter" },
        { id: 8, img: mebel8, title: "Evening Garden", price: 680, brand: "winter" },
        { id: 9, img: mebel9, title: "Pat Marquis", price: 555, brand: "winter" },
        { id: 10, img: mebel10, title: "Lavender Roses", price: 610, brand: "winter" },
      ];
    
      const autumn = [
        { id: 11, img: autumn1, title: "Safari", price: 480, brand: "autumn" },
        { id: 12, img: autumn2, title: "Multicolor Amethyst", price: 530, brand: "autumn" },
        { id: 13, img: autumn3, title: "Shivali decoration", price: 605, brand: "autumn" },
        { id: 14, img: autumn4, title: "Emerald (AB)", price: 690, brand: "autumn" },
        { id: 15, img: autumn5, title: "Malachite Box", price: 445, brand: "autumn" },
        { id: 16, img: autumn6, title: "Scents of Spring", price: 510, brand: "autumn" },
        { id: 17, img: autumn7, title: "Falling autumn leaves (AB)", price: 730, brand: "autumn" },
        { id: 18, img: autumn8, title: "Blue Breeze", price: 395, brand: "autumn" },
        { id: 19, img: autumn9, title: "Blue Water", price: 670, brand: "autumn" },
        { id: 20, img: autumn10, title: "Plaid", price: 560, brand: "autumn" },
      ];
    
      const summer = [
        { id: 21, img: summer1, title: "Vintage Style", price: 470, brand: "summer" },
        { id: 22, img: summer2, title: "Rocking Dandelion", price: 515, brand: "summer" },
        { id: 23, img: summer3, title: "French Riviera", price: 690, brand: "summer" },
        { id: 24, img: summer4, title: "Dolly the Sheep", price: 440, brand: "summer" },
        { id: 25, img: summer5, title: "Alpine Plants", price: 580, brand: "summer" },
        { id: 26, img: summer6, title: "Inspirational", price: 625, brand: "summer" },
        { id: 27, img: summer7, title: "Green Lotus", price: 705, brand: "summer" },
        { id: 28, img: summer8, title: "Mountain Corn", price: 395, brand: "summer" },
        { id: 29, img: summer9, title: "Sakura Branch", price: 650, brand: "summer" },
        { id: 30, img: summer10, title: "Olive Branch", price: 570, brand: "summer" },
      ];

    const news = [
        {
            img: news1,
            data: "10/05/2024",
            title: "How to choose the perfect gadgets",
            info: "When the beautiful valley fills with steam and the meridian sun hits the hill..."
        },
        {
            img: news2,
            data: "10/05/2024",
            title: "How to use modern technology",
            info: "Interesting stories about how technology changes our lives..."
        },
        {
            img: news3,
            data: "10/05/2024",
            title: "Ways to implement creative ideas",
            info: "What difficulties are encountered in the process of making many new discoveries..."
        }

    ]


    const data = [...mebel, ...autumn, ...summer];

    const [selectedCategory, setSelectedCategory] = useState("all");
  
    const filteredData =
      selectedCategory === "all"
        ? data
        : data.filter((item) => item.brand === selectedCategory);
        const { likedItems, toggleLike } = useLikeStore()

    return (
        <div>
<div className='max-w-screen-xl w-full mx-auto m-auto px-4'>

                <br />
                <br />
                <br />
                <br />
                <br />
                <div
                    className="w-full max-w-[1440px] h-[590px] transition-all rounded-3xl duration-1000 flex items-center justify-between relative px-4 sm:px-6 md:px-8"
                    style={{ backgroundColor: color }}
                >
                    <img className="absolute right-0 sm:right-[50px] md:right-[100px] lg:right-[200px] top-1/2 transform -translate-y-1/2" src={img1} alt="" />
                    <br />
                    <ul className="p-[20px] text-right">
                        <p className="text-[#8E6E3D] text-5xl sm:text-6xl lg:text-5xl font-bold">Environmental</p>
                        <p className="text-[#D4B97E] text-6xl sm:text-7xl lg:text-7xl font-extrabold">Clean Sleep</p>
                        <p className="text-[#B09A60] text-4xl sm:text-5xl lg:text-9xl font-semibold">Products</p>
                    </ul>
                </div>

                <br />
                <br />
                <br />
                <div className="max-w-[1440px] mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {product.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 p-6 bg-white rounded-2xl hover:shadow-2xl transition duration-300 transform hover:scale-105"
                        >
                            <div className="text-4xl text-red-600">
                                {item.icon}
                            </div>
                            <div>
                                <h1 className="text-xl font-semibold text-gray-800">{item.title}</h1>
                                <p className="text-gray-600 text-sm">{item.info}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <br />
                <br />
                <br />
                <div className="flex items-center justify-between hover:shadow-2xl bg-[#464351] text-white rounded-3xl p-6 lg:p-[40px] h-auto relative">
                    <div className="w-full sm:w-[350px] text-left p-6 lg:p-[40px]">
                        <h1 className="text-[60px] sm:text-[90px] font-semibold">100%</h1>
                        <p className="text-xl sm:text-2xl">Material quality</p>
                    </div>
                    <img
                        className="w-full sm:w-[500px] md:w-[800px] h-auto absolute sm:left-[100px] md:left-[250px] top-1/2 transform -translate-y-1/2"
                        src={img2}
                        alt=""
                    />
                    <div className="w-full sm:w-[500px] p-6">
                        <h1 className="text-[24px] sm:text-[30px] font-semibold p-[10px]">
                            "Ecologically Clean Sleep Products"
                        </h1>
                        <p className="text-[14px] sm:text-[16px] p-[10px]">
                            has been a company producing cotton fabrics for use all over the world for many years
                        </p>
                        <button className="w-[128px] h-[38px] p-[10px] bg-white text-black rounded-2xl hover:bg-black hover:text-white transition-colors duration-300">
                            Collection
                        </button>
                    </div>
                </div>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div>
                    <h1 className="text-center text-[35px] sm:text-[40px] font-bold">Winter Collection</h1>
                    <p className="text-center font-semibold text-xl sm:text-2xl mt-2">Ecologically Clean Sleep Products</p>

                    <div className="max-w-[1440px] mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                    {mebel.map((item) => {
  const isLiked = likedItems.some(i => i.id === item.id); // добавь эту строку

  return (
    <Link to={`/collection/${item.id}`} key={item.id}>
      <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/50">
        <div className="relative w-full h-[220px]">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover rounded-t-xl transition-all duration-500 transform hover:scale-110"
          />
          <span
            className="absolute top-4 right-4 text-red-600 text-2xl bg-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 hover:text-red-800"
          >
            <button onClick={(e) => {
              e.preventDefault(); // чтобы клик не срабатывал как переход по ссылке
              toggleLike(item);
            }}>
              {isLiked ? '💖' : '🤍'}
            </button>
          </span>
        </div>
        <div className="p-6 text-center">
          <h1 className="text-xl font-semibold text-gray-800 hover:text-gray-600 transition duration-200">
            {item.title}
          </h1>
        </div>
      </div>
    </Link>
  );
})}
                    </div>
                </div>

                <br />
                <br />
                <br />
                <br />
                <div className="flex flex-col sm:flex-row items-center justify-between hover:shadow-2xl bg-[#7F54B3] text-white rounded-3xl p-6 lg:p-[40px] h-auto relative">
                    <div className="w-full sm:w-[350px] text-left p-6 lg:p-[40px]">
                        <h1 className="text-[60px] sm:text-[90px] font-semibold">100%</h1>
                        <p className="text-xl sm:text-2xl">Material quality</p>
                    </div>
                    <img
                        className="w-full sm:w-[500px] md:w-[800px] h-auto absolute sm:left-[100px] md:left-[250px] top-1/2 transform -translate-y-1/2"
                        src={img3}
                        alt=""
                    />
                    <div className="w-full sm:w-[500px] p-6 sm:p-[10px]">
                        <h1 className="text-[24px] sm:text-[30px] font-semibold p-[10px]">
                            "Ecologically Clean Sleep Products"
                        </h1>
                        <p className="text-[14px] sm:text-[16px] p-[10px]">
                            has been a company producing cotton fabrics for use all over the world for many years
                        </p>
                        <Link to={'/collectionpage'}>
                            <button className="w-[128px] h-[38px] p-[10px] bg-white text-black rounded-2xl hover:bg-black hover:text-white transition-colors duration-300">
                                Collection
                            </button>
                        </Link>
                    </div>
                </div>

                <br />
                <br />
                <br />
                <div>
                    <h1 className="text-center text-[35px] sm:text-[40px] font-bold">Autumn Collection</h1>
                    <p className="text-center font-semibold text-xl sm:text-2xl mt-2">Ecologically Clean Sleep Products</p>

                    <div className="max-w-[1440px] mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                    {autumn.map((item) => {
  const isLiked = likedItems.some(i => i.id === item.id); // добавь эту строку

  return (
    <Link to={`/collection/${item.id}`} key={item.id}>
      <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/50">
        <div className="relative w-full h-[220px]">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover rounded-t-xl transition-all duration-500 transform hover:scale-110"
          />
          <span
            className="absolute top-4 right-4 text-red-600 text-2xl bg-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 hover:text-red-800"
          >
            <button onClick={(e) => {
              e.preventDefault(); // чтобы клик не срабатывал как переход по ссылке
              toggleLike(item);
            }}>
              {isLiked ? '💖' : '🤍'}
            </button>
          </span>
        </div>
        <div className="p-6 text-center">
          <h1 className="text-xl font-semibold text-gray-800 hover:text-gray-600 transition duration-200">
            {item.title}
          </h1>
        </div>
      </div>
    </Link>
  );
})}
                    </div>



                </div>

                <br />
                <br />
                <br />
                <br />
                <div className="flex flex-col sm:flex-row items-center justify-between hover:shadow-2xl bg-[#236F48] text-white rounded-3xl p-6 lg:p-[40px] h-auto relative">
                    <div className="w-full sm:w-[350px] text-left p-6 lg:p-[40px]">
                        <h1 className="text-[60px] sm:text-[90px] font-semibold">100%</h1>
                        <p className="text-xl sm:text-2xl">Material quality</p>
                    </div>
                    <img
                        className="w-full sm:w-[500px] md:w-[800px] h-auto absolute sm:left-[100px] md:left-[250px] top-1/2 transform -translate-y-1/2"
                        src={img4}
                        alt=""
                    />
                    <div className="w-full sm:w-[500px] p-6 sm:p-[10px]">
                        <h1 className="text-[24px] sm:text-[30px] font-semibold p-[10px]">
                            "Ecologically Clean Sleep Products"
                        </h1>
                        <p className="text-[14px] sm:text-[16px] p-[10px]">
                            has been a company producing cotton fabrics for use all over the world for many years
                        </p>
                        <Link to={'/collectionpage'}>
                            <button className="w-[128px] h-[38px] p-[10px] bg-white text-black rounded-2xl hover:bg-black hover:text-white transition-colors duration-300">
                                Collection
                            </button>
                        </Link>
                    </div>
                </div>

                <br />
                <br />
                <br />
                <br />
                <div>
                    <h1 className="text-center text-[35px] sm:text-[40px] font-bold">Summer Collection</h1>
                    <p className="text-center font-semibold text-xl sm:text-2xl mt-2">Ecologically Clean Sleep Products</p>

                    <div className="max-w-[1440px] mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                    {summer.map((item) => {
  const isLiked = likedItems.some(i => i.id === item.id); // добавь эту строку

  return (
    <Link to={`/collection/${item.id}`} key={item.id}>
      <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/50">
        <div className="relative w-full h-[220px]">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover rounded-t-xl transition-all duration-500 transform hover:scale-110"
          />
          <span
            className="absolute top-4 right-4 text-red-600 text-2xl bg-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 hover:text-red-800"
          >
            <button onClick={(e) => {
              e.preventDefault(); // чтобы клик не срабатывал как переход по ссылке
              toggleLike(item);
            }}>
              {isLiked ? '💖' : '🤍'}
            </button>
          </span>
        </div>
        <div className="p-6 text-center">
          <h1 className="text-xl font-semibold text-gray-800 hover:text-gray-600 transition duration-200">
            {item.title}
          </h1>
        </div>
      </div>
    </Link>
  );
})}
                    </div>
                </div>

                <br />
                <br />
                <br />
                <div>
                    <h1 className='text-center text-[35px] font-bold'>News</h1>
                    <br />
                    <p className='text-center'>Ecologically Clean Sleep Products</p>
                    <br />
                    <br />
                    <div className="flex flex-wrap items-center justify-around max-w-[1440px] mx-auto p-6">
                        {news.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden w-full sm:w-[380px] transition-transform hover:scale-105 duration-300"
                            >
                                <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <span className="text-sm text-gray-500">{item.data}</span>
                                    <h1 className="text-lg font-semibold mt-2 mb-1">{item.title}</h1>
                                    <p className="text-gray-600 text-sm">{item.info}</p>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </div>
    );
};

export default HomePage;
