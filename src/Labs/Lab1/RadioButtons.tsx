export default function RadioButtons(){
    return(
        <div>
            <h5 id="wd-radio-buttons">Radio buttons</h5>

<label>Favorite movie genre:</label><br />

<input type="radio" name="radio-genre" id="wd-radio-comedy"/>
<label htmlFor="wd-radio-comedy">Comedy</label><br />

<input type="radio" name="radio-genre" id="wd-radio-drama"/>
<label htmlFor="wd-radio-drama">Drama</label><br />

<input type="radio" name="radio-genre" id="wd-radio-scifi"/>
<label htmlFor="wd-radio-scifi">Science Fiction</label><br />

<input type="radio" name="radio-genre" id="wd-radio-fantasy"/>
<label htmlFor="wd-radio-fantasy">Fantasy</label> <br />

<label> Fvaourite colours</label>
<br />
<input type="radio" name="radio-cl-genre" id="wd-radio-aquamarine"/>
<label htmlFor="wd-radio-aquamarine">Aquamarine</label><br />

<input type="radio" name="radio-cl-genre" id="wd-radio-Magenta"/>
<label htmlFor="wd-radio-Magenta">Magenta</label><br />

<input type="radio" name="radio-cl-genre" id="wd-radio-Olive"/>
<label htmlFor="wd-radio-Olive">Olive</label><br />

<input type="radio" name="radio-cl-genre" id="wd-radio-Baby Pink"/>
<label htmlFor="wd-radio-Baby Pink">Baby Pink</label>

        </div>
    )
}