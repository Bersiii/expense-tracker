import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center gap-2  justify-center">
      <Link href="/">
       <Image
        src="/logo1.png"
        alt="Montra logo"
        width={120}
        height={80}
        className="h-20 w-30 object-contain"
      />
      </Link>
     
    </div>
  );
}

export default Logo