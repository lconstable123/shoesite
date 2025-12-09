"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { CancelIcon } from "./Icons";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  // Only render when open and when running in browser
  if (!isOpen || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-[9999]"
      onClick={onClose} // closes when clicking backdrop
    >
      <div
        className="bg-black border p-9 rounded-lg relative border-gray-mid shadow-lg"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking content
      >
        <CancelIcon
          white={true}
          size={20}
          className="absolute top-2 right-2 cursor-pointer stroke-white"
          handle={onClose}
        />
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
}
