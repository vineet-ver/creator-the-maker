import React from "react";
import { Metadata } from "next";
import { Container } from "@/ui/Container";
import { AdminDashboard } from "@/components/admin/AdminDashboard";

export const metadata: Metadata = {
  title: "Studio Administration Portal — Creator The Maker",
  description: "Internal operations dashboard for orders, bespoke requests, and hardware inventory.",
};

export default function AdminPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <Container size="wide">
        <AdminDashboard />
      </Container>
    </div>
  );
}
