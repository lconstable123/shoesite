import { FlagIcon } from "./Icons";

export function DropdownMenu() {
  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <div className="bg-white flex h-[200px] items-start justify-between w-full">
        {/* Sports Image */}
        <div className="h-[200px] w-[300px] relative">
          <div
            className="absolute bottom-[-34.4%] left-0 right-[-10.56%] top-[-54%] bg-cover bg-center"
            style={{
              backgroundImage: "url(/api/placeholder/300/250)",
            }}
          />
        </div>

        {/* Menu Categories */}
        <div className="box-border flex flex-1 flex-col gap-5 h-full items-start justify-center min-h-px min-w-px pl-[90px] pr-0 py-8">
          <div className="box-border flex flex-1 gap-16 items-start min-h-px min-w-px pb-8 pt-0 px-0 w-full">
            {/* Football */}
            <div className="flex flex-col gap-4 items-start">
              <div className="flex items-start w-[120px]">
                <div className="flex flex-col font-inter font-bold justify-center leading-0 text-lg text-darker text-center tracking-[1.26px] whitespace-nowrap">
                  <p className="leading-normal">FOOTBALL</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 items-start justify-center opacity-80 w-full">
                <p className="font-inter font-normal leading-normal text-xs text-text-hard text-center">
                  Ronaldo
                </p>
                <p className="font-inter font-normal leading-normal text-xs text-text-hard text-center">
                  Pele-X
                </p>
              </div>
            </div>

            {/* Basketball */}
            <div className="flex flex-col gap-4 items-start">
              <div className="flex items-start w-[120px]">
                <div className="flex flex-col font-inter font-bold justify-center leading-0 text-lg text-darker text-center tracking-[1.26px] whitespace-nowrap">
                  <p className="leading-normal">BASKETBALL</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 items-start justify-center opacity-80 w-full">
                <p className="font-inter font-normal leading-normal text-xs text-text-hard text-center">
                  Space Jammer
                </p>
                <p className="font-inter font-normal leading-normal text-xs text-text-hard text-center">
                  Bigshot
                </p>
              </div>
            </div>

            {/* Outdoors */}
            <div className="flex flex-col gap-4 items-start">
              <div className="flex items-start w-[120px]">
                <div className="flex flex-col font-inter font-bold justify-center leading-0 text-lg text-darker text-center tracking-[1.26px] whitespace-nowrap">
                  <p className="leading-normal">OUTDOORS</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 items-start justify-center opacity-80 w-full">
                <p className="font-inter font-normal leading-normal text-xs text-text-hard text-center">
                  Rock Solid
                </p>
                <p className="font-inter font-normal leading-normal text-xs text-text-hard text-center">
                  Vertigo
                </p>
                <p className="font-inter font-normal leading-normal text-xs text-text-hard text-center">
                  Neo-Sherpa
                </p>
              </div>
            </div>

            {/* Fitness */}
            <div className="flex flex-col gap-4 items-start">
              <div className="flex items-start w-[120px]">
                <div className="flex flex-col font-inter font-bold justify-center leading-0 text-lg text-darker text-center tracking-[1.26px] whitespace-nowrap">
                  <p className="leading-normal">FITNESS</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 items-start justify-center opacity-80 w-full">
                <p className="font-inter font-normal leading-normal text-xs text-text-hard text-center">
                  Cardiac
                </p>
                <p className="font-inter font-normal leading-normal text-xs text-text-hard text-center">
                  Slipstream
                </p>
                <p className="font-inter font-normal leading-normal text-xs text-text-hard text-center">
                  Sweatlodge
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side menu */}
        <div className="bg-white border-l border-text-mid2 box-border flex flex-col h-full items-start justify-center w-[300px]">
          <div className="box-border flex flex-1 flex-col gap-[11px] items-start min-h-px min-w-px px-8 py-7 w-full">
            <p className="font-inter font-normal leading-normal text-xs text-text-hard text-center">
              Store Locator
            </p>
            <p className="font-inter font-normal leading-normal text-xs text-text-hard text-center">
              Order Tracker
            </p>
            <p className="font-inter font-normal leading-normal text-xs text-text-hard text-center">
              Help & Customer Service
            </p>
            <p className="font-inter font-normal leading-normal text-xs text-text-hard text-center">
              Returns & Refunds
            </p>
            <p className="font-inter font-normal leading-normal text-xs text-text-hard text-center">
              Sustainability
            </p>
          </div>
          <div className="border-t border-text-mid2 box-border flex gap-2 items-center px-8 py-2 w-full">
            <FlagIcon size={20} />
            <div className="flex flex-1 gap-2 items-center min-h-px min-w-px">
              <p className="font-inter font-normal leading-normal text-xs text-text-hard text-center">
                Australia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
