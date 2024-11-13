import { Phone, MapPin, Mail } from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
            <Phone className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-600 text-center">
              <a href="tel:1-800-555-0123" className="hover:text-primary">
                1-800-555-0123
              </a>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Mon-Fri: 9AM-6PM EST
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
            <MapPin className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-600 text-center">
              123 Van Street
              <br />
              Conversion City, ST 12345
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
            <Mail className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600 text-center">
              <a href="mailto:info@vanmarket.com" className="hover:text-primary">
                info@vanmarket.com
              </a>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              We'll respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}