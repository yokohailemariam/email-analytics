import { Mail } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Mail size={64} className="animate-pulse" />
    </div>
  );
};

export default Loading;
