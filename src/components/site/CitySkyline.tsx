// import React from "react";

// export const CitySkyline = () => {
//   return (
//     <div className="w-full h-16 md:h-24 overflow-hidden relative pointer-events-none select-none opacity-90">
//       <div className="flex absolute bottom-0 left-0 animate-marquee-slow whitespace-nowrap">
//         {[...Array(4)].map((_, i) => (
//           <svg
//             key={i}
//             viewBox="0 0 1200 120"
//             className="h-16 md:h-24 w-auto shrink-0"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             {/* Base Line */}
//             <rect y="115" width="1200" height="5" fill="#e2e8f0" />
            
//             {/* Buildings and Elements - styled with Official CSMC Emblem Colors (Gold, Blue, Red) */}
//             {/* Building 1 - Blue */}
//             <rect x="20" y="20" width="30" height="45" fill="#3B3F8C" rx="2" />
//             <rect x="25" y="25" width="5" height="5" fill="white" opacity="0.4" />
//             <rect x="35" y="25" width="5" height="5" fill="white" opacity="0.4" />

//             {/* Tree 1 */}
//             <circle cx="70" cy="55" r="10" fill="#E6A64C" />
//             <rect x="68" y="60" width="4" height="5" fill="#4b5563" />

//             {/* Bibi Ka Maqbara inspired dome */}
//             <path d="M100 65 Q120 30 140 65 L140 70 L100 70 Z" fill="#E6A64C" />
//             <rect x="115" y="60" width="10" height="10" fill="#fef3c7" />

//             {/* Landmark - Kranti Chowk inspired pillar */}
//             <rect x="160" y="10" width="15" height="55" fill="#D32F2F" />
//             <circle cx="167.5" cy="7" r="5" fill="#E6A64C" />

//             {/* Building 3 - Blue Highrise */}
//             <rect x="190" y="5" width="25" height="60" fill="#3B3F8C" rx="2" />
//             <rect x="195" y="10" width="15" height="3" fill="white" opacity="0.3" />

//             {/* 52 Gates inspired arch */}
//             <path d="M230 65 Q250 20 270 65" stroke="#E6A64C" strokeWidth="4" fill="none" />

//             {/* Building 4 - Red */}
//             <rect x="290" y="40" width="35" height="30" fill="#D32F2F" />
//             <rect x="295" y="35" width="25" height="5" fill="#b71c1c" />

//             {/* Tree 2 */}
//             <path d="M340 65 L350 30 L360 65 Z" fill="#E6A64C" />

//             {/* Building 5 - Blue Modern */}
//             <rect x="380" y="25" width="35" height="40" fill="#3B3F8C" rx="4" />
//             <circle cx="397.5" cy="35" r="8" fill="white" opacity="0.3" />

//             {/* Street Lamp */}
//             <line x1="430" y1="65" x2="430" y2="30" stroke="#3B3F8C" strokeWidth="2" />
//             <circle cx="430" cy="30" r="5" fill="#E6A64C" />

//             {/* More buildings */}
//             <rect x="450" y="15" width="30" height="50" fill="#3B3F8C" rx="2" />
//             <rect x="500" y="40" width="40" height="30" fill="#D32F2F" />
//             <path d="M495 40 L515 20 L535 40 Z" fill="#b71c1c" />

//             {/* Ajanta/Ellora Caves inspired facade */}
//             <rect x="560" y="35" width="60" height="30" fill="#E6A64C" />
//             <rect x="570" y="40" width="10" height="20" fill="#92400e" />
//             <rect x="590" y="40" width="10" height="20" fill="#92400e" />

//             {/* More greenery */}
//             <circle cx="650" cy="50" r="12" fill="#E6A64C" />
//             <circle cx="670" cy="45" r="18" fill="#3B3F8C" />

//             {/* Modern Tower */}
//             <rect x="700" y="0" width="20" height="65" fill="#3B3F8C" />

//             {/* Final Buildings */}
//             <rect x="750" y="25" width="35" height="40" fill="#D32F2F" rx="2" />
//             <rect x="800" y="10" width="40" height="55" fill="#E6A64C" />
//             <rect x="860" y="35" width="30" height="30" fill="#3B3F8C" />
//             <circle cx="910" cy="40" r="20" fill="#D32F2F" />
//           </svg>
//         ))}
//       </div>
//     </div>
//   );
// };

import React from "react";

export const CitySkyline = () => {
  return (
    <div className="w-full h-20 md:h-28 overflow-hidden relative pointer-events-none select-none opacity-90">
      <div className="flex absolute bottom-0 left-0 animate-marquee-slow whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 1400 140"
            className="h-20 md:h-28 w-auto shrink-0"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ground */}
            <rect y="130" width="1400" height="10" fill="#e2e8f0" />

            {/* --- AJANTA / ELLORA CAVES --- */}
            <rect x="20" y="60" width="120" height="70" fill="#3B3F8C" />
            <path d="M30 80 Q50 60 70 80 Q90 60 110 80" stroke="#E6A64C" strokeWidth="3" fill="none" />

            {/* --- BIBI KA MAQBARA --- */}
            {/* Dome */}
            <path d="M200 80 Q240 20 280 80 Z" fill="#E6A64C" />
            {/* Base */}
            <rect x="210" y="80" width="60" height="50" fill="#3B3F8C" />
            {/* Minarets */}
            <rect x="195" y="60" width="8" height="70" fill="#E6A64C" />
            <rect x="277" y="60" width="8" height="70" fill="#E6A64C" />

            {/* --- PANCHAKKI (Water Mill) --- */}
            <rect x="330" y="85" width="50" height="45" fill="#3B3F8C" />
            <circle cx="355" cy="100" r="12" stroke="#E6A64C" strokeWidth="3" fill="none" />
            <line x1="355" y1="88" x2="355" y2="112" stroke="#E6A64C" />
            <line x1="343" y1="100" x2="367" y2="100" stroke="#E6A64C" />

            {/* --- 52 GATES (ARCH GATE) --- */}
            <path
              d="M420 130 V80 Q460 50 500 80 V130"
              stroke="#E6A64C"
              strokeWidth="8"
              fill="none"
            />
            <rect x="445" y="95" width="30" height="35" fill="#fef3c7" />

            {/* --- KRANTI CHOWK (PILLAR MONUMENT STYLE) --- */}
            <rect x="550" y="70" width="12" height="60" fill="#3B3F8C" />
            <circle cx="556" cy="65" r="8" fill="#D32F2F" />
            <rect x="540" y="130" width="35" height="5" fill="#E6A64C" />

            {/* --- EXTRA CITY BUILDINGS (to maintain skyline continuity) --- */}
            <rect x="620" y="50" width="40" height="80" fill="#3B3F8C" />
            <rect x="680" y="80" width="50" height="50" fill="#D32F2F" />
            <rect x="750" y="40" width="30" height="90" fill="#E6A64C" />

            {/* --- TREES --- */}
            <circle cx="820" cy="110" r="15" fill="#E6A64C" />
            <rect x="818" y="115" width="4" height="15" fill="#4b5563" />

            {/* --- MODERN BUILDINGS --- */}
            <rect x="860" y="30" width="30" height="100" fill="#3B3F8C" />
            <rect x="910" y="70" width="45" height="60" fill="#D32F2F" />
            <rect x="970" y="50" width="40" height="80" fill="#E6A64C" />

            {/* --- FINAL ELEMENT --- */}
            <circle cx="1050" cy="100" r="20" fill="#3B3F8C" />
          </svg>
        ))}
      </div>
    </div>
  );
};
