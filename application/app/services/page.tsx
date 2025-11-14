import Footer from '@/components/layouts/footer'
import Navbar from '@/components/layouts/navbar'
import TopHeader from '@/components/layouts/top-header'
import Services from '@/components/widgets/services'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Best Psychiatric & Mental Health Services | Ahmed Medical Psychiatric Care',
    description: 'Explore our full list of services, including depression, stress management, anxiety, insomnia and much more.',
}

const page = () => {
    return (
        <div className='w-full min-h-screen flex flex-col'>
            <div>
                <TopHeader />
                <Navbar />
            </div>
            <Services />
            <Footer />
        </div>
    )
}

export default page