import { createHashRouter } from "react-router-dom";
import Dashboard from "@/pages/dashboard/dashboard";
import Search from "@/pages/search/Search";
import Landing from "@/pages/landing/Landing";
import Sidebar from "@/components/Sidebar";
import Auth from "@/pages/auth/auth";
import ResponderProfile from "@/pages/responder-profile/ResponderProfile";
import DataVisualization from "@/pages/data-visualization/DataVisualization";
import AdvancedInsights from "@/pages/advanced-insights/AdvancedInsights";
import Integrations from "@/pages/integrations/Integrations";
import Profile from "@/pages/profile/Profile";
import EmailStatistics from "@/pages/email-statistics/EmailStatistics";

export const router = createHashRouter([
  {
    path: "/auth",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Auth />,
  },
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/",
    element: <Sidebar />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/responder-profile",
        element: <ResponderProfile />,
      },
      {
        path: "/advanced-insights",
        element: <AdvancedInsights />,
      },
      {
        path: "/data-visualization",
        element: <DataVisualization />,
      },
      {
        path: "/email-statistics",
        element: <EmailStatistics />,
      },
      {
        path: "/integrations",
        element: <Integrations />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
