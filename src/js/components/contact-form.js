import React from 'react'
import { scrollTo } from '../utils/scrollTo'

const querystring = require('querystring')
const axios = require('axios')
const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

export class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
		axios.post(
			'https://darrenl.im/api/contact',
			querystring.stringify({
		    name: 'Fred',
		    email: 'Flintstone@blah.com',
				message: 'Blah hello blah hello'
		  }),
			config)
	  .then(function (response) {
			console.log(response)
			if (response.data.success) {
				alert('Your message was sent!')
			} else {
				alert('There was a problem with the server. Please try again later?')
			}
	  })
	  .catch(function (error) {
			alert('There was a problem submit your form. Please try again?')
	  });
    event.preventDefault()
  }

  render() {
    return (
			<form onSubmit={this.handleSubmit} id="contact-form" role="form">
				<fieldset>
					<label htmlFor="name">Name &#42;</label>
					<input id="name" name="name" type="text" placeholder="Your name" required="required"/>
					<label htmlFor="email">Email &#42;</label>
					<input id="email" name="email" type="text" placeholder="Your email" required="required"/>
					<label htmlFor="message">Message &#42;</label>
					<textarea id="message" name="message" placeholder="Enter your message here" rows="3" required="required"></textarea>
					<button type="submit">Submit</button>
				</fieldset>
			</form>
    );
  }
}
