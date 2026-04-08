"use client";

import { motion } from "framer-motion";
import { Package } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      {/* 背景 */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/8 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* ヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-indigo-500/20 text-xs text-indigo-300 mb-5">
            <Package size={12} />
            <span>Chrome Extensions & Tools</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            ツール<span className="gradient-text">一覧</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl">
            EC物販・せどりの現場で実際に使用している自動化ツールを販売しています。
            購入後すぐにダウンロードして使えます。
          </p>
        </motion.div>

        {/* 商品グリッド */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        ) : (
          <div className="glass rounded-2xl p-16 text-center">
            <Package size={40} className="text-slate-600 mx-auto mb-4" />
            <p className="text-slate-500">現在準備中です。もうしばらくお待ちください。</p>
          </div>
        )}

        {/* 注意書き */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 glass rounded-2xl p-6 border border-yellow-500/10"
        >
          <p className="text-slate-400 text-sm leading-relaxed">
            ⚠️ 購入前にご確認ください：各ツールは個人利用を前提としています。
            ご購入後のお問い合わせは <a href="mailto:c2o23668@gmail.com" className="text-cyan-400 hover:underline">c2o23668@gmail.com</a> までご連絡ください。
            Chromeウェブストアのレビュー・規約変更により、機能が制限される場合があります。
          </p>
        </motion.div>
      </div>
    </div>
  );
}
