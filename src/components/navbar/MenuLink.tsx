import Link from 'next/link'
import React from 'react'

interface MenuLinkProps {
    label:String;
    onClick: () => void;
}


const MenuLink:React.FC<MenuLinkProps> = ({onClick, label}) => {
  return (
    <div className='flex gap-1 flex-col rounded-sm'>
                <Link href={'/'} onClick={onClick} className='border-b hover:bg-slate-200 w-full p-3'>{label}</Link>
    </div>
  )
}

export default MenuLink