import React, { useMemo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
  ZoomableGroup
} from "react-simple-maps";
import { motion } from "framer-motion";

// 1. Geography JSON (Standard World Map)
const geoUrl =
  "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

// 2. Ketani's Hubs (Based on your Profile)
const markers = [
  { name: "Zimbabwe (HQ)", coordinates: [29.1549, -19.0154], type: "hq" },
  { name: "Durban (Port)", coordinates: [31.0218, -29.8587], type: "port" },
  { name: "Beira (Port)", coordinates: [34.8389, -19.8436], type: "port" },
  { name: "Shanghai (China)", coordinates: [121.4737, 31.2304], type: "dest" },
  { name: "Rotterdam (EU)", coordinates: [4.47917, 51.9225], type: "dest" },
  { name: "Houston (USA)", coordinates: [-95.3698, 29.7604], type: "dest" },
];

// 3. Logistics Routes (Curved Lines)
const routes = [
  { from: [31.0218, -29.8587], to: [121.4737, 31.2304] }, // Durban -> China
  { from: [34.8389, -19.8436], to: [4.47917, 51.9225] },  // Beira -> Europe
  { from: [31.0218, -29.8587], to: [-95.3698, 29.7604] }, // Durban -> USA
];

const MapChart = () => {
  return (
    <div className="w-full h-[800px] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 relative">
      
      {/* Title Overlay */}
      <div className="absolute top-8 left-8 z-10 pointer-events-none">
        <h3 className="text-white text-2xl font-bold">Global Operations</h3>
        <p className="text-ketani-400">Live Logistics Corridors</p>
      </div>

      <ComposableMap projection="geoMercator" projectionConfig={{ scale: 140 }}>
        <ZoomableGroup center={[20, 0]} zoom={1} minZoom={1} maxZoom={4}>
          
          {/* A. The World Map Layer */}
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                // Highlight Southern Africa specifically
                const isSouthernAfrica = ["Zimbabwe", "South Africa", "Mozambique", "Zambia", "Namibia", "Botswana"].includes(geo.properties.name);
                
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isSouthernAfrica ? "#0ea5e9" : "#1e293b"} // Ketani Blue for home, Slate for world
                    stroke="#0f172a"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "#38bdf8", outline: "none", cursor: "pointer" },
                      pressed: { fill: "#0284c7", outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>

          {/* B. The Trade Routes (Animated Lines) */}
          {routes.map((route, index) => (
            <React.Fragment key={index}>
                {/* The Route Line */}
                <Line
                    from={route.from}
                    to={route.to}
                    stroke="#0ea5e9"
                    strokeWidth={2}
                    strokeOpacity={0.3}
                    strokeLinecap="round"
                />
                {/* The Moving Particle (Animation) */}
                <motion.circle
                    r={3}
                    fill="#fff"
                    initial={{ pathLength: 0 }}
                >
                    <animateMotion
                        dur={`${3 + index}s`}
                        repeatCount="indefinite"
                        path={`M${route.from.join(",")} L${route.to.join(",")}`} // Simplified path for demo logic
                        // Note: For true curves in SVG we usually calculate the bezier, 
                        // but react-simple-maps handles coords differently. 
                        // For visual simplicity here, we use the Line component visual.
                    />
                </motion.circle>
            </React.Fragment>
          ))}

          {/* C. The Cities/Markers */}
          {markers.map(({ name, coordinates, type }) => (
            <Marker key={name} coordinates={coordinates}>
              <g className="cursor-pointer group">
                {type === "hq" ? (
                    // HQ Marker (Pulsing Star)
                    <>
                        <circle r={8} fill="#f59e0b" className="opacity-50 animate-ping" />
                        <circle r={4} fill="#f59e0b" />
                    </>
                ) : (
                    // Standard Port/Dest Marker
                    <>
                        <circle r={6} fill="#0ea5e9" className="opacity-50 group-hover:animate-ping" />
                        <circle r={3} fill="#fff" />
                    </>
                )}
                
                {/* Tooltip Label */}
                <text
                  textAnchor="middle"
                  y={-15}
                  className="font-sans text-[8px] fill-white opacity-0 group-hover:opacity-100 transition-opacity font-bold bg-black"
                  style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.8)"}}
                >
                  {name}
                </text>
              </g>
            </Marker>
          ))}

        </ZoomableGroup>
      </ComposableMap>
      
      {/* Legend */}
      <div className="absolute bottom-6 right-6 bg-slate-800/80 backdrop-blur p-4 rounded-xl border border-slate-700 text-xs text-white">
        <div className="flex items-center gap-2 mb-2">
            <span className="w-3 h-3 rounded-full bg-amber-500"></span> Headquarters (Harare)
        </div>
        <div className="flex items-center gap-2 mb-2">
            <span className="w-3 h-3 rounded-full bg-ketani-500"></span> Strategic Hubs
        </div>
        <div className="flex items-center gap-2">
            <span className="w-6 h-0.5 bg-ketani-500/50"></span> Trade Routes
        </div>
      </div>
    </div>
  );
};

export default MapChart;