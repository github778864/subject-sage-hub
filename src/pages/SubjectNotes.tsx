import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, NotebookPen } from "lucide-react";

const SubjectNotes = () => {
  const { id } = useParams();

  const notes = [
    { id: "1", title: "Algebra Fundamentals", type: "PDF", pages: 24 },
    { id: "2", title: "Geometry Basics", type: "PDF", pages: 18 },
    { id: "3", title: "Trigonometry", type: "PDF", pages: 32 },
    { id: "4", title: "Calculus Introduction", type: "PDF", pages: 28 },
    { id: "5", title: "Statistics & Probability", type: "PDF", pages: 22 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-mint-50/50 via-white to-mint-50/30 px-8 py-16 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900/90">
      <div className="mx-auto max-w-4xl">
        <Link
          to={`/subjects/${id}`}
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
        >
          <ArrowLeft size={16} />
          Back to Overview
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="mb-12"
        >
          <div className="mb-6 flex items-center gap-3">
            <NotebookPen className="text-mint-500" size={32} strokeWidth={1.5} />
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Study Notes</h1>
          </div>
          <p className="text-xl text-gray-600">
            Comprehensive study materials to help you master each topic.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="space-y-4"
        >
          {notes.map((note) => (
            <div
              key={note.id}
              className="flex items-center justify-between rounded-2xl bg-white/80 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
            >
              <div>
                <h3 className="text-xl font-medium text-gray-900">{note.title}</h3>
                <p className="text-sm text-gray-600">{note.pages} pages</p>
              </div>
              <span className="rounded-full bg-mint-100/80 px-4 py-1.5 text-sm font-medium text-mint-700 backdrop-blur-sm">
                {note.type}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SubjectNotes;
