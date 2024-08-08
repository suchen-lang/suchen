import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcssPxtorem from 'postcss-pxtorem'
import autoprefixer from 'autoprefixer'
import { terser } from 'rollup-plugin-terser'
import compressPlugin from 'vite-plugin-compression'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    compressPlugin({
      ext: '.gz', // 生成的压缩文件后缀
      algorithm: 'gzip', // 使用 gzip 压缩
      deleteOriginFile: false, // 保留原始未压缩文件
      threshold: 10240 // 只压缩大于此大小的文件（以字节为单位）
    })
  ],
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
    rollupOptions: {
      input: {
        index: path.join(__dirname, './index.html')
      },
      // 静态资源分类打包
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        manualChunks: {
          axios: ['axios'],
          vue: ['vue']
        },
        plugins: [
          terser({
            compress: {
              drop_console: true,
              drop_debugger: true
            }
          })
        ]
      }
    }
  }
})
