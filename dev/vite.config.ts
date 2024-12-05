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
      formats: ['es'],
      fileName: (format) => `the-wheels.${format}.js`, // 出力ファイル名
    },
    rollupOptions: {
      external: ['reset-css'], // 外部依存関係
      input: ["./src/pages/**/*.njk"], // Nunjucksテンプレートを入力
      output: {
        assetFileNames: '[name].[ext]',
        chunkFileNames: `[name].js`,
        entryFileNames: '[name].js',
        // inlineDynamicImports: false,
      },
    },
    outDir: 'dist', // 出力ディレクトリ
    emptyOutDir: false, // ビルド後に出力ディレクトリを空にする
  },
});
