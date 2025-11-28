import Carousel from "@/app/components/Carousel";
import { BackIcon } from "@/app/components/Icons";
import { Metadata } from "next";
import Image from "next/image";
type ProductPageProps = {
  params: Promise<{ id: string }>;
  //   searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
  searchParams: URLSearchParams;
  children: React.ReactNode;
};

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = await params;
  return {
    title: `Product Page - ${product.id}`,
    description: `Inspector for ${product.id}`,
  };
}

export default async function ProductPage({
  params,
  searchParams,
}: ProductPageProps) {
  const { id } = await params;
  return <ProductMain id={id} />;
}

function ProductMain({ id }: { id: string }) {
  return (
    <main className="flex w-full h-[1680px]">
      <section className="flex-1 bg-amber-600"></section>
      <section className="w-[790px]  border-3 flex justify-start items-center flex-col ">
        <ItemDisplay id={id} />
        {/* <div className="flex-col items-center justify-center py-10 w-full "> */}
        <Carousel
          textAbove="Shop Similar"
          sm_displayAmount={3}
          md_displayAmount={3}
          lg_displayAmount={3}
          xl_displayAmount={3}
          mobile_displayAmount={3}
          products={[]}
        />
        <Carousel
          textAbove="Complete the look"
          sm_displayAmount={3}
          md_displayAmount={3}
          lg_displayAmount={3}
          xl_displayAmount={3}
          mobile_displayAmount={3}
          products={[]}
        />
        {/* </div> */}
      </section>
    </main>
  );
}

function ItemDisplay({ id }: { id: string }) {
  return (
    <figure className="relative flex flex-col items-center justify-center bg-amber-200">
      <Image
        width={500}
        height={500}
        src="/assets/placeholders/img/blueshoe.png"
        alt="item image"
        className=" w-full h-[579px] object-cover"
      />
      <a
        href="#"
        className=" flex justify-center items-center absolute top-[14px] right-3 w-[46px] h-[40px] border-5 rounded-lg border-black "
      >
        <BackIcon className="cursor-pointer " size={30} />
      </a>
      <figcaption className="h-[173px] flex flex-col text-center gap-[19px] justify-center px-[135px] items-center w-full bg-white text-darker">
        <h3 className="uppercase text-2xl font-bold">Product ID: {id}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
          malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vivamus lacinia odio vitae vestibulum vestibulum.
        </p>
      </figcaption>
    </figure>
  );
}
