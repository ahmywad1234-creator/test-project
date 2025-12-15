import React from 'react'

export default function Portfolio() {
  return (
    <>
      <head>
        <title>protfolio</title>
      </head>
      <section className='py-5'>
        <div className="container">
          <div className="title my-3">
            <h2 className="text-center fw-bold fs-1 mt-5 pt-5">portfolio component</h2>
            <div className="d-flex justify-content-center align-items-center">
              <div className="bg-dark" style={{ width: 80, height: 4 }} />
              <i className="fa-solid fa-star mx-3" />
              <div className="bg-dark" style={{ width: 80, height: 4 }} />
            </div>
          </div>

          <div className="row g-5">
            <div className="col-md-6 col-lg-4">
              <img className='w-100' src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="" />
            </div>

            <div className="col-md-6 col-lg-4">
              <img className='w-100' src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="" />
            </div>

            <div className="col-md-6 col-lg-4">
              <img className='w-100' src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt="" />
            </div>

            <div className="col-md-6 col-lg-4">
              <img className='w-100' src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="" />
            </div>

            <div className="col-md-6 col-lg-4">
              <img className='w-100' src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="" />
            </div>

            <div className="col-md-6 col-lg-4">
              <img className='w-100' src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt="" />
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
