import React from 'react'

export default function Contact() {
  return (
    <>
      <head>
        <title>contact</title>
      </head>
      <section className='vh-100 position-relative'>
        <div className="container position-absolute top-50 start-50 translate-middle text-center">
          {/* Title */}
          <h2 className="text-center fw-bold fs-1">CONTACT SECTION</h2>
          {/* Star */}
          <div className="d-flex justify-content-center align-items-center my-4">
            <div className="bg-dark" style={{ width: 80, height: 4 }} />
            <i className="fa-solid fa-star mx-3" />
            <div className="bg-dark" style={{ width: 80, height: 4 }} />
          </div>
          {/* Form */}
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form>
                <input
                  type="text"
                  className="form-control border-0 border-bottom rounded-0 mb-4"
                  placeholder="userName"
                />
                <input
                  type="number"
                  className="form-control border-0 border-bottom rounded-0 mb-4"
                  placeholder="userAge"
                />
                <input
                  type="email"
                  className="form-control border-0 border-bottom rounded-0 mb-4"
                  placeholder="userEmail"
                />
                <input
                  type="password"
                  className="form-control border-0 border-bottom rounded-0 mb-4"
                  placeholder="userPassword"
                />
                <button className="btn btn-success px-4">send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
