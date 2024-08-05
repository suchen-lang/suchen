import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcssPxtorem from 'postcss-pxtorem'
import autoprefixer from 'autoprefixer'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 5731,
    hmr: true,
    proxy: {}
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        postcssPxtorem({
          rootValue: 37.5, // 设计稿宽度除以10
          propList: ['*'], // 转换的属性列表，* 代表所有
          minPixelValue: 2, // 最小值以上的值会被转换
          exclude: /node_modules|index\.html/ // 排除node_modules目录下的文件 和 index.html
        })
      ]
    }
  },
  build: {
    target: 'es2015',
    assetsDir: '/',
    terserOptions: {
      compress: {
        keep_infinity: true,
        // Used to delete console in production environment
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      input: {
        index: path.join(__dirname, './index.html')
      },
      // 静态资源分类打包
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    }
  }
})
