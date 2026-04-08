// ============================================================
// 商品・ツールデータ設定ファイル
// ここにオブジェクトを追記するだけでサイト全体に反映されます
// ============================================================

export type ProductCategory = "extension" | "script" | "tool";

export type Product = {
  id: string;               // URLスラッグ（英数字・ハイフン）
  title: string;            // 商品名
  tagline: string;          // 一言説明（カード表示用）
  description: string;      // 詳細説明（複数行OK）
  price: number;            // 価格（円）。0なら「無料」表示
  stripeUrl: string;        // Stripe決済URL（"#"で未設定）
  category: ProductCategory;
  tags: string[];           // 表示タグ
  icon: string;             // Lucide React アイコン名（例: "ShoppingCart"）
  featured: boolean;        // trueにするとHOMEのピックアップに表示
  releaseDate: string;      // リリース日（YYYY-MM-DD）
};

export type Article = {
  id: string;
  title: string;
  description: string;
  noteUrl: string;          // note記事のURL
  price: number;
  tags: string[];
  publishedAt: string;      // 公開日（YYYY-MM-DD）
  featured: boolean;
};

// ============================================================
// 拡張機能・ツール一覧
// 新しいツールを追加する場合は、このリストにオブジェクトを追加
// ============================================================
export const products: Product[] = [
  {
    id: "ec-scraper-rakuten",
    title: "EC Scraper (Rakuten)",
    tagline: "楽天市場の商品情報を瞬時に取得・比較",
    description:
      "楽天市場の商品ページから商品名・価格・JAN・ポイントを自動取得。買取サイトとの価格差を即座に計算し、せどりの利益判定を爆速化するChrome拡張機能です。",
    price: 2980,
    stripeUrl: "#",  // ← StripeのPayment LinkのURLに変更してください
    category: "extension",
    tags: ["楽天", "せどり", "価格比較", "自動化"],
    icon: "ShoppingCart",
    featured: true,
    releaseDate: "2025-01-01",
  },
  // ↓ 新しいツールはここからコピーして追加
  // {
  //   id: "ec-scraper-amazon",
  //   title: "EC Scraper (Amazon)",
  //   tagline: "AmazonのASIN・JANを一発取得",
  //   description: "...",
  //   price: 1980,
  //   stripeUrl: "#",
  //   category: "extension",
  //   tags: ["Amazon", "ASIN", "JAN"],
  //   icon: "Package",
  //   featured: false,
  //   releaseDate: "2025-06-01",
  // },
];

// ============================================================
// note記事一覧
// 新しい記事を追加する場合は、このリストにオブジェクトを追加
// ============================================================
export const articles: Article[] = [
  // {
  //   id: "sedori-beginner-guide",
  //   title: "【完全版】せどり初心者が月5万稼ぐためのロードマップ",
  //   description: "リサーチから仕入れ・販売まで、すべての手順を網羅した実践ガイドです。",
  //   noteUrl: "https://note.com/your-account/n/xxxxx",
  //   price: 1980,
  //   tags: ["せどり", "副業", "初心者"],
  //   publishedAt: "2025-03-01",
  //   featured: true,
  // },
];
