
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Book, FileText, NotebookPen } from "lucide-react";

const SubjectDetail = () => {
  const { id } = useParams();

  const sections = [
    {
      id: "notes",
      name: "Notes",
      icon: NotebookPen,
      description: "Access comprehensive subject notes and study materials",
      count: 24,
    },
    {
      id: "papers",
      name: "Past Papers",
      icon: FileText,
      description: "Practice with previous examination papers",
      count: 15,
    },
    {
      id: "books",
      name: "Books",
      icon: Book,
      description: "Explore recommended textbooks and study guides",
      count: 8,
    },
  ];

  // This would normally come from an API
  const subject = {
    id: "mathematics",
    name: "Mathematics",
    description: "Core mathematical concepts, algebra, geometry, and more",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-mint-50/50 via-white to-mint-50/30 px-8 py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="mb-16"
        >
          <span className="mb-3 inline-block rounded-full bg-mint-100/80 px-4 py-1.5 text-sm font-medium text-mint-700 backdrop-blur-sm">
            Subject Overview
          </span>
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-gray-900">
            {subject.name}
          </h1>
          <p className="max-w-2xl text-xl leading-relaxed text-gray-600">{subject.description}</p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Link key={section.id} to={`/subjects/${id}/${section.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="group relative overflow-hidden rounded-2xl bg-white/80 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-mint-50/20 via-mint-100/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <section.icon className="mb-4 text-mint-500" size={32} strokeWidth={1.5} />
                <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
                  {section.name}
                </h2>
                <p className="mb-4 text-gray-600">{section.description}</p>
                <span className="text-sm font-medium text-mint-600">
                  {section.count} items available
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectDetail;
