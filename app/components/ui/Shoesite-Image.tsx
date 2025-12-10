import { generateTinyUrl2 } from "@/lib/utils";
import Image from "next/image";

export const ShoesiteImage = ({ url, name }: { url: string; name: string }) => {
  const Tiny = generateTinyUrl2(url);

  return (
    <Image
      style={{ objectFit: "cover" }}
      loading="eager"
      src={url}
      alt={name || "Product Image"}
      fill
      className="object-cover no-select  "
      priority
      placeholder="blur"
      blurDataURL={Tiny}
    />
  );
};
