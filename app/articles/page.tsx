"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/products";

export default function ArticlesPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/8 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-purple-500/20 text-xs text-purple-300 mb-5">
            <BookOpen size={12} />
            <span>note 有料記事</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            ノウハウ<span className="gradient-text">記事</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl">
            実践で培ったEC物販・せどりのノウハウをnoteで公開中。
            リンクをクリックするとnoteの購入ページに移動します。
          </p>
        </motion.div>

        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((a, i) => (
              <ArticleCard key={a.id} article={a} index={i} />
            ))}
          </div>
        ) : (
          <div className="glass rounded-2xl p-16 text-center">
            <BookOpen size={40} className="text-slate-600 mx-auto mb-4" />
            <p className="text-slate-500">記事を準備中です。もうしばらくお待ちください。</p>
          </div>
        )}
      </div>
    </div>
  );
}
