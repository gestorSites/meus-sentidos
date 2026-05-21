import Footer from "../components/Footer"
import Header from "../components/Header"
import WhatsAppButton from "../components/WhatsAppButton"
import { Outlet } from "react-router-dom"

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <WhatsAppButton />
      <Footer />
    </>
  )
}
