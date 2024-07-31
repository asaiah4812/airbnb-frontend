import Card from '@/components/Card';
import React from 'react'

const MyPropertiesPage = () => {
  return (
    <div className="w-[90%] md:w-[1500px] mx-auto mt-3 space-y-4">
      <h1 className="text-2xl font-medium">MyProperties</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <Card/>
      </div>
    </div>
  );
}

export default MyPropertiesPage;