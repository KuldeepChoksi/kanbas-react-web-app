export default function Checkbox(){
    return(
        <div>
        <h5 id="wd-checkboxes">Checkboxes</h5>
<label>Favorite movie genre:</label>
<br/>
<input type="checkbox"
       name="check-genre" id="wd-chkbox-comedy"/>
<label htmlFor="wd-chkbox-comedy">Comedy</label><br/>
<input type="checkbox"
       name="check-genre" id="wd-chkbox-drama"/>
<label htmlFor="wd-chkbox-drama">Drama</label><br/>
<input type="checkbox"
       name="check-genre" id="wd-chkbox-scifi"/>
<label htmlFor="wd-chkbox-scifi">Science Fiction</label><br/>
<input type="checkbox"
       name="check-genre" id="wd-chkbox-fantasy"/>
<label htmlFor="wd-chkbox-fantasy">Fantasy</label><br/>

<label>Favorite colours:</label>
<br/>
<input type="checkbox"
       name="check-colour" id="wd-chkbox-Aquamarine"/>
<label htmlFor="wd-chkbox-Aquamarine">Comedy</label><br/>
<input type="checkbox"
       name="check-colour" id="wd-chkbox-Magenta"/>
<label htmlFor="wd-chkbox-Magenta">Magenta</label><br/>
<input type="checkbox"
       name="check-colour" id="wd-chkbox-Olive"/>
<label htmlFor="wd-chkbox-Olive">Olive</label><br/>
<input type="checkbox"
       name="check-colour" id="wd-chkbox-Baby Pink"/>
<label htmlFor="wd-chkbox-Baby Pink">Baby Pink</label>
</div>
    )
}