"use client"
import ConversationDetail from '@/components/inbox/ConversationDetail';
import CustomButton from '@/components/form/CustomButton'
import React from 'react'

const ConversationPage = () => {
  return (
    <main className="w-[90%] md:w-[1550px] mx-auto space-y-4">
      <h2 className="text-xl font-medium mt-3">ConversationPage</h2>
      <ConversationDetail
        margin=""
        name="Asaiah"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Numquam dolor sit mollitia impedit voluptatum culpa provident
             iusto animi a esse."
      />
      <ConversationDetail
        margin="ml-auto bg-red-100"
        name="Enoch"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Numquam dolor sit mollitia impedit voluptatum culpa provident
             iusto animi a esse."
      />
      <form className="fixed bottom-0 left-0 right-0 bg-gray-100 p-2 rounded-md w-full md:w-[1550px] mx-auto flex items-center gap-2">
        <input placeholder="Drop a message" className="w-full p-4 outline-red-200"/>
        <CustomButton 
        title='Send'
        onClick={() => console.log('Clicked')}
        className={''}
        />
      </form>
    </main>
  );
}

export default ConversationPage