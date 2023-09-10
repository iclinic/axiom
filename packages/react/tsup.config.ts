import { defineConfig } from 'tsup'

export default defineConfig({
  dts: false,
  minify: false,
  sourcemap: true,
  treeshake: false,
  splitting: false,
  clean: true, // Clean output directory before building
  outDir: 'dist', // Output directory
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    }
  },
  entry: ['src/index.ts', 'src/components/**/index.ts', 'src/lib/index.ts'], // Entry point(s)
  format: ['esm', 'cjs'], // Output format(s)
})
