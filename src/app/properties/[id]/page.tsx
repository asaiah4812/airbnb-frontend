import React from 'react'
import img1 from '/public/img/img1.jpg'
import img2 from '/public/img/img2.jpg'
import img3 from '/public/img/img3.jpg'
import Image from 'next/image';
import prof from '/public/profile/Asaiah.jpg'
import Link from 'next/link';
import { getUserId } from '@/app/lib/action';

import apiServices from '@/app/services/apiServices';
import Reservation from '@/components/properties/Reservations';

export default async function PropertyDetailPage({params}: {params: {id:string}}) {
  const property = await apiServices.get(`/api/properties/${params.id}`)
  const userId = await getUserId()
  return (
    <main className="w-[1550px] mx-auto h-fill">
      <h1 className="py-5 text-2xl font-semibold">{property.title}</h1>
      <div className="grid grid-cols-6 grid-rows-2 gap-5 rounded-lg">
        <div className="relative w-full col-span-3 h-[50vh] bg-slate-300 rounded-lg shadow-md overflow-hidden">
          <Image fill={true} alt="img" className="w-full" src={img1} />
        </div>
        <div className="relative w-full col-span-3 row-span-2 bg-slate-300 rounded-lg shadow-lg overflow-hidden">
          <Image fill={true} alt="img" className="w-full" src={img2} />
        </div>
        <div className="relative w-full col-span-3 bg-slate-300 rounded-lg shadow-md overflow-hidden">
          <Image fill={true} alt="img" className="w-full" src={img3} />
        </div>
      </div>
      <div className="grid grid-cols-4 my-5 gap-6">
        <div className="space-y-6 mt-5 col-span-2">
          <h2 className="font-medium text-2xl mb-2">{property.name}</h2>
          <span>
            {property.guests} guests - {property.bedrooms} bedrooms -{" "}
            {property.bathrooms} bathroom
          </span>
          <div className="flex items-center gap-5 border-y-2 py-4">
            {
              property.landlord.avatar_url ? (
                <Image
                  src={property.landlord.avatar_url}
                  alt="profile"
                  className="rounded-full"
                  width={70}
                  height={70}
                />
              ) : (
                <Image
                  src={prof}
                  alt="profile"
                  className="rounded-full"
                  width={70}
                  height={70}
                />
                
              )
            }
            <Link href={"/landlords/1/"} className="hover:underline">
              <strong>{property.landlord.name}</strong> is your host
            </Link>
          </div>
          <small className="mt-5">
            {property.description}, aliquam quam qui illum quidem nemo ullam dolores
            doloremque minus quas.
          </small>
        </div>
        {/** copied */ }
        <Reservation 
        userId={userId}
        property={property}/>
      </div>
    </main>
  );
}
 