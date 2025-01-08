import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="my-5 sm:h-screen flex items-center justify-center  text-black ">
      <div className="bg-yellow-300  rounded-lg p-7  sm:max-w-lg ">
        <h1 className="text-2xl md:text-3xl font-semibold text-center  mb-2 ">
          Data Fetching
        </h1>
        <p className="text-sm md:text-base mb-2 ">
          <span className="text-lg md:text-xl font-semibold">
            Data Fetching
          </span>{" "}
          means getting information from a server or database to show it on a
          website or app.
        </p>

        <p className="text-base md:text-xl mb-2">
          The two types of data fetching are:
        </p>

        <p className="text-sm md:text-base ">
          <span className="text-md md:text-lg font-semibold">
            Client-Side Fetching:
          </span>{" "}
          Data is fetched in the {`user's`}browser after the page loads.
        </p>
        <p className="text-sm md:text-base mb-3 ">
          <span className="text-md md:text-lg font-semibold">
            Server-Side Fetching:
          </span>{" "}
          Data is fetched from the server before the page is sent to the
          browser.
        </p>

        {/* Buttons */}
        <div className="flex flex-col   text-center  sm:flex-row justify-center gap-4 ">
          <Link href="/client-side">
            <Button className="bg-amber-500 hover:bg-blue-500 text-white text-sm md:text-lg font-semibold p-5 sm:py-6 sm:px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105  ">
              Client-Side Fetching
            </Button>
          </Link>
          <Link href="/server-side">
            <Button className="bg-amber-500 hover:bg-blue-500 text-white text-sm md:text-lg font-semibold p-5 sm:py-6 sm:px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 ">
              Server-Side Fetching
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
