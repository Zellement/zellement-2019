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
    <nav className="navigation md:float-right">
      <div className={`navigation__menu ${menuActive} hidden md:block`} >
        <div className="navigation__inside">
        <ul className="navigation__list">
          <li className="navigation__list-item">
          <AnimatedLink className="navigation__item" activeClassName="active" to="/">Home</AnimatedLink>
          </li>
          </ul>
        </div>
      </div>
      <div className={`${burgerActive} w-10 h-10 block md:hidden fixed top-0 right-0 bg-black z-10 cursor-pointer p-8 pb-10`} onClick={this.toggleMenu}>
        <div className={`navigation__burger-inside relative ${burgerActive}`}>
          <span className="block absolute h-3 w-1/2 opacity-100"></span>
          <span className="block absolute h-3 w-1/2 opacity-100"></span>
          <span className="block absolute h-3 w-1/2 opacity-100"></span>
          <span className="block absolute h-3 w-1/2 opacity-100"></span>
          <span className="block absolute h-3 w-1/2 opacity-100"></span>
          <span className="block absolute h-3 w-1/2 opacity-100"></span>
        </div>
      </div>
    </nav>
  )}
}

export default Navigation
