import React from 'react'
import AnimatedLink from "../components/AnimatedLink"

const Navigation = class extends React.Component {

  state = { showMenu : false }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
 
  render() {
    const menuActive = this.state.showMenu ? 'is-active' : '';
    const burgerActive = this.state.showMenu ? 'is-active' : '';
    return (     
    <nav className="">
      <div className={`navigation-wrapper navigation-wrapper--${menuActive} fixed transition-fast transform-x--100 top-0 left-0 p-6 w-full h-screen text-lg md:relative md:h-auto md:top-auto md:transform-x-0 md:p-3 md:w-auto`} >
        <ul className="">
          <li><AnimatedLink className="text-white block md:text-right" activeClassName="active" to="/">Home</AnimatedLink></li>
            <li><AnimatedLink className="text-white block md:text-right" to="/">Developer</AnimatedLink></li>
            <li><AnimatedLink className="text-white block md:text-right" to="/">Designer</AnimatedLink></li>
            <li><AnimatedLink className="text-white block md:text-right" to="/">Artist</AnimatedLink></li>
            <li><AnimatedLink className="text-white block md:text-right" to="/">Manager</AnimatedLink></li>
            <li><AnimatedLink className="text-white block md:text-right" to="/">Musician</AnimatedLink></li>
            <li><AnimatedLink className="text-white block md:text-right" to="/">Other</AnimatedLink></li>
            <li><AnimatedLink className="text-white block md:text-right" to="/">Contact</AnimatedLink></li>
        </ul>
      </div>
      <div className={`${burgerActive} navigation-button w-12 h-12 block fixed top-0 right-0 bg-brown-light z-10 cursor-pointer md:hidden`} onClick={this.toggleMenu}>
        <div className={`relative w-full h-full z-100 ${burgerActive}`}>
          <span className="navigation-button__lines navigation-button__line-1 left-0"></span>
          <span className="navigation-button__lines navigation-button__line-2 left-0 mt-2"></span>
          <span className="navigation-button__lines navigation-button__line-3 left-0 mt-4"></span>
          <span className="navigation-button__lines navigation-button__line-4 right-0"></span>
          <span className="navigation-button__lines navigation-button__line-5 right-0 mt-2"></span>
          <span className="navigation-button__lines navigation-button__line-6 right-0 mt-4"></span>
        </div>
      </div>
    </nav>
  )}
}

export default Navigation
