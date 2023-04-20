import axios from "axios";
import "./Banner.scss";
import { useState, useEffect } from "react";
import { imgurl, apiKey } from "../../Axioms/Constants";
function Banner() {
  const [mdata, setmdata] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`)
      .then((response) => {
        setmdata(response.data.results[1]);
      });
  }, []);

  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${imgurl + mdata.backdrop_path})` }}
    >
      <h1 id="mtitle">{mdata.name}{mdata.title}</h1>
      <h5 className="overview">{mdata.overview}</h5>
      <h6 className="overview">Rating : {mdata.vote_average}</h6>
    </div>
  );
}

export default Banner;
