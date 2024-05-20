import AbsPos from "./AbsPos";
import BackgroundColors from "./BackgroundColors";
import BootstrapGrid from "./BootstrapGrid";
import BootstrapResponsiveGrid from "./BootstrapResponsiveGrid";
import BootstrapResponsiveGrid2 from "./BootstrapResponsiveGrid2";
import Borders from "./Borders";
import ClassSelector from "./ClassSelector";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import DocStructureSelector from "./DocStructureSelector";
import FixedPos from "./FixedPos";
import Flex from "./Flex";
import Float from "./Float";
import ForegroundColors from "./ForegroundColors";
import Grid from "./Grid";
import IDSelector from "./IDSelector";
import Margins from "./Margins";
import Paddings from "./Paddings";
import ReactIconsSampler from "./ReactIconsSampler";
import RelPos from "./RelPos";
import ScreenSizeLabel from "./ScreenSizeLabel";
import Zindex from "./Zindex";
import "./index.css";
import BootstrapTables from "./BootstrapTables";
import BootstrapResponsiveTables from "./BootstrapResponsiveTables";
import BootstrapLists from "./BooststrapLists";
import BootstrapListsHyperlink from "./BootstrapListsHyperlink";
import BootstrapForms from "./BootstrapForms";
import BootstrapDropdown from "./BootstrapDropdown";
import BootstrapSwitches from "./BootstrapSwitches";
import BootstrapRange from "./BootstrapRange";
import BootstrapAddon from "./BootstrapAddon";
import BootstrapResponsiveForms from "./BootstrapResponsiveForms";
import BootstrapResponsiveForms2 from "./BootstrapResponsiveForms2";
import BootstrapNavigation from "./BootstrapNavigation";
export default function Lab2() {
  return (
    <div className="container" id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      < IDSelector />
      < ClassSelector />
      < DocStructureSelector />
      < ForegroundColors />
      < BackgroundColors />
      < Borders />
      < Paddings />
      < Margins />
      < Corners />
      < Dimensions />
      < RelPos />
      < AbsPos />
      < FixedPos />
      < Zindex />
      < Float />
      < Grid />
      < Flex />
      < ReactIconsSampler />
      <br/>
      <h2>Bootstrap:</h2>
      <br/>
      < BootstrapGrid />
      < BootstrapResponsiveGrid />
      < BootstrapResponsiveGrid2 />
      < ScreenSizeLabel />
      < BootstrapTables />
      < BootstrapResponsiveTables />
      < BootstrapLists />
      < BootstrapListsHyperlink />
      < BootstrapForms />
      < BootstrapDropdown />
      < BootstrapSwitches />
      < BootstrapRange />
      < BootstrapAddon />
      < BootstrapResponsiveForms />
      < BootstrapResponsiveForms2 />
      < BootstrapNavigation />
      <br/>
    </div>
  );
}
