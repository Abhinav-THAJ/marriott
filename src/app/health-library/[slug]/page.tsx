import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Clock,
  UserCheck,
  ShieldCheck,
  Calendar,
  AlertCircle,
  ArrowRight,
  HeartPulse
} from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { healthArticlesData, HealthArticle } from "@/data/articles";
import { specialitiesData } from "@/data/specialities";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return healthArticlesData.map((a) => ({
    slug: a.slug,
  }));
}

export function generateMetadata({ params }: ArticlePageProps) {
  const art = healthArticlesData.find((a) => a.slug === params.slug);
  if (!art) return { title: "Article Not Found" };

  return {
    title: `${art.title} | Health Library`,
    description: `${art.excerpt} Medically reviewed by ${art.medicalReviewer} at Marriott Hospital.`,
  };
}

export default function ArticleDetailPage({ params }: ArticlePageProps) {
  const article = healthArticlesData.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const relatedSpec = specialitiesData.find(
    (s) => s.slug === article.relatedSpecialitySlug
  );

  const relatedArticles = healthArticlesData.filter((a) => a.slug !== article.slug);

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Health Library", href: "/health-library" },
            { label: article.title },
          ]}
        />

        {/* Article Container */}
        <article className="mt-4 bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm p-6 sm:p-12 mb-12">
          {/* Header Metadata */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 rounded-full bg-clinical-50 text-clinical-800 text-xs font-bold uppercase tracking-wider mb-3 border border-clinical-100">
              {article.category}
            </span>
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-navy-900 tracking-tight leading-tight">
              {article.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-500 pb-4 border-b border-slate-100">
              <span>Published: <strong>{article.publishedDate}</strong></span>
              <span>&bull;</span>
              <span>Reading Time: <strong>{article.readTime}</strong></span>
              <span>&bull;</span>
              <span className="text-teal-700 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                Medically Reviewed
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-slate-100 shadow-sm border border-slate-100 mb-8">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>

          {/* Author & Reviewer Box */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <p className="text-slate-400">Authored by:</p>
              <p className="font-bold text-slate-800">{article.author}</p>
            </div>
            <div className="sm:text-right">
              <p className="text-slate-400">Clinical Reviewer:</p>
              <p className="font-bold text-teal-800">{article.medicalReviewer}</p>
            </div>
          </div>

          {/* Article Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            {article.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Clinical Disclaimer */}
          <div className="mt-10 p-4 bg-amber-50/70 border border-amber-200/80 rounded-2xl text-xs text-amber-900 leading-relaxed flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Medical Disclaimer:</strong> This article is published for educational and awareness purposes only and does not constitute individual medical diagnosis or treatment advice. Consult a qualified physician for personalized clinical evaluation.
            </div>
          </div>

          {/* Related Speciality CTA */}
          {relatedSpec && (
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase">Related Clinical Speciality</span>
                <p className="font-heading font-bold text-base text-navy-900">{relatedSpec.name}</p>
              </div>
              <div className="flex gap-2">
                <Link
                  href={`/specialities/${relatedSpec.slug}`}
                  className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Explore Department
                </Link>
                <Link
                  href={`/appointments?speciality=${relatedSpec.slug}`}
                  className="px-4 py-2 bg-clinical-800 hover:bg-clinical-900 text-white rounded-xl text-xs font-bold shadow"
                >
                  Book Visit
                </Link>
              </div>
            </div>
          )}
        </article>

        {/* More Articles */}
        <div className="mb-12">
          <h2 className="font-heading font-bold text-lg text-navy-900 mb-4">
            More Health Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedArticles.slice(0, 2).map((rel) => (
              <Link
                key={rel.id}
                href={`/health-library/${rel.slug}`}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase text-clinical-700">{rel.category}</span>
                  <h3 className="font-heading font-bold text-sm text-navy-900 group-hover:text-clinical-800 transition-colors mt-1">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{rel.excerpt}</p>
                </div>
                <div className="mt-4 text-xs font-bold text-clinical-800 flex items-center gap-1">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
