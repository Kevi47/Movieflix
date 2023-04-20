import axios from "axios";
import { useState, useEffect } from "react";
import Youtube from "react-youtube";
import { apiKey, imgurl } from "../../Axioms/Constants";
import "./Rowfilms.scss";
function Rowfilms({ url, title, design, imgstyle }) {
  const [rowf, setrowf] = useState([]);
  const [vurl, setvurl] = useState("");
  const [open, setopen] = useState(false);

  useEffect(() => {
    axios.get(url).then((response) => {
      setrowf(response.data.results);
    });
  }, []);
  console.log(rowf);
  const opts = {
    height: "300",
    width: "1270",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const videoClick = (id) => {
    if (!open) {
      setopen(true);
    } else {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`
        )
        .then((response) => {
          if (response.data.results.length !== 0) {
            setvurl(response.data.results[0].key);
          }
        });
    }
  };

  return (
    <div className="rowbox">
      <h2 id="title2">{title}</h2>
      <div className={design}>
        {rowf.map((obj, index) => (
          <>
              <img
                onClick={() => videoClick(obj.id)}
                className={imgstyle}
                src={`${imgurl + obj.backdrop_path}`}
                alt=""
                key={index}
              />
          </>
        ))}
        <div className="bar"></div>
      </div>
      <link
        href="https://unpkg.com/css.gg@2.0.0/icons/css/close-o.css"
        rel="stylesheet"
      />
      <div className="you">
        {open && (
          <>
            <div className="close">
              <i
                id="iclose"
                onClick={() => setopen(false)}
                class="gg-close-o"
              ></i>
            </div>
            <Youtube opts={opts} videoId={vurl} />
          </>
        )}
      </div>
    </div>
  );
}

export default Rowfilms;
