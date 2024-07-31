"use client"
import { useState, useEffect} from 'react';
import { Range }from 'react-date-range';
import { differenceInDays, eachDayOfInterval, format } from "date-fns";
import DatePicker from '../form/Calendar';
import apiServices from '@/app/services/apiServices';
import useLoginModal from '../hooks/useLoginModal';

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection'
}

type Property = {
  id: string;
  guests:number; 
  price_per_night: number;
}

interface ReservationProps {
  userId: string | null,
  property:Property
}

const Reservation:React.FC<ReservationProps> = ({property, userId}) => {
  
  const loginModal = useLoginModal(); 
  const [fee, setFee] = useState<number>(0); 
  const [nights, setNights] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);
  const [minDate, setMinDate] = useState<Date>(new Date());
  const [guests, setGuests] = useState<string>('1');
  const guestsRange = Array.from({ length:property.guests }, (_, index) => index + 1)


   const performBooking = async () => {
     if (userId) {
      if (dateRange.startDate && dateRange.endDate) {
          const formData = new FormData();
          formData.append('guests', guests);
          formData.append('start_date', format(dateRange.startDate, 'yyyy-MM-dd'));
          formData.append('end_date', format(dateRange.endDate, 'yyyy-MM-dd'));
          formData.append('number_of_nights', nights.toString());
          formData.append('total_price', totalPrice.toString());

          const response = await apiServices.post(`/api/properties/${property.id}/book/`, formData);
          if (response.success){
            console.log('Booking successful')
          } else {
            console.log('Something went wrong...')
          }
      }
     } else {
       loginModal.open();
     }
   };

  const _setDateRange = (selection: any) => {
    const newStartDate = new Date(selection.startDate);
    const newEndDate = new Date(selection.endDate);
    if (newEndDate <= newStartDate) {
      newEndDate.setDate(newStartDate.getDate() + 1);
    }

    setDateRange({
      ...dateRange,
      startDate: newStartDate,
      endDate: newEndDate
    })
  }

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
        const dayCount = differenceInDays(
          dateRange.endDate,
          dateRange.startDate
        );
        if (dayCount && property.price_per_night) {
          const _fee = ((dayCount * property.price_per_night) / 100) * 5;
          setFee(_fee);
          setTotalPrice((dayCount * property.price_per_night) + _fee);
          setNights(dayCount);
        } else {
          const _fee = (property.price_per_night / 100) * 5;

          setFee(_fee);
          setTotalPrice(property.price_per_night + _fee);
          setNights(1);
        }
    }

  }, [dateRange])
  return (
    <div className="border-md shadow-lg flex flex-col p-3 w-full gap-6 col-span-2">
      <span className="text-xl font-bold">
        <strike>N</strike>
        {property.price_per_night} per night
      </span>
      <DatePicker
      value={dateRange}
      onChange={(value) => _setDateRange(value.selection)}
      />
      <div className="p-3 border rounded-lg flex flex-col gap-2">
        <label htmlFor="guest">Guests</label>
        <select
         value={guests} 
         onChange={(e) => setGuests(e.target.value)}
         id="guest"
         className='outline-none p-2'
         >
          {guestsRange.map(number => (
            <option className='' key={number} value={number}>{number}</option>
          ))}
        </select>
      </div>
      <button
      onClick={performBooking }
      className="p-2 rounded-md bg-gradient-to-br from-red-300 to-red-600 text-white hover:bg-gradient-to-b duration-100">
        Book
      </button>
      <div className="flex items-center justify-between font-medium">
        <span>${property.price_per_night} * {nights}</span>
        <span>
          <strike>N</strike>{property.price_per_night * nights}
        </span>
      </div>
      <div className="flex items-center justify-between font-medium">
        <span>Drmbnb fee</span>
        <span>
          <strike>N</strike>{fee}
        </span>
      </div>
      <hr />
      <div className="flex items-center justify-between font-medium">
        <span>Total</span>
        <span>
          <strike>N</strike>{totalPrice}
        </span>
      </div>
    </div>
  );
}

export default Reservation