import type { Metadata } from "next";
import { AdminDashboard } from "./admin-dashboard";

export const metadata: Metadata = {
  title: "MPP WebSystem Command Center",
  description: "Interaktive Demo des MPP WebSystem Command Centers.",
  robots: {
    index: false,
    follow: false
  }
};

export default function AdminPage() {
  return <AdminDashboard />;
}
