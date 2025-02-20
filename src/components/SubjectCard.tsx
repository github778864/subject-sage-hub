
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
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="group relative overflow-hidden rounded-2xl bg-white/80 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:bg-gray-800/50 dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]"
    >
      <Link to={`/subjects/${subject.id}`} className="block">
        <div className="absolute inset-0 bg-gradient-to-br from-mint-50/20 via-mint-100/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-mint-900/20 dark:via-mint-800/10" />
        
        <h3 className="mb-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {subject.name}
        </h3>
        <p className="mb-6 text-base leading-relaxed text-gray-600 dark:text-gray-300">
          {subject.description}
        </p>
        
        <div className="flex items-center gap-6 text-sm font-medium text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <NotebookPen size={18} className="text-mint-500 dark:text-mint-400" strokeWidth={1.5} />
            <span>{subject.notesCount} Notes</span>
          </div>
          <div className="flex items-center gap-2">
            <FileText size={18} className="text-mint-500 dark:text-mint-400" strokeWidth={1.5} />
            <span>{subject.papersCount} Papers</span>
          </div>
          <div className="flex items-center gap-2">
            <Book size={18} className="text-mint-500 dark:text-mint-400" strokeWidth={1.5} />
            <span>{subject.booksCount} Books</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
