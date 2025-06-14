import Link from "next/link";
import { legalLinksData } from "../../../../data/data";

export const Legal = () => {
  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>

      {legalLinksData.map((legal) => {
        const { id, href, name } = legal;
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
