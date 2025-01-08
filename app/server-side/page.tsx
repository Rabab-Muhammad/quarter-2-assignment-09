interface Book {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const Page = async () => {
  const response = await fetch("https://simple-books-api.glitch.me/books/");
  const parsedResponse: Book[] = await response.json();
  console.log("Book", parsedResponse);

  return (
    <div className=" py-5  md:p-10 md:pb-16">
      <h1 className="text-3xl sm:4xl md:text-5xl   font-bold pb-5 md:pb-14 text-center md:text-center  text-slate-500">
        Server-Side Data Fetching
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {parsedResponse.map((books, index) => (
          <div
            key={index}
            className=" bg-white border rounded-lg shadow-lg p-4 flex flex-col w-[300px] m-auto transform transition duration-300 hover:scale-110"
          >
            <p className="text-2xl text-black font-bold text-center">
              {books.name}
            </p>
            <p className="text-lg text-neutral-700 font-semibold text-center">
              Type: {books.type}
            </p>

            {/*Ternary operator */}
            <p
              className={` text-center mt-1 py-2 rounded text-white font-bold ${
                books.available
                  ? "bg-blue-600 hover:bg-green-600 cursor-pointer"
                  : "bg-red-600 cursor-not-allowed"
              }`}
            >
              {books.available ? "Available" : "Unavailable"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
