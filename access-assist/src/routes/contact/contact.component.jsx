import React, { Component } from 'react';
import './contact.styles.css';
import QuestionForm from './contact.qna.component.jsx'

const Contact = () => {
	// write a react component that asks the user "what's your address?" and accepts a response in a form
	return <QuestionForm/>
};

export default Contact;
/*
	handleSubmit(e) {
		e.preventDefault();
		alert('We have received your question! The stuff will contact you sooner!');
	}

	render() {
		return (
			<div className='contact-page'>
				<br />
				<h2 className='contact font'>GOT QUESTIONS?</h2>
				<h4 className='contact font'>
					Fill out the form and we will contact you!
				</h4>
				<br />
				<h5 className='contact'>Name:</h5>
				<input
					className='contact-name'
					id='contact-user-input-name'
					type='text'
					placeholder='name'
				/>
				<br />

				<h5 className='contact'>EMAIL:</h5>
				<input
					className='contact-email'
					id='contact-user-input-email'
					type='email'
					placeholder='email'
				/>
				<br />
				<h5 className='contact'>QUESTION:</h5>
				<textarea
					className='contact-question'
					rows='4'
					name='content'
					placeholder='Your questions'></textarea>
				<br />
				<button
					className='button'
					onSubmit={this.handleSubmit}>
					Submit
        </button>
        <div className='spacer'></div>
			</div>
		);
	}
}
*/


