import Link from "next/link";
import { companyLinksData } from "../../../../data/data";

export const Company = () => {
  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-4">Company</h3>

      {companyLinksData.map((company) => {
        const { id, href, name } = company;
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
