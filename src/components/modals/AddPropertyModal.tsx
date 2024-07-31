"use client";

import Image from "next/image";

import Modal from "./Modal";
import useAddPropertyModal from "../hooks/useAddPropertyModal";
import CustomButton from "../form/CustomButton";
import { ChangeEvent, useState } from "react";
import Categories from "../addproperty/Categories";
import SelectCountry, { SelectCountryValue } from "../form/SelectCountry";
import apiServices from "@/app/services/apiServices";
import { useRouter } from "next/navigation";
// import LoginModal from "./LoginModal";

const AddPropertyModal = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<string[]>([]);
  const [dataCategory, setDataCategory] = useState('');
  const [dataTitle, setDataTitle] = useState('');
  const [dataDescription, setDataDescription] = useState('');
  const [dataPrice, setDataPrice] = useState('');
  const [dataBedRooms, setDataBedRooms] = useState('');
  const [dataBathRooms, setDataBathRooms] = useState('');
  const [dataGuests, setDataGuests] = useState('');
  const [dataCountry, setDataCountry] = useState<SelectCountryValue>();
  const [dataImage, setDataImage] = useState<File | null>(null);

    //

    //
  const addPropertymodal = useAddPropertyModal();
  const router = useRouter()

  //
  //

  const setCategory = (category: string) => {
    setDataCategory(category)
  }

  const setImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const tmpImage = event.target.files[0];

      setDataImage(tmpImage);
    }
  }

  // submit function

  const submitForm = async () => {
    if(
      dataCategory &&
      dataTitle &&
      dataDescription &&
      dataPrice &&
      dataCountry &&
      dataImage 
    ) {
      const formData = new FormData();
      formData.append('category', dataCategory);
      formData.append('title', dataTitle);
      formData.append('description', dataDescription);
      formData.append('price_per_night', dataPrice);
      formData.append('bedrooms', dataBedRooms);
      formData.append('bathrooms', dataBathRooms);
      formData.append('guests', dataGuests);
      formData.append('country', dataCountry.label);
      formData.append('country_code', dataCountry.value);
      formData.append('image', dataImage);

      const response = await apiServices.post('/api/properties/create/', formData);
      if (response.success) {
        console.log('SUCCESS :-D');

        router.push('/');

        addPropertymodal.close();
      } else {
        console.log('Error');
        const tmpErrors: string[] = Object.values(response).map((error: any) => {
          return error;
        })
        setErrors(tmpErrors)

      }
    }
  }

  const content = (
    <>
      {currentStep === 1 ? (
        <>
          <h2 className="my-6 text-2xl ">Choose Category</h2>
          <Categories
            dataCategory={dataCategory}
            setCategory={(category) => setCategory(category)}
          />
          <CustomButton title={"Next"} onClick={() => setCurrentStep(2)} />
        </>
      ) : currentStep == 2 ? (
        <>
          <h2 className="my-6 text-2xl">Describe your place</h2>
          <div className="py-4 space-y-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="title">Title*</label>
              <input
                id="title"
                type="text"
                value={dataTitle}
                onChange={(e) => setDataTitle(e.target.value)}
                className="w-full p-2 border-b outline-none"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="description">Description*</label>
              <textarea
                id="description"
                value={dataDescription}
                onChange={(e) => setDataDescription(e.target.value)}
                className="w-full p-2 border-b outline-none min-h-[200px]"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <CustomButton
              title={"Previous"}
              onClick={() => setCurrentStep(1)}
            />
            <CustomButton title={"Next"} onClick={() => setCurrentStep(3)} />
          </div>
        </>
      ) : currentStep == 3 ? (
        <>
          <h2 className="my-6 text-2xl">Details</h2>
          <div className="py-4 space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex flex-col space-y-2">
                <label htmlFor="price">Price per night*</label>
                <input
                  id="price"
                  type="number"
                  value={dataPrice}
                  onChange={(e) => setDataPrice(e.target.value)}
                  className="w-full p-2 border-b outline-none"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="bed">Bed Rooms*</label>
                <input
                  id="bed"
                  type="number"
                  value={dataBedRooms}
                  onChange={(e) => setDataBedRooms(e.target.value)}
                  className="w-full p-2 border-b outline-none"
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col space-y-2">
                <label htmlFor="bath">Bath Rooms*</label>
                <input
                  id="bath"
                  type="number"
                  value={dataBathRooms}
                  onChange={(e) => setDataBathRooms(e.target.value)}
                  className="w-full p-2 border-b outline-none"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="guest">Guest*</label>
                <input
                  id="guest"
                  type="number"
                  value={dataGuests}
                  onChange={(e) => setDataGuests(e.target.value)}
                  className="w-full p-2 border-b outline-none"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <CustomButton
              title={"Previous"}
              onClick={() => setCurrentStep(2)}
            />
            <CustomButton title={"Next"} onClick={() => setCurrentStep(4)} />
          </div>
        </>
      ) : currentStep == 4 ? (
        <>
          <h2 className="my-6 text-2xl">Location</h2>
          <div className="py-4 space-y-4">
            <SelectCountry
              value={dataCountry}
              onChange={(value) => setDataCountry(value as SelectCountryValue)}
            />
          </div>
          <div className="flex justify-between items-center">
            <CustomButton
              title={"Previous"}
              onClick={() => setCurrentStep(3)}
            />
            <CustomButton title={"Next"} onClick={() => setCurrentStep(5)} />
          </div>
        </>
      ) : (
        <>
          <h2 className="my-4 text-2xl">Image</h2>
          <div className="py-3">
            <div>
            <input type='file' accept="image" onChange={setImage}/>
            </div>
            <>
            {
              dataImage && (
                <div className="w-[200px] mt-3 h-[150px] relative">
                  <Image
                  fill
                  alt="Upload image"
                  src={URL.createObjectURL(dataImage)}
                  className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              )
            }
            {errors.map((error, index) => {
              return (
                <div key={index} 
                className="p-5 bg-gradient-to-br from-red-50 to-red-300 text-red-500 rounded-md opacity-80"
                >
                    {error}
                  </div>
                );
              })
            }
            </>
          </div>
          <div className="flex items-center justify-between">
          <CustomButton title={"Previous"} onClick={() => setCurrentStep(4)} />
          <CustomButton title={"Submit"} onClick={submitForm} />
          </div>
        </> 
      )}
    </>
  );

  return (
    <>
      <Modal
        isOpen={addPropertymodal.isOpen}
        close={addPropertymodal.close}
        title="Add Property"
        content={content}
      />
    </>
  );
};

export default AddPropertyModal;
