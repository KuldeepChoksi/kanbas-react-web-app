export default function HTMLOTHER(){
    return(
        <div>
            <h4>Other HTML field types</h4>

<label htmlFor="wd-text-fields-email"> Email: </label>
<input type="email"
      placeholder="jdoe@somewhere.com"
      id="wd-text-fields-email"/><br/>

<label htmlFor="wd-text-fields-salary-start"> Starting salary:
</label>
<input type="number"
      id="wd-text-fields-salary-start"
      placeholder="1000"
      min = {2000}
      max = {10000}
      // value="100000"
      /><br/>

<label htmlFor="wd-text-fields-telephone"> Phone Number:
</label>
<input type="tel"
      id="wd-text-fields-telephone"
      placeholder="123-456-7890"
      /><br/>
<label htmlFor="wd-text-fields-rating"> Rating: </label>
<input type="range" id="wd-text-fields-rating"
      placeholder="Doe"
      max="5"
      // value="4"
      /><br/>

<label htmlFor="wd-text-fields-dob"> Date of birth: </label>
<input type="date"
      id="wd-text-fields-dob"
      min = "2000-01-15"
      max = "2000-01-16"
      // value="2000-01-21"
      /><br/>
        </div>
    );
}