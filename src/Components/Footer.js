import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { VscLocation } from "react-icons/vsc";
import { TbBrandInstagram } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="container">
      <div className="footer">
        <div className="footer_left">
          <img src="img/logoB.png" alt="" />
        </div>

        <div className="footer_right">
          <div className="links">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
            </ul>
          </div>
          <div className="location">
            <ul>
              <li>
                <HiOutlineDevicePhoneMobile size={"20px"} />
                +7-912-403-40-83
              </li>
              <li>
                <VscLocation size={"20px"} />
                Ulitsa Darvina, 18А, Chelyabinsk, Chelyabinskaya
              </li>
              <li>
                <a
                  href="https://instagram.com/bloomybrowsbaku"
                  target={"_blank"}
                  rel="noreferrer"
                  className="instagram"
                >
                  <TbBrandInstagram size={"20px"} />
                  Blomybrowsbaku
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
