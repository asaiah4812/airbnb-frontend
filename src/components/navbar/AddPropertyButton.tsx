"use client";
import React from "react";
import useAddPropertyModal from "../hooks/useAddPropertyModal";
import AddPropertyModal from "../modals/AddPropertyModal";
import useLoginModal from "../hooks/useLoginModal";

interface AddPropertyButtonProps {
  label: string;
  userId?: string | null;
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({
  label,
  userId,
}) => {
  const loginModal = useLoginModal();
  const addPropertyModal = useAddPropertyModal();
  const drmbnbYourHome = () => {
    if (userId) {
      addPropertyModal.open();
    } else {
      loginModal.open();
    }
  };
  return (
    <div
      onClick={drmbnbYourHome}
      className="p-2 border duration-100 ease-in-out hover:bg-slate-200 rounded-md  cursor-pointer"
    >
      {label}
    </div>
  );
};

export default AddPropertyButton;
