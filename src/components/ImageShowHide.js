import React from 'react'

const ImageShowHide = class extends React.Component {

	state = { showOld : false }

	toggleImage = () => {
		this.setState({
	      showOld: !this.state.showOld
	    })
	}

	render() {

		const newImage = this.state.showOld ? 'opacity-0' : 'opacity-100';

		return (

			<div>

				<button className="absolute bottom-0 left-0 z-30 p-2 text-black text-white transition bg-white bg-orange-700 cursor-pointer font-color-font hover:bg-gray-300 hover:text-black" onClick={this.toggleImage} onKeyDown={this.toggleImage}>
					<span className="display-text">Toggle Designs</span>
				</button>

				<div className={"absolute-image-holder " + newImage}>

					{this.props.children}

				</div>

			</div>

		)
	}

}

export default ImageShowHide
