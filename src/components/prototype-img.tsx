import Image from 'next/image'
import React from 'react'

function PrototypeImg() {
  return (
    <div className='flex-col justify-center items-center mx-auto relative hidden lg:block'>
        <Image src="/linear-bg.svg" className='absolute inset-0 z-0 bg-transparent' alt="" />
        <Image src="/linear-bgg.svg" className='max-w-[1000px] z-10 relative mt-20 top-[200px]' alt="" />
    </div>
  )
}

export default PrototypeImg