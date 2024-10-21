import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { BaseUrl } from "@/lib/utils";
import Gmail from "../assets/gmail.svg";

const GoogleLogin = () => {
  const [authState, setAuthState] = useState<"login" | "register">("login");
  const [isHovered, setIsHovered] = useState(false);

  const handleGoogleLogin = () => {
    window.location.href = `${BaseUrl}/authorize`;
  };

  const handleGoogleRegister = () => {
    window.location.href = `${BaseUrl}/authorize`;
  };

  return (
    <div>
      <Card className="relative w-[400px] p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500">
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="relative">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full flex items-center justify-center"
                >
                  <img src={Gmail} className="size-10" />
                </motion.div>
                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl animate-pulse" />
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.h2
                key={authState}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
              >
                {authState === "login"
                  ? "Login to Email Analysis"
                  : "Register for Email Analysis"}
              </motion.h2>
            </AnimatePresence>
          </div>

          <div className="text-center">
            <span className="text-gray-500">
              {authState === "login"
                ? "Don't have an account?"
                : "Already have an Email Analysis account?"}{" "}
            </span>
            <Button
              variant="link"
              onClick={() =>
                setAuthState(authState === "login" ? "register" : "login")
              }
              className="p-0 text-blue-600 hover:text-blue-700 font-medium"
            >
              {authState === "login" ? "Register" : "Login"}
            </Button>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={
                authState === "login" ? handleGoogleLogin : handleGoogleRegister
              }
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="w-full relative group bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 shadow-sm h-14"
            >
              <div className="flex items-center justify-center gap-3">
                <motion.div
                  animate={{ rotate: isHovered ? 360 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={Gmail} className="size-6" />
                </motion.div>
                <span className="font-medium">
                  {authState === "login"
                    ? "Login with Google"
                    : "Continue with Google"}
                </span>
              </div>
            </Button>
          </motion.div>
        </div>
      </Card>
    </div>
  );
};

export default GoogleLogin;
