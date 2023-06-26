import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//Install node types before calling below import
import { fileURLToPath } from "url"
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import Components from 'unplugin-vue-components/vite' // unplugin-vue-components 是由 Vue官方人员开发的一款自动引入插件，可以省去比如 UI 库的大量 import 语句。
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(__dirname, 'src/assets/svg')],
      symbolId: 'icon-[dir]-[name]'
    }),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ],
  base: process.env.NODE_ENV === "development" ? "./" : "/",
  resolve:{
    alias:{
      //Two methods available
      //Method 1 : using fireURLtoPath(keep adding other paths as needed)
      "@": fileURLToPath(new URL("./src",import.meta.url)),

      //Method 2 : using path
      "@components": path.resolve(__dirname,"src/components"),
      "@pages": path.resolve(__dirname,"src/pages"),
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://124.220.161.239:8989',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})
