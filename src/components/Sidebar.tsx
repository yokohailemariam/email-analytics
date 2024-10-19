import { useSidebarDrawState } from "@/hooks/store";
import {
  Mail,
  Users,
  BarChart2,
  Brain,
  Link,
  X,
  User,
  Menu,
} from "lucide-react";
import { Button } from "./ui/button";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebarDrawState();
  const [searchQuery, setSearchQuery] = useState("");
  const [q] = useDebounce(searchQuery, 1000);

  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const menuItems = [
    { icon: <Mail className="w-4 h-4" />, label: "Email Analysis" },
    { icon: <Users className="w-4 h-4" />, label: "Responder Profile" },
    { icon: <BarChart2 className="w-4 h-4" />, label: "Data Visualization" },
    { icon: <Brain className="w-4 h-4" />, label: "Advanced Insights" },
    { icon: <Link className="w-4 h-4" />, label: "Integrations" },
    { icon: <User className="w-4 h-4" />, label: "Profile" },
  ];

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchQuery(value);

    if (pathname !== "/search") {
      navigate(`/search`);
    }

    if (value === "") {
      navigate(`/dashboard`);
    }
  };

  useEffect(() => {
    console.log(q);
  }, [q]);

  return (
    <div className="flex h-screen bg-white">
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white text-black transform transition-transform duration-200 ease-in-out shadow-md ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex items-center justify-between p-4">
          <Button onClick={() => navigate("/dashboard")}>
            <h2 className="text-xl font-bold">Dashboard</h2>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="lg:hidden"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="mt-8 space-y-3">
          {menuItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start text-black hover:bg-black hover:text-white px-4 py-5"
            >
              {item.icon}
              <span className="ml-4">{item.label}</span>
            </Button>
          ))}
        </nav>
      </div>
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-64">
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="mr-4 lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-2xl font-bold">Email Analysis </h1>
          </div>
          <Input
            className="w-[300px]"
            placeholder="Search keywords..."
            onChange={onChangeSearch}
          />
        </header>
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
