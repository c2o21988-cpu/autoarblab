"use client";

import { motion } from "framer-motion";
import { BookOpen, Tag, ExternalLink } from "lucide-react";
import type { Article } from "@/data/products";

type Props = {
  article: Article;
  index?: number;
};

export default function ArticleCard({ article, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <a
        href={article.noteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group glass rounded-2xl p-6 flex flex-col gap-4 hover:border-purple-500/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_30px_rgba(168,85,247,0.12)] transition-all duration-300 block"
      >
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all">
            <BookOpen size={22} className="text-purple-400" />
          </div>
          {article.featured && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300">
              ★ Featured
            </span>
          )}
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg leading-snug mb-1 group-hover:text-purple-200 transition-colors">
            {article.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            {article.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.08] text-slate-400 flex items-center gap-1"
            >
              <Tag size={10} />
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-2 border-t border-white/[0.06] flex items-center justify-between">
          <span className="text-white font-bold text-xl">
            {article.price === 0 ? (
              <span className="text-emerald-400">無料</span>
            ) : (
              <>¥{article.price.toLocaleString()}<span className="text-slate-500 font-normal text-sm ml-1">（税込）</span></>
            )}
          </span>
          <span className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white group-hover:opacity-90 shadow-lg shadow-purple-500/20 transition-all">
            noteで読む
            <ExternalLink size={14} />
          </span>
        </div>
      </a>
    </motion.div>
  );
}
