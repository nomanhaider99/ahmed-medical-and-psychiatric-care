import Footer from "@/components/layouts/footer"
import Navbar from "@/components/layouts/navbar"
import TopHeader from "@/components/layouts/top-header"
import FAQs from "@/components/widgets/faqs"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Lyari Medical Psychiatric Care',
  description: 'Find quick answers to the most common questions about our psychiatric and mental health services, appointments, treatments, and clinic policies — all in one place.',
}

const Page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <div>
        <TopHeader />
        <Navbar />
      </div>
      <FAQs />
      <Footer />
    </div>
  )
}

export default Page