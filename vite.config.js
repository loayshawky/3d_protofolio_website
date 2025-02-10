import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import visualizer from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: false }) // أداة لتحليل حجم الملفات
  ],
  server: {
    port: 3000, // تحديد المنفذ
  },
  build: {
    outDir: 'dist', // تحديد مجلد الإخراج
    minify: 'terser', // تحسين تقليل الحجم
    treeShaking: true, // حذف الأكواد غير المستخدمة
    assetsInlineLimit: 4096, // تحسين تحميل الصور والملفات الصغيرة
    chunkSizeWarningLimit: 500, // تقليل التحذيرات عند حجم الملفات الكبير
  },
  define: {
    'process.env.API_URL': JSON.stringify(process.env.API_URL), // تضمين المتغيرات المطلوبة فقط
  },
});
