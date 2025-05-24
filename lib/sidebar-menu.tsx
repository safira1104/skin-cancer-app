'use client'
import {
  Home,
  Activity,
  BarChart3,
  FileSearch,
  LayoutDashboard,
  Layers,
} from "lucide-react";

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
    path: "/summary", // bisa jadi default halaman summary
    children: [
      {
        label: "7 Classes",
        path: "/summary/summary-7class",
        icon: Layers,
      },
      {
        label: "5 Classes",
        path: "/summary/summary-5class",
        icon: Layers,
      },
      {
        label: "2 Classes",
        path: "/summary/summary-2class",
        icon: Layers,
      },
      {
        label: "Split Raw Data",
        path: "/summary/split-raw-data",
        icon: Layers,
      },
      {
        label: "Split Augmented Data",
        path: "/summary/split-augmented-data",
        icon: Layers,
      },
    ],
  },
];
