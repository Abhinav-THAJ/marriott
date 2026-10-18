import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { newsData } from "@/data/newsEvents";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { Calendar, ArrowLeft, Share2, ArrowRight } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return newsData.map((n) => ({
    slug: n.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const newsItem = newsData.find((n) => n.slug === params.slug);
  if (!newsItem) return { title: "Article Not Found | Marriott Hospital" };
  return {
    title: `${newsItem.title} | Marriott Hospital News`,
    description: newsItem.summary,
  };
}

export default function NewsDetailPage({ params }: Props) {
  const newsItem = newsData.find((n) => n.slug === params.slug);
  if (!newsItem) notFound();

  const otherNews = newsData.filter((n) => n.slug !== params.slug).slice(0, 2);

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-medical-950 text-white py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "News & Media", href: "/news" },
              { label: newsItem.category }
            ]}
          />
          <div className="mt-4 flex items-center gap-3 text-xs font-semibold text-slate-300">
            <span className="bg-clinical-600/30 text-teal-300 px-3 py-1 rounded-full border border-teal-500/20">
              {newsItem.category}
            </span>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{newsItem.date}</span>
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-4 font-display leading-tight">
            {newsItem.title}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden p-6 sm:p-10">
          <div className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden mb-8">
            <Image
              src={newsItem.imageUrl}
              alt={newsItem.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-4 bg-slate-50 border-l-4 border-clinical-600 rounded-r-lg mb-8 text-slate-700 italic text-base">
            "{newsItem.summary}"
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
            {newsItem.content.map((paragraph, idx) => (
              <p key={idx} className="text-base sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm font-semibold text-clinical-700 hover:text-clinical-900 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to News Archive</span>
            </Link>
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <Share2 className="w-3.5 h-3.5" /> Official Hospital Release
              </span>
            </div>
          </div>
        </div>

        {/* Related Stories */}
        {otherNews.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-slate-900 font-display mb-6">
              More Updates from Marriott Hospital
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherNews.map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.slug}`}
                  className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition flex flex-col justify-between group"
                >
                  <div>
                    <div className="text-xs text-slate-500 font-medium mb-1">
                      {item.date} • {item.category}
                    </div>
                    <h3 className="font-bold text-slate-900 group-hover:text-clinical-700 transition line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-clinical-600">
                    <span>Read Release</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
