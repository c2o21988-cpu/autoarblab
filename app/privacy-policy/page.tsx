import { Shield } from "lucide-react";

export const metadata = {
  title: "プライバシーポリシー | AutoArbLAB",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-indigo-500/20 flex items-center justify-center">
            <Shield size={20} className="text-cyan-400" />
          </div>
          <div>
            <p className="text-slate-500 text-xs uppercase tracking-widest">Legal</p>
            <h1 className="text-2xl font-bold text-white">プライバシーポリシー</h1>
          </div>
        </div>

        <div className="glass rounded-2xl p-8 space-y-8 text-slate-300 text-sm leading-relaxed">
          <p className="text-slate-400">
            スリールーフ（以下「当方」）が提供するChrome拡張機能・ウェブサービス（以下「本サービス」）における、
            利用者の個人情報の取り扱いについて定めます。
          </p>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">1. 収集する情報について</h2>
            <p>
              本サービスのChrome拡張機能は、<strong className="text-white">利用者の個人情報を一切収集・保存・外部送信しません。</strong>
              拡張機能が取得するデータ（商品名・価格等）は、利用者のブラウザ上でのみ処理され、外部のサーバーに送信されることはありません。
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">2. 外部サービスの利用</h2>
            <p className="mb-2">本サービスでは、決済処理のために以下の外部サービスを利用しています。</p>
            <ul className="list-disc list-inside space-y-1 text-slate-400">
              <li>
                <strong className="text-white">Stripe, Inc.</strong> — クレジットカード決済処理。
                Stripeのプライバシーポリシーは Stripe 公式サイトをご確認ください。
                当方はカード情報を直接取得・保存しません。
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">3. アクセス解析について</h2>
            <p>
              当サイトでは、サービス改善を目的としてアクセス解析ツールを使用する場合があります。
              これらのツールはCookieを使用してデータを収集しますが、個人を特定する情報は含まれません。
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">4. 拡張機能が使用する権限</h2>
            <div className="space-y-2">
              {[
                { perm: "activeTab", reason: "現在開いているタブのページ情報（商品名・価格）を取得するため" },
                { perm: "scripting", reason: "ページにスクリプトを注入して商品情報を自動取得するため" },
                { perm: "storage", reason: "ユーザー設定（表示設定など）をローカルに保存するため" },
              ].map(({ perm, reason }) => (
                <div key={perm} className="flex gap-3">
                  <code className="text-cyan-400 bg-white/[0.05] px-2 py-0.5 rounded text-xs shrink-0 h-fit mt-0.5">
                    {perm}
                  </code>
                  <span className="text-slate-400">{reason}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">5. お問い合わせ</h2>
            <p>
              プライバシーポリシーに関するお問い合わせは、下記までご連絡ください。
            </p>
            <div className="mt-3 glass rounded-xl p-4 border border-white/[0.06]">
              <p className="text-white font-medium">スリールーフ</p>
              <p className="text-slate-400 mt-1">
                メール：<a href="mailto:c2o23668@gmail.com" className="text-cyan-400 hover:underline">c2o23668@gmail.com</a>
              </p>
            </div>
          </section>

          <p className="text-slate-600 text-xs border-t border-white/[0.06] pt-6">
            制定日：2026年4月8日　/　運営者：スリールーフ
          </p>
        </div>
      </div>
    </div>
  );
}
