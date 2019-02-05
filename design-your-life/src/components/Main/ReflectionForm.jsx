import React from 'react';

const ReflectionForm = props => {
  return (
    <div className="reflection-form-page">
      <div className="reflection-progress">
        <h3 className="active">Question 1</h3>
        <h3>Question 3</h3>
        <h3>Question 3</h3>
        <h3>Summary</h3>
      </div>
      <form className="reflection-form" onSubmit={props.handleSubmit}>
        <p>
          Ipsum enim consequat veniam magna cupidatat duis mollit esse do eu id
          cillum consectetur cillum.
        </p>
        <textarea
          type="text"
          name="q1"
          placeholder="Question 1"
          value={props.q1}
          onChange={props.handleChange}
        />
        {/* <input
          type="text"
          name="q2"
          placeholder="Question 2"
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="q3"
          placeholder="Question 3"
          value={props.q3}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="summary"
          placeholder="Summary Sentence"
          value={props.summary}
          onChange={props.handleChange}
        /> */}
        <button>Next Question</button>
      </form>
    </div>
  );
};

export default ReflectionForm;
