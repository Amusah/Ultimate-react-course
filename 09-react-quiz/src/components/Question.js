function Question({ question }) {
  const { question: quest, options, points, correctOption } = question;
  console.log(question);
  return (
    <div>
      <h4>{quest}</h4>
      <Option options={options} />
    </div>
  );
}

function Option({ options }){
  return (
    <div className="options">
      {options.map((option) => (
        <button className="btn btn-option" key={option}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Question;
