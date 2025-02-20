
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, FileText } from "lucide-react";

const SubjectPapers = () => {
  const { id } = useParams();

  const papers = [
    { id: "1", title: "2023 May/June", type: "Past Paper", questions: 12 },
    { id: "2", title: "2022 Oct/Nov", type: "Past Paper", questions: 15 },
    { id: "3", title: "2022 May/June", type: "Past Paper", questions: 14 },
    { id: "4", title: "2021 Oct/Nov", type: "Past Paper", questions: 13 },
    { id: "5", title: "2021 May/June", type: "Past Paper", questions: 14 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-mint-50/50 via-white to-mint-50/30 px-8 py-16">
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
            <FileText className="text-mint-500" size={32} strokeWidth={1.5} />
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Past Papers</h1>
          </div>
          <p className="text-xl text-gray-600">
            Practice with previous examination papers to prepare for your exams.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="space-y-4"
        >
          {papers.map((paper) => (
            <div
              key={paper.id}
              className="flex items-center justify-between rounded-2xl bg-white/80 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
            >
              <div>
                <h3 className="text-xl font-medium text-gray-900">{paper.title}</h3>
                <p className="text-sm text-gray-600">{paper.questions} questions</p>
              </div>
              <span className="rounded-full bg-mint-100/80 px-4 py-1.5 text-sm font-medium text-mint-700 backdrop-blur-sm">
                {paper.type}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SubjectPapers;
