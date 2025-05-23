'use client';

import {
  Home,
  Activity,
  BarChart3,
  FileSearch,
  LayoutDashboard,
} from "lucide-react";
import { SummaryMenu } from "../lib/summary-menu";



export const SidebarMenu = [
  {
    label: "Home",
    path: "/",
    icon: Home,
  },
  {
    label: "Prediction",
    path: "/predict",
    icon: Activity,
  },
  {
    label: "Data Distribution",
    path: "/distribution",
    icon: BarChart3,
  },
  {
    label: "Testing Result",
    path: "/testing-result",
    icon: FileSearch,
  },
  {
    label: "Summary",
    icon: LayoutDashboard,
    path: "/summary",
    children: SummaryMenu,  // pakai children dari file lain
  },
];
