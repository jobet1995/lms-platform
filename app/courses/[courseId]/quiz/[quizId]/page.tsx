'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

import QuizProgress from '../../../../components/courses/QuizProgress';
import QuizQuestionComponent, { QuizQuestionData, QuizOption } from '../../../../components/courses/QuizQuestion';
import QuizResults from '../../../../components/courses/QuizResults';

// ─── Mock Quiz Data ───────────────────────────────────────────────────────────

const QUIZ_DATA: QuizQuestionData[] = [
  {
    id: 'q1',
    prompt: 'What is the default rendering mode for components in the Next.js 14 App Router?',
    options: [
      { id: 'a', text: 'Client-Side Rendering (CSR)' },
      { id: 'b', text: 'Server-Side Rendering (SSR) on every request' },
      { id: 'c', text: 'Server Components — rendered on the server by default' },
      { id: 'd', text: 'Static Site Generation (SSG)' },
    ],
    correctId: 'c',
  },
  {
    id: 'q2',
    prompt: 'Which directive makes a Next.js component opt into client-side interactivity?',
    options: [
      { id: 'a', text: '"use server"' },
      { id: 'b', text: '"use client"' },
      { id: 'c', text: 'import "client"' },
      { id: 'd', text: 'export default ClientComponent' },
    ],
    correctId: 'b',
  },
  {
    id: 'q3',
    prompt: 'Where should you place the `loading.tsx` file to add a loading UI for a route segment?',
    options: [
      { id: 'a', text: 'In the root /public directory' },
      { id: 'b', text: 'In the same folder as the `page.tsx` it covers' },
      { id: 'c', text: 'In /app/components/loading.tsx' },
      { id: 'd', text: 'In next.config.ts' },
    ],
    correctId: 'b',
  },
  {
    id: 'q4',
    prompt: 'Which caching strategy serves pre-rendered pages but regenerates them in the background after a time interval?',
    options: [
      { id: 'a', text: 'Client-Side Fetching' },
      { id: 'b', text: 'Full Route Cache' },
      { id: 'c', text: 'Incremental Static Regeneration (ISR)' },
      { id: 'd', text: 'Partial Pre-rendering (PPR)' },
    ],
    correctId: 'c',
  },
  {
    id: 'q5',
    prompt: 'Server Actions in Next.js 14 allow you to run server-side code by calling a function from:',
    options: [
      { id: 'a', text: 'An API route handler only' },
      { id: 'b', text: 'A form action or an event handler in a Client Component' },
      { id: 'c', text: 'Only other Server Components' },
      { id: 'd', text: 'getServerSideProps exclusively' },
    ],
    correctId: 'b',
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function QuizPage({
  params,
}: {
  params: Promise<{ courseId: string; quizId: string }>;
}) {
  const { courseId } = use(params);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers]   = useState<Record<string, string>>({});
  const [revealed, setRevealed] = useState(false);
  const [finished, setFinished] = useState(false);

  const question = QUIZ_DATA[currentIndex];
  const selectedId = answers[question?.id] ?? null;
  const score = Object.entries(answers).filter(([qid, aid]) => {
    const q = QUIZ_DATA.find((q) => q.id === qid);
    return q?.correctId === aid;
  }).length;

  const handleSelect = (id: string) => {
    setAnswers((prev) => ({ ...prev, [question.id]: id }));
  };

  const handleNext = () => {
    setRevealed(false);
    if (currentIndex < QUIZ_DATA.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setFinished(true);
    }
  };

  const handleRetry = () => {
    setAnswers({});
    setCurrentIndex(0);
    setRevealed(false);
    setFinished(false);
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-base-100">
      {/* Top bar */}
      <div className="sticky top-20 z-20 border-b border-base-content/10 bg-base-100/90 backdrop-blur-md">
        <div className="container mx-auto px-6 sm:px-10 lg:px-16 py-3 flex items-center justify-between gap-4">
          <Link
            href={`/courses/${courseId}`}
            className="flex items-center gap-2 text-sm font-medium text-base-content/50 hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Course
          </Link>
          <span className="text-sm font-bold text-base-content/70">Knowledge Check</span>
          <div />
        </div>
      </div>

      <main className="container mx-auto px-6 sm:px-10 lg:px-16 py-10 max-w-3xl">
        {!finished ? (
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-2xl font-extrabold text-base-content mb-1">Quiz</h1>
              <p className="text-sm text-base-content/50">
                Answer all questions. Pass score: 70%
              </p>
            </div>

            {/* Progress */}
            <QuizProgress
              current={currentIndex + 1}
              total={QUIZ_DATA.length}
              score={score}
            />

            {/* Question card */}
            <QuizQuestionComponent
              question={question}
              questionNumber={currentIndex + 1}
              selectedId={selectedId}
              revealed={revealed}
              onSelect={handleSelect}
            />

            {/* Action area */}
            <div className="flex items-center justify-between">
              {/* Reveal / explanation */}
              {revealed && (
                <p className={`text-sm font-medium ${
                  selectedId === question.correctId ? 'text-emerald-600' : 'text-rose-600'
                }`}>
                  {selectedId === question.correctId
                    ? '✓ Correct!'
                    : `✗ The correct answer was: "${question.options.find((o: QuizOption) => o.id === question.correctId)?.text}"`}
                </p>
              )}
              {!revealed && <div />}

              <div className="flex gap-3 ml-auto">
                {!revealed && selectedId && (
                  <button
                    onClick={() => setRevealed(true)}
                    className="px-5 py-2.5 rounded-xl border border-base-content/15 text-sm font-semibold text-base-content/70 hover:border-primary/30 hover:text-primary transition-all"
                  >
                    Check Answer
                  </button>
                )}
                {revealed && (
                  <button
                    onClick={handleNext}
                    className="px-6 py-2.5 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-focus transition-all shadow-lg shadow-primary/20"
                  >
                    {currentIndex < QUIZ_DATA.length - 1 ? 'Next Question →' : 'See Results'}
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <QuizResults
            score={score}
            total={QUIZ_DATA.length}
            courseId={courseId}
            nextLessonId="lesson-8"
            onRetry={handleRetry}
          />
        )}
      </main>
    </div>
  );
}
