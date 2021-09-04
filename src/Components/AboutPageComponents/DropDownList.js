import { FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import styles from "./DropDownList.module.css";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const DropDownList = () => {
  const [displayList, setDisplayList] = useState(false);
  const match = useRouteMatch();

  const toogleListHandler = () => {
    setDisplayList(!displayList);
  };

  const contentToDisplay = (
    <CSSTransition
      in={displayList}
      mountOnEnter
      unmountOnExit
      timeout={{
        enter: 100,
        exit: 100,
      }}
      classNames={{
        enter: "",
        enterActive: styles.listEnter,
        enterDone: "",
        exit: "",
        exitActive: styles.listExit,
        exitDone: "",
      }}
    >
      <ul>
        <li>
          <Link to={`${match.path}/about-ifvs`}>About IFVS</Link>
        </li>
        <li>
          <Link to={`${match.path}/about-online-education`}>
            About Online Education
          </Link>
        </li>
      </ul>
    </CSSTransition>
  );

  return (
    <div className={styles.dropDownDiv}>
      <button
        className={
          displayList ? `${styles.activeButton}` : `${styles.normalButton}`
        }
        onClick={toogleListHandler}
      >
        About Us&nbsp; <FaCaretDown />
      </button>

      {contentToDisplay}
    </div>
  );
};
export default DropDownList;
