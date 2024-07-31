import Link from 'next/link'
import React from 'react'
import SearchFilters from './SearchFilters'
import { Blinds,  Globe } from 'lucide-react';
import { getUserId } from '@/app/lib/action';
import UserNav from '@/components/navbar/UserNav';
import AddPropertyButton from './AddPropertyButton';


export default async function Navbar() {
  const userId = await getUserId();
  return (
    <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href={"/"} className="text-black font-bold">
            <div className="flex items-center">
              <Blinds className="text-red-500" />
              <span className="ml-2 text-2xl text-red-500">DrmBnb</span>
            </div>
          </Link>
          <div className="flex space-x-6">
            <SearchFilters />
          </div>
          <div className="flex items-center space-x-6">
            <AddPropertyButton 
            userId={userId}
            label="Drmbnb your home" />
            <Link href={'myreservations/'}>
            <Globe />
            </Link>
            <UserNav userId={userId} />
          </div>
        </div>
      </div>
    </nav>
  );
}
