import { useCheckoutContext } from "@/lib/contexts/use-checkout-context";
import Modal from "./modal";
import { CatalogueImage } from "./ui/catalogue-image";
import { ShoesiteImage } from "./ui/Shoesite-Image";
import MapComponent from "./Map";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { SearchBar } from "./ui/search-bar";
import { useDebounce } from "@/lib/hooks/use-searchBar";

const ModalLayout = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col no-select  gap-2  w-60 sm:w-100   ">
      <h2 className="mb-4">{title}</h2>
      {children}
    </div>
  );
};

const ImageContainer = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="relative w-60 sm:w-100 h-60 sm:h-100 ">{children}</div>
  );
};

export const StoreModal = () => {
  const { storeModalOpen, setStoreModalOpen } = useCheckoutContext();
  const [searchText, setSearchText] = useState("Melbourne, Australia");
  const debouncedSearchText = useDebounce(searchText, 300);
  const melbourneLocations = [
    { lng: 144.9631, lat: -37.8136, popupText: "Melbourne City" },
    { lng: 144.965, lat: -37.815, popupText: "Federation Square" },
    { lng: 144.978, lat: -37.82, popupText: "Royal Botanic Gardens" },
    { lng: 144.81, lat: -37.815, popupText: "Melbourne Zoo" },
    { lng: 144.97, lat: -37.315, popupText: "Melbourne Zoo" },
    { lng: 144.964, lat: -37.811, popupText: "Federation Square" },
    { lng: 144.9643, lat: -37.8138, popupText: "Melbourne City" },
  ];

  return (
    <Modal isOpen={storeModalOpen} onClose={() => setStoreModalOpen(false)}>
      <ModalLayout title="Store Locator">
        <p>Find a store near you!</p>
        <SearchBar
          fullWidth
          searchText={searchText}
          setSearchText={setSearchText}
        />
        {/* <p>{debouncedSearchText}</p> */}
        <ImageContainer>
          <MapComponent
            type="stores"
            searchText={debouncedSearchText}
            markers={melbourneLocations}
          />
        </ImageContainer>
      </ModalLayout>
    </Modal>
  );
};

