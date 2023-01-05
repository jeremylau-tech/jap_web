import React from 'react';

function Announcement() {
  return (
    <div className='w-full py-16 lg:px-[200px] px-[50px] text-white text-center'>
      <div>
        <h1 className='text-[#F68B1F] md:text-3xl sm:text-2xl text-xl font-bold text-center pb-4'>Announcement</h1>
      </div>
      <div className='bg-white text-black md:rounded-xl rounded-lg my-4'>
        <div className='md:px-[80px] px-[30px] pt-10 grid lg:grid-cols-2 lg:gap-8 gap-2'>
          <h1 className='font-medium text-lg lg:text-left'>MPP Election Day</h1>  {/** title */}
          <h1 className='font-medium text-md lg:text-right'>[ 5th December 2022 ]</h1>  {/** date */}
        </div>
        <div className='md:px-[80px] px-[40px] md:mb-3 mb-5 md:mt-3 mt-6 text-justify'>
          <p>All students are required to vote at Dewan Pelajar from 8am - 6pm.</p>  {/** details */}
        </div>
        <div className='px-[80px] pt-5 pb-10 flex justify-center'>    {/** button */}
          <button className='bg-[#F68B1F] w-[110px] h-[45px] font-medium rounded-lg mx-auto my-auto content-center text-black hover:scale-105 duration-300'>
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Announcement
