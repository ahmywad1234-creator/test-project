import React from 'react'

export default function Portfolio() {
  return (
    <>
      <head>
        <title>protfolio</title>
      </head>
      <section className='vh-100 position-relative'>
        <div className="container position-absolute top-50 start-50 translate-middle text-center">
          <h2 className="text-center fw-bold fs-1">portfolio component</h2>
          <div className="d-flex justify-content-center align-items-center my-4">
            <div className="bg-dark" style={{ width: 80, height: 4 }} />
            <i className="fa-solid fa-star mx-3" />
            <div className="bg-dark" style={{ width: 80, height: 4 }} />
          </div>
          <div className="row g-5">
            <img className='col-lg-4 col-md-6' src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="" />
            <img className='col-lg-4 col-md-6' src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="" />
            <img className='col-lg-4 col-md-6' src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt="" />
            <img className='col-lg-4 col-md-6' src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="" />
            <img className='col-lg-4 col-md-6' src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="" />
            <img className='col-lg-4 col-md-6' src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}
