import { Truck, Globe } from "lucide-react";

export default function DeliverySection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Delivery Options
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Truck className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Nationwide Delivery</h3>
            </div>
            <p className="text-gray-600">
              We offer convenient delivery services across the United States.
              Our professional drivers ensure your vehicle arrives safely and
              on time.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Door-to-door delivery service</li>
              <li>• Fully insured transport</li>
              <li>• Real-time tracking available</li>
              <li>• Competitive rates</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Globe className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">International Shipping</h3>
            </div>
            <p className="text-gray-600">
              Looking to ship internationally? We've got you covered with our
              global shipping solutions.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Container shipping available</li>
              <li>• Customs clearance assistance</li>
              <li>• Port-to-port delivery</li>
              <li>• International insurance coverage</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}