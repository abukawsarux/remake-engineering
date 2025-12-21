import Image from "next/image";

interface PageHeroSectionProps {
  image: string;
  title: string;
  link: string;
}

export default function PageHeroSection({
  image,
  title,
  link,
}: PageHeroSectionProps) {
  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96">
      <Image src={image} alt={title} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl opacity-90">{link}</p>
        </div>
      </div>
    </div>
  );
}
