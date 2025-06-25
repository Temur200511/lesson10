import React from 'react'
import { Link } from 'react-router-dom'
import headerLogo from '../assets/images/header-logo.png'
import { ContactsOutlined, CreditCardOutlined, FilterOutlined, HeartOutlined, SearchOutlined, ShoppingCartOutlined, SunOutlined, UserOutlined } from '@ant-design/icons'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-6'>
      <Link to={'/'}>
        <img className='w-[200px]' src={headerLogo} alt="" />
      </Link>
      <div className='flex items-center border border-gray-500 p-2'>
        <input className='outline-none w-[350px]' placeholder='Search products...' type="text" />
        <SearchOutlined />
      </div>
      <div className='flex gap-10'>
        <div className='flex flex-col items-center cursor-pointer'>
          <CreditCardOutlined className='text-2xl' />
          <span className='text-[14px]'>UZS/USD</span>
        </div>
        <div className='flex flex-col items-center cursor-pointer'>
          <FilterOutlined className='text-2xl' />
          <span className='text-[14px]'>Filter</span>
        </div>
        <div className='flex flex-col items-center cursor-pointer'>
          <HeartOutlined className='text-2xl' />
          <span className='text-[14px]'>Liked</span>
        </div>
        <div className='flex flex-col items-center cursor-pointer'>
          <ShoppingCartOutlined className='text-2xl' />
          <span className='text-[14px]'>Cart</span>
        </div>
        <div className='flex flex-col items-center cursor-pointer'>
          <ContactsOutlined className='text-2xl' />
          <span className='text-[14px]'>Contact</span>
        </div>
        <div className='flex flex-col items-center cursor-pointer'>
          <SunOutlined className='text-2xl' />
          <span className='text-[14px]'>Theme</span>
        </div>
        <div className='px-6 py-2 border border-gray-500 cursor-pointer'>
          <UserOutlined className='text-2xl' />
        </div>
      </div>
    </div>
  )
}

export default Navbar