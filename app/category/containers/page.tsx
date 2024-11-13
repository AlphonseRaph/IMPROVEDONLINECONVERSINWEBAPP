"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const containers = [
  {
    id: 1,
    title: "20ft Shipping Container Home",
    image: "https://images.unsplash.com/photo-1587558321361-78ae3b9aa89e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    price: 35000,
    retailPrice: 40000,
    description: "Converted shipping container with modern amenities",
    features: ["Full Kitchen", "Bathroom", "Solar Ready", "Insulated"]
  },
  {
    id: 2,
    title: "40ft Office Container",
    image: "https://images.unsplash.com/photo-1587558321361-78ae3b9aa89e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    price: 45000,
    retailPrice: 50000,
    description: "Mobile office solution with premium finishes",
    features: ["HVAC", "Office Layout", "Network Ready", "Security System"]
  }
];

export default function ContainersPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Containers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {containers.map((container) => (
            <Card key={container.id} className="overflow-hidden">
              <CardHeader>
                <img
                  src={container.image}
                  alt={container.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">{container.title}</CardTitle>
                <p className="text-gray-600 mb-4">{container.description}</p>
                <div className="space-y-2">
                  <p className="text-lg font-bold text-primary">
                    Our Price: ${container.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500">
                    Retail: ${container.retailPrice.toLocaleString()}
                  </p>
                  <ul className="text-sm text-gray-600 list-disc list-inside">
                    {container.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/vehicles/${container.id}`} className="w-full">
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