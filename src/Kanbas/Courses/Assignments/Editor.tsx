export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" />
        <br /><br />
        <textarea id="wd-description">
          The assignment is available online
          Submit a link to the landing page of your web application running on Netlify. blah blah
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
                    {/* Complete on your own */}
                    <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="assignments">ASSIGNMENTS</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="percentage">Percentage</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="online">Online</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="justify" valign="top">
                <strong>Online Entry Options</strong><br/>
                <label>
                    <input type="checkbox" id="wd-text-entry" name="entry-options" value="text"/> Text Entry
                </label><br/>
                <label>
                    <input type="checkbox" id="wd-website-url" name="entry-options" value="url"/> Website URL
                </label><br/>
                <label>
                    <input type="checkbox" id="wd-media-recordings" name="entry-options" value="media"/> Media Recordings
                </label><br/>
                <label>
                    <input type="checkbox" id="wd-Student-Annotations" name="entry-options" value="annotation"/> Student Annotations
                </label><br/>
                <label>
                    <input type="checkbox" id="wd-file-upload" name="entry-options" value="file"/> File Upload
                </label><br/>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign To</label>
            </td>
            <td>
              <input id="wd-assign-to" type="text" value="Everyone" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input id="wd-due-date" type="date" value="2024-05-13" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available From</label>
            </td>
            <td>
              <input id="wd-available-from" type="date" value="2024-05-06" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">Until</label>
            </td>
            <td>
              <input id="wd-available-until" type="date" value="2024-05-20" />
            </td>
          </tr>
          <tr>
            <td >
              <button type="button">Cancel</button>
              <button type="submit">Save</button>
            </td>
          </tr>
        </table>
      </div>
  );
}
  