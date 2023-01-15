import React from 'react'

function Card() {
    return (
        <div className="card w-75 bg-base-100 shadow-xl image-full">
        <figure><img src="https://www.sparrowsph.my/image/data/theme/Entrepreneurs%20Listed/vitrox-chu-logo_030922231458.jpg" alt="Company" /></figure>
        <div className="card-body">
          <h2 className="card-title text-[#F68B1F] font-projectFont">JOB TITLE</h2>
          <p></p>
          <p className="text-[#311B92] font-projectFont">Company Name</p>
          <p className="text-[#311B92] font-projectFont">Location</p>
          <div className="card-actions justify-end">
          <button className="px-7 py-2.5 rounded-lg border font-projectFont text-base font-medium bg-blue text-white hover:bg-blue-500 hover:scale-105 active:bg-blue-200">Apply</button>
          </div>
        </div>
      </div>
    )
}

export default Card

