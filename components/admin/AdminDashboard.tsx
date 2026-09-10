"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  DollarSign,
  ShoppingBag,
  Clock,
  Layers,
  Users,
  MessageCircle,
  Eye,
  Plus,
  Trash2,
  Edit,
  CheckCircle2,
  ExternalLink,
  Shield,
  Search,
} from "lucide-react";
import { PRODUCTS } from "@/lib/data/products";
import { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "products" | "inquiries" | "orders"
  >("overview");

  const [productsList, setProductsList] = useState<Product[]>(PRODUCTS);
  const [newProductModal, setNewProductModal] = useState(false);

  // Mock inquiries data
  const [inquiries, setInquiries] = useState([
    {
      id: "BESPOKE-87291",
      name: "Marcus Vance",
      email: "m.vance@tribecaloft.com",
      phone: "+1 (555) 019-2834",
      sneakerCount: "100+",
      dimensions: "4.5m W x 3.2m H x 0.8m D",
      style: "Anodized Matte Obsidian",
      status: "NEW",
      date: "2026-02-28",
      requirements:
        "Full walk-in sneaker gallery inside Tribeca penthouse. Requires motorized glass cases for 24 grail pairs and integrated RGBW lighting connected to Crestron.",
    },
    {
      id: "BESPOKE-44120",
      name: "Elena Rostova",
      email: "elena@zurichdesign.ch",
      phone: "+41 44 211 4090",
      sneakerCount: "25–50",
      dimensions: "3200mm W x 2600mm H",
      style: "Brushed Gunmetal Titanium",
      status: "IN REVIEW",
      date: "2026-02-26",
      requirements:
        "Recessed wall monolith integration flush with architectural fair-faced concrete wall.",
    },
  ]);

  // Mock recent orders
  const recentOrders = [
    {
      orderNumber: "CTM-2026-X9K2L1",
      customer: "David Sterling",
      items: "HEAT 2.0 (Matte Obsidian) x 2",
      total: 3700,
      status: "PROCESSING",
      date: "2026-03-01",
    },
    {
      orderNumber: "CTM-2026-M8W3P4",
      customer: "Kenji Takahashi",
      items: "The Sneaker Trunk (Heritage Coal) x 1",
      total: 3800,
      status: "DISPATCHED",
      date: "2026-02-27",
    },
    {
      orderNumber: "CTM-2026-Z7Q5Y9",
      customer: "Sarah Jenkins",
      items: "The Tower Trunk (Stealth Carbon) x 1",
      total: 5400,
      status: "DELIVERED",
      date: "2026-02-24",
    },
  ];

  const totalRevenue = 128500;
  const totalOrders = 28;
  const pendingInquiries = inquiries.filter((i) => i.status === "NEW").length;

  const handleDeleteProduct = (id: string) => {
    setProductsList(productsList.filter((p) => p.id !== id));
  };

  return (
    <div className="w-full space-y-8">
      {/* Admin Nav Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ctm-border pb-6">
        <div>
          <span className="text-[10px] font-mono text-ctm-red tracking-widest uppercase block">
            CONTROL CENTER
          </span>
          <h1 className="text-3xl font-display font-black uppercase text-white tracking-wide">
            Studio Management Portal
          </h1>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 bg-ctm-surface border border-ctm-border p-1">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors ${
              activeTab === "overview"
                ? "bg-white text-black font-bold"
                : "text-ctm-lightMuted hover:text-white"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("products")}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors ${
              activeTab === "products"
                ? "bg-white text-black font-bold"
                : "text-ctm-lightMuted hover:text-white"
            }`}
          >
            Products ({productsList.length})
          </button>
          <button
            onClick={() => setActiveTab("inquiries")}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors ${
              activeTab === "inquiries"
                ? "bg-white text-black font-bold"
                : "text-ctm-lightMuted hover:text-white"
            }`}
          >
            Bespoke ({inquiries.length})
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors ${
              activeTab === "orders"
                ? "bg-white text-black font-bold"
                : "text-ctm-lightMuted hover:text-white"
            }`}
          >
            Orders ({recentOrders.length})
          </button>
        </div>
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === "overview" && (
        <div className="space-y-8 animate-fade-in">
          {/* Metric KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-ctm-surface border border-ctm-border space-y-2">
              <span className="text-[10px] font-mono text-ctm-muted uppercase tracking-widest block">
                Total Gross Revenue
              </span>
              <div className="text-3xl font-mono font-bold text-white">
                {formatPrice(totalRevenue)}
              </div>
              <span className="text-[11px] font-mono text-emerald-400">
                +24.5% vs previous quarter
              </span>
            </div>

            <div className="p-6 bg-ctm-surface border border-ctm-border space-y-2">
              <span className="text-[10px] font-mono text-ctm-muted uppercase tracking-widest block">
                Total Orders Dispatched
              </span>
              <div className="text-3xl font-mono font-bold text-white">
                {totalOrders}
              </div>
              <span className="text-[11px] font-mono text-ctm-lightMuted">
                100% White-Glove fulfillment
              </span>
            </div>

            <div className="p-6 bg-ctm-surface border border-ctm-border space-y-2">
              <span className="text-[10px] font-mono text-ctm-muted uppercase tracking-widest block">
                Pending Bespoke Projects
              </span>
              <div className="text-3xl font-mono font-bold text-ctm-red">
                {pendingInquiries}
              </div>
              <span className="text-[11px] font-mono text-ctm-lightMuted">
                Requires CAD consultation
              </span>
            </div>

            <div className="p-6 bg-ctm-surface border border-ctm-border space-y-2">
              <span className="text-[10px] font-mono text-ctm-muted uppercase tracking-widest block">
                Catalog Models In Stock
              </span>
              <div className="text-3xl font-mono font-bold text-white">
                {productsList.length}
              </div>
              <span className="text-[11px] font-mono text-ctm-lightMuted">
                Active production lines
              </span>
            </div>
          </div>

          {/* Recent Orders Overview */}
          <div className="bg-ctm-surface border border-ctm-border p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-display font-bold uppercase text-white tracking-wider">
                Recent Orders Feed
              </h2>
              <button
                onClick={() => setActiveTab("orders")}
                className="text-xs font-mono text-ctm-red hover:underline uppercase"
              >
                View All Manifests →
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-ctm-border text-ctm-muted uppercase text-[10px]">
                    <th className="py-3 px-4">Order Ref</th>
                    <th className="py-3 px-4">Client</th>
                    <th className="py-3 px-4">Allocated Hardware</th>
                    <th className="py-3 px-4">Total</th>
                    <th className="py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ctm-borderSubtle">
                  {recentOrders.map((ord) => (
                    <tr key={ord.orderNumber} className="hover:bg-ctm-surfaceHover">
                      <td className="py-3.5 px-4 text-white font-bold">
                        {ord.orderNumber}
                      </td>
                      <td className="py-3.5 px-4 text-ctm-lightMuted">
                        {ord.customer}
                      </td>
                      <td className="py-3.5 px-4 text-white">{ord.items}</td>
                      <td className="py-3.5 px-4 text-white font-bold">
                        {formatPrice(ord.total)}
                      </td>
                      <td className="py-3.5 px-4">
                        <span
                          className={`px-2 py-0.5 text-[10px] font-mono uppercase ${
                            ord.status === "DELIVERED"
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                              : "bg-ctm-red/10 text-ctm-red border border-ctm-red/20"
                          }`}
                        >
                          {ord.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: PRODUCTS CRUD */}
      {activeTab === "products" && (
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-ctm-muted uppercase tracking-widest">
              ACTIVE HARDWARE UNITS ({productsList.length})
            </span>
            <button
              onClick={() => setNewProductModal(true)}
              className="px-4 py-2 bg-ctm-red hover:bg-ctm-redHover text-white text-xs font-display font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>ADD NEW HARDWARE</span>
            </button>
          </div>

          <div className="bg-ctm-surface border border-ctm-border overflow-hidden">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-ctm-border text-ctm-muted uppercase text-[10px]">
                  <th className="py-3 px-4">Hardware Unit</th>
                  <th className="py-3 px-4">SKU</th>
                  <th className="py-3 px-4">Base Price</th>
                  <th className="py-3 px-4">Capacity</th>
                  <th className="py-3 px-4">Inventory</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ctm-borderSubtle">
                {productsList.map((prod) => (
                  <tr key={prod.id} className="hover:bg-ctm-surfaceHover">
                    <td className="py-4 px-4 flex items-center gap-3">
                      <div className="relative w-10 h-10 bg-black border border-ctm-border p-1 shrink-0">
                        <Image
                          src={prod.images[0]?.url || "/images/products/heat-2-main.svg"}
                          alt={prod.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <span className="font-display font-bold text-white text-sm uppercase block">
                          {prod.name}
                        </span>
                        <span className="text-[10px] text-ctm-muted">
                          {prod.collectionName}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-ctm-lightMuted">{prod.sku}</td>
                    <td className="py-4 px-4 text-white font-bold">
                      {formatPrice(prod.price)}
                    </td>
                    <td className="py-4 px-4 text-ctm-lightMuted">
                      {prod.capacity}
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-emerald-400 font-semibold">
                        {prod.inventory} units available
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right space-x-2">
                      <a
                        href={`/products/${prod.slug}`}
                        target="_blank"
                        className="p-1.5 border border-ctm-border text-ctm-muted hover:text-white inline-block"
                        title="View on site"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <button
                        onClick={() => handleDeleteProduct(prod.id)}
                        className="p-1.5 border border-ctm-border text-ctm-muted hover:text-ctm-red inline-block"
                        title="Delete product"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: BESPOKE INQUIRIES QUEUE */}
      {activeTab === "inquiries" && (
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-ctm-muted uppercase tracking-widest">
              ARCHITECTURAL ENQUIRIES ({inquiries.length})
            </span>
          </div>

          <div className="space-y-6">
            {inquiries.map((inq) => (
              <div
                key={inq.id}
                className="p-6 sm:p-8 bg-ctm-surface border border-ctm-border space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-ctm-borderSubtle">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-display font-bold text-lg text-white uppercase">
                        {inq.name}
                      </span>
                      <span className="text-xs font-mono text-ctm-red px-2 py-0.5 border border-ctm-red/30">
                        {inq.id}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-ctm-muted mt-1">
                      {inq.email} • {inq.phone}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-ctm-muted">
                      {inq.date}
                    </span>
                    <a
                      href={getWhatsAppUrl({
                        type: "bespoke",
                        referenceId: inq.id,
                        sneakerCount: inq.sneakerCount,
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 bg-ctm-surfaceHover border border-ctm-red text-white text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 hover:bg-ctm-red transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-ctm-red" />
                      <span>WhatsApp Client</span>
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono p-4 bg-black border border-ctm-borderSubtle">
                  <div>
                    <span className="text-ctm-muted block text-[10px] uppercase">
                      Sneaker Capacity
                    </span>
                    <span className="text-white font-semibold">
                      {inq.sneakerCount} Pairs
                    </span>
                  </div>
                  <div>
                    <span className="text-ctm-muted block text-[10px] uppercase">
                      Dimensions
                    </span>
                    <span className="text-white">{inq.dimensions}</span>
                  </div>
                  <div>
                    <span className="text-ctm-muted block text-[10px] uppercase">
                      Preferred Style
                    </span>
                    <span className="text-white">{inq.style}</span>
                  </div>
                  <div>
                    <span className="text-ctm-muted block text-[10px] uppercase">
                      Current Status
                    </span>
                    <span className="text-emerald-400 font-bold">{inq.status}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-ctm-muted uppercase tracking-widest block mb-1">
                    Client Spatial Requirements:
                  </span>
                  <p className="text-xs text-ctm-lightMuted font-mono leading-relaxed bg-black/40 p-3 border border-ctm-borderSubtle">
                    {inq.requirements}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: ORDERS */}
      {activeTab === "orders" && (
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-ctm-muted uppercase tracking-widest">
              DISPATCH MANIFESTS ({recentOrders.length})
            </span>
          </div>

          <div className="bg-ctm-surface border border-ctm-border p-6 space-y-4">
            {recentOrders.map((ord) => (
              <div
                key={ord.orderNumber}
                className="p-4 bg-black border border-ctm-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold">{ord.orderNumber}</span>
                    <span className="text-ctm-muted">({ord.date})</span>
                  </div>
                  <p className="text-ctm-lightMuted mt-1">Recipient: {ord.customer}</p>
                  <p className="text-ctm-muted">{ord.items}</p>
                </div>

                <div className="flex sm:flex-col items-end justify-between sm:justify-center">
                  <span className="font-mono text-sm font-bold text-white">
                    {formatPrice(ord.total)}
                  </span>
                  <span className="text-[10px] text-emerald-400 uppercase mt-1">
                    {ord.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add Product Modal (Simple Simulation) */}
      {newProductModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-ctm-surface border border-ctm-border max-w-lg w-full p-6 space-y-4">
            <h3 className="font-display font-bold uppercase text-white text-lg">
              Commission New Hardware Unit
            </h3>
            <p className="text-xs font-mono text-ctm-muted">
              Add prototype or limited batch to product registry.
            </p>
            <div className="space-y-3 text-xs font-mono">
              <input
                type="text"
                placeholder="Product Name (e.g. HEAT 3.0)"
                className="w-full bg-black border border-ctm-border p-2.5 text-white"
              />
              <input
                type="number"
                placeholder="Base Price (USD)"
                className="w-full bg-black border border-ctm-border p-2.5 text-white"
              />
              <input
                type="text"
                placeholder="SKU"
                className="w-full bg-black border border-ctm-border p-2.5 text-white"
              />
            </div>
            <div className="flex justify-end gap-3 pt-4 border-t border-ctm-borderSubtle">
              <button
                onClick={() => setNewProductModal(false)}
                className="px-4 py-2 border border-ctm-border text-xs font-mono uppercase text-ctm-muted"
              >
                Cancel
              </button>
              <button
                onClick={() => setNewProductModal(false)}
                className="px-4 py-2 bg-ctm-red text-white text-xs font-mono uppercase"
              >
                Save Hardware
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
