import { FileText } from "lucide-react";

export const metadata = {
  title: "特定商取引法に基づく表記 | AutoArbLAB",
};

const items = [
  { label: "販売業者", value: "スリールーフ" },
  { label: "運営責任者", value: "スリールーフ" },
  { label: "所在地", value: "請求があった場合、遅滞なく開示します" },
  { label: "電話番号", value: "請求があった場合、遅滞なく開示します" },
  { label: "メールアドレス", value: "c2o23668@gmail.com" },
  { label: "販売価格", value: "各商品・記事ページに表示された金額（税込）" },
  { label: "支払方法", value: "クレジットカード（Stripe経由）" },
  { label: "支払時期", value: "購入手続き完了時" },
  { label: "商品の引渡し時期", value: "決済完了後、即時ダウンロード可能" },
  { label: "返品・キャンセル", value: "デジタルコンテンツの性質上、購入後の返品・返金には原則対応できません。動作不良等の場合はメールにてお問い合わせください。" },
  { label: "動作環境", value: "Google Chrome（最新版）/ Windows・Mac対応" },
];

export default function LawPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-indigo-500/20 flex items-center justify-center">
            <FileText size={20} className="text-cyan-400" />
          </div>
          <div>
            <p className="text-slate-500 text-xs uppercase tracking-widest">Legal</p>
            <h1 className="text-2xl font-bold text-white">特定商取引法に基づく表記</h1>
          </div>
        </div>

        <div className="glass rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <tbody>
              {items.map(({ label, value }, i) => (
                <tr
                  key={label}
                  className={`border-b border-white/[0.06] last:border-none ${
                    i % 2 === 0 ? "bg-white/[0.01]" : ""
                  }`}
                >
                  <th className="text-left text-slate-400 font-medium px-6 py-4 w-2/5 align-top whitespace-nowrap">
                    {label}
                  </th>
                  <td className="text-slate-300 px-6 py-4 leading-relaxed">
                    {label === "メールアドレス" ? (
                      <a
                        href="mailto:c2o23668@gmail.com"
                        className="text-cyan-400 hover:underline"
                      >
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-slate-600 text-xs mt-6 text-center">
          制定日：2026年4月8日　/　運営者：スリールーフ
        </p>
      </div>
    </div>
  );
}
