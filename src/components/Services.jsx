import React from "react";
import { Zap, Users, Shield } from "lucide-react"; // ✅ Icons

export default function Services() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 px-6 py-20">
      {/* Heading */}
      <h1 className="text-5xl font-bold text-center text-gray-800">
        Our Services
      </h1>
      <p className="text-sm text-gray-600 text-center mt-3 max-w-xl mx-auto">
        Harnessing the knowledge, experience, and compassion of retired
        electrical power engineers to serve communities and guide future
        generations.
      </p>

      {/* Services Grid */}
      <div className="flex items-center justify-center flex-wrap gap-8 mt-16">
        {/* Service 1 */}
        <div className="flex flex-col text-center items-center justify-center rounded-2xl p-8 border border-blue-200 gap-6 max-w-sm bg-white shadow-md hover:shadow-2xl hover:-translate-y-3 transition-transform duration-300">
          <div className="p-6 aspect-square bg-blue-100 rounded-full flex items-center justify-center shadow-inner">
            <Zap size={36} className="text-blue-600" />
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-gray-800">
              Technical Advisory
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Providing expert consultation on power grids, renewable energy, 
              and sustainable solutions for government and institutions.
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div className="flex flex-col text-center items-center justify-center rounded-2xl p-8 border border-green-200 gap-6 max-w-sm bg-white shadow-md hover:shadow-2xl hover:-translate-y-3 transition-transform duration-300">
          <div className="p-6 aspect-square bg-green-100 rounded-full flex items-center justify-center shadow-inner">
            <Users size={36} className="text-green-600" />
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-gray-800">
              Voluntary Community Services
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Retired engineers contributing knowledge to education, mentorship,
              and community development projects with compassion.
            </p>
          </div>
        </div>

        {/* Service 3 */}
        <div className="flex flex-col text-center items-center justify-center rounded-2xl p-8 border border-yellow-200 gap-6 max-w-sm bg-white shadow-md hover:shadow-2xl hover:-translate-y-3 transition-transform duration-300">
          <div className="p-6 aspect-square bg-yellow-100 rounded-full flex items-center justify-center shadow-inner">
            <Shield size={36} className="text-yellow-600" />
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-gray-800">
              Disaster Relief & Support
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Mobilizing teams of experienced engineers to provide technical
              support and relief during natural disasters and emergencies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
