export default function Text_Fields(){
    return(
        <div>
          <h5>Text Fields</h5>
          <label htmlFor="wd-text-fields-username">Username:</label> <br />
          <input 
          id="wd-text-fields-username" 
          placeholder="jdoe" /> <br />
      
      
          <label htmlFor="wd-text-fields-password">Password:</label> <br />
          <input 
          type="password" 
          id="wd-text-fields-password" 
          value="123@#$asd" /> <br />
      
      
          <label htmlFor="wd-text-fields-first-name">First name:</label> <br />
          <input 
          type="text" 
          id="wd-text-fields-first-name" 
          title="John" /> <br />
      
      
          <label htmlFor="wd-text-fields-last-name">Last name:</label> <br />
          <input 
          type="text" 
          id="wd-text-fields-last-name" 
          placeholder="Doe"
          value="Wonderland" 
          title="The last name" /> 
          </div>
    );
}