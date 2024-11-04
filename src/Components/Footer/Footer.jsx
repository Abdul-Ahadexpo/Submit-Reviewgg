import "./Footer.css";
import loga from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div>
          <img className="loga" src={loga} alt="" />
        </div>
        <div className="About">
          <h1>About Us</h1>
          <p>
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>
        {/* Quick links */}
        <div className="links">
          <h1>Quick links</h1>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contacts</li>
          </ul>
        </div>

        {/* Subscribe */}

        <div className="email">
          <h1>Subscribe</h1>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <input type="email" placeholder="Enter your Email" required />
          <button type="submit">Subscribe</button>
        </div>
      </section>
    </>
  );
};

export default Footer;
