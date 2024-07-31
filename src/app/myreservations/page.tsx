import Image from 'next/image'
import React from 'react'
import prop from '/public/img/img1.jpg'
import pro from '/public/img/img2.jpg'

const Reservation = () => {
    return (
      <section className="mt-6 space-y-4 w-[90%] md:w-[1550px] mx-auto">
        <h1 className="text-2xl font-bold">My Reservations</h1>
        <div className="flex gap-4 shadow-md p-3 border rounded">
          <Image src={prop} alt="" width={400} height={400} />
          <div className="flex flex-col gap-5 [&>span]:text-lg [&>span]:me-4">
            <h2 className="text-2xl font-medium">Property name</h2>
            <span>
              <strong className="font-bold">Check in date: </strong>14/2/2024
            </span>
            <span>
              <strong className="font-bold">Check out date: </strong>16/2/2024
            </span>
            <span>
              <strong className="font-bold">Number of nights: </strong>2
            </span>
            <span>
              <strong className="font-bold">Total price: </strong>$200
            </span>
            <button
              title="go to property"
              className="bg-gradient-to-br from-red-400 to-red-600 rounded-md p-2 text-white hover:bg-gradient-to-b"
            >
              Go to Property
            </button>
          </div>
        </div>
        <div className="flex gap-4 shadow-md p-3 border rounded">
          <Image src={pro} alt="" width={400} height={400} />
          <div className="flex flex-col gap-5 [&>span]:text-lg [&>span]:me-4">
            <h2 className="text-2xl font-medium">Property name</h2>
            <span>
              <strong className="font-bold">Check in date: </strong>14/2/2024
            </span>
            <span>
              <strong className="font-bold">Check out date: </strong>16/2/2024
            </span>
            <span>
              <strong className="font-bold">Number of nights: </strong>2
            </span>
            <span>
              <strong className="font-bold">Total price: </strong>$200
            </span>
            <button
              title="go to property"
              className="bg-gradient-to-br from-red-400 to-red-600 rounded-md p-2 text-white hover:bg-gradient-to-b"
            >
              Go to Property
            </button>
          </div>
        </div>
      </section>
    );
}


export default Reservation