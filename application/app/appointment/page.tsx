import Footer from '@/components/layouts/footer'
import Navbar from '@/components/layouts/navbar'
import TopHeader from '@/components/layouts/top-header'
import Appointment from '@/components/ui/appointment'

const page = () => {
    return (
        <main className="w-full min-h-screen flex flex-col justify-between">
            <div>
                <TopHeader />
                <Navbar />
            </div>
            <Appointment />
            <Footer />
        </main>
    )
}

export default page