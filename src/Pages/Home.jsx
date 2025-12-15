import React from 'react'

export default function Home() {
  return (
    <>
      <section className='vh-100 position-relative'>
        <div className="container position-absolute top-50 start-50 translate-middle text-center">
          <div className="image">
            <img src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg" alt="" />
          </div>
          <h2 className="text-center fw-bold fs-1">start Framework</h2>
          <div className="d-flex justify-content-center align-items-center my-4">
            <div className="bg-dark" style={{ width: 80, height: 4 }} />
            <i className="fa-solid fa-star mx-3" />
            <div className="bg-dark" style={{ width: 80, height: 4 }} />
          </div>
          <div className="info">
            <p className='mb-0'>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </section>
    </>
  )
}
