import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {loadEnv} from 'vite'

export default defineConfig(({command, mode}) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    define: {
      'process.env': env
    }
  }
})
