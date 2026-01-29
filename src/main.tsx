import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div className="font-sans">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
)
