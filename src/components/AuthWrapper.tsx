import React from "react";
import { BarChart2Icon } from "lucide-react";

interface AuthComponentProps {
  children: React.ReactNode;
}
export const AuthWrapper = ({ children }: AuthComponentProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center relative ">
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="smallGrid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="gray"
                strokeWidth="0.5"
              />
            </pattern>
            <pattern
              id="grid"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <rect width="100" height="100" fill="url(#smallGrid)" />
              <path
                d="M 100 0 L 0 0 0 100"
                fill="none"
                stroke="gray"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="z-10 w-full max-w-md">
        <div className=" backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="flex justify-center mb-8">
              <BarChart2Icon className="h-12 w-12" />
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
