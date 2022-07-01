import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-links">
        <div>
          <div className="Footer-link-head">COMPANY</div>
          <div>
            <ul style={{ listStyle: "none", paddingLeft: "0px" }}>
              <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="/">Team</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Food Hub Blog</a>
              </li>
              <li>
                <a href="/">Bug Bounty</a>
              </li>
              <li>
                <a href="/">Food Hub one</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="Footer-link-head">CONTACT</div>
          <div>
            <ul style={{ listStyle: "none", paddingLeft: "0px" }}>
              <li>
                <a href="/">Help & Support</a>
              </li>
              <li>
                <a href="/">Partner with us</a>
              </li>
              <li>
                <a href="/">Ride with us</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="Footer-link-head">LEGAL</div>
          <div>
            <ul style={{ listStyle: "none", paddingLeft: "0px" }}>
              <li>
                <a href="/">Trems & Conditions</a>
              </li>
              <li>
                <a href="/">Refund & Cancellation</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Cookie Policy</a>
              </li>
              <li>
                <a href="/">Offer Terms</a>
              </li>
              <li>
                <a href="/">Phishing & Fraud</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Footer-mobile">
        <img
          className="Footer-img"
          src="/assets/footer_graphic.jpg"
          alt="footer-img"
        />
      </div>
    </div>
  );
}
