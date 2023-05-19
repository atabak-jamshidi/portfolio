import React from 'react'
import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '../hooks/useMediaQuery'

const Link = ({page, selectedPage, setSelectedPage}) => {
  const lowerCasePage = page.toLowerCase()
  return (
    <AnchorLink className={`${selectedPage === lowerCasePage ? "text-yellow" : ""} anchor `} href={`#${lowerCasePage}`} onClick={() =>{
      setSelectedPage(lowerCasePage)
    }}>
      {page}
    </AnchorLink>
  )
}

export const Navbar = ({isTopOfPage,selectedPage, setSelectedPage}) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)")
  const navbarBackGround = isTopOfPage  ? "" : "bg-red";
  return (
    <nav className={`${navbarBackGround} navbar`}>
      <div className='navbar-main-div'>
        <h4 className='main-div-title'>Sajad D.</h4>

        {isAboveSmallScreens ? (
        <div className='smallScreen-true'>
          <Link page="Home"  selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
          <Link page="Skills"  selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
          <Link page="Projects"  selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
          <Link page="Testimonials"  selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
          <Link page="Contact"  selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        </div>
        ) : (
        <button className='navbar-button' onClick={()=> setIsMenuToggled(!isMenuToggled)}>
          <img src='../../public/assets/menu-icon.svg' alt='menu-icon' />
        </button>
        )}

        {/* Mobile Menu Screen */}
          {!isAboveSmallScreens && isMenuToggled && (
            <div className='mobile-main'>
              <div className='mobile-div-1'>
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <img src='../../public/assets/close-icon.svg' alt='close-icon' />
                </button>
              </div>

              {/* Menu Items */}
              <div className='mobile-menu'>
              <Link page="Home"  selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page="Skills"  selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page="Projects"  selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page="Testimonials"  selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page="Contact"  selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              </div>
            </div>
          )}

      </div>
    </nav>
  )
}

export default Navbar
