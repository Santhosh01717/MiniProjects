import { useState, useEffect } from "react";
import "../CssFiles/body.css";
const Body = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    imgUrl:
      "https://www.usmagazine.com/wp-content/uploads/2019/11/Celebrities-Who-Became-Memes-01.jpg?quality=86&strip=all",
  });
  const [allMemes, setAllMemes] = useState([]);
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.currentTarget.name;
    // console.log(name);
    setMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const getRandomMeme = (e) => {
    // e.preventDefault();
    if (meme.topText.length > 0 && meme.bottomText.length > 0) {
      const randomIndex = Math.floor(Math.random() * allMemes.length);
      const url = allMemes[randomIndex].url;
      setMeme((prev) => ({
        ...prev,
        imgUrl: url,
      }));
      console.log(meme);
    } else {
      alert("top text and bottom text field must be filled");
    }
  };
  const fetchData = async () => {
    const response = await fetch("https://api.imgflip.com/get_memes");
    const obj = await response.json();
    const memeData = await obj.data.memes;
    setAllMemes(memeData);
  };
  useEffect(() => {
    fetchData();
    console.log(allMemes);
  }, []);
  return (
    <>
      <main>
        <form>
          <div className="form">
            <div>
              <div>Top Text</div>
              <input
                className="input"
                type="text"
                name="topText"
                placeholder="topText"
                value={meme.topText}
                onChange={handleChange}
              />
            </div>
            <div>
              <div>Bottom Text</div>
              <input
                className="input"
                type="text"
                name="bottomText"
                placeholder="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="btn-div">
            <button type="button" className="b-btn" onClick={getRandomMeme}>
              Get me a meme
            </button>
          </div>
        </form>
        <div className="img-container">
          <h1 className="topText">{meme.topText}</h1>
          <img className="meme-img" src={meme.imgUrl} alt="meme image" />
          <h1 className="bottomText">{meme.bottomText}</h1>
        </div>
      </main>
    </>
  );
};
export default Body;
