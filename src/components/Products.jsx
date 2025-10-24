import React, { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://682858716b7628c52912ff44.mockapi.io/pc")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error bor:", err));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-gray-500"></div>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-10 border border-blue-400 rounded-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Products</h2>
        <button className="border border-gray-500 text-sm px-4 py-2 rounded hover:bg-gray-100">
          Move All To Bag
        </button>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-sm rounded-lg overflow-hidden hover:shadow-md transition"
          >

            <div className="relative">
              {item.discount && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  -{item.discount}%
                </span>
              )}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-contain p-4"
              />
            </div>


            <button className="w-full bg-black text-white py-2 flex items-center justify-center gap-2 text-sm hover:bg-gray-800">
              <FiShoppingCart /> Add To Cart
            </button>


            <div className="p-3">
              <h3 className="text-sm font-medium text-gray-800">{item.name}</h3>

              <div className="flex items-center gap-2 mt-1">
                <span className="text-red-500 font-semibold">${item.price}</span>
                {item.oldPrice && (
                  <span className="text-gray-400 line-through text-sm">
                    ${item.oldPrice}
                  </span>
                )}
              </div>


              <div className="flex items-center gap-1 mt-1">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <AiFillStar key={i} className="text-yellow-500 text-sm" />
                  ))}
                <span className="text-xs text-gray-500 ml-1">(65)</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
