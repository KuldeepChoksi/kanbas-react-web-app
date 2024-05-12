import Anchors from "./Anchors";
import Buttons from "./Buttons";
import Checkbox from "./Checkbox";
import Dropdown from "./Dropdown";
import HTMLOTHER from "./HTMLOTHER";
import RadioButtons from "./RadioButtons";
import TextBox from "./TextBox";
import Text_Field from "./Text_Fields";
import Upload from "./Upload";

export default function Forms(){
    return(
        <div id="wd-forms">

  <h4>Form Elements</h4>
  <form id="wd-text-fields">
    <Text_Field />
    <TextBox />
    <Buttons />
    <Upload />
    <RadioButtons />
    <Checkbox />
    <Dropdown />
    <HTMLOTHER />
    <Anchors />
      
</form>

</div>

    );
}