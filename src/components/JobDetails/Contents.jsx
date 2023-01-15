import React from 'react'

function Content() {
  return (
  <div className='w-full py-[80px] bg-white px-10 pt-6 pb-8'>
    <figure className='h-[150px] w-[350px] mx-auto inline-flex px-10'><img src="https://www.sparrowsph.my/image/data/theme/Entrepreneurs%20Listed/vitrox-chu-logo_030922231458.jpg" alt="Company" img-height='1px'/></figure> 
    <div className='shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h1 className='text-[#F68B1F] font-projectFont md:text-3xl sm:text-3xl text-3xl font-bold text-left pb-4'>Job Title</h1>
        <h3 className='text-[#311B92] font-projectFont md:text-xl sm:text-xl text-m font-medium text-left pb-4'>Company Name</h3>
        <h4 className='text-[#311B92] font-projectFont md:text-l sm:text-m text-s font-regular text-left pb-4'>Location</h4>
    </div>
    <div className='max-w-[1240px] mx-8 md:mx-auto grid md:grid-cols-3 gap-2 md:gap-8;'>
    </div>

    <div className='shadow-md rounded px-10 pt-6 pb-8 mb-4'>
    <h3 className='font-projectFont text-[#311B92] md:text-2xl sm:text-2xl text-xl font-bold text-left pb-4'>Job Details</h3>
        <p className='text-[#000000] md:text-l sm:text-m text-s font-regular text-left pb-4'>
            <p className='font-projectFont font-bold'>Requirements:</p>
        <ul className='font-projectFont list-style-type-disc'>
            <li>1st requirement</li>
            <li>2nd requirement</li>
        </ul>
        </p>

        <p className='text-[#000000] md:text-l sm:text-m text-s font-regular text-left pb-4'>
        <p className='font-projectFont font-bold'>Job Scope:</p>
        <ul className='font-projectFont list-style-type-disc'>
            <li>1st requirement</li>
            <li>2nd requirement</li>
        </ul>
        </p>
    </div>
    <div className='flex justify-end mt-8 text-center w-full md:w-9/12 mx-auto'>
            <button className='px-8 py-3 mb-16 rounded-lg border font-projectFont text-base font-medium bg-blue text-white hover:bg-blue-500 hover:scale-105 active:bg-blue-200'>Apply</button>
    </div>
</div>
  )
}

export default Content