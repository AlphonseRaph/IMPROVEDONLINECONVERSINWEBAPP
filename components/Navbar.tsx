"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, User, ShoppingCart } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <ShoppingCart className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">Van Market</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Vehicles</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href="/category/food-trucks" className="block p-2 hover:bg-gray-50">
                            Food Trucks
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href="/category/camper-vans" className="block p-2 hover:bg-gray-50">
                            Camper Vans
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href="/category/cars" className="block p-2 hover:bg-gray-50">
                            Normal Cars
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href="/category/containers" className="block p-2 hover:bg-gray-50">
                            Containers
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/financing" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">
                    Financing
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/delivery" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">
                    Delivery
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/faq" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">
                    FAQ
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link href="/signin" className="ml-4 flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
              <User className="h-5 w-5 mr-1" />
              Sign In
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/category/food-trucks" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Food Trucks
            </Link>
            <Link href="/category/camper-vans" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Camper Vans
            </Link>
            <Link href="/category/cars" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Normal Cars
            </Link>
            <Link href="/category/containers" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Containers
            </Link>
            <Link href="/financing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Financing
            </Link>
            <Link href="/delivery" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Delivery
            </Link>
            <Link href="/faq" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              FAQ
            </Link>
            <Link href="/signin" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;