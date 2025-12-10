"use client";
import React from "react";
import { FlagIcon } from "./Icons";
import { footerData, tFooterDataItem } from "../../lib/data";
import "./styling/footer.css";
import { chooseModalOpen } from "@/lib/utils";
import toast from "react-hot-toast";

// interface FooterMenuListProps {
//   title: string;
//   items: { id?: string; type: "link" | "modal" }[];
// }
type FooterProps = tFooterDataItem;
function FooterMenuList({ title, items }: FooterProps) {
  return (
    <div className="list__container text-on-black">
      <h3>{title}</h3>
      <div className="list__items__container">
        {items.map((item, index) => (
          <FooterButton key={index} type={item.type} id={item.id} />
        ))}
      </div>
    </div>
  );
}

const FooterButton = ({ type, id }: { type: "link" | "modal"; id: string }) => {
  if (!id) return null;
  if (type === "link") {
    return (
      <a key={id} href="#" className="list__item cursor-pointer">
        <p>{id}</p>
      </a>
    );
  }

  const handleModal = chooseModalOpen(id);
  return (
    <p
      onClick={() => {
        if (handleModal) {
          // toast.success(`Modal opened! ${id} `);
          handleModal(true);
        }
      }}
      className="list__item cursor-pointer "
    >
      {id}
    </p>
  );
};

export default function Footer() {
  return (
    <footer className="footer__container">
      <nav className="footer__categories">
        {footerData.map((menu, index) => (
          <FooterMenuList key={index} title={menu.title} items={menu.items} />
        ))}
      </nav>
      <div className="footer__byline">
        <p className="opacity-80 leading-relaxed">
          Site designed by Luke Constable | VirtuallyAnything 2025
        </p>
      </div>
    </footer>
  );
}
