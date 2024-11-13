"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const camperVans = [
  {
    id: 1,
    title: "2023 Luxury Sprinter Conversion",
    image: "https://images.unsplash.com/photo-1627077647976-3d7ffa0ae2d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    price: 89999,
    retailPrice: 95000,
    description: "Fully equipped luxury Sprinter with modern amenities",
    features: ["Solar Power", "Full Kitchen", "Bathroom", "Queen Bed"]
  },
  {
    id: 2,
    title: "2022 Adventure Ready Van",
    image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    price: 75000,
    retailPrice: 82000,
    description: "Perfect for off-grid adventures",
    features: ["4x4", "Roof Deck", "Outdoor Shower", "Storage"]
  }
];

export default function CamperVansPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Camper Vans</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {camperVans.map((van) => (
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
                  <ul className="text-sm text-gray-600 list-disc list-inside">
                    {van.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/vehicles/${van.id}`} className="w-full">
                  <Button className="w-full">View Details</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}