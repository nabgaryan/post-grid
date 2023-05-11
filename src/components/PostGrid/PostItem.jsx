import classes from "./PostItem.module.css";

const PostItem = (props) => {
  return (
    <article className={classes.post}>
      <img src={props.url} alt="Post image" />
      <small className={classes.tag}>{props.tag}</small>
      <h3>{props.title}</h3>
      <div className={classes.postInfo}>
        <small className={classes.author}>{props.author}</small>
        <small>{props.date}</small>
        <small>{props.views} Views</small>
      </div>
      <p>{props.text}</p>
    </article>
  );
};

export default PostItem;
