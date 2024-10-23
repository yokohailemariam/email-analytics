import { useSearchStore, useSidebarDrawState } from "@/hooks/store";
import {
  Mail,
  Users,
  BarChart2,
  Brain,
  Link,
  X,
  User,
  Menu,
  LayoutDashboard,
} from "lucide-react";
import { Button } from "./ui/button";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import { useDebouncedCallback } from "use-debounce";
import Logo from "../assets/logo.svg";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const { q, setQ } = useSearchStore();
  const { isOpen, toggleSidebar } = useSidebarDrawState();

  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const menuItems = [
    {
      icon: <LayoutDashboard className="w-4 h-4" />,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: <Mail className="w-4 h-4" />,
      label: "Email Statistics",
      href: "/email-statistics",
    },
    {
      icon: <Users className="w-4 h-4" />,
      label: "Responder Profile",
      href: "/responder-profile",
    },
    {
      icon: <BarChart2 className="w-4 h-4" />,
      label: "Data Visualization",
      href: "/data-visualization",
    },
    {
      icon: <Brain className="w-4 h-4" />,
      label: "Advanced Insights",
      href: "/advanced-insights",
    },
    {
      icon: <Link className="w-4 h-4" />,
      label: "Integrations",
      href: "/integrations",
    },
    { icon: <User className="w-4 h-4" />, label: "Profile", href: "/profile" },
  ];

  const onChangeSearch = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      setQ(value);

      if (pathname !== "/search") {
        navigate(`/search`);
      }

      if (value === "") {
        navigate(`/dashboard`);
      }
    },
    1000
  );

  return (
    <div className="flex h-screen bg-white">
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-primary-foreground text-black transform transition-transform duration-200 ease-in-out shadow-md ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex items-center justify-between py-[1.03rem]">
          <img src={Logo} className="px-2 max-w-[14rem]" />

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
              className={cn(
                "w-full justify-start text-black  hover:bg-primary  hover:text-white px-4 py-5",
                item.href === pathname && "bg-primary text-white",
                "hover:cursor-pointer"
              )}
              onClick={() => navigate(item.href)}
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
            <h1 className="text-2xl font-bold">{headerTitle(pathname)}</h1>
          </div>
          <Input
            className="w-[300px]"
            placeholder="Search keywords..."
            onChange={onChangeSearch}
            defaultValue={q}
          />
        </header>
        <div className="overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

const headerTitle = (pathname: string) => {
  switch (pathname) {
    case "/dashboard":
      return "Dashboard";
    case "/email-statistics":
      return "Email Statistics";
    case "/responder-profile":
      return "Responder Profile";
    case "/data-visualization":
      return "Data Visualization";
    case "/advanced-insights":
      return "Advanced Insights";
    case "/integrations":
      return "Integrations";
    case "/profile":
      return "Profile";
    case "/search":
      return "Search";
    default:
      return "Dashboard";
  }
};
