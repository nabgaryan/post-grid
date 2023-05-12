import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Grid from "./components/PostGrid/Grid";
import Modal from "./components/Modal/Modal";

const data = [
  {
    id: 1,
    title: "Eat Right For Your Exercise Regime",
    text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
    tags: "Lifestyle",
    autor: "Nick Bove",
    img: "https://cloud.codesupply.co/endpoint/react/images/post-img-1.jpg",
    img_2x:
      "https://cloud.codesupply.co/endpoint/react/images/post-img-1@2x.jpg",
    date: "April 8, 2018",
    views: "3K",
  },
  {
    id: 2,
    title: "The Look: Perfect Balance",
    text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
    tags: "Lifestyle",
    autor: "Nick Bove",
    img: "https://cloud.codesupply.co/endpoint/react/images/post-img-2.jpg",
    img_2x:
      "https://cloud.codesupply.co/endpoint/react/images/post-img-2@2x.jpg",
    date: "April 8, 2018",
    views: "3K",
  },
  {
    id: 3,
    title: "Fun Things to Do in Rome",
    text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
    tags: "Style",
    autor: "Nick Bove",
    img: "https://cloud.codesupply.co/endpoint/react/images/post-img-3.jpg",
    img_2x:
      "https://cloud.codesupply.co/endpoint/react/images/post-img-3@2x.jpg",
    date: "April 8, 2018",
    views: "3K",
  },
  {
    id: 4,
    title: "24 Colorful Ceilings That Add Unexpected Contrast to Any Room",
    text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
    tags: "Style",
    autor: "Nick Bove",
    img: "https://cloud.codesupply.co/endpoint/react/images/post-img-4.jpg",
    img_2x:
      "https://cloud.codesupply.co/endpoint/react/images/post-img-4@2x.jpg",
    date: "April 8, 2018",
    views: "3K",
  },
  {
    id: 5,
    title: "9 New Songs to Heat Up Your Fall Playlist",
    text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
    tags: "Lifestyle",
    autor: "Nick Bove",
    img: "https://cloud.codesupply.co/endpoint/react/images/post-img-5.jpg",
    img_2x:
      "https://cloud.codesupply.co/endpoint/react/images/post-img-5@2x.jpg",
    date: "April 8, 2018",
    views: "3K",
  },
  {
    id: 6,
    title: "What You Need on Your Bedside Table",
    text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
    tags: "Events",
    autor: "Nick Bove",
    img: "https://cloud.codesupply.co/endpoint/react/images/post-img-6.jpg",
    img_2x:
      "https://cloud.codesupply.co/endpoint/react/images/post-img-6@2x.jpg",
    date: "April 8, 2018",
    views: "3K",
  },
  {
    id: 7,
    title: "When Two Wheels Are Better Than Four",
    text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
    tags: "Travel",
    autor: "Nick Bove",
    img: "https://cloud.codesupply.co/endpoint/react/images/post-img-7.jpg",
    img_2x:
      "https://cloud.codesupply.co/endpoint/react/images/post-img-7@2x.jpg",
    date: "April 8, 2018",
    views: "3K",
  },
  {
    id: 8,
    title: "26 Living Room Ideas from the Homes of Top Designers",
    text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
    tags: "Travel",
    autor: "Nick Bove",
    img: "https://cloud.codesupply.co/endpoint/react/images/post-img-8.jpg",
    img_2x:
      "https://cloud.codesupply.co/endpoint/react/images/post-img-8@2x.jpg",
    date: "April 8, 2018",
    views: "3K",
  },
  {
    id: 9,
    title: "What Makes Your City’s Style Unique",
    text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
    tags: "Music",
    autor: "Nick Bove",
    img: "https://cloud.codesupply.co/endpoint/react/images/post-img-9.jpg",
    img_2x:
      "https://cloud.codesupply.co/endpoint/react/images/post-img-9@2x.jpg",
    date: "April 8, 2018",
    views: "3K",
  },
];

function App() {
  const [searchText, setSearchText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalPost, setModalPost] = useState(null);

  const filteredPosts = data.filter((post) =>
    post.title.toLowerCase().includes(searchText)
  );

  const hideModalHandler = () => {
    setShowModal(false);
  };

  const ShowModalhandler = (id) => {
    setShowModal(true);
    setModalPost(data.filter((post) => post.id === id));
  };

  return (
    <div className="App">
      {showModal && (
        <Modal modalPost={modalPost} data={data} onClose={hideModalHandler} />
      )}
      <Header onSearch={setSearchText} />
      <Grid onSHowModal={ShowModalhandler} data={filteredPosts} />
    </div>
  );
}

export default App;
