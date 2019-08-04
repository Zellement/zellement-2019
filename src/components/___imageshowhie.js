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

			<div className="relative">

				<div className="absolute top-0 right-0 z-10 bg-white text-black" onClick={this.toggleImage}>Toggle</div>

				<div className={newImage}>

					NEWIMAGEHERE

					{this.props.children}

				</div>

			</div>

		)
	}

}

export default ImageShowHide
