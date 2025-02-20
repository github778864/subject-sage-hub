
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Book, FileText, NotebookPen } from "lucide-react";

const SubjectDetail = () => {
  const { id } = useParams();

  // This would normally come from an API
  const subject = {
    id: "mathematics",
    name: "Mathematics",
    description: "Core mathematical concepts, algebra, geometry, and more",
    sections: {
      notes: [
        { id: "1", title: "Algebra Fundamentals", type: "PDF" },
        { id: "2", title: "Geometry Basics", type: "PDF" },
        { id: "3", title: "Trigonometry", type: "PDF" },
      ],
      papers: [
        { id: "1", title: "2023 May/June", type: "Past Paper" },
        { id: "2", title: "2022 Oct/Nov", type: "Past Paper" },
        { id: "3", title: "2022 May/June", type: "Past Paper" },
      ],
      books: [
        { id: "1", title: "Essential Mathematics", author: "John Smith" },
        { id: "2", title: "Mathematics Practice Guide", author: "Sarah Johnson" },
        { id: "3", title: "Advanced Topics in Math", author: "David Brown" },
      ],
    },
  };

  const Section = ({ title, icon: Icon, children }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="overflow-hidden rounded-2xl bg-white/80 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl"
    >
      <div className="mb-6 flex items-center gap-3">
        <Icon className="text-mint-500" size={24} strokeWidth={1.5} />
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">{title}</h2>
      </div>
      {children}
    </motion.div>
  );

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

        <div className="grid gap-8 lg:grid-cols-2">
          <Section title="Notes" icon={NotebookPen}>
            <ul className="space-y-3">
              {subject.sections.notes.map((note) => (
                <li
                  key={note.id}
                  className="flex items-center justify-between rounded-xl bg-mint-50/50 p-4 transition-all duration-300 hover:bg-mint-50/80"
                >
                  <span className="font-medium text-gray-900">{note.title}</span>
                  <span className="rounded-full bg-mint-100/80 px-4 py-1 text-sm font-medium text-mint-700 backdrop-blur-sm">
                    {note.type}
                  </span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Past Papers" icon={FileText}>
            <ul className="space-y-3">
              {subject.sections.papers.map((paper) => (
                <li
                  key={paper.id}
                  className="flex items-center justify-between rounded-xl bg-mint-50/50 p-4 transition-all duration-300 hover:bg-mint-50/80"
                >
                  <span className="font-medium text-gray-900">{paper.title}</span>
                  <span className="rounded-full bg-mint-100/80 px-4 py-1 text-sm font-medium text-mint-700 backdrop-blur-sm">
                    {paper.type}
                  </span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Recommended Books" icon={Book}>
            <ul className="space-y-3">
              {subject.sections.books.map((book) => (
                <li
                  key={book.id}
                  className="rounded-xl bg-mint-50/50 p-4 transition-all duration-300 hover:bg-mint-50/80"
                >
                  <div className="font-medium text-gray-900">{book.title}</div>
                  <div className="mt-1 text-sm text-gray-600">by {book.author}</div>
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default SubjectDetail;
