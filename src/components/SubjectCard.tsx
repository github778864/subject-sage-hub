
import { motion } from "framer-motion";
import { Book, FileText, NotebookPen } from "lucide-react";
import { Link } from "react-router-dom";

interface SubjectCardProps {
  subject: {
    id: string;
    name: string;
    description: string;
    notesCount: number;
    papersCount: number;
    booksCount: number;
  };
}

export const SubjectCard = ({ subject }: SubjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-xl bg-white/30 p-6 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl"
    >
      <Link to={`/subjects/${subject.id}`} className="block">
        <div className="absolute inset-0 bg-gradient-to-r from-mint-50/10 to-mint-100/10 opacity-0 transition-opacity group-hover:opacity-100" />
        
        <h3 className="mb-2 text-xl font-semibold text-gray-900">{subject.name}</h3>
        <p className="mb-4 text-sm text-gray-600">{subject.description}</p>
        
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <NotebookPen size={16} className="text-mint-500" />
            <span>{subject.notesCount} Notes</span>
          </div>
          <div className="flex items-center gap-1">
            <FileText size={16} className="text-mint-500" />
            <span>{subject.papersCount} Papers</span>
          </div>
          <div className="flex items-center gap-1">
            <Book size={16} className="text-mint-500" />
            <span>{subject.booksCount} Books</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
