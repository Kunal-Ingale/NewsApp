import React from 'react'

function Navbar({setCategory}) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ">
        

      <li className="nav-item ">
          <button className="nav-link " onClick={()=> setCategory("business")} >Business</button>
        </li>
        <li className="nav-item ">
          <button className="nav-link cursor-pointer" onClick={()=> setCategory("technology")} >Tech</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={()=> setCategory("health")} >Health</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={()=> setCategory("science")} >Science</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={()=> setCategory("sports")} >Sports</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={()=> setCategory("entertainment")} >Etmt</button>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
