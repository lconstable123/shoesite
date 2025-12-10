import React from "react";
import { FlagIcon } from "./Icons";
import { footerData, tFooterDataItem } from "../../lib/data";
import "./styling/footer.css";

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
          <a key={item.id} href="#" className="list__item cursor-pointer">
            <p>{item.id}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

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
