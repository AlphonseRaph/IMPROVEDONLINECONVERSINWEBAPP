"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const featuredVans = [
  {
    id: 1,
    title: "2023 Luxury Sprinter Conversion",
    image: "https://images.unsplash.com/photo-1627077647976-3d7ffa0ae2d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    price: 89999,
    retailPrice: 95000,
    mileage: 15000,
    description: "Fully equipped luxury Sprinter with modern amenities",
  },
  {
    id: 2,
    title: "2022 Adventure Ready Van",
    image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    price: 75000,
    retailPrice: 82000,
    mileage: 28000,
    description: "Perfect for off-grid adventures and weekend getaways",
  },
  {
    id: 3,
    title: "2021 Family Camper Van",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    price: 65000,
    retailPrice: 70000,
    mileage: 35000,
    description: "Spacious interior perfect for family road trips",
  },
];

export default function FeaturedVans() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Vans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVans.map((van) => (
            <Card key={van.id} className="overflow-hidden">
              <CardHeader>
                <img
                  src={van.image}
                  alt={van.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">{van.title}</CardTitle>
                <p className="text-gray-600 mb-4">{van.description}</p>
                <div className="space-y-2">
                  <p className="text-lg font-bold text-primary">
                    Our Price: ${van.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500">
                    Retail: ${van.retailPrice.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500">
                    Mileage: {van.mileage.toLocaleString()} miles
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/vans/${van.id}`} className="w-full">
                  <Button className="w-full">View Details</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}