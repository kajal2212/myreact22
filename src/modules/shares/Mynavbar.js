import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';




function Mynavbar() {
    return (
        <Fragment>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="pp">Navbar</Link>
                            <button className="navbar-toggler" role="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="myabout">About
                                        </Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className="nav-link" to="mygraph">graph
                                        </Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className="nav-link" to="myaxiosdata">axios
                                        </Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className="nav-link" to="mycontacts">contacts
                                        </Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="pp" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="pp">Action</Link></li>
                                            <li><Link className="dropdown-item" to="pp">Another action</Link></li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li><Link className="dropdown-item" to="pp">Something else here</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        </Fragment>
    )
}
export default Mynavbar
