import { Button } from "@/components/ui/button";

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

async function fetchProduct(id: string): Promise<IProduct> {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product: IProduct = await response.json();
  return product;
}

export async function generateStaticParams() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products: IProduct[] = await response.json();

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const product = await fetchProduct(params.id);

  return (
    <div className="flex  items-center min-h-screen  justify-center bg-gray-100 ">
      <div className="w-full max-w-5xl  grid grid-cols-1 md:grid-cols-10 gap-5 md:gap-14 p-5 sm:p-10  bg-white shadow-lg rounded-lg">
        {/* Left: Image Preview */}
        <div className="md:col-span-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[400px] object-fill border rounded-lg shadow p-3"
          />
        </div>

        {/* Center: Product Information */}
        <div className="md:col-span-5 ">
          <h1 className="text-xl sm:text-3xl font-bold my-4">
            {product.title.slice(0, 50)}
          </h1>
          <div className="flex items-center  gap-1 mb-2 ">
            <div className="flex text-lg">
              <span
                style={{ color: product.rating.rate >= 1 ? "gold" : "gray" }}
              >
                ★
              </span>
              <span
                style={{ color: product.rating.rate >= 2 ? "gold" : "gray" }}
              >
                ★
              </span>
              <span
                style={{ color: product.rating.rate >= 3 ? "gold" : "gray" }}
              >
                ★
              </span>
              <span
                style={{ color: product.rating.rate >= 4 ? "gold" : "gray" }}
              >
                ★
              </span>
              <span
                style={{ color: product.rating.rate >= 5 ? "gold" : "gray" }}
              >
                ★
              </span>
            </div>

            <h1>{`(${product.rating.count} review)`}</h1>
          </div>
          <p className="text-gray-700 mb-5">
            {product.description.slice(0, 300)}
          </p>
          <div className="text-2xl font-semibold text-amber-400 mb-2">
            Price: ${product.price}
          </div>
          <p className="text-sm text-gray-500 mb-5">
            Eligible for free shipping on orders over $50.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex   gap-4 ">
            <Button className="bg-orange-500 text-base text-black px-5 sm:px-8 sm:py-5 rounded-md font-semibold hover:bg-orange-600">
              Buy Now
            </Button>
            <Button className="bg-yellow-500 text-base text-black px-5 sm:px-8 sm:py-5 mb-4 rounded-md font-semibold hover:bg-yellow-600">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
