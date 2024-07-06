import React from "react";

import { Footer as FooterFlowbite } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import Container from "../Container/Container";

function Footer() {
  return (
    <div className="w-full bg-secondary">
      <Container>
        <FooterFlowbite>
          <div className="w-full bg-secondary py-8">
            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
              <div className="flex items-center">
                <FooterFlowbite.Brand
                  href="https://flowbite.com"
                  src="/images/cottage-logo-01.png"
                  alt="Flowbite Logo"
                />
                <h4 className="font-semibold text-gray-300">გიას კოტეჯები</h4>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                <div>
                  <FooterFlowbite.Title title="ჩვენ შესახებ"  className="text-gray-300"/>
                  <FooterFlowbite.LinkGroup col>
                    <FooterFlowbite.Link href="#" className="text-gray-400">გიას კოტეჯები</FooterFlowbite.Link>
                    <FooterFlowbite.Link href="#" className="text-gray-400">
                      დაჯავშნა
                    </FooterFlowbite.Link>
                  </FooterFlowbite.LinkGroup>
                </div>
                <div>
                  <FooterFlowbite.Title title="გამოგვყევით"  className="text-gray-300" />
                  <FooterFlowbite.LinkGroup col>
                    <FooterFlowbite.Link href="#" className="text-gray-400">Github</FooterFlowbite.Link>
                    <FooterFlowbite.Link href="#" className="text-gray-400">Discord</FooterFlowbite.Link>
                  </FooterFlowbite.LinkGroup>
                </div>
                <div>
                  <FooterFlowbite.Title title="ლეგალური" className="text-gray-300" />
                  <FooterFlowbite.LinkGroup col>
                    <FooterFlowbite.Link href="#" className="text-gray-400">
                      კონფიდენციალურობა
                    </FooterFlowbite.Link>
                    <FooterFlowbite.Link href="#" className="text-gray-400">
                      წესები და პირობები
                    </FooterFlowbite.Link>
                  </FooterFlowbite.LinkGroup>
                </div>
              </div>
            </div>
            <FooterFlowbite.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
              <FooterFlowbite.Copyright href="#" by="გიას კოტეჯები™" year={2024} className="text-gray-300"/>
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <FooterFlowbite.Icon href="#" icon={BsFacebook} className="text-gray-300 hover:text-primary" />
                <FooterFlowbite.Icon href="#" icon={BsInstagram} className="text-gray-300 hover:text-primary" />
                <FooterFlowbite.Icon href="#" icon={BsTwitter} className="text-gray-300 hover:text-primary" />
                <FooterFlowbite.Icon href="#" icon={BsGithub} className="text-gray-300 hover:text-primary" />
                <FooterFlowbite.Icon href="#" icon={BsDribbble} className="text-gray-300 hover:text-primary"/>
              </div>
            </div>
          </div>
        </FooterFlowbite>
      </Container>
    </div>
  );
}

export default Footer;
