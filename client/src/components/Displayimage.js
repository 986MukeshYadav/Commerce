import React from 'react'

const Displayimage = (
  {  imgUrl,
    onClose}
) => {
  return (
        <div className='fixed bottom-0 top-0 right-0 left-0 '>
        <div className='flex justify-center p-4 max-w-[70vw] max-h-[80vh]'>
        <img src={imgUrl} className='w-full h-full' alt=''/>
        </div>
    </div>
  )
}

export default Displayimage
