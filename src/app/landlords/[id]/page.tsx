import Image from 'next/image'
import React from 'react'
import prof from '/public/profile/Asaiah.jpg'
import Card from '@/components/Card'
import Link from 'next/link'

export default function Landlords() {
  return (
    <div className='flex items-start gap-4 w-full md:w-[1500px] mx-auto justify-around mt-6 '>
        <div className='flex flex-col gap-3 p-3 bg-gray-200'>
            <Image
            src={prof}
            alt=''
            width={300}
            height={300}
            />
            <strong className='font-bold text-lg'>Asaiah Henson</strong>
            <Link href={'/inbox/'} className='p-3 rounded bg-gradient-to-br from-red-300 to-red-600 text-white text-center'>Contact</Link>
        </div>
        <div className='grid grid-cols-3 gap-2'>
            <Card/>
        </div>
    </div>
  )
}
