import React from 'react'

function Card() {
    return (
        <div className="card w-75 bg-base-100 shadow-xl image-full">
        <figure><img src="https://www.sparrowsph.my/image/data/theme/Entrepreneurs%20Listed/vitrox-chu-logo_030922231458.jpg" alt="Company" /></figure>
        <div className="card-body">
          <h2 className="card-title text-[#F68B1F] font-style=[Times New Roman]">JOB TITLE</h2>
          <p></p>
          <p className="text-[#311B92]">Company Name</p>
          <p className="text-[#311B92]">Location</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary mb1 bg-blue">Apply</button>
          </div>
        </div>
      </div>
    )
}

export default Card

