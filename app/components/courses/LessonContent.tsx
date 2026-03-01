'use client';

import React from 'react';
import { Download, ExternalLink, FileText } from 'lucide-react';

export interface Resource {
  title: string;
  url: string;
  type: 'pdf' | 'link' | 'file';
}

interface LessonContentProps {
  title: string;
  body: string;
  resources?: Resource[];
}

const LessonContent: React.FC<LessonContentProps> = ({ title, body, resources = [] }) => {
  return (
    <div className="prose prose-sm max-w-none">
      <h2 className="text-2xl font-bold text-base-content mb-4 not-prose">{title}</h2>

      {/* Body rendered as paragraphs */}
      <div className="space-y-4">
        {body.split('\n\n').map((para, i) => (
          <p key={i} className="text-sm text-base-content/75 leading-7">
            {para}
          </p>
        ))}
      </div>

      {/* Resources */}
      {resources.length > 0 && (
        <div className="mt-8 not-prose">
          <h3 className="text-sm font-bold text-base-content uppercase tracking-wider mb-3">
            Lesson Resources
          </h3>
          <ul className="space-y-2">
            {resources.map((r, i) => (
              <li key={i}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-base-content/10 bg-base-100 hover:border-primary/30 hover:bg-primary/5 transition-all group"
                >
                  {r.type === 'pdf' ? (
                    <FileText className="h-4 w-4 text-rose-500 flex-shrink-0" />
                  ) : r.type === 'file' ? (
                    <Download className="h-4 w-4 text-primary/70 flex-shrink-0" />
                  ) : (
                    <ExternalLink className="h-4 w-4 text-secondary/70 flex-shrink-0" />
                  )}
                  <span className="text-sm font-medium text-base-content/70 group-hover:text-primary transition-colors flex-1">
                    {r.title}
                  </span>
                  {r.type !== 'link' && (
                    <Download className="h-3.5 w-3.5 text-base-content/30 group-hover:text-primary transition-colors" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LessonContent;
