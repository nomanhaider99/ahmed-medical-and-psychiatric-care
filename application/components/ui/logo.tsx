import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/">
            <Image
                alt=""
                src="/assets/images/logo.png"
                width={140}
                height={140}
                className='md:block hidden'
             />
             <Image
                alt=""
                src="/assets/images/logo.png"
                width={100}
                height={100}
                className='md:hidden block'
             />
        </Link>
  )
}

export default Logo