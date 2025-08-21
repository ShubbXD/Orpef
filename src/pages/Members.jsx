import React from "react";
import { useLocation } from "react-router-dom";
import members from "../assets/assets";

const MemberCard = ({ name, phone, dob }) => {
  const [visible, setVisible] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const divRef = React.useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative w-80 h-60 rounded-xl p-px bg-gray-900 backdrop-blur-md text-gray-800 overflow-hidden shadow-lg cursor-pointer"
    >
      <div
        className={`pointer-events-none blur-3xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-300 size-60 absolute z-0 transition-opacity duration-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{ top: position.y - 120, left: position.x - 120 }}
      />

      <div className="relative z-10 bg-gray-900/75 p-6 h-full w-full rounded-[11px] flex flex-col items-center justify-center text-center">
        <h2 className="text-xl font-bold text-white mb-1">{name}</h2>
        <p className="text-sm text-indigo-400 font-medium mb-2">DOB: {dob}</p>
        <p className="text-sm text-slate-300 mb-2">📞 {phone || "Not Available"}</p>
      </div>
    </div>
  );
};

const Members = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("q")?.toLowerCase() || "";

  // ✅ Filter members based on search
  const filteredMembers = members.filter(
    (m) =>
      m.name.toLowerCase().includes(searchQuery) ||
      m.phone.toLowerCase().includes(searchQuery) ||
      m.dob.toLowerCase().includes(searchQuery)
  );

  return (
    <section className="px-6 md:px-12 py-20 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Our Esteemed Members</h1>
        <p className="mt-4 text-base text-slate-600 leading-relaxed">
          ORPEF is honored to be guided by the wisdom, service, and contributions
          of our distinguished retired power engineers.
        </p>
      </div>

      {/* Members Grid */}
      {filteredMembers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {filteredMembers.map((member) => (
            <MemberCard
              key={member.id}
              name={member.name}
              phone={member.phone}
              dob={member.dob}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 text-lg mt-10">
          No members found matching "{searchQuery}".
        </p>
      )}
    </section>
  );
};

export default Members;
