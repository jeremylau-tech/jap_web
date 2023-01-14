import React from 'react'

function Skills() {
  return (
  <div className='w-full py-[80px] bg-white'>
    <div className='shadow-md rounded px-8 pt-6 pb-8 mb-4'>
    <div className=''>
        <h1 className='text-[#F68B1F] md:text-3xl sm:text-2xl text-2xl font-bold text-left pb-4'>Job Title</h1>
        <h3 className='text-[#311B92] md:text-xl sm:text-l text-m font-medium text-left pb-4'>Skills</h3>
        <p>C++</p>
        <select className="select select-bordered w-full max-w-xs">
        <option>1- Beginner</option>
        <option>2- Intermediate</option>
        <option>3- Advanced</option>
        </select>
        <h3 className='text-[#311B92] md:text-xl sm:text-l text-m font-medium text-left pb-4'>Language</h3>
        <p>English</p>
        <select className="select select-bordered w-full max-w-xs">
        <option>1- Beginner</option>
        <option>2- Intermediate</option>
        <option>3- Advanced</option>
</select>
    </div>
    <div className='max-w-[1240px] mx-8 md:mx-auto grid md:grid-cols-3 gap-2 md:gap-8;'>
    </div>

    </div>
</div>

  )
}

export default Skills