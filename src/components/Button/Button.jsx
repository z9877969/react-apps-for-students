const Button = ({ type = "button", title, cbOnClick }) => {
  return (
    <button tupe={type} onClick={cbOnClick}>
      {title}
    </button>
  );
};

export default Button;
