import { defineConfig } from "vite";
import vituum from "vituum";
import nunjucks from "@vituum/vite-plugin-nunjucks";
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    vituum({
      imports: {
        filenamePattern: {
          "+.css": [],
          "+.scss": "src/styles",
        },
      },
    }),
    nunjucks({
      root: "./src", // Nunjucksテンプレートのルートディレクトリ
    }),
    dts(), // TypeScript型定義ファイルの生成
  ],
  build: {
    lib: {
      entry: 'src/main.ts', // ライブラリのエントリーポイント
      name: 'TheWheels',
      fileName: (format) => `my-library.${format}.js`, // 出力ファイル名
    },
    rollupOptions: {
      external: ['reset-css'], // 外部依存関係
      input: ["./src/pages/**/*.njk"], // Nunjucksテンプレートを入力
      output: {
        assetFileNames: 'style.css',
        entryFileNames: '[name].js',
      },
    },
    outDir: 'dist', // 出力ディレクトリ
    emptyOutDir: true, // ビルド後に出力ディレクトリを空にする
  },
 
});
