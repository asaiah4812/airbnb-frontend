import React from 'react'

interface main {
    margin: String,
    name: String,
    body: String
}

const ConversationDetail = ({margin, name, body}: main) => {
  return (
    <div className={`p-3 rounded-md border space-y-4 ${margin} bg-gray-200 hove:bg-gray-300 w-[60%]`}>
        <span className='text-lg font-bold text-gray-600'>{name}</span>
        <p>
            {body}
        </p>
    </div>
  )
}

export default ConversationDetail