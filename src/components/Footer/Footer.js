import React from 'react'
import logo from '../../assets/image/logo.png'

const Footer = () => {
  return (
    <>
    <div className="container-fluid mt-5 pt-5">
  <footer className="pt-3">
    <div className="row">
      <div className="col-6 col-md-3 mb-3 d-flex flex-column fs-6">
       <img src={logo} alt="logo" className='w-75' />
       <span className='text-black fw-bolder text-uppercase fst-italic' style={{letterSpacing: "2px"}}>Nxt Trendz</span>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5 className='fs-5 text-dark'>Collection</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="/home" className="nav-link p-0 text-body-secondary fs-6 text-dark fw-bold">Home</a></li>
          <li className="nav-item mb-2"><a href="/shop" className="nav-link p-0 text-body-secondary fs-6 text-dark fw-bold">Shop</a></li>
          <li className="nav-item mb-2"><a href="/cart" className="nav-link p-0 text-body-secondary fs-6 text-dark fw-bold">Cart</a></li>
          {/* <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">About</a></li> */}
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3 d-none d-md-block d-lg-block">
        <h5 className=' fs-6 text-black fw-bold'>Address</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary fs-6 text-dark fw-bold">Home</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary fs-6 text-dark fw-bold">Features</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary fs-6 text-dark fw-bold">Pricing</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary fs-6 text-dark fw-bold">FAQs</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary fs-6 text-dark fw-bold">About</a></li>
        </ul>
      </div>

      <div className="col-md-4 offset mb-3">
        <form>
          <h5>Collection's   Nxt Trendz</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor ="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="btn btn-outline-danger" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between pt-3 mt-3 border-top">
      <p>© 2024 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-body-emphasis" href="/"><i className="bi bi-twitter fs-4 mx-2"></i></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="/"><i className="bi bi-facebook fs-4 mx-2"></i></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="/"><i className="bi bi-instagram fs-4 mx-2"></i></a></li>
      </ul>
    </div>
  </footer>
</div>
    </>
  )
}

export default Footer