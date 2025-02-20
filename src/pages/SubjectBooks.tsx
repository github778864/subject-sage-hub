import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Book } from "lucide-react";

const SubjectBooks = () => {
  const { id } = useParams();

  const books = [
    {
      id: "1",
      title: "Essential Mathematics",
      author: "John Smith",
      publisher: "Cambridge Press",
      year: 2023,
    },
    {
      id: "2",
      title: "Mathematics Practice Guide",
      author: "Sarah Johnson",
      publisher: "Oxford Publishing",
      year: 2022,
    },
    {
      id: "3",
      title: "Advanced Topics in Math",
      author: "David Brown",
      publisher: "Pearson Education",
      year: 2023,
    },
    {
      id: "4",
      title: "Complete Mathematics Review",
      author: "Emily Chen",
      publisher: "Academic Press",
      year: 2022,
    },
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
            <Book className="text-mint-500" size={32} strokeWidth={1.5} />
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Recommended Books</h1>
          </div>
          <p className="text-xl text-gray-600">
            Curated textbooks and study guides to support your learning journey.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="space-y-4"
        >
          {books.map((book) => (
            <div
              key={book.id}
              className="rounded-2xl bg-white/80 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
            >
              <h3 className="text-xl font-medium text-gray-900">{book.title}</h3>
              <p className="mt-1 text-gray-600">by {book.author}</p>
              <div className="mt-2 flex items-center gap-3 text-sm text-gray-500">
                <span>{book.publisher}</span>
                <span>•</span>
                <span>{book.year}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SubjectBooks;
