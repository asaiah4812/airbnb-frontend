"use client"
import { CircleUser, Menu } from 'lucide-react';

import { useState } from "react";
import MenuLink from './MenuLink';
import useLoginModal from '../hooks/useLoginModal';
import useSignUpModal from '../hooks/useSignUp';
import LogoutButton from '../LogoutButton';


interface UserNavProps {
  userId?: string | null;
}


const UserNav: React.FC<UserNavProps> = ({userId}) => {
    const loginModal = useLoginModal()
    const signUpModal = useSignUpModal()
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="flex items-center">
            <div onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-3 border hover:bg-slate-200 p-4 rounded-full absolute">
                <Menu />
                <CircleUser />
            </div>
            {isOpen && (
                <div className="p-4 bg-gray-100 fixed top-0 right-0 mt-[4.65%] md:mr-[5%] border rounded-sm">
                {/* <p>{userId}</p> */}
                    {userId ? (
                        <LogoutButton /> 
                    ) : (
                        <>
                        <MenuLink 
                        label={'Login'} 
                        onClick={()=> {
                        setIsOpen(false)
                        loginModal.open()}
                      }/>
                      <MenuLink 
                      label={'SignUp'} 
                      onClick={()=> {
                          setIsOpen(false)
                          signUpModal.open()
                      }}/>
                        </>
                      
                    )}
                </div>
            )}
        </div>
    );
}

export default UserNav;