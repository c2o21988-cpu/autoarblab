import Link from "next/link";
import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* ブランド */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center">
                <Zap size={14} className="text-white" />
              </div>
              <span className="text-white font-bold">AutoArbLAB</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs">
              EC物販・せどりの自動化ツールと<br />
              実践ノウハウを提供する個人開発ラボ。
            </p>
          </div>

          {/* リンク */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">Legal</p>
            <Link href="/privacy-policy" className="text-slate-400 hover:text-white text-sm transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/law" className="text-slate-400 hover:text-white text-sm transition-colors">
              特定商取引法に基づく表記
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">Links</p>
            <Link href="/products" className="text-slate-400 hover:text-white text-sm transition-colors">
              Products
            </Link>
            <Link href="/articles" className="text-slate-400 hover:text-white text-sm transition-colors">
              Articles
            </Link>
          </div>
        </div>

        <div className="border-t border-white/[0.06] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} AutoArbLAB / スリールーフ. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
