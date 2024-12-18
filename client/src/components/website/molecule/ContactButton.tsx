import { Link } from "@/i18n/routing";
import { FaEnvelope } from "react-icons/fa";

export default function ContactButton() {
  return (
    <div>
      <Link
        href="/contact/"
        className="hidden sm:block fixed top-[40%] right-4 rounded-full bg-[#F97316] p-5 transition-all hover:bg-slate-400 shadow-lg"
      >
        <FaEnvelope size={40} color="white" />
      </Link>
    </div>
  );
}
