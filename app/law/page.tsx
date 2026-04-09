import { FileText } from "lucide-react";

export const metadata = {
  title: "特定商取引法に基づく表記 | AutoArbLAB",
};

const items = [
  { label: "販売業者", value: "三屋 佑貴（屋号: スリールーフ）" },
  { label: "運営責任者", value: "三屋 佑貴" },
  { label: "所在地", value: "ご請求があった場合、遅滞なく開示いたします。" },
  { label: "電話番号", value: "ご請求があった場合、遅滞なく開示いたします。" },
  { label: "メールアドレス", value: "c2o21988@gmail.com" },
  { label: "販売価格", value: "各商品・記事ページに表示された金額（税込）" },
  { label: "追加手数料", value: "なし（サービス利用のための通信費等はお客様負担となります）" },
  { label: "支払方法", value: "クレジットカード支払い（Stripe）" },
  { label: "お支払時期", value: "各商品の購入時（サブスクリプションの場合は毎月の更新時）" },
  { label: "商品の引渡し時期", value: "決済完了後、即時システムをご利用いただけます" },
  { label: "返品・交換・キャンセル", value: "＜お客様都合の返品・交換＞\nデジタルコンテンツという性質上、決済完了後のキャンセル・返金には対応しておりません。\n＜解約について＞\nサブスクリプションの解約はいつでも可能であり、次回以降の請求を停止できます。\n＜不良等による対応＞\nシステムに重大な不具合があり利用不能な場合は、速やかにサポートまでご連絡ください。" },
  { label: "動作環境", value: "Google Chrome 最新版（Windows / macOS）" },
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
