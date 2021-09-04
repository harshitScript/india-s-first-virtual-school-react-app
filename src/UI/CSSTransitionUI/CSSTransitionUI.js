import { CSSTransition } from "react-transition-group";
const CSSTransitionUI = (props) => {
  return (
    <CSSTransition
      in={props.in}
      timeout={props.timeoutObj}
      classNames={props.classNamesObj}
      mountOnEnter
      unmountOnExit
    >
      {props.children}
    </CSSTransition>
  );
};
export default CSSTransitionUI;
