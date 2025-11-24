import { ChevronDown } from "./Icons";

export function Pulldown() {
  return (
    <div className="w-full h-8  justify-center bg-gray-darker flex items-center px-4">
      <div className="no-select flex gap-[18px] justify-center items-center">
        <ChevronDown />
        <h3 className="text-white uppercase text-center text-sm ">
          Shipping & Free Returns
        </h3>
        <ChevronDown />
      </div>
    </div>
  );
}
