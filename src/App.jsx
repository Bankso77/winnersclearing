import React from "react";
import { FcGoogle } from "react-icons/fc";
import { SiMicrosoftoutlook, SiYahoo, SiMicrosoft, SiAol } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import "./style.css";

export default function App() {
  const providers = [
    { name: "Gmail", icon: <FcGoogle size={20} /> },
    { name: "Outlook", icon: <SiMicrosoftoutlook size={20} color="#0078D4" /> },
    { name: "Yahoo Mail", icon: <SiYahoo size={20} color="#720E9E" /> },
    { name: "Microsoft", icon: <SiMicrosoft size={20} color="#2F2F2F" /> },
    { name: "Aol", icon: <SiAol size={20} color="#2F2F2F" /> },
    { name: "Other Email", icon: <MdEmail size={20} color="#555" /> },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500 p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 text-white text-center">
          <h1 className="text-2xl font-bold">Welcome Members!!</h1>
        </div>
        {/* Body */}
        <div className="p-8">
          <p className="text-center text-gray-500 mb-6">
            Select your email provider to continue
          </p>
          <div className="grid grid-cols-2 gap-4">
            {providers.map((provider, i) => (
              <button
                key={i}
                className="flex items-center gap-2 border border-gray-200 rounded-lg py-2 px-4 hover:shadow-md hover:bg-gray-50 transition"
              >
                {provider.icon}
                <span className="font-medium">{provider.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
