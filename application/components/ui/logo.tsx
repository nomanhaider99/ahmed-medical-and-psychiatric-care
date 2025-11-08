import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/">
            <Image
                alt=""
                src="/assets/images/logo.png"
                width={200}
                height={200}
             />
        </Link>
  )
}

export default Logo