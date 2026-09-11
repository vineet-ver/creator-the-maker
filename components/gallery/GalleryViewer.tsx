"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Maximize2, MapPin, Layers, Clock, ShieldCheck } from "lucide-react";
import { GALLERY_PROJECTS } from "@/lib/data/gallery";
import { GalleryItem } from "@/lib/types";
import { Badge } from "@/ui/Badge";

export function GalleryViewer() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<GalleryItem | null>(null);

  const categories = [
    "All",
    "Sneaker Rooms",
    "Trunks",
    "Wall Storage",
    "Custom Projects",
    "Installations",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? GALLERY_PROJECTS
      : GALLERY_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-xs font-mono tracking-widest uppercase px-4 py-2 border transition-all ${
              selectedCategory === cat
                ? "bg-black text-white border-black font-bold shadow-sm"
                : "bg-white text-black border-ctm-border hover:border-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry / Editorial Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveProject(project)}
            className="group relative bg-white border border-ctm-border hover:border-black transition-all duration-500 overflow-hidden cursor-pointer flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-black/5"
          >
            {/* Image Stage */}
            <div className="relative w-full h-80 overflow-hidden bg-ctm-surfaceSubtle/30 flex items-center justify-center">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

              {/* Hover Indicator */}
              <div className="absolute top-4 right-4 p-2 bg-white/90 border border-ctm-border text-black opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                <Maximize2 className="w-4 h-4 text-ctm-red" />
              </div>

              <div className="absolute bottom-4 left-4">
                <Badge variant="red">{project.category}</Badge>
              </div>
            </div>

            {/* Info Card */}
            <div className="p-6 space-y-3 bg-white border-t border-ctm-border">
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-display font-black uppercase tracking-wide text-black group-hover:text-ctm-red transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs font-mono text-ctm-muted">
                  {project.year}
                </span>
              </div>

              <div className="flex items-center gap-1 text-xs font-mono text-ctm-lightMuted">
                <MapPin className="w-3.5 h-3.5 text-ctm-red shrink-0" />
                <span>{project.location}</span>
              </div>

              <p className="text-xs text-ctm-muted line-clamp-2 leading-relaxed font-normal">
                {project.solution}
              </p>

              <div className="pt-3 border-t border-ctm-border flex items-center justify-between text-[11px] font-mono text-black font-semibold">
                <span>Capacity: {project.collectionSize}</span>
                <span className="text-ctm-red uppercase font-bold flex items-center gap-1">
                  Inspect Project →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Project Detail Lightbox Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-[150] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="w-full max-w-4xl max-h-[90vh] bg-white border border-ctm-border overflow-y-auto shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-ctm-border flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-ctm-red tracking-widest uppercase font-bold">
                  COMPLETED ARCHITECTURAL INSTALLATION
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-black uppercase text-black tracking-wide mt-1">
                  {activeProject.title}
                </h2>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="p-2 text-black hover:bg-ctm-surfaceSubtle border border-ctm-border"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Media Stage */}
            <div className="relative w-full h-80 sm:h-[420px] bg-black border-b border-ctm-border">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-ctm-surfaceSubtle border border-ctm-border text-xs font-mono">
                <div>
                  <span className="text-ctm-muted block text-[10px] uppercase font-bold">
                    Location
                  </span>
                  <span className="text-black font-bold">{activeProject.location}</span>
                </div>
                <div>
                  <span className="text-ctm-muted block text-[10px] uppercase font-bold">
                    Collection Scale
                  </span>
                  <span className="text-black font-bold">{activeProject.collectionSize}</span>
                </div>
                <div>
                  <span className="text-ctm-muted block text-[10px] uppercase font-bold">
                    Finish Specification
                  </span>
                  <span className="text-black font-bold">{activeProject.specs.finish}</span>
                </div>
                <div>
                  <span className="text-ctm-muted block text-[10px] uppercase font-bold">
                    Build Cycle
                  </span>
                  <span className="text-black font-bold">{activeProject.specs.installationTime}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-black font-bold mb-2">
                  PROJECT SPECIFICATIONS & ARCHITECTURAL BRIEF
                </h4>
                <p className="text-sm text-ctm-lightMuted leading-relaxed">
                  {activeProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-black font-bold mb-2">
                  ENGINEERED SOLUTION
                </h4>
                <p className="text-sm text-black font-mono bg-ctm-surfaceSubtle p-4 border border-ctm-border">
                  {activeProject.solution}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
