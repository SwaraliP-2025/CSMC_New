import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface Props {
  src: string;
  name: string;
  role?: string;
  onClose: () => void;
}

export const PhotoModal = ({ src, name, role, onClose }: Props) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-sm w-full"
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <div className="flex justify-end px-4 pt-4">
          <button onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
            <X className="h-4 w-4 text-gray-600" />
          </button>
        </div>
        {/* Photo */}
        <div className="px-6 pb-2">
          <img
            src={src}
            alt={name}
            className="w-full rounded-xl object-cover object-top shadow-md"
            style={{ maxHeight: "320px" }}
          />
        </div>
        {/* Info */}
        <div className="px-6 pb-6 pt-3 text-center">
          <div className="w-10 h-0.5 bg-civic-gold rounded-full mx-auto mb-3" />
          <h3 className="font-serif text-lg font-bold text-civic-blue">{name}</h3>
          {role && <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{role}</p>}
        </div>
      </div>
    </div>,
    document.body
  );
};
