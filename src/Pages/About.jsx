import React from 'react'


export default function About() {
  return (
    <>
    <head>
      <title>about</title>
    </head>
      <section className='vh-100 position-relative'>
        <div className="container position-absolute top-50 start-50 translate-middle text-center">
          <h2 className="text-center fw-bold fs-1">about component</h2>
          <div className="d-flex justify-content-center align-items-center my-4">
            <div className="bg-dark" style={{ width: 80, height: 4 }} />
            <i className="fa-solid fa-star mx-3" />
            <div className="bg-dark" style={{ width: 80, height: 4 }} />
          </div>
          <div className="info row justify-content-between align-items-center">
            <p className='col-lg-6 text-start'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            <p className='col-lg-6 text-start'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
      </section>
    </>
  )
}
