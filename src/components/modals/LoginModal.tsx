"use client"

import { handleLogin } from "@/app/lib/action"
import CustomButton from "../form/CustomButton"
import useLoginModal from "../hooks/useLoginModal"
import Modal from "./Modal"
import apiServices from "@/app/services/apiServices"
import { useRouter } from "next/navigation"
import { useState } from "react"
// import zustand from "zustand"


const LoginModal = () => {
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<string[]>([])
    // handleLogin()
    // apiServices()
    const loginModal = useLoginModal()

    const submitLogin = async () => {
        const formData = {
            email: email,
            password: password
        }

        const response = await apiServices.postWithoutToken('/api/auth/login/', JSON.stringify(formData));
            if (response.access) {
                handleLogin(response.user.pk, response.access, response.refresh);
                loginModal.close();

                router.push('/')
            } else {
                setErrors(response.non_field_errors);
            }
        
    }

    const content = (
      <>
        <form action={submitLogin} className="space-y-4">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your e-mail address"
            className="w-full border-b outline-none py-4 px-2"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Your password"
            className="w-full border-b outline-none py-4 px-2"
          />
          {errors.map((error, index) => (
            <div
              key={`error_${index}`}
              className="p-5 bg-gradient-to-br from-red-50 to-red-300 text-red-500 rounded-md opacity-80"
            >
              {error}
            </div>
          ))}
          <CustomButton title={"Login"} onClick={submitLogin} />
        </form>
      </>
    );
    return (
       <Modal 
       isOpen={loginModal.isOpen}
       close={loginModal.close}
       title="Login"
        content={content}
       />
    )
}


export default LoginModal;