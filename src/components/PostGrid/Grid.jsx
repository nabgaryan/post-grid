// import { useEffect } from "react";
import PostItem from "./PostItem";
import classes from "./Grid.module.css";

const Grid = ({ data }) => {
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const response = fetch(
  //         "https://cloud.codesupply.co/endpoint/react/data.json",
  //         { method: "GET" }
  //       );
  //       console.log(response);
  //       const data = (await response).json();

  //     };

  //     fetchData();
  //   }, []);

  const grid = data.map((post, i) => (
    <PostItem
      key={i}
      title={post.title}
      text={post.text}
      tag={post.tags}
      author={post.autor}
      url={post.img}
      retinaUrl={post.img_2x}
      date={post.date}
      views={post.views}
    />
  ));
  return <div className={classes.grid}>{grid}</div>;
};

export default Grid;
