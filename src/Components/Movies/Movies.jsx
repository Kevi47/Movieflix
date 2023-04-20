import Rowfilms from "../Rowfilms/Rowfilms";
import {originals} from '../../Axioms/Catagory'
import "./Movies.scss";

function Movies() {
  return (
    <div className="m1">
      <Rowfilms url={originals} imgstyle="imgfilmlarge" design="disgrid"/>
    </div>
  );
}

export default Movies;
