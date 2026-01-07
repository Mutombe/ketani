import { Link } from "react-router-dom";
import {
  Facebook,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";

import PolicyModal from "./PolicyModal";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("privacy");

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-24 pb-12 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 lg:gap-24 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="text-3xl font-bold text-white tracking-tight">
                Ketani <span className="text-ketani-500">Logistics</span>
              </span>
            </Link>
            <p className="max-w-md text-slate-400 leading-relaxed mb-8">
              [cite_start]Revolutionizing bulk commodity logistics. We provide
              seamless coordination of rail, port, and sea freight operations
              across Southern Africa and beyond[cite: 10, 13].
            </p>
            <div className="flex gap-4">
              {[Facebook, FaXTwitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-ketani-600 hover:text-white transition-all border border-slate-800 hover:border-ketani-500 group"
                >
                  <Icon
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
              Company
            </h3>
            <ul className="space-y-4">
              {["About", "Services", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "")}`}
                    className="flex items-center gap-2 hover:text-ketani-400 transition-colors group"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-ketani-500"
                    />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
              Global Reach
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-3 items-start">
                <MapPin className="text-ketani-500 shrink-0 mt-1" size={18} />
                <span className="text-sm">
                  <strong className="block text-white mb-1">
                    Zimbabwe (Regional)
                  </strong>
                  [cite_start]7 Kings' Row, Northgate,
                  <br />
                  Borrowdale, Harare [cite: 109-111]
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin className="text-ketani-500 shrink-0 mt-1" size={18} />
                <span className="text-sm">
                  <strong className="block text-white mb-1">
                    Mauritius (HQ)
                  </strong>
                  [cite_start]3rd Floor Carleton Tower,
                  <br />
                  Ebene [cite: 106-108]
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Ketani Logistics. All rights
            reserved.
          </p>
          <div className="flex gap-8">
            <button
              onClick={() => openModal("privacy")}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => openModal("cookies")}
              className="hover:text-white transition-colors"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>

      <PolicyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
      />
    </footer>
  );
}
