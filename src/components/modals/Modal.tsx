"use client"
import { X } from 'lucide-react'
import { useEffect, useState, useCallback } from "react";

interface Modal {
    title: String;
    close: () => void
    content: React.ReactElement;
    isOpen:boolean;
}

const Modal:React.FC<Modal> = ({
    title,
    content,
    isOpen,
    close
    }) => {
        const [showModal, setShowModal] = useState(isOpen)

    useEffect(() => {
        setShowModal(true)
    },[isOpen])

    const handleClose = useCallback(() => {
        setShowModal(false);
        setTimeout(() => {
            close()
        }, 300)
    }, [close])
    
    if(!isOpen){
        return null
    }
  return (
    <div className="fixed flex items-center justify-center inset-0 z-50 bg-black/50 rounded-xl">
      <div
        className={`bg-white p-4 w-[90%] ${
          showModal
            ? "translate-y-0 opacity-100 "
            : "translate-y-full opacity-10"
        } md:w-[40%] rounded-3xl ease-in-out duration-2 00`}
      >
        <div className="border-b flex items-center justify-between">
          <X className="w-[6%] h-[6%] block self-start text-2xl hover:bg-slate-300 rounded-full" onClick={handleClose} />
          <span className="w-[94%] py-5 text-center text-2xl font-normal">
            {title}
          </span>
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
}

export default Modal