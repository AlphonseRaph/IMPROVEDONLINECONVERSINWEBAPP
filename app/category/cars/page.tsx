"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const cars = [
  {
    id: 1,
    title: "2023 Tesla Model Y",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    price: 45000,
    retailPrice: 48000,
    description: "Electric SUV with premium features",
    features: ["Autopilot", "Long Range", "Premium Interior"]
  },
  {
    id: 2,
    title: "2022 Toyota Camry",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    price: 25000,
    retailPrice: 28000,
    description: "Reliable sedan with great fuel economy",
    features: ["Safety Sense", "Apple CarPlay", "Leather Seats"]
  }
];

export default function CarsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cars</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <Card key={car.id} className="overflow-hidden">
              <CardHeader>
                <img
                  src={car.image}
                  alt={car.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">{car.title}</CardTitle>
                <p className="text-gray-600 mb-4">{car.description}</p>
                <div className="space-y-2">
                  <p className="text-lg font-bold text-primary">
                    Our Price: ${car.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500">
                    Retail: ${car.retailPrice.toLocaleString()}
                  </p>
                  <ul className="text-sm text-gray-600 list-disc list-inside">
                    {car.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/vehicles/${car.id}`} className="w-full">
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