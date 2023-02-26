import React, { Fragment, useState } from 'react';
import './contact.qna.component.style.css';

const QuestionForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Question: ${question}`);
    // do something with the form data, e.g. send it to a server
  };

  const handleClick = () => {
    alert("We have received your questions! We will get back to you as fast as we can!")
  }

  return (
    <Fragment>
      <div className='spacer-20'></div>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="question">Question:</label>
        <textarea
          id="question"
          name="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
        </div>
        <div className='spacer-20'></div>
      <button type="submit" className='contact-button' onClick={handleClick}>Submit</button>
      </form>
      </Fragment>
  );
};

export default QuestionForm;