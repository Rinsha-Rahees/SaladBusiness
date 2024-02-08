import React from 'react'

function NavigationBar() {
  return (
    <div className='flex flex-row items-center justify-between w-full 2xl:w-1/3 m-1 mt-5'>
      <div className='flex flex-row items-center float-left mx-2'>
        <img 
          className ="w-8"
          src="/Images/logo.png" alt="Logo" />
        <h1 className ="invisible sm:visible 2xl:invisible font-extrabold text-xl">Leafy Bites</h1>
      </div>

      <div className='flex flex-row items-center float-right'>
        <div className='invisible sm:visible flex flex-row text-xl'>
          <h2 className="mr-10">About</h2>
          <h2 className="mr-10">Delights</h2>
          <h2 className=''>Contact Us</h2>
        </div>
        <div className='visible sm:invisible flex flex-row mr-4'>
          <button className='w-6 focus:outline-none'>
            <img
            className='w-6'
            src='/Images/menu.png'/>
          </button>
        </div>
      </div>

      
    </div>
  )
}

export default NavigationBar