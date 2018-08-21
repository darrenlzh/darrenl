import React from 'react'
import { Transition } from 'react-transition-group'
import { Link } from 'react-router-dom'

import { renderToStaticMarkup } from 'react-dom/server'
import { withLocalize, Translate } from 'react-localize-redux'
import globalTranslations from '../translations/global.json'

import { Portfolio } from './portfolio.js'
import { ContactForm } from './contact-form.js'
import LanguageToggler from './language-toggler.js'

import skills from '../content/skills.json'

class Main extends React.Component {
	constructor(props) {
		super(props)

		const defaultLanguage = window.localStorage.getItem("languageCode") || 'en';

		this.props.initialize({
			languages: [
			{ name: 'english', code: 'en' },
			{ name: 'français', code: 'fr' },
			{ name: 'svenska', code: 'se' },
			{ name: 'dansk', code: 'dk' },
			{ name: 'bahasa melayu', code: 'my' },
			{ name: '中文', code: '中文' }
			],
			translation: globalTranslations,
			options: { renderToStaticMarkup, defaultLanguage }
		})
		this.handleLangMenuClick = this.handleLangMenuClick.bind(this)
		this.handleCloseLangMenuClick = this.handleCloseLangMenuClick.bind(this)
		this.handleLangClick = this.handleLangClick.bind(this)
		this.mouseLeave = this.mouseLeave.bind(this)
		this.handleScroll = this.handleScroll.bind(this)
		this.state = {
			currentLanguage: 'en',
			langMenuOpen: false,
			initialLoading: true
		}
	}

	handleLangMenuClick() {
		var temp = !this.state.langMenuOpen
		this.setState({ langMenuOpen: temp })
	}

	handleCloseLangMenuClick() {
		this.setState({ langMenuOpen: false })
	}

	handleLangClick(i) {
		this.setState({ language: i, words: WORDS[i] })
	}

	mouseLeave(mouseLeft) {
		if (mouseLeft) {
			timeout = setTimeout(() => {
				this.setState({ langMenuOpen: false })
			}, 1500)
		}
		else {
			clearTimeout(timeout)
		}
	}

	handleScroll() {
		console.log('hello')
	}

	componentDidUpdate() {
		const langCode = this.props.activeLanguage.code
		if (langCode != this.state.currentLanguage) {
			window.localStorage.setItem("languageCode", langCode)
			this.setState({
				currentLanguage: langCode
			})
		}
		else {
			return
		}
	}

	componentDidMount() {
		let self = this
		setTimeout(() => {
			self.setState({ initialLoading: false })
		}, 2500)
		document.body.addEventListener('scroll', this.handleScroll)
	}

	render() {

		if (this.state.initialLoading) {
			return (
				<div className="loader initial-loading">
					<div className="lds-ring"><div></div><div></div><div></div><div></div></div>
				</div>
			)
		} else {
			return (
				<div className="main">
					<Transition appear={true} in={true} timeout={1000}>
						{(status) => (
							<div id="language" className={`fade fade-${status}`} onMouseLeave={this.mouseLeave.bind(this, true)} onMouseEnter={this.mouseLeave.bind(this, false)}>
								<button onClick={this.handleLangMenuClick.bind(this)}
										className={this.state.langMenuOpen? 'open': ''}>
									{this.state.currentLanguage}
								</button>
								<LanguageToggler open={this.state.langMenuOpen}/>
							</div>
						)}
					</Transition>

					<section id="intro" onClick={this.handleCloseLangMenuClick.bind(this)}>
						<Transition appear={true} in={true} timeout={500}>
							{(status) => (
								<Translate>
									{
										({ translate }) => (
											<div className={`container fade fade-${status}`}>
												<h1>{translate('intro.hello')}.<br/>
												{translate('intro.im')} <span>Darren Lim</span>.</h1>
												<p>
												{translate('intro.iam')} <span>{translate('intro.job.developer')}</span> {translate('intro.and')} <span>{translate('intro.job.designer')}</span>{translate('intro.job.end')}
												</p>
											</div>
										)
									}
								</Translate>
							)}
						</Transition>
					</section>

					<section id="portfolio" onClick={this.handleCloseLangMenuClick.bind(this)}>
						<Transition appear={true} in={true} timeout={1000}>
							{(status) => (
								<div>
									<div className={`title container fade fade-${status}`}>
										<Translate>
											{({ translate }) => <h2>{translate("section.mywork")}</h2>}
										</Translate>
									</div>
									<div className={`summary container fade fade-${status}`}>
										<Translate>
											{({ translate }) => <p>{translate("section.myworkSub")}</p>}
										</Translate>
									</div>
								</div>
							)}
						</Transition>
						<Portfolio />
					</section>

					<section id="about">
						<div className="title container">
							<Translate>
								{({ translate }) => <h2>{translate("section.aboutme")}</h2>}
							</Translate>
						</div>
						<div className="content container">
							<div className="profile row">
								<div className="col-xs-12 col-sm-12 col-md-3">
									<div className="profile__pic"></div>
								</div>
								<div className="col-xs-12 col-sm-12 col-md-9">
									<p>I&#39;m an experienced Web Engineer & Designer with a knack for UX/UI design, creating modern and dynamic applications with the latest web technologies.</p>
								</div>
							</div>
						</div>
					</section>

					<section id="skills">
						<div className="title container">
							<Translate>
								{({ translate }) => <h2>{translate("section.skills")}</h2>}
							</Translate>
						</div>
						<div className="content container">
							<div className="skills-group">
								{
									skills.skillsList.map((skill, i) => {
										return (
											<div key={i} className="skill">
												<i id={skill.name} className={skill.icon}></i>
											</div>
										)
									})
								}
							</div>
						</div>
					</section>

					<section id="contact">
						<div className="container">
							<div className="title container">
								<Translate>
									{({ translate }) => <h2>{translate("section.contactme")}</h2>}
								</Translate>
							</div>
							<div className="social-icons">
								<a href="https://www.linkedin.com/in/darrenzlim/" target="blank"><i className="fab fa-linkedin"></i></a>
								<a href="https://github.com/darrenlzh" target="blank"><i className="fab fa-github"></i></a>
								<a href="https://codepen.io/darrenlim/" target="blank"><i className="fab fa-codepen"></i></a>
							</div>
							<div className="email">
								darrenzhlim <span>(at)</span> gmail <span>(dot)</span> com
							</div>
							<ContactForm />
						</div>
					</section>
				</div>
			)
		}
	}
}
var timeout
export default withLocalize(Main)
