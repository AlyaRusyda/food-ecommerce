import { data } from "@/data/data";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { Minus } from "@/components/Minus";
import { Plus } from "@/components/Plus";
// import { useShoppingCart } from "@/hooks/use-shopping-cart";

function getFood(id) {
  const item = data.find((e) => e.id === Number(id));
  if (typeof item === "object") {
    return item;
  }
  return {};
}

function Detail() {
  const router = useRouter();
  const { slug } = router.query;

  const food = getFood(slug);

  if (Object.keys(food).length === 0) {
    return <div>Item not found</div>;
  }

  // const { cartCount, addItem } = useShoppingCart();
  const [qty, setQty] = useState(1);
  const [adding, setAdding] = useState(false);

  // const toastId = useRef();
  // const firstRun = useRef(true);

  const handleOnAddToCart = () => {
    setAdding(true);
    toastId.current = toast.loading(
      `Adding ${qty} item${qty > 1 ? 's' : ''}...`
    );
    addItem(props, qty);
  };

  // useEffect(() => {
  //   if (firstRun.current) {
  //     firstRun.current = false;
  //     return;
  //   }

  //   setAdding(false);
  //   toast.success(`${qty} ${props.name} added`, {
  //     id: toastId.current,
  //   });
  //   setQty(1);
  // }, [cartCount]);
  return (
    <>
      <div className="container lg:max-w-screen-lg mx-auto py-24 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Product's image */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 mb-40 my-auto">
            <img
              src={food.image}
              alt={food.name}
              layout="fill"
              objectFit="contain"
            />
          </div>

          {/* Product's details */}
          <div className="flex-1 max-w-md border border-opacity-50 rounded-md shadow-lg p-6 mt-80">
            <h2 className="text-3xl font-semibold">{food.name}</h2>
            <p>
              <span className="text-gray-500">Availability:</span>{" "}
              <span className="font-semibold">In stock</span>
            </p>
            <p className="mt-4">{food.description}</p>

            {/* Price */}
            <div className="mt-8 border-t pt-4">
              <p className="text-gray-500">Price:</p>
              <p className="text-xl font-semibold">{food.price}</p>
            </div>

            <div className="mt-4 border-t pt-4">
              <p className="text-gray-500">Quantity:</p>
              <div className="mt-1 flex items-center space-x-3">
                <button
                  onClick={() => setQty(prev => prev - 1)}
                  disabled={qty <= 1}
                  className="disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-current hover:bg-rose-100 hover:text-rose-500 rounded-md p-1 border-0"
                >
                  <Minus />
                </button>
                <p className="font-semibold text-xl">{qty}</p>
                <button
                  onClick={() => setQty(prev => prev + 1)}
                  className="hover:bg-green-100 hover:text-green-500 rounded-md p-1 border-0"
                >
                  <Plus />
                </button>
              </div>
              <button
                type="button"
                onClick={handleOnAddToCart}
                disabled={adding}
                className="mt-8 border rounded py-2 px-6 bg-rose-500 hover:bg-rose-600 border-rose-500 hover:border-rose-600 focus:ring-4 focus:ring-opacity-50 focus:ring-rose-500 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add to cart ({qty})
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
