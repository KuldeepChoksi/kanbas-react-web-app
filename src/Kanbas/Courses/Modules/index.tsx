export default function Modules() {
    return (
      <div>
        {/* Collapse All button, View Progress button, etc. */}
        <button id="collapse all" onClick={() => alert("You sure?")} type="button">
            collapse all
        </button>
        <button id="view progress" onClick={() => alert("You sure?")} type="button">
            view progress
        </button>

        
<label htmlFor="Publish all"> </label>
<select id="Publish all">
   <option selected value="Publish all">Publish all</option>
   <option value="A1">A1</option>
   <option selected value="A2">A2</option>
   <option value="A3">A3</option>
</select>

<button id="+Mod" onClick={() => alert("You sure?")} type="button">
            + Module
        </button>

        
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  