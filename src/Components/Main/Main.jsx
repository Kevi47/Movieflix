import "./Main.scss";
import Banner from "../Banner/Banner";
import Rowfilms from "../Rowfilms/Rowfilms";
import {originals,popular} from '../../Axioms/Catagory'
function Main() {
  return (
    <div id="h">
      <Banner />
      <Rowfilms url={originals} title="Originals" design="disflex" imgstyle="imgfilm" />
      <Rowfilms url={popular} title="Popular" design="disflex" imgstyle="imgfilmsmall"/>
    </div>
  );
}

export default Main;
