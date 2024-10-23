import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

interface EmailSyncLoaderProps {
  isLoading: boolean;
}
export const EmailSyncLoader = ({ isLoading }: EmailSyncLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initiating analysis...");
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === 99 && isLoading) {
          setStatusText("Finalizing analysis...");
          return 99;
        }
        if (prevProgress >= 100) {
          clearInterval(interval);
          setStatusText("Analysis complete!");
          return 100;
        }
        // Update status text based on progress
        if (prevProgress > 75) {
          setStatusText("Generating insights...");
        } else if (prevProgress > 50) {
          setStatusText("Processing email content...");
        } else if (prevProgress > 25) {
          setStatusText("Categorizing emails...");
        }
        return prevProgress + 1;
      });
    }, 100);

    if (!isLoading) {
      navigate("/dashboard");
    }

    return () => clearInterval(interval);
  }, [isLoading, navigate]);

  const dataPointVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    }),
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-md">
        <img src={Logo} className="py-3" />
        <div className="relative h-48 bg-gray-100 rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1/2 h-1/2 border-4 border-[#4b90e2] rounded-full" />
          </div>
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-[#4b90e2] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              variants={dataPointVariants}
              initial="initial"
              animate="animate"
              custom={i}
            />
          ))}
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-[#4b90e2] h-1"
            style={{ width: `${progress}%` }}
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="mt-4 text-center">
          <motion.div
            className="text-2xl font-bold text-[#4b90e2]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {`${Math.round(progress)}%`}
          </motion.div>
          <motion.div
            className="mt-2 text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {statusText}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
