import { useNavigate } from "react-router-dom";
import styles from "./Button.module.css";


function Button({ children, onClick, type }) {
  const navigate = useNavigate();
  
  function handleNavigateBack(e){
    e.preventDefault();
    navigate(-1);
  }
  return (
    <button onClick={type === 'back' ? handleNavigateBack : undefined} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>

    // <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
    //   {children}
    // </button>
  );
}

export default Button;
