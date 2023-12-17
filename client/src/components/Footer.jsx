import { Link } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";
import { MdMailOutline, MdOutlinePhone } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";


const Footer = () => {
  return (
    <>
      <footer className="h-[323px]">
        <div className="container mx-auto my-auto py-[159px]">
          <div className="flex md:justify-between flex-col items-center h-full md:flex-row">
            <div className="md:w-[300px] gap-5 flex flex-col ">
              <h1 className=" md:text-5xl text-primary font-bold font-fontNav w-full flex justify-center text-3xl">
                BlitzBook
              </h1>
              <p className="w-full text-lg font-medium px-10 text-center">
                We have the largest and most comprehensive selection of comics
                and graphic novels from all your favorite publishers in a form
                of ebook.
              </p>
            </div>
            <div className="md:w-[360px] flex flex-col w-full">
              <h1 className="text-primary text-2xl font-bold md:text-left text-center">Browse</h1>
              <div className="grid grid-cols-2 md:text-lg gap-1 font-medium w-full md:text-start text-center">
                <ul className="">
                  <li>
                    <Link>Home</Link>
                  </li>
                  <li>
                    <Link>New Release</Link>
                  </li>
                  <li>
                    <Link>Best Sellers</Link>
                  </li>
                  <li>
                    <Link>Genera</Link>
                  </li>
                  <li>
                    <Link>Publisher</Link>
                  </li>
                </ul>
                <ul className="w-full">
                  <li>
                    <Link>Variants</Link>
                  </li>
                  <li>
                    <Link>Number1s</Link>
                  </li>
                  <li>
                    <Link>One Shot</Link>
                  </li>
                  <li>
                    <Link>Back Issues</Link>
                  </li>
                  <li>
                    <Link>BookCollection</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="items-center flex flex-col">
              <h1 className="text-primary text-2xl font-bold">Contact</h1>
              <div className="text-xl">
                <div className="contact-footer ">
                  <FiMapPin />
                  Home
                </div>
                <div className="contact-footer">
                  <MdMailOutline />
                  fakeservice@mail.com
                </div>
                <div className="contact-footer">
                  <MdOutlinePhone />
                  1234567890
                </div>
                <div className="contact-footer gap-5 text-xl">
                  <FaFacebook />
                  <FaInstagram />
                  <TiSocialTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-secondary mb-5 w-full md:h-[36px] flex md:justify-center items-center h-auto ">
          <p className="text-center md:text-lg font-medium">
            CoppyRight ©2023 BlitzBook. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
