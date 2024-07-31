import React from 'react'
import Conversation from '@/components/inbox/Conversation'

const InboxPage = () => {
  return (
    <div className="w-[90%] md:w-[1550px] mx-auto">
      <h2 className='font-bold text-2xl my-4'>InboxPage</h2>
      <div className="space-y-4">
        <Conversation/>
        <Conversation/>
        <Conversation/>
      </div>
    </div>
  );
}

export default InboxPage;