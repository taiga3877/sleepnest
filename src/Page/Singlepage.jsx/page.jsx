import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import mebel1 from '../assets/image copy 2.png';
import mebel2 from '../assets/image copy 3.png';
import mebel3 from '../assets/image copy 4.png';
import mebel4 from '../assets/image copy 5.png';
import mebel5 from '../assets/image copy 6.png';
import mebel6 from '../assets/image copy 7.png';
import mebel7 from '../assets/image copy 8.png';
import mebel8 from '../assets/image copy 9.png';
import mebel9 from '../assets/image copy 10.png';
import mebel10 from '../assets/image copy 11.png';

import autumn1 from '../assets/image copy 13.png';
import autumn2 from '../assets/image copy 14.png';
import autumn3 from '../assets/image copy 15.png';
import autumn4 from '../assets/image copy 16.png';
import autumn5 from '../assets/image copy 17.png';
import autumn6 from '../assets/image copy 18.png';
import autumn7 from '../assets/image copy 19.png';
import autumn8 from '../assets/image copy 20.png';
import autumn9 from '../assets/image copy 21.png';
import autumn10 from '../assets/image copy 22.png';

import summer1 from '../assets/image copy 24.png';
import summer2 from '../assets/image copy 25.png';
import summer3 from '../assets/image copy 26.png';
import summer4 from '../assets/image copy 27.png';
import summer5 from '../assets/image copy 28.png';
import summer6 from '../assets/image copy 29.png';
import summer7 from '../assets/image copy 30.png';
import summer8 from '../assets/image copy 31.png';
import summer9 from '../assets/image copy 32.png';
import summer10 from '../assets/image copy 33.png';

import Contact from '../Contacts/page';

