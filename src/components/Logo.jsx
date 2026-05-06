import React from "react";
import Image from "next/image";

const Logo = ({ className = "h-10" }) => {
  return (
    <div className={`relative ${className} aspect-[3/1]`}>
      <Image
        src="/rk_Logo.png"
        alt="RK Nayem Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
};

export default Logo;
