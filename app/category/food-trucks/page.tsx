"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const foodTrucks = [
  {
    id: 1,
    title: "2023 Custom Food Truck",
    image: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    price: 75000,
    retailPrice: 82000,
    description: "Fully equipped kitchen, ready for business",
    features: ["Commercial Grade Kitchen", "Generator Included", "Health Department Certified"]
  },
  {
    id: 2,
    title: "2022 Gourmet Food Trailer",
    image: "https://images.unsplash.com/photo-1567129937968-cdad8f07e2f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    price: 45000,
    retailPrice: 52000,
    description: "Perfect for mobile catering and events",
    features: ["Easy Towing", "Full Kitchen Setup", "Storage Space"]
  }
];

export default function FoodTrucksPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Food Trucks</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foodTrucks.map((truck) => (
            <Card key={truck.id} className="overflow-hidden">
              <CardHeader>
                <img
                  src={truck.image}
                  alt={truck.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">{truck.title}</CardTitle>
                <p className="text-gray-600 mb-4">{truck.description}</p>
                <div className="space-y-2">
                  <p className="text-lg font-bold text-primary">
                    Our Price: ${truck.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500">
                    Retail: ${truck.retailPrice.toLocaleString()}
                  </p>
                  <ul className="text-sm text-gray-600 list-disc list-inside">
                    {truck.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/vehicles/${truck.id}`} className="w-full">
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