const SinglePage = () => {
  const data = [
    { id: 1, img: mebel1, title: "Squares", price: 450, tool: "Screwdriver", hardware: "Hinges", material: "Chipboard (Laminated)", software: "SketchUp", brand: "Winter" },
    { id: 2, img: mebel2, title: "Ikat", price: 520, tool: "Jigsaw", hardware: "Handles", material: "MDF", software: "PRO100", brand: "Winter" },
    { id: 3, img: mebel3, title: "Circles", price: 610, tool: "Drill", hardware: "Slides", material: "Plywood", software: "Drawings and Schemes", brand: "Winter" },
    { id: 4, img: mebel4, title: "Geometry Blue", price: 720, tool: "Miter Box", hardware: "Locks", material: "Veneer", software: "Basis-Furniture Designer", brand: "Winter" },
    { id: 5, img: mebel5, title: "Tropical Leaves", price: 395, tool: "Level", hardware: "Hinges", material: "Solid Wood", software: "SketchUp", brand: "Winter" },
    { id: 6, img: mebel6, title: "Bambi", price: 485, tool: "Drill", hardware: "Handles", material: "MDF", software: "PRO100", brand: "Winter" },
    { id: 7, img: mebel7, title: "Byzantium", price: 765, tool: "Jigsaw", hardware: "Slides", material: "Plywood", software: "Drawings and Schemes", brand: "Winter" },
    { id: 8, img: mebel8, title: "Evening Garden", price: 680, tool: "Screwdriver", hardware: "Locks", material: "Veneer", software: "Basis-Furniture Designer", brand: "Winter" },
    { id: 9, img: mebel9, title: "Pat Marquis", price: 555, tool: "Level", hardware: "Handles", material: "Chipboard (Laminated)", software: "SketchUp", brand: "Winter" },
    { id: 10, img: mebel10, title: "Lavender Roses", price: 610, tool: "Miter Box", hardware: "Slides", material: "Solid Wood", software: "PRO100", brand: "Winter" },
    { id: 11, img: autumn1, title: "Safari", price: 480, tool: "Angle Grinder", hardware: "Corner Brackets", material: "HDF", software: "AutoCAD", brand: "Autumn" },
    { id: 12, img: autumn2, title: "Multicolor Amethyst", price: 530, tool: "Electric Sander", hardware: "Shelf Pins", material: "Bamboo", software: "Fusion 360", brand: "Autumn" },
    { id: 13, img: autumn3, title: "Shivali decoration", price: 605, tool: "Clamps", hardware: "Push-to-Open Mechanism", material: "Reclaimed Wood", software: "Sweet Home 3D", brand: "Autumn" },
    { id: 14, img: autumn4, title: "Emerald (AB)", price: 690, tool: "Planer", hardware: "Hanging Rails", material: "Plastic Laminate", software: "Rhino", brand: "Autumn" },
    { id: 15, img: autumn5, title: "Malachite Box", price: 445, tool: "Table Saw", hardware: "Adjustable Feet", material: "Melamine Board", software: "T-FLEX CAD", brand: "Autumn" },
    { id: 16, img: autumn6, title: "Scents of Spring", price: 510, tool: "Router", hardware: "Drawer Locks", material: "Rattan", software: "Solid Edge", brand: "Autumn" },
    { id: 17, img: autumn7, title: "Falling autumn leaves (AB)", price: 730, tool: "Chisel Set", hardware: "Soft-Close Hinges", material: "Cork Board", software: "SketchList 3D", brand: "Autumn" },
    { id: 18, img: autumn8, title: "Blue Breeze", price: 395, tool: "Multitool", hardware: "Cable Management Grommets", material: "Particle Board", software: "LibreCAD", brand: "Autumn" },
    { id: 19, img: autumn9, title: "Blue Water", price: 670, tool: "Nail Gun", hardware: "Glass Panel Holders", material: "Tempered Glass", software: "DesignCAD", brand: "Autumn" },
    { id: 20, img: autumn10, title: "Plaid", price: 560, tool: "Measuring Tape", hardware: "Hooks", material: "PVC Sheets", software: "Woodwork for Inventor", brand: "Autumn" },
    { id: 21, img: summer1, title: "Vintage Style", price: 470, tool: "Heat Gun", hardware: "Sliding Tracks", material: "Acrylic Panels", software: "HomeByMe", brand: "Summer" },
    { id: 22, img: summer2, title: "Rocking Dandelion", price: 515, tool: "Cordless Screwdriver", hardware: "Gas Struts", material: "Resin", software: "Floorplanner", brand: "Summer" },
    { id: 23, img: summer3, title: "French Riviera", price: 690, tool: "Dremel Tool", hardware: "Foldable Brackets", material: "Concrete", software: "Planner 5D", brand: "Summer" },
    { id: 24, img: summer4, title: "Dolly the Sheep", price: 440, tool: "Brad Nailer", hardware: "Glass Hinges", material: "Leatherette", software: "Roomstyler", brand: "Summer" },
    { id: 25, img: summer5, title: "Alpine Plants", price: 580, tool: "Spokeshave", hardware: "T-Slot Tracks", material: "Aluminum Panels", software: "DreamPlan", brand: "Summer" },
    { id: 26, img: summer6, title: "Inspirational", price: 625, tool: "Router Table", hardware: "Push Latches", material: "Natural Stone", software: "Chief Architect", brand: "Summer" },
    { id: 27, img: summer7, title: "Green Lotus", price: 705, tool: "Wood Carving Tools", hardware: "Cup Pulls", material: "Cane", software: "Envisioneer", brand: "Summer" },
    { id: 28, img: summer8, title: "Mountain Corn", price: 395, tool: "Workbench", hardware: "Cable Clips", material: "Steel Mesh", software: "Live Home 3D", brand: "Summer" },
    { id: 29, img: summer9, title: "Sakura Branch", price: 650, tool: "T-square", hardware: "Hinged Lid Supports", material: "Textured Laminate", software: "Space Designer 3D", brand: "Summer" },
    { id: 30, img: summer10, title: "Olive Branch", price: 570, tool: "Marking Gauge", hardware: "Shelf Brackets", material: "Birch Veneer", software: "Roomeon", brand: "Summer" }
  ];

  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const item = data.find((item) => item.id === parseInt(id));
    if (item) {
      setPost(item);
    }
  }, [id]);

  if (!post) return <div className="text-center p-10">Loading...</div>;

  return (
    <div className='bg-gray-50'>
      <div className='w-[1440px] m-auto'>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-8 bg-white mt-20">
          <div className="w-full md:w-1/2">
            <img
              src={post.img}
              alt={post.title}
              className="rounded-xl shadow-lg w-full object-cover transform hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold mb-6 text-gray-900">{post.title}</h1>
            <table className="w-full text-left border-separate border-spacing-0.5">
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-semibold text-gray-700">Price:</td>
                  <td className="p-3 text-gray-900">${post.price}</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold text-gray-700">Tool:</td>
                  <td className="p-3 text-gray-900">{post.tool}</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold text-gray-700">Hardware:</td>
                  <td className="p-3 text-gray-900">{post.hardware}</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold text-gray-700">Material:</td>
                  <td className="p-3 text-gray-900">{post.material}</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold text-gray-700">Software:</td>
                  <td className="p-3 text-gray-900">{post.software}</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-red-600 mt-4">Category: {post.brand}</p>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export { SinglePage };
