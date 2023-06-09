// import { useEffect } from "react";
import PostItem from "./PostItem";
import classes from "./Grid.module.css";
// import { useState } from "react";

const Grid = ({ data, onSHowModal }) => {
  // const [data, setData] = useState([]);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const response = fetch(
  //         "https://cloud.codesupply.co/endpoint/react/data.json"  //
  //       );
  //      const data = await response.json();
  //     };
  //     fetchData();
  //   }, []);

  const grid = data.map((post, i) => (
    <PostItem
      id={post.id}
      onSHowModal={onSHowModal}
      key={post.title}
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
