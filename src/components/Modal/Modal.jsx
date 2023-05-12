import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        <article className={classes.post}>
          <img src={props.modalPost[0].img} alt="Post" />
          <small className={classes.tag}>{props.tag}</small>
          <h3>{props.modalPost[0].title}</h3>
          <div className={classes.postInfo}>
            <small className={classes.author}>
              {props.modalPost[0].author}
            </small>
            <small>{props.modalPost[0].date}</small>
            <small>{props.modalPost[0].views} Views</small>
          </div>
          <p>{props.modalPost[0].text}</p>
        </article>
      </div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay modalPost={props.modalPost} />,
        portalElement
      )}
    </>
  );
};

export default Modal;
