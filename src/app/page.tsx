import Link from "next/link";
import { oswald, raleway } from "./fonts";
import { FaPhone } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/image.png')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div>
          <h1
            className={`relative ${oswald.className} text-[15vh] text-white font-bold uppercase`}
          >
            Royal Bikes
          </h1>

          <p
            className={`${raleway.className} relative text-white/60 text-center mt-4 text-xl md:text-2xl`}
          >
            Adventure for all — where every trip begins with freedom.
          </p>

          <h2
            className={`${raleway.className} relative text-white/60 text-center mt-4 text-xl md:text-2xl`}
          >
            <ul>
              <li>Affordable Two-Wheeler Rentals in Kozhikode</li>
              <li>Quick & Easy Booking for Bikes</li>
            </ul>
          </h2>
        </div>

        <div className="absolute bottom-4 right-4 rounded-full bg-blue-600">
          <Link
            href="tel:+1234567890"
            className="text-white p-4 block transform scale-x-[-1]"
          >
            <FaPhone size={25} />
          </Link>
        </div>
      </div>
    </>
  );
}
