import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Grid from "./components/PostGrid/Grid";

const data = [
  {
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
  const [searchMode, setSearchMode] = useState(false);

  const filteredPosts = data.filter((post) =>
    post.title.toLowerCase().includes(searchText)
  );

const closeSearchMode = () => {
  setSearchMode(false);
};

const searchModeHandler = () => {
  
};

  return (
    <div className="App">
      <Header onSearch={setSearchText} />
      <Grid data={filteredPosts} />
    </div>
  );
}

export default App;
