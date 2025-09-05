import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const About = () => {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smooth: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-blue-100 via-white to-green-100 px-6 md:px-12 py-20 overflow-hidden">
      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-center text-gray-900">
        <span className="text-blue-600 drop-shadow-md">About Us</span>
      </h1>
      <p className="text-base md:text-lg text-slate-700 text-center mt-4 max-w-3xl mx-auto leading-relaxed">
        The Odisha Retired Power Engineers Forum (ORPEF) is a collective of{" "}
        <span className="text-blue-600 font-semibold">experienced retired engineers</span>{" "}
        who dedicate their knowledge and service for{" "}
        <span className="text-blue-600 font-semibold">society, mentorship</span>, and{" "}
        <span className="text-blue-600 font-semibold">public good</span>.
      </p>

      {/* Main Content inside a card */}
      <div className="max-w-6xl mx-auto mt-12 px-6">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-10 transition-transform transform hover:scale-[1.01] hover:shadow-2xl duration-500 ease-out">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 relative">
            {/* Background blur */}
            <div className="size-[520px] rounded-full absolute blur-[300px] -z-10 bg-[#b3dec1]"></div>

            {/* Image with slide-in from left */}
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative transform hover:scale-105 hover:rotate-1 transition-all duration-500 ease-out"
            >
              <img
                className="max-w-lg w-full rounded-2xl h-auto shadow-xl hover:shadow-2xl hover:shadow-blue-200"
                src="member.jpg"
                alt="ORPEF team"
              />
            </motion.div>

            {/* Text Content with slide-in from right */}
            <motion.div
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="md:max-w-lg"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                Who We Are
              </h2>
              <p className="text-base md:text-lg text-slate-700 mt-2 font-medium leading-relaxed">
                We are a group of retired power engineers from Odisha, united by a
                sense of camaraderie and a{" "}
                <span className="text-blue-600 font-semibold">shared commitment</span>{" "}
                to contribute meaningfully even after retirement. Our vision is to
                continue serving society through{" "}
                <span className="text-blue-600 font-semibold">
                  expertise, mentorship, and voluntary work
                </span>.
              </p>

              {/* Features */}
              <div className="flex flex-col gap-8 mt-8">
                <div>
                  <h3 className="text-lg font-semibold text-slate-700">
                    Technical Advisory
                  </h3>
                  <p className="text-sm text-slate-500">
                    Guidance for{" "}
                    <span className="text-blue-600 font-semibold">
                      government projects
                    </span>{" "}
                    and infrastructure in the{" "}
                    <span className="text-blue-600 font-semibold">energy sector</span>.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-700">
                    Disaster Relief
                  </h3>
                  <p className="text-sm text-slate-500">
                    Offering voluntary help during{" "}
                    <span className="text-blue-600 font-semibold">
                      natural disasters
                    </span>{" "}
                    & emergencies.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-700">
                    Mentorship & Guidance
                  </h3>
                  <p className="text-sm text-slate-500">
                    Supporting young engineers with{" "}
                    <span className="text-blue-600 font-semibold">knowledge sharing</span>{" "}
                    and professional development.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <a
                href="/about"
                className="inline-block mt-8 px-7 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-semibold"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
