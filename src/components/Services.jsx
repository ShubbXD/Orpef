import React from "react";

export default function Services() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 px-6 py-16">
      <h1 className="text-5xl font-bold text-center text-gray-800">
        Our Services
      </h1>
      <p className="text-sm text-gray-600 text-center mt-2 max-w-md mx-auto">
        Dedicated to serving the community and supporting the government with our
        expertise, experience, and compassion.
      </p>

      <div className="flex items-center justify-center flex-wrap gap-6 mt-14">
        {/* Service 1 */}
        <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-blue-200 gap-6 max-w-sm bg-white shadow-md hover:shadow-lg transition">
          <div className="p-6 aspect-square bg-blue-100 rounded-full flex items-center justify-center">
            {/* Icon */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2563eb"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 20h9" />
              <path d="M12 4h9" />
              <path d="M4 9h16" />
              <path d="M4 15h16" />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-700">
              Technical Advisory
            </h3>
            <p className="text-sm text-gray-600">
              Offering expert advice to the government on energy and power
              sector issues.
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-green-200 gap-6 max-w-sm bg-white shadow-md hover:shadow-lg transition">
          <div className="p-6 aspect-square bg-green-100 rounded-full flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#16a34a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-700">
              Voluntary Services
            </h3>
            <p className="text-sm text-gray-600">
              Contributing knowledge and skills to community projects and
              welfare programs.
            </p>
          </div>
        </div>

        {/* Service 3 */}
        <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-yellow-200 gap-6 max-w-sm bg-white shadow-md hover:shadow-lg transition">
          <div className="p-6 aspect-square bg-yellow-100 rounded-full flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-700">
              Disaster Relief Support
            </h3>
            <p className="text-sm text-gray-600">
              Mobilizing retired engineers to provide voluntary support during
              natural disasters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
