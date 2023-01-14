import React from 'react'

function Content() {
  return (
  <div className='w-full py-[80px] bg-white px-8 pt-6 pb-8 mb-4'>
    <figure><img src="https://www.sparrowsph.my/image/data/theme/Entrepreneurs%20Listed/vitrox-chu-logo_030922231458.jpg" alt="Company" height-150px width-200px /></figure> 
    <div className=''>
    <div className='shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h1 className='text-[#F68B1F] md:text-3xl sm:text-2xl text-2xl font-bold text-left pb-4'>Job Title</h1>
        <h3 className='text-[#311B92] md:text-xl sm:text-l text-m font-medium text-left pb-4'>Company Name</h3>
        <h4 className='text-[#311B92] md:text-l sm:text-m text-s font-regular text-left pb-4'>Location</h4>
    </div>
    <div className='max-w-[1240px] mx-8 md:mx-auto grid md:grid-cols-3 gap-2 md:gap-8;'>
    </div>

    <div className='shadow-md rounded px-8 pt-6 pb-8 mb-4'>
    <h3 className='text-[#311B92] md:text-xl sm:text-l text-m font-bold text-left pb-4'>Job Details</h3>
        <p className='text-[#000000] md:text-l sm:text-m text-s font-regular text-left pb-4'>
            <p className='font-bold'>Requirements:</p>
        <ul className='list-style-type-disc'>
            <li>1st requirement</li>
            <li>2nd requirement</li>
        </ul>
        </p>

        <p className='text-[#000000] md:text-l sm:text-m text-s font-regular text-left pb-4'>
        <p className='font-bold'>Job Scope:</p>
        <ul className='list-style-type-disc'>
            <li>1st requirement</li>
            <li>2nd requirement</li>
        </ul>
        </p>
    </div>
    </div>
</div>
  )
}

export default Content