export const OrderTrackerModal = () => {
  const testId = "#test-order-123";
  const { OrderTrackerModalOpen, setOrderTrackerModalOpen } =
    useCheckoutContext();
  const [searchText, setSearchText] = useState(testId);
  const debouncedSearchText = useDebounce(searchText, 300);
  const [locations, setLocations] = useState<
    { lat: number; lng: number; popupText?: string }[]
  >([]);

  useEffect(() => {
    toast.success("Tracking order #" + searchText);
    if (searchText === testId) {
      setLocations([
        { lng: 144.9643, lat: -37.8138, popupText: "Melbourne City" },
      ]);
    } else {
      setLocations([]);
    }
  }, [debouncedSearchText]);

  return (
    <Modal
      isOpen={OrderTrackerModalOpen}
      onClose={() => setOrderTrackerModalOpen(false)}
    >
      <ModalLayout title="Order Tracker">
        <p>Track your order here! (Hint: use #test-order-123)</p>
        <SearchBar
          fullWidth
          searchText={searchText}
          setSearchText={setSearchText}
        />
        {searchText === testId && (
          <p className="text-sm text-green-600">Order found!</p>
        )}
        {searchText.length > 0 && searchText !== testId && (
          <p className="text-sm text-red-600">Order not found.</p>
        )}
        <ImageContainer>
          <MapComponent type="orders" markers={locations} />
        </ImageContainer>
      </ModalLayout>
    </Modal>
  );
};
export const HelpModal = () => {
  const { HelpModalOpen, setHelpModalOpen } = useCheckoutContext();
  return (
    <Modal isOpen={HelpModalOpen} onClose={() => setHelpModalOpen(false)}>
      <ModalLayout title="Help and Customer Service">
        <div className="  flex flex-col gap-2 w-full mb-2">
          <p>We'd love to help.</p>
          <p className="">
            We are dedicated to you having the best experience possible. If you
            have any questions or issues with your order, please don't hesitate
            to reach out to our customer service team.
          </p>
          <a href="mailto:someone@example.com?subject=Hello">
            <h3 className="underline  font-bold! mt-3">Contact Us</h3>
          </a>
        </div>
        <ImageContainer>
          <ShoesiteImage
            url="/assets/gallery/promo/shipping_promo.webp"
            name="Help Image"
          />
        </ImageContainer>
      </ModalLayout>
    </Modal>
  );
};

export const RefundModal = () => {
  const { RefundModalOpen, setRefundModalOpen } = useCheckoutContext();
  return (
    <Modal isOpen={RefundModalOpen} onClose={() => setRefundModalOpen(false)}>
      <ModalLayout title="Returns & Refunds">
        <div className="  flex flex-col gap-2 w-full mb-2">
          <p>
            We're happy to assist you if you find any issues with your order,
            namley, not reciving the product, becuase this is not a real
            company, just a showreel demo site.
          </p>
          <p className="">
            If we did exist, returns are free within 30 days of delivery. All
            our products undergo strict quality control to ensure your
            satisfaction and come with a lifetime warranty. if you find a
            defect, we will replace it free of charge!
          </p>
          <a href="mailto:someone@example.com?subject=Hello">
            <h3 className="underline   font-bold! mt-3">Contact Us</h3>
          </a>
        </div>
        <ImageContainer>
          <ShoesiteImage
            url="/assets/gallery/promo/promo_returns2.webp"
            name="Help Image"
          />
        </ImageContainer>
      </ModalLayout>
    </Modal>
  );
};
export const SustainabilityModal = () => {
  const { SustainabilityModalOpen, setSustainabilityModalOpen } =
    useCheckoutContext();
  return (
    <Modal
      isOpen={SustainabilityModalOpen}
      onClose={() => setSustainabilityModalOpen(false)}
    >
      <ModalLayout title="Sustainability">
        <div className="  flex flex-col gap-2 w-full mb-2">
          <p>
            This is a fake comapny, but if we did exist we would care about the
            environment and are committed to sustainable practices.
          </p>
          <p className="">
            We use eco-friendly materials and processes in our products to
            minimize our environmental impact. We also support various
            environmental initiatives and organizations to help protect our
            planet. All of our fiber products are made from recycled materials
            and purchased through ethical supply chains.
          </p>
          {/* <a href="mailto:someone@example.com?subject=Hello">
            <h3 className="underline text-red  font-bold! mt-3">Contact Us</h3>
          </a> */}
        </div>
        <ImageContainer>
          <ShoesiteImage
            url="/assets/gallery/promo/sustainability_promo.webp"
            name="Help Image"
          />
        </ImageContainer>
      </ModalLayout>
    </Modal>
  );
};

export const AboutModal = () => {
  const { AboutModalOpen, setAboutModalOpen } = useCheckoutContext();

  return (
    <Modal isOpen={AboutModalOpen} onClose={() => setAboutModalOpen(false)}>
      <ModalLayout title="About">
        <div className="  flex flex-col gap-2 w-full mb-2">
          <p>Honestly, this is a totally fake company</p>
          <p className="">
            I've built this to show that I can design and develop a slick,
            modern e-commerce site.
          </p>
          {/* <a href="mailto:someone@example.com?subject=Hello">
            <h3 className="underline text-red  font-bold! mt-3">Contact Us</h3>
          </a> */}
        </div>
        <ImageContainer>
          <ShoesiteImage
            url="/assets/gallery/promo/office_promo.webp"
            name="Help Image"
          />
        </ImageContainer>
      </ModalLayout>
    </Modal>
  );
};

export const CareersModal = () => {
  const { CareersModalOpen, setCareersModalOpen } = useCheckoutContext();
  return (
    <Modal isOpen={CareersModalOpen} onClose={() => setCareersModalOpen(false)}>
      <ModalLayout title="Careers">
        <div className="  flex flex-col gap-2 w-full mb-2">
          <p>Interested in me joining your team as a web developer? </p>
          <p className="">Check out my other work!</p>
          <div className="flex flex-row gap-2 underline">
            <a
              href="https://www.linkedin.com/in/lukeconstable/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.lukeconstable.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </div>
          {/* <a href="mailto:someone@example.com?subject=Hello">
            <h3 className="underline text-red  font-bold! mt-3">Contact Us</h3>
          </a> */}
        </div>
        <ImageContainer>
          <ShoesiteImage
            url="/assets/gallery/promo/office_promo.webp"
            name="Office Image"
          />
        </ImageContainer>
      </ModalLayout>
    </Modal>
  );
};
