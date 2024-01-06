'use client';
import { useState } from "react";

export default function Navbar() {

    const [collapse, setCollapse] = useState(false)

    const handleCollapse = () => {
        setCollapse(!collapse);
    }

    return (<>
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark mb-4">
            <div className="container">
                <a className="navbar-brand" href="#"><b>info</b>clima</a>
                <button onClick={() => handleCollapse()} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={collapse ? "navbar-collapse d-flex justify-content-end" : "collapse navbar-collapse d-flex justify-content-end"} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>);
}