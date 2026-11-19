import React from 'react';
import { Question, QuestionDiagram } from '../types';

interface QuestionVisualProps {
  question: Pick<Question, 'imageUrl' | 'imageAlt' | 'imageCaption' | 'diagram' | 'topic'>;
  compact?: boolean;
}

/**
 * Diagram SVG Kubus Satuan (Blok Dienes: Ratusan, Puluhan, Satuan)
 * Akurat 100% secara matematis untuk materi Bilangan Cacah hingga 1000
 */
const KubusSatuanDiagram: React.FC<{ ratusan: number; puluhan: number; satuan: number }> = ({
  ratusan,
  puluhan,
  satuan,
}) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[320px] flex flex-wrap items-end justify-center gap-4 sm:gap-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
        {/* Blok Ratusan (10x10) */}
        {ratusan > 0 && (
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-wrap items-end justify-center gap-2 max-w-[260px]">
              {Array.from({ length: ratusan }).map((_, idx) => (
                <svg
                  key={`r-${idx}`}
                  width="56"
                  height="56"
                  viewBox="0 0 100 100"
                  className="drop-shadow-2xs shrink-0"
                  aria-label="1 blok ratusan (100 kubus)"
                >
                  <rect
                    x="2"
                    y="2"
                    width="96"
                    height="96"
                    rx="4"
                    fill="#3b82f6"
                    stroke="#1d4ed8"
                    strokeWidth="2.5"
                  />
                  {Array.from({ length: 9 }).map((__, lineIdx) => {
                    const pos = 2 + ((lineIdx + 1) * 96) / 10;
                    return (
                      <React.Fragment key={lineIdx}>
                        <line x1={pos} y1="2" x2={pos} y2="98" stroke="#93c5fd" strokeWidth="1" />
                        <line x1="2" y1={pos} x2="98" y2={pos} stroke="#93c5fd" strokeWidth="1" />
                      </React.Fragment>
                    );
                  })}
                </svg>
              ))}
            </div>
            <span className="text-[11px] font-bold text-blue-800 bg-blue-100 px-2.5 py-0.5 rounded-full">
              {ratusan} Ratusan (100-an)
            </span>
          </div>
        )}

        {/* Blok Puluhan (1x10) */}
        {puluhan > 0 && (
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-end justify-center gap-1.5">
              {Array.from({ length: puluhan }).map((_, idx) => (
                <svg
                  key={`p-${idx}`}
                  width="12"
                  height="56"
                  viewBox="0 0 16 100"
                  className="drop-shadow-2xs shrink-0"
                  aria-label="1 batang puluhan (10 kubus)"
                >
                  <rect
                    x="1.5"
                    y="2"
                    width="13"
                    height="96"
                    rx="2"
                    fill="#10b981"
                    stroke="#047857"
                    strokeWidth="2"
                  />
                  {Array.from({ length: 9 }).map((__, lineIdx) => {
                    const yPos = 2 + ((lineIdx + 1) * 96) / 10;
                    return (
                      <line key={lineIdx} x1="1.5" y1={yPos} x2="14.5" y2={yPos} stroke="#a7f3d0" strokeWidth="1" />
                    );
                  })}
                </svg>
              ))}
            </div>
            <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
              {puluhan} Puluhan (10-an)
            </span>
          </div>
        )}

        {/* Kubus Satuan (1x1) */}
        {satuan > 0 && (
          <div className="flex flex-col items-center gap-2">
            <div className="grid grid-cols-3 gap-1.5 items-end">
              {Array.from({ length: satuan }).map((_, idx) => (
                <svg
                  key={`s-${idx}`}
                  width="14"
                  height="14"
                  viewBox="0 0 20 20"
                  className="drop-shadow-2xs"
                  aria-label="1 kubus satuan"
                >
                  <rect
                    x="2"
                    y="2"
                    width="16"
                    height="16"
                    rx="3"
                    fill="#f59e0b"
                    stroke="#b45309"
                    strokeWidth="2"
                  />
                </svg>
              ))}
            </div>
            <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">
              {satuan} Satuan
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Diagram SVG Garis Bilangan (Number Line)
 */
const GarisBilanganDiagram: React.FC<{ items: string[] }> = ({ items }) => {
  const width = 560;
  const height = 110;
  const startX = 55;
  const endX = width - 55;
  const lineY = 48;
  const step = items.length > 1 ? (endX - startX) / (items.length - 1) : 0;

  return (
    <div className="w-full overflow-x-auto">
      <div className="bg-slate-50 rounded-xl border border-slate-200 p-3 flex justify-center">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full max-w-[540px] h-auto"
          role="img"
          aria-label="Diagram garis bilangan"
        >
          {/* Garis utama & panah kiri kanan */}
          <line x1="22" y1={lineY} x2={width - 22} y2={lineY} stroke="#1e3a8a" strokeWidth="3" strokeLinecap="round" />
          <polygon points={`14,${lineY} 26,${lineY - 6} 26,${lineY + 6}`} fill="#1e3a8a" />
          <polygon points={`${width - 14},${lineY} ${width - 26},${lineY - 6} ${width - 26},${lineY + 6}`} fill="#1e3a8a" />

          {/* Lengkungan lompatan pola antar titik */}
          {items.slice(0, -1).map((_, idx) => {
            const x1 = startX + idx * step;
            const x2 = startX + (idx + 1) * step;
            const midX = (x1 + x2) / 2;
            return (
              <path
                key={`arc-${idx}`}
                d={`M ${x1} ${lineY - 8} Q ${midX} ${lineY - 34} ${x2} ${lineY - 8}`}
                fill="none"
                stroke="#60a5fa"
                strokeWidth="2"
                strokeDasharray="4 3"
              />
            );
          })}

          {/* Titik & label bilangan */}
          {items.map((label, idx) => {
            const x = startX + idx * step;
            const isUnknown = label === '?' || /^[A-Z]$/.test(label);
            return (
              <g key={`pt-${idx}`}>
                <line x1={x} y1={lineY - 9} x2={x} y2={lineY + 9} stroke="#1e3a8a" strokeWidth="3" />
                <circle cx={x} cy={lineY} r="5.5" fill={isUnknown ? '#f59e0b' : '#2563eb'} stroke="#ffffff" strokeWidth="2" />
                {isUnknown ? (
                  <g>
                    <rect
                      x={x - 24}
                      y={lineY + 17}
                      width="48"
                      height="30"
                      rx="8"
                      fill="#fef3c7"
                      stroke="#d97706"
                      strokeWidth="2"
                    />
                    <text
                      x={x}
                      y={lineY + 37}
                      textAnchor="middle"
                      fontSize="16"
                      fontWeight="800"
                      fill="#92400e"
                    >
                      {label}
                    </text>
                  </g>
                ) : (
                  <text
                    x={x}
                    y={lineY + 36}
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="700"
                    fill="#0f172a"
                  >
                    {label}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

/**
 * Diagram Kartu Angka / Kartu Bilangan Berwarna
 */
const KartuAngkaDiagram: React.FC<{ cards: string[] }> = ({ cards }) => {
  const palette = [
    'bg-blue-600 border-blue-700 text-white',
    'bg-emerald-600 border-emerald-700 text-white',
    'bg-amber-500 border-amber-600 text-white',
    'bg-indigo-600 border-indigo-700 text-white',
  ];

  return (
    <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
      {cards.map((val, idx) => (
        <div
          key={`${val}-${idx}`}
          className={`min-w-[68px] sm:min-w-[82px] px-4 py-3.5 rounded-2xl border-b-4 shadow-sm flex flex-col items-center justify-center ${
            palette[idx % palette.length]
          }`}
        >
          <span className="text-[10px] uppercase tracking-wider opacity-85 font-semibold mb-0.5">
            Kartu {idx + 1}
          </span>
          <span className="text-2xl sm:text-3xl font-black tracking-tight leading-none">
            {val}
          </span>
        </div>
      ))}
    </div>
  );
};

const DiagramRenderer: React.FC<{ diagram: QuestionDiagram }> = ({ diagram }) => {
  if (diagram.kind === 'kubus_satuan') {
    return (
      <KubusSatuanDiagram
        ratusan={diagram.ratusan || 0}
        puluhan={diagram.puluhan || 0}
        satuan={diagram.satuan || 0}
      />
    );
  }
  if (diagram.kind === 'garis_bilangan' && diagram.lineItems) {
    return <GarisBilanganDiagram items={diagram.lineItems} />;
  }
  if (diagram.kind === 'kartu_angka' && diagram.cards) {
    return <KartuAngkaDiagram cards={diagram.cards} />;
  }
  return null;
};

export const QuestionVisual: React.FC<QuestionVisualProps> = ({ question, compact = false }) => {
  if (!question.imageUrl && !question.diagram) {
    return null;
  }

  const caption = question.imageCaption || question.diagram?.caption;

  return (
    <figure className={compact ? 'my-2.5' : 'mb-5'}>
      {question.imageUrl && (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-2xs">
          <img
            src={question.imageUrl}
            alt={question.imageAlt || `Ilustrasi soal ${question.topic}`}
            referrerPolicy="no-referrer"
            className={`w-full object-cover ${
              compact ? 'max-h-44 sm:max-h-52' : 'max-h-60 sm:max-h-72'
            }`}
          />
        </div>
      )}

      {question.diagram && <DiagramRenderer diagram={question.diagram} />}

      {caption && (
        <figcaption className="mt-1.5 text-center text-[11px] font-medium text-slate-500 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
