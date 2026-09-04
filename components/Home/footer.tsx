
import Link from "next/link";
import Image from "next/image";

import { FaGithub, FaLinkedinIn , FaEnvelope} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-gray-900 text-white p-10  mt-30">
      <aside>
        <div className="flex items-center gap-2">
          <Image
            src="/logo1.png"
            alt="Montra logo"
            width={120}
            height={32}
            className="h-8 w-auto object-contain"
          />
        </div>

        <p className="font-medium text-gray-400">
          Montra
          <br />
          <span className="text-sm font-normal text-gray-400">
            Smart expense tracking for better financial habits
          </span>
        </p>
      </aside>
      <nav>
        <h6 id="contact" className="footer-title  text-white">
          Contact us
        </h6>
        <div className="grid grid-flow-col gap-4">
          <Link href="#">
            <FaEnvelope className="text-2xl text-white" />
          </Link>
          <Link href="#">
            <FaGithub className="text-2xl text-white" />
          </Link>
          <Link href="#">
            <FaLinkedinIn className="text-2xl text-white" />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
