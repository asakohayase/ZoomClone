import Link from "next/link";
import Image from "next/image";

import { UserButton, SignedIn } from "@clerk/nextjs";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="fixed z-50 flex w-full justify-between bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          alt="Yoom logo"
          width={32}
          height={32}
          className="max-sm:size-10"
        ></Image>
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Yoom
        </p>
      </Link>
      <div className="flex justify-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
