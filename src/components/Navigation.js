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
    <nav className=" md:float-right">
      <div className={` ${menuActive} hidden md:block`} >
        <div className="">
        <ul className="">
          <li className="">
          <AnimatedLink className="" activeClassName="active" to="/">Home</AnimatedLink>
          </li>
          </ul>
        </div>
      </div>
      <div className={`${burgerActive} navigation-button w-12 h-12 block md:hidden fixed top-0 right-0 bg-black z-10 cursor-pointer `} onClick={this.toggleMenu}>
        <div className={`relative w-full h-full bg-cyan:200 z-100 ${burgerActive}`}>
          <span className="navigation-lines left-0"></span>
          <span className="navigation-lines left-0 mt-2"></span>
          <span className="navigation-lines left-0 mt-4"></span>
          <span className="navigation-lines right-0"></span>
          <span className="navigation-lines right-0 mt-2"></span>
          <span className="navigation-lines right-0 mt-4"></span>
        </div>
      </div>
    </nav>
  )}
}

export default Navigation
