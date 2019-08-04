import React from 'react'

const ImageShowHide = class extends React.Component {

	state = { showOld : false }

	toggleImage = () => {
		this.setState({
	      showOld: !this.state.showOld
	    })
	}

	render() {

		const newImage = this.state.showOld ? 'hidden' : 'block';

		return (

			<div>

				<div className="absolute bottom-0 font-color-font left-0 z-50 bg-white text-black p-2 bg-brown-standard text-brown-feint cursor-pointer" onClick={this.toggleImage}>
					Show original design
				</div>

				<div className={newImage}>

					{this.props.children}

				</div>

			</div>

		)
	}

}

export default ImageShowHide
