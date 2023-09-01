import "./../css/app.css";
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

const appName = window.document.getElementsByTagName("title")[0]?.innerText || "My App";

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    return pages[`./Pages/${name}.jsx`]
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
  progress:{
    color:"#fff",
    showSpinner:true
  }
})