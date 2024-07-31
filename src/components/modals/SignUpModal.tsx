"use client";

import { useRouter } from "next/navigation";
import CustomButton from "../form/CustomButton";
import useSignUpModal from "../hooks/useSignUp";
import Modal from "./Modal";
import { useState } from "react";
import apiServices from "@/app/services/apiServices";
import { handleLogin } from "@/app/lib/action";


const SignUpModal = () => {
  const router = useRouter();
  const signUpModal = useSignUpModal();
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  // submit functionnality
  const submitSignup = async () => {
    const formData = {
      email: email, 
      password1: password1,
      password2: password2
    }

    const response = await apiServices.postWithoutToken('/api/auth/register/',  JSON.stringify(formData));
    if (response.access) {
      handleLogin(response.user.pk, response.access, response.refresh)

      signUpModal.close();

      router.push('/')
    } else {
      const tmpErrors: string[] = Object.values(response).map((error:any) => {
        return error
      })
      setErrors(tmpErrors)
    }
  }

  const content = ( 
      <form className="space-y-4" action={submitSignup}>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your e-mail address"
          className="w-full border-b outline-none py-4 px-2"
        />
        <input
          type="password"
          onChange={(e) => setPassword1(e.target.value)}
          placeholder="Your password"
          className="w-full border-b outline-none py-4 px-2"
        />
        <input
          type="password"
          onChange={(e) => setPassword2(e.target.value)}
          placeholder="Confirm password"
          className="w-full border-b outline-none py-4 px-2"
        />
        {
          errors.map((error, index) => (
        <div key={`error_${index}`} className="p-5 bg-gradient-to-br from-red-50 to-red-300 text-red-500 rounded-md opacity-80">
          {error}
        </div>

          ))
        }
        <CustomButton
          title={"Login"}
          onClick={submitSignup}
        />
      </form>
  );
  return (
    <Modal
      isOpen={signUpModal.isOpen}
      close={signUpModal.close}
      title="SignUp"
      content={content}
    />
  );
};

export default SignUpModal;
