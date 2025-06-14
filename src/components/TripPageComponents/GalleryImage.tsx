import Image from "next/image";

type Props = {
  image: string;
  location: string;
  author: string;
  type: string;
};
export const GalleryImages = ({ image, location, author, type }: Props) => {
  return (
    <>
      <div className="group cursor-pointer">
        <div className="relative overflow-hidden rounded-lg mb-2">
          <Image
            src={image}
            alt={type}
            width={400}
            height={128}
            quality={95}
            className="w-full h-24 lg:h-32 object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(min-width: 1024px) 400px, 300px"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="text-xs text-gray-600">
          <div className="flex items-center space-x-1 mb-1">
            <div className="w-3 h-3 lg:w-4 lg:h-4 bg-gray-300 rounded-full flex-shrink-0"></div>
            <span className="font-medium truncate">{author}</span>
          </div>
          <div className="text-gray-500 truncate">{location}</div>
        </div>
      </div>
    </>
  );
};
