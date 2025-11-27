import React from "react";
import { FlagIcon } from "./Icons";
import { footerData } from "../lib/data";
import "./styling/footer.css";

interface FooterMenuListProps {
  title: string;
  items: string[];
}

function FooterMenuList({ title, items }: FooterMenuListProps) {
  return (
    <div className="list__container text-on-black">
      <h3>{title}</h3>
      <div className="list__items__container">
        {items.map((item, index) => (
          <div key={index} className="list__item">
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__categories">
        {footerData.map((menu, index) => (
          <FooterMenuList key={index} title={menu.title} items={menu.items} />
        ))}
      </div>
      <div className="footer__byline">
        <p className="opacity-80 leading-relaxed">
          Site designed by Luke Constable | VirtuallyAnything 2025
        </p>
      </div>
    </div>
  );
}
