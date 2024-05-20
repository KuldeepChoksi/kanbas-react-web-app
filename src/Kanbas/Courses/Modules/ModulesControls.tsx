import { FaPlus, FaEye, FaCompress } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap d-flex justify-content-end" style={{ gap: "10px" }}>
      <button id="wd-collapse-all" className="btn btn-lg btn-outline-secondary">
        <FaCompress className="me-2" />Collapse All
      </button>
      <button id="wd-view-progress" className="btn btn-lg btn-outline-secondary">
        <FaEye className="me-2" />View Progress
      </button>
      <div className="dropdown">
        <button id="wd-publish-all-btn" className="btn btn-lg btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
          <GreenCheckmark  />Publish All
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li><a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#"><GreenCheckmark /> Publish all modules and items</a></li>
          <li><a id="wd-publish-modules-only-button" className="dropdown-item" href="#"><GreenCheckmark /> Publish modules only</a></li>
          <li><a id="wd-unpublish-all-modules-and-items" className="dropdown-item" href="#"><GreenCheckmark /> Unpublish all modules and items</a></li>
          <li><a id="wd-unpublish-modules-only" className="dropdown-item" href="#"><GreenCheckmark /> Unpublish modules only</a></li>
        </ul>
      </div>
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger">
        <FaPlus className="me-2" />Module
      </button>
    </div>
  );
}
