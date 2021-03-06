import React from 'react'
import AnimatedLink from "../components/AnimatedLink"
import Social from "./Social"

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
      <div className={`transform navigation-wrapper bg-brown-dark navigation-wrapper--${menuActive} fixed top-0 left-0 translate-x-full transition duration-75 p-6 w-full h-screen z-40 text-lg md:relative md:h-auto md:top-auto md:translate-x-0 md:p-3 md:w-auto md:bg-transparent`} >
        <ul className="">
          <li><AnimatedLink className="text-brown-feint block md:text-right" activeClassName="active" to="/">Home</AnimatedLink></li>
            <li><AnimatedLink className="text-brown-feint block md:text-right" activeClassName="active" to="/developer">Developer</AnimatedLink></li>
            <li><AnimatedLink className="text-brown-feint block md:text-right" activeClassName="active" to="/designer">Designer</AnimatedLink></li>
            <li><AnimatedLink className="text-brown-feint block md:text-right" activeClassName="active" to="/manager">Manager</AnimatedLink></li>
            <li><AnimatedLink className="text-brown-feint block md:text-right" activeClassName="active" to="/musician">Musician</AnimatedLink></li>
            <li><AnimatedLink className="text-brown-feint block md:text-right" activeClassName="active" to="/artist">Artist</AnimatedLink></li>
            <li><AnimatedLink className="text-brown-feint block md:text-right" activeClassName="active" to="/hobbyist">Hobbyist</AnimatedLink></li>
            <li><AnimatedLink className="text-brown-feint block md:text-right" activeClassName="active" to="/recommended">Recommended</AnimatedLink></li>
            <li><AnimatedLink className="text-brown-feint block md:text-right" activeClassName="active" to="/contact">Contact</AnimatedLink></li>
        </ul>
        <Social />
      </div>
      <div>
      </div>
      <button className={`${burgerActive} navigation-button w-12 h-12 block fixed top-0 right-0 mt-1 mr-1 bg-brown-light z-50 cursor-pointer md:hidden`} onClick={this.toggleMenu} onKeyDown={this.toggleMenu} >
        <div className={`relative w-full h-full z-100 ${burgerActive}`}>
          <span className="navigation-button__lines navigation-button__line-1 left-0"></span>
          <span className="navigation-button__lines navigation-button__line-2 left-0 mt-2"></span>
          <span className="navigation-button__lines navigation-button__line-3 left-0 mt-4"></span>
          <span className="navigation-button__lines navigation-button__line-4 right-0"></span>
          <span className="navigation-button__lines navigation-button__line-5 right-0 mt-2"></span>
          <span className="navigation-button__lines navigation-button__line-6 right-0 mt-4"></span>
        </div>
      </button>
    </nav>
  )}
}

export default Navigation
