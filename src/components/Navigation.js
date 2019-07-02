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
      <div className={`navigation-wrapper navigation-wrapper--${menuActive} fixed transition-fast transform-x--100 top-0 left-0 p-6 w-full h-screen bg-black sm:relative sm:h-auto sm:float-right sm:top-auto sm:transform-x-0 sm:p-3 sm:w-auto`} >
        <ul className="">
          <li className="sm:inline-block">
            <AnimatedLink className="text-white block sm:inline-block" activeClassName="active" to="/">Home</AnimatedLink>
            <AnimatedLink className="text-white block sm:inline-block" activeClassName="active" to="/about">About</AnimatedLink>
            <AnimatedLink className="text-white block sm:inline-block" activeClassName="active" to="/">Contact</AnimatedLink>
          </li>
        </ul>
      </div>
      <div className={`${burgerActive} navigation-button w-12 h-12 block fixed top-0 right-0 bg-black z-10 cursor-pointer sm:hidden`} onClick={this.toggleMenu}>
        <div className={`relative w-full h-full bg-cyan:200 z-100 ${burgerActive}`}>
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
