import Link from "next/link";
import { productLinksData } from "../../../../data/data";

export const Product = () => {
  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-4">Product</h3>

      {productLinksData.map((product) => {
        const { name, href, id } = product;
        return (
          <ul key={id} className="space-y-3">
            <li>
              <Link
                href={href}
                className="text-gray-500 hover:text-indigo-500 transition-colors duration-300 text-sm lg:text-base font-thin tracking-wide"
              >
                {name}
              </Link>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
