import { useCheckoutContext } from "@/lib/contexts/use-checkout-context";
import Modal from "./modal";
import { CatalogueImage } from "./ui/catalogue-image";
import { ShoesiteImage } from "./ui/Shoesite-Image";
import MapComponent from "./Map";

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
    <div className="relative w-60 sm:w-100 h-60 sm:h-100 bg-amber-200">
      {children}
    </div>
  );
};

export const StoreModal = () => {
  const { storeModalOpen, setStoreModalOpen } = useCheckoutContext();
  return (
    <Modal isOpen={storeModalOpen} onClose={() => setStoreModalOpen(false)}>
      <ModalLayout title="Store Locator">
        <p>Find a store near you!</p>
        <ImageContainer></ImageContainer>
      </ModalLayout>
    </Modal>
  );
};

export const OrderTrackerModal = () => {
  const { OrderTrackerModalOpen, setOrderTrackerModalOpen } =
    useCheckoutContext();
  return (
    <Modal
      isOpen={OrderTrackerModalOpen}
      onClose={() => setOrderTrackerModalOpen(false)}
    >
      <ModalLayout title="Order Tracker">
        <p>Track your order here!</p>
        <ImageContainer>
          <MapComponent />
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
          <p>We'd love to help .</p>
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
            We're happy to assist you if you find any issues with your order.
          </p>
          <p className="">
            Returns are free within 30 days of delivery. All our products
            undergo strict quality control to ensure your satisfaction and come
            with a lifetime warranty. if you find a defect, we will replace it
            free of charge!
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
            We care about the environment and are committed to sustainable
            practices.
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
