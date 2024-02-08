import React, { useState } from 'react'

function Hero() {

  const image = ['/Images/menu.png', '/Images/logo.png', '/Images/logo.png']

  const [curr, setCurr] = useState(0)

  const [imgUrl, setImgUrl] = useState([''])


  const next = () => {
    if(curr){
      setCurr(prev => prev+1)
      setImgUrl([image[curr]])
    }
  }

  console.log(imgUrl)

  return (
    <div className='flex items-center justify-between flex-col-reverse sm:flex-col text-center p-4 sm:p-20 mt-6'>
    <div className="flex flex-col">
      <p className="font-bold text-4xl sm:text-7xl text-green-950">Our Salads</p>
      <p className="text-2xl lg:text-3xl mt-5">Simple and powerful, delicious and healthy! <br/>
      <span className="text-amber-600">What more, you ask? We have it.</span>
      <br/>We offer a wide range of options to mix and match from.</p>
    </div>

    <div className="flex flex-row items-center justify-between mt-8 w-full">
      <button className='flex float-left focus:outline-none' onClick={next()}>
        
        <img className="w-24" 
        src="/Images/left.png"/>

      </button>
      
      <img className="w-96" 
      src={next}/>
      
      <button className='flex float-right focus:outline-none' onClick={next()}>
        
        <img className="w-24" 
        src="/Images/right.png"/>

      </button>
    </div>
    
    </div>
  )
}

export default Hero

