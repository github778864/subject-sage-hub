
import { useState } from "react";
import { motion } from "framer-motion";
import { SubjectCard } from "@/components/SubjectCard";

const subjects = [
  {
    id: "mathematics",
    name: "Mathematics",
    description: "Core mathematical concepts, algebra, geometry, and more",
    notesCount: 24,
    papersCount: 15,
    booksCount: 8,
  },
  {
    id: "physics",
    name: "Physics",
    description: "Mechanics, electricity, magnetism, and modern physics",
    notesCount: 18,
    papersCount: 12,
    booksCount: 6,
  },
  {
    id: "chemistry",
    name: "Chemistry",
    description: "Organic, inorganic chemistry and chemical bonding",
    notesCount: 20,
    papersCount: 14,
    booksCount: 7,
  },
  {
    id: "biology",
    name: "Biology",
    description: "Cell biology, genetics, ecology, and human biology",
    notesCount: 22,
    papersCount: 13,
    booksCount: 5,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mint-50/50 via-white to-mint-50/30 px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="mx-auto max-w-6xl"
      >
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full bg-mint-100/80 px-4 py-1.5 text-sm font-medium text-mint-700 backdrop-blur-sm">
            O-Level Resources
          </span>
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your Gateway to<br />Academic Excellence
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-600">
            Access comprehensive study materials, past papers, and recommended books for O-Level subjects.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
