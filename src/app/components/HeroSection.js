import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative w-full h-[80vh]">
      {/* Background Image */}
      <Image
        src="/assets/hero.jpg" // your image path
        alt="Hero Banner"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Sell Your Unused Licence Here
        </h1>
        <p className="text-lg md:text-2xl mb-6 max-w-2xl">
          Turn your extra licenses into cash in just a few clicks
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-2xl transition">
          Get Started
        </button>
      </div>
    </div>
  );
}
