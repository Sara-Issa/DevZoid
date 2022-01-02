import React from "react";
import "./sitting.css";
function Privacy() {
  return (
    <div className="privacy">
    <div className="privacy-container">

      <h1 className="privacy-title" >Privacy & Policy</h1>
      <img src="./privacy.svg" alt="privacy" className="privacy-img"></img>
      <div className="privacy-info">
      <h4 className="privacy-info"> COLLECTION OF INFORMATION</h4>
      <p className="privacy-info">
        We collect personally identifiable information, like names, postal
        addresses, email addresses, etc., when voluntarily submitted by our
        visitors. The information you provide is only used to fulfill your
        specific request, unless you give us permission to use it in another
        manner, for example to add you to one of our mailing lists.
      </p>

      <h4 className="privacy-info">COOKIE/TRACKING TECHNOLOGY</h4>
      <p className="privacy-info">
        The Site may use cookie and tracking technology depending on the
        features offered. Cookie and tracking technology are useful for
        gathering information such as browser type and operating system,
        tracking the number of visitors to Lorem Ipsum, and understanding how
        visitors use Lorem Ipsum. Cookies can also help customize Lorem Ipsum
        for visitors. Personal information cannot be collected via cookies and
        other tracking technology, however, if you previously provided
        personally identifiable information, cookies may be tied to such
        information. Aggregate cookie and tracking information may be shared
        with third parties.
      </p>

      <h4 className="privacy-info">DISTRIBUTION OF INFORMATION</h4>
      <p className="privacy-info">
        We may share information with governmental agencies or other companies
        assisting us in fraud prevention or investigation. We may do so when:
        (1) permitted or required by law; or, (2) trying to protect against or
        prevent actual or potential fraud or unauthorized transactions; or, (3)
        investigating fraud which has already taken place. The information is
        not provided to these companies for marketing purposes.
      </p>

      <h4 className="privacy-info">COMMITMENT TO DATA SECURITY</h4>
      <p className="privacy-info">
        Your personally identifiable information is kept secure. Only authorized
        employees, agents and contractors (who have agreed to keep information
        secure and confidential) have access to this information. All emails,
        newsletters and notifications from Lorem Ipsum allow you to opt out of
        further messages.
      </p>
      </div>
    </div>
    </div>
  );
}

export default Privacy;
