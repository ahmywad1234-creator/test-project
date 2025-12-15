import React from 'react'
import { Link } from 'react-router'

export default function Footer() {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Link className="navbar-brand text-light" to="/">Portfolio</Link>
                        <p className="mt-2">Showcasing my work and skills.</p>
                    </div>
                    <div className="col-md-6">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link className="text-light" to="/about">About</Link></li>
                            <li><Link className="text-light" to="/portfolio">Portfolio</Link></li>
                            <li><Link className="text-light" to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="text-center">
                    <p>&copy; 2025 Portfolio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
