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

				<div className="absolute bottom-0 font-color-font left-0 z-30 bg-white text-black p-2 bg-orange-700 text-white cursor-pointer" onClick={this.toggleImage}>
					<span className="display-text">Toggle Designs</span>
				</div>

				<div className={"absolute-image-holder " + newImage}>

					{this.props.children}

				</div>

			</div>

		)
	}

}

export default ImageShowHide
