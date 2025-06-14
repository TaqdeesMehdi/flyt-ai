import { X, ChevronLeft, Upload } from "lucide-react";
const headerButtons = [
  {
    id: 1,
    icon: X,
  },
  {
    id: 2,
    icon: ChevronLeft,
  },
];
export const HeaderButtons = () => {
  return (
    <div className="flex items-center justify-between mb-4 lg:mb-6">
      <div className="flex items-center space-x-2 lg:space-x-4">
        {headerButtons.map((btn) => {
          const { id, icon } = btn;
          const ButtonIcon = icon;
          return (
            <button
              key={id}
              className="p-2 rounded-3xl border border-gray-300 hover:bg-gray-200 transition-colors"
            >
              <ButtonIcon className="w-4 h-4 text-gray-600" />
            </button>
          );
        })}
      </div>
      <button className="p-2 rounded-3xl border border-gray-300 hover:bg-gray-200 transition-colors">
        <Upload className="w-4 h-4 text-gray-600" />
      </button>
    </div>
  );
};
