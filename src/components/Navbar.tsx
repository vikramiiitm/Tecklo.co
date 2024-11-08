


import {
  Menubar,
  MenubarMenu,
} from "@/components/ui/menubar";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import BrandImg from "@/assets/TeckloLogo.png";

function Navbar() {
  return (
    <nav className="sticky top-0 w-full z-50">
      <div className=" border bg-white border-purple-100 shadow-lg shadow-purple-200  ">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 text-black py-3">
          <div className="relative">
            <Link href="/">
              <Image
                src={BrandImg}
                alt="brandImg"
                width={1000}
                height={1000}
                className="h-full object-cover w-28 object-top"
              />
              {/* Tecklo.Co */}
            </Link>
          </div>
          <div className="hidden lg:block">
            <Menubar className="border-none bg-transparent gap-4 text-lg">
              <MenubarMenu>
                <Link href="/" className="hover:text-purple-500 duration-500">
                  Home
                </Link>
              </MenubarMenu>
              <MenubarMenu>
                <Link
                  href="/about"
                  className="hover:text-purple-500 duration-500"
                >
                  About
                </Link>
              </MenubarMenu>
              <MenubarMenu>
                <Link
                  href="/service"
                  className="hover:text-purple-500 duration-500"
                >
                  Service
                </Link>
              </MenubarMenu>
              <MenubarMenu>
                <Link
                  href="/work"
                  className="hover:text-purple-500 duration-500 hidden md:block"
                >
                  Our Work
                </Link>
              </MenubarMenu>
              <MenubarMenu>
                <Link
                  href="/our-team"
                  className="hover:text-purple-500 duration-500 hidden md:block"
                >
                  Our Team
                </Link>
              </MenubarMenu>
            </Menubar>
          </div>
          <div className="lg:hidden bg-white">
            <Sheet>
              <SheetTrigger>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                  />
                </svg>
              </SheetTrigger>
              <SheetContent className="w-56 bg-white">
                <SheetHeader>
                  <div className="flex flex-col gap-4 mt-6 text-center">
                    <Link href="/" className="hover:text-purple-500 duration-500">
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className="hover:text-purple-500 duration-500"
                    >
                      About
                    </Link>
                    <Link
                      href="/service"
                      className="hover:text-purple-500 duration-500"
                    >
                      Service
                    </Link>
                    <Link
                      href="/work"
                      className="hover:text-purple-500 duration-500"
                    >
                      Our Work
                    </Link>
                    <Link
                      href="/our-team"
                      className="hover:text-purple-500 duration-500"
                    >
                      Our Team
                    </Link>
                  
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
