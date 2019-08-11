import React from 'react'
import { navigateTo } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
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
  };

  render() {
    return (
        <form
          className="form w-full max-w-md"
          name="contact"
          method="post"
          action="/thanks"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" />
              </label>
            </p>

            <label className="w-full p-2 pl-0 block"><span className="w-full block">Your Name</span>
              <input className="text-black w-full p-2" placeholder="Enter your name" type="text" name="name" onChange={this.handleChange} /></label>   
            <label className="w-full p-2 pl-0 block"><span className="w-full block">Your Email</span>
              <input className="text-black w-full p-2" placeholder="Enter your email"  type="email" name="email" onChange={this.handleChange} /></label>
            <label className="w-full p-2 pl-0 block"><span className="w-full block">Your Telephone</span>
              <input className="text-black w-full p-2" placeholder="Enter your telephone" type="text" name="telephone" onChange={this.handleChange} /></label>
            <label className="w-full p-2 pl-0 block"><span className="w-full block">Details</span>
              <textarea className="text-black w-full p-2" placeholder="Enter any additional information" rows="4" name="details" onChange={this.handleChange}></textarea></label>
            <button className="w-40 font-color-font text-lg bg-orange-600 text-black p-4 hover:bg-orange-800" type="submit">Send form</button>
        </form>
    );
  }
}