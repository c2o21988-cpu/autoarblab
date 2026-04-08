"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, Zap, Shield, RefreshCw, TrendingUp, Globe, BookOpen,
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import { products, articles } from "@/data/products";

const featuredProducts = products.filter((p) => p.featured);
const featuredArticles = articles.filter((a) => a.featured);

const features = [
  {
    icon: Zap,
    title: "作業を10倍速に",
    desc: "手作業での価格調査・JANコード取得を完全自動化。1商品あたりの判定時間を大幅に短縮。",
  },
  {
    icon: TrendingUp,
    title: "利益率を最大化",
    desc: "複数の買取サイトの価格をリアルタイムで比較。最も高く売れるルートを瞬時に特定。",
  },
  {
    icon: Shield,
    title: "安心の個人開発品質",
    desc: "実際にせどりで使い込んだ道具だけをリリース。動作確認・アップデート対応済み。",
  },
  {
    icon: RefreshCw,
    title: "継続アップデート",
    desc: "サイトのUI変更に合わせて継続的にメンテナンス。購入後も最新状態で使用可能。",
  },
];

export default function HomePage() {
  return (
    <div className="relative">
      {/* 背景グラデーション */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-purple-600/5 rounded-full blur-[100px]" />
      </div>

      {/* HERO */}
      <section className="relative pt-36 pb-28 px-6 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-indigo-500/20 text-sm text-indigo-300 mb-8">
            <Globe size={14} className="text-cyan-400" />
            <span>Chrome拡張 × せどり自動化ツール</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-6">
            EC物販の
            <span className="gradient-text"> 作業を<br />自動化</span>せよ。
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            価格調査・JANコード取得・利益計算——<br className="hidden md:block" />
            手作業を捨てて、判断に集中する時代へ。
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold text-base hover:opacity-90 transition-all shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
            >
              ツール一覧を見る
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass text-slate-300 font-semibold text-base hover:text-white hover:border-white/20 transition-all"
            >
              <BookOpen size={18} />
              ノウハウ記事
            </Link>
          </div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              なぜ<span className="gradient-text">AutoArbLAB</span>なのか
            </h2>
            <p className="text-slate-400">実際の現場から生まれた、実用第一のツール群。</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 hover:border-white/[0.12] transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/15 to-indigo-500/15 border border-indigo-500/15 flex items-center justify-center mb-4">
                  <f.icon size={20} className="text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PICKUP PRODUCTS */}
      {featuredProducts.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">ピックアップ ツール</h2>
                <p className="text-slate-500 text-sm mt-1">人気・おすすめのChrome拡張機能</p>
              </div>
              <Link href="/products" className="flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
                すべて見る <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PICKUP ARTICLES */}
      {featuredArticles.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">ピックアップ 記事</h2>
                <p className="text-slate-500 text-sm mt-1">noteの有料ノウハウ記事</p>
              </div>
              <Link href="/articles" className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors">
                すべて見る <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredArticles.map((a, i) => (
                <ArticleCard key={a.id} article={a} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA BANNER */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-10 text-center border border-indigo-500/20"
            style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(168,85,247,0.05) 100%)" }}
          >
            <h2 className="text-3xl font-bold text-white mb-3">今すぐ作業を自動化する</h2>
            <p className="text-slate-400 mb-8">
              1商品あたり数十秒かかっていた作業が、<br />ワンクリックで完了します。
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold hover:opacity-90 transition-all shadow-xl shadow-indigo-500/25"
            >
              ツールをチェックする
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
