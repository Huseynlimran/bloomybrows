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
                <a href="/">РАБОТЫ</a>
              </li>
              <li>
              <a href="#doing" className="linksNav">
              УСЛУГИ
            </a>
              </li>
              <li>
              <a href="#price" className="linksNav">
            ПРАЙС
            </a>
              </li>
              <li>
              <a href="#aboutme" className="linksNav">
            ОБО МНЕ
            </a>
              </li>
            </ul>
          </div>
          <div className="location">
            <ul>
              <li>
                <HiOutlineDevicePhoneMobile size={"20px"} />
                +7 995 927-08-29
              </li>
              <li className="location">
                <VscLocation size={"20px"} />
                г. Челябинск 40 лет победы 30
              </li>
              <li>
                <a
                  href="https://instagram.com/bloomybrowsbaku"
                  target={"_blank"}
                  rel="noreferrer"
                  className="instagram"
                >
                  <TbBrandInstagram size={"20px"} />
                  Bloomybrowsbaku
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
