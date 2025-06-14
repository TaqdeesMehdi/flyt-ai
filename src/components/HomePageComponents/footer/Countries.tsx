import Link from "next/link";
import { countryLinksData, planLinksData } from "../../../../data/data";

export const Countries = () => {
  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-4">Top Countries</h3>

      {countryLinksData.map((country) => {
        const { id, href, name } = country;
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

      <h3 className="font-semibold text-gray-900 mt-4">Plan</h3>
      {planLinksData.map((plan) => {
        const { id, href, name } = plan;
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
