import React from 'react'
import { scrollTo } from '../utils/scrollTo'
import { withLocalize, Translate } from 'react-localize-redux'

const querystring = require('querystring')
const axios = require('axios')
const config = {
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
}

class ContactForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			company: '',
			message: '',
			loading: false
		};

		this.handleWait = this.handleWait.bind(this)
		this.handleFormReset = this.handleFormReset.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleWait(state) {
		this.setState({
			loading: state
		})
	}

	handleFormReset() {
		this.setState({
			name: '',
			email: '',
			company: '',
			message: ''
	})
	}

	handleChange(event) {
		const target = event.target
		const value = target.value
		const name = target.name

		this.setState({
			[name]: value
		})
	}

	handleSubmit(event) {
		this.handleWait(true)
			axios.post(
				'https://darrenl.im/api/contact',
				querystring.stringify({
				name: this.state.name,
				email: this.state.email,
				company: this.state.company,
					message: this.state.message
				}),
				config)
			.then((response) => {
				if (response.data.success) {
					// alert('Your message was sent!')
			this.handleWait(false)
			this.handleFormReset()
				} else {
					alert('There was a problem with the server. Please try again later?')
				}
			})
			.catch((error) => {
				alert('There was a problem submitting your form. Please try again?')
			})
		event.preventDefault()
	}

  render() {
    return (
		<form onSubmit={this.handleSubmit} id="contact-form" role="form">
			<Translate>
				{
					({ translate }) => (
						<div >
							<h3>{translate('contactForm.heading')}</h3>
							<div className={`form-inner ${this.state.loading? 'loading' : ''}`}>
								<fieldset>
									<input id="name" className={this.state.name? '' : 'empty'} name="name" type="text" required="required" value={this.state.name || ''} onChange={this.handleChange}/>
									<label htmlFor="name">{translate('contactForm.name')}</label>
									<div className="line"></div>
								</fieldset>
								<fieldset>
									<input id="company" className={this.state.company? '' : 'empty'} name="company" type="text" value={this.state.company || ''} onChange={this.handleChange}/>
									<label htmlFor="company">{translate('contactForm.company')}</label>
									<div className="line"></div>
								</fieldset>
								<fieldset>
									<input id="email" className={this.state.email? '' : 'empty'} name="email" type="email" required="required" value={this.state.email || ''} onChange={this.handleChange}/>
									<label htmlFor="email">{translate('contactForm.email')}</label>
									<div className="line"></div>
								</fieldset>
								<fieldset>
									<textarea id="message" className={this.state.message? '' : 'empty'} name="message" rows="3" required="required" value={this.state.message || ''} onChange={this.handleChange}></textarea>
									<label htmlFor="message">{translate('contactForm.message')}</label>
									<div className="line"></div>
								</fieldset>
								<button type="submit">{this.state.loading? '' : translate('contactForm.send')}</button>
								<div className="loader">
								<div className="lds-ring"><div></div><div></div><div></div><div></div></div>
								</div>
							</div>
						</div>
					)
				}
			</Translate>
		</form>
		)
	}
}

export default withLocalize(ContactForm)
