"use client";

import { useRef } from "react";
import { PDFPage1 } from "./pdf/page1";
import { PDFPage2 } from "./pdf/page2";
import { PDFPage3 } from "./pdf/page3";
import { PDFPage4 } from "./pdf/page4";
import { PDFPage5 } from "./pdf/page5";
import { FormData } from "./itinerary";

// interface FormData {
//   tripOverview: Record<string, string | number>;
//   days: Array<Record<string, string>>;
//   flights: Array<Record<string, string>>;
//   hotels: Array<Record<string, string>>;
//   payment: Record<string, string | number>;
//   inclusions: { included: string[]; excluded: string[] };
// }

interface PDFPreviewProps {
  data: FormData | null;
  onBack: () => void;
}

const PDFPreview = ({ data, onBack }: PDFPreviewProps) => {
  const pdfRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = () => {
    if (!pdfRef.current) return;

    window.print();
  };

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-100 py-8 px-4 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">No data available</p>
          <button
            onClick={onBack}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition-colors"
          >
            Back to Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 flex flex-col items-center justify-center print:bg-white">
      {/* Header Controls */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-8 print:hidden">
        <button
          onClick={onBack}
          className="px-6 py-3 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition-all"
        >
          Back to Form
        </button>

        <h1 className="text-2xl font-bold text-gray-900">PDF Preview</h1>

        <button
          onClick={handleDownloadPDF}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
        >
          Download PDF
        </button>
      </div>

      {/* PDF Pages */}
      <div
        ref={pdfRef}
        className="bg-white w-[764px] min-h-[1100px] mx-auto shadow-lg print:shadow-none print:w-full print:min-h-0"
      >
        <div className="page-break">
          <PDFPage1 data={data} />
        </div>
        <div className="page-break">
          <PDFPage2 data={data} />
        </div>
        <div className="page-break">
          <PDFPage3 data={data} />
        </div>
        <div className="page-break">
          <PDFPage4 data={data} />
        </div>
        <div className="page-break">
          <PDFPage5 data={data} />
        </div>
      </div>

      {/* CSS fix for blank page issue */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 0; /* Remove browser default margins */
          }

          html,
          body {
            margin: 0 !important;
            padding: 0 !important;
            height: auto !important;
            background: white !important;
          }

          .print\\:hidden {
            display: none !important;
          }

          .page-break {
            page-break-after: always;
            break-after: page;
            margin: 0;
            padding: 0;
          }

          .page-break:last-child {
            page-break-after: auto;
          }

          /* Avoid extra blank first page by ensuring top element starts at 0 */
          #__next,
          div[data-nextjs-scroll-focus-boundary],
          .min-h-screen {
            margin: 0 !important;
            padding: 0 !important;
          }

          /* Avoid double shadows or scaling */
          .shadow-lg {
            box-shadow: none !important;
          }
        }

        /* Screen styling (non-print) */
        @media screen {
          .page-break {
            margin-bottom: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 4px;
          }
        }
      `}</style>
    </div>
  );
};

export { PDFPreview };
