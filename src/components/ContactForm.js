import React from 'react'
import SimpleReactValidator from "simple-react-validator"
import { navigateTo } from "gatsby-link"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email_or_telephone: "",
    };
    this.validator = new SimpleReactValidator({
      className: "absolute z-20 top-0 right-0 text-2xl text-white bg-red-800 rounded-full leading-none -mr-1 text-yellow-light p-1 px-2",
      messages: {
        default: '*'
      }
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  handleSubmit = e => {
    if (this.validator.allValid()) {
      const form = e.target;
      this.setState({
        submitting: true
      })

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...this.state
        })
      })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
    e.preventDefault();
  };

  render() {
    return (
        <form
          className="max-w-md mt-4 text-black form"
          name="quick-contact"
          method="post"
          action="/thanks"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="Contact Form" arial-label="Form Name" />
            {/* <p hidden>
                Don't fill this out:{" "} */}
                <label arial-label="Bot field - do not fill in" className="hidden">Do not fill this in<input name="bot-field" /></label>
            {/* </p> */}
            <div className="flex flex-wrap justify-between">
              <label className="relative flex w-full p-1">
                <input className="flex-grow p-3 bg-gray-300 bg-brown-feint" arial-label="Name" placeholder="Name" type="text" name="name" onChange={this.handleChange} />
                {this.validator.message('name', this.state.name, 'required')}
              </label>
              <label className="relative flex w-full p-1">
                <input className="flex-grow p-3 bg-gray-300 bg-brown-feint" placeholder="Email or telephone" type="text" name="email_or_telephone" onChange={this.handleChange} />
                {this.validator.message('email_or_telephone', this.state.email_or_telephone, 'required')}
              </label>
              <label className="relative flex w-full p-1">
                <textarea className="flex-grow p-3 bg-gray-300 bg-brown-feint" placeholder="Details" type="text" name="details" onChange={this.handleChange} />
               {this.validator.message('details', this.state.details, 'required')}
              </label>
              <span className="p-1 ml-auto">
                <button className="p-0 btn" type="submit"><span className="block p-3 whitespace-no-wrap text-brown-feint bg-brown-light">Get in touch</span></button>
              </span>
            </div>
        </form>
    );
  }
}
