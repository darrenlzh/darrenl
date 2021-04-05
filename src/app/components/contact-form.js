import React from 'react';
import { scrollTo } from '../utils/scrollTo';
import { withLocalize, Translate } from 'react-localize-redux';
import * as emailjs from 'emailjs-com';

class ContactForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			company: '',
			message: '',
			loading: false,
			confirm: false
		};

		this.handleWait = this.handleWait.bind(this);
		this.handleConfirm = this.handleConfirm.bind(this);
		this.handleFormReset = this.handleFormReset.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleWait(state) {
		this.setState({
			loading: state
		});
	}

	handleConfirm(state) {
		this.setState({
			confirm: state
		});
	}

	handleFormReset() {
		this.setState({
			name: '',
			email: '',
			company: '',
			message: ''
	});
	}

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.handleWait(true);

		const { name, email, company, message } = this.state;
		const templateParams = {
			from_name: name,
			from_email: email,
			to_name: 'Darren Lim',
			company,
			message
		};

		emailjs.send(
			'service_6gflrag',
			'template_ia6a9oa',
			templateParams,
			'user_AC1jjhyumMkVdeR7cQWaY'
		).then((res) => {
			this.handleConfirm(true);
			setTimeout(() => {
				this.handleWait(false);
			}, 500);
			this.handleFormReset();
			setTimeout(() => {
				this.handleConfirm(false);
			}, 6000);
		}, (err) => {
			console.log(err);
			alert('There was a problem submitting your form. Please try again later.');
		});
	}

	render() {
	return (
		<form onSubmit={this.handleSubmit} id="contact-form" role="form">
			<Translate>
				{
					({ translate }) => (
						<div >
							<h3>{translate('contactForm.heading')}</h3>
							<div className={`form-inner ${this.state.loading? 'loading' : ''} ${this.state.confirm? 'confirm' : ''}`} >
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
								<div className="button-wrapper">
									<button type="submit">{this.state.loading? '' : translate('contactForm.send')}</button>
									<div className="loader">
										<div className="lds-ring"><div></div><div></div><div></div><div></div></div>
									</div>
									<div className={`submit-confirm ${this.state.confirm? 'show' : ''}`}><i className="far fa-check"></i></div>
								</div>
							</div>
						</div>
					)
				}
			</Translate>
		</form>
	);
	}
}

export default withLocalize(ContactForm);
