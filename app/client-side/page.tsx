"use client";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CiStar } from "react-icons/ci";
import Link from "next/link";

interface IProducts {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ClientSide = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const parsedResponse: IProducts[] = await response.json();
      console.log(parsedResponse);
      setProducts(parsedResponse);
      setLoading(false);
    };
    fetchData();
  }, []);

  // Loading
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center bg-slate-200 ">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <div className="bg-slate-50 pb-5 md:pb-20">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl py-10 text-slate-500 font-bold">
        Client-Side Data Fetching
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 mx-5 sm:mx-20  ">
        {products.map((product, index) => (
          <div key={index}>
            <div
              key={product.id}
              className="bg-white gap-10 p-5 rounded-md shadow-lg  h-auto transform transition duration-300 hover:scale-105"
            >
              <Link href={`/product-details/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-60 w-full mb-2 "
                />
              </Link>

              <div className="flex justify-between items-center mt-7">
                <div>{product.category}</div>
                <div className="flex  gap-1">
                  <CiStar size={20} />
                  <h1>{`${product.rating.rate}`}</h1>
                </div>
              </div>

              <Link href={`/product-details/${product.id}`}>
                <h2 className="text-2xl  text-gray-900 font-bold mt-2 hover:underline ">
                  {`${product.title.slice(0, 20)}...`}{" "}
                </h2>

                <p className="text-base text-gray-700 mt-1 hover:underline">{`${product.description.slice(
                  0,
                  60
                )}...`}</p>
                <p className="text-lg my-1 text-blue-600 ">
                  {" "}
                  {`$${product.price}`}
                </p>
              </Link>

              <Button className="bg-blue-500 w-full py-2 px-2 rounded-md hover:bg-blue-600 text-base">
                Add to card
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientSide;
