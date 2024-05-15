function StartButton({ actionType, children, dispatch }) {
  return (
    <button className="btn btn-ui" onClick={() => dispatch({ type: actionType })}>
      {children}
    </button>
  );
}

export default StartButton;
