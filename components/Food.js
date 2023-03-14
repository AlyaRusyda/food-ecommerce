import Link from "next/link";
import React, { useState, useEffect } from "react";
import { kategori, harga } from "../data/data";

const Food = () => {
  const [foods, setFoods] = useState([]);
  const [originalFoods, setOriginalFoods] = useState([]);

  async function getFood() {
    try {
      const data = await fetch(
        "https://api.jsonbin.io/v3/b/640fc5dcebd26539d08e321f"
      );
      const foods = await data.json();
      console.log(foods.record.data);

      setFoods(foods.record.data);
      setOriginalFoods(foods.record.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getFood();
  }, []);

  const filterType = async (category) => {
    try {
      await setFoods(
        originalFoods.filter((item) => {
          return item.category === category;
        })
      );
    } catch (error) {
      alert(error);
    }
  };

  const filterPrice = async (price1, price2) => {
    try {
      await setFoods(
        originalFoods.filter((item) => {
          return item.price < price2 && item.price > price1;
        })
      );
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center mb-12 md:mb-0">
        Menu Teratas Minggu Ini
      </h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <p className="font-bold text-gray-700">Filter Kategori</p>
          <div className="flex justfiy-between flex-wrap">
            <button
              onClick={() => getFood()}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            {kategori.map((isi, index) => (
              <button
                onClick={() => filterType(isi.categories)}
                className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                key={index}
              >
                {isi.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="font-bold text-gray-700 md:text-end md:mr-2">
            Filter Harga
          </p>
          <div className="flex justify-between max-w-[550px] w-full">
            {harga.map((harga, index) => (
              <button
                onClick={() => filterPrice(harga.harga1, harga.harga2)}
                className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                key={index}
              >
                {harga.display}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <Link
            key={index}
            href={`/${item.id}`}
            className="border-0 shadow-lg rounded-lg hover:scale-105 duration-300 p-0 bg-orange-100"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 px-2 rounded-full">
                  IDR{item.price}
                </span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Food;
