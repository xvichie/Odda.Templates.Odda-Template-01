import React from "react";

import {
  Button,
  Footer as FooterFlowbite,
  Label,
  Textarea,
  TextInput,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

import Container from "../Container/Container";

function Footer() {
  return (
    <>
      <div className="w-full bg-secondary py-12">
        <Container>
            <div className="border-gray-300 border-solid border-2 rounded-xl p-4
            flex flex-col items-center">
                <div className="w-full lg:w-5/6 py-4">
                    <h1 className="font-bold text-gray-200 text-2xl text-center lg:text-5xl">მოგვწერე</h1>
                    <div className="flex flex-col gap-4 py-4 rounded-xl">
                        <div className="flex flex-col gap-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="grid grid-cols-1 gap-4">
                            <div>
                                <div className="mb-2 block">
                                <Label
                                    htmlFor="name"
                                    value="სახელი"
                                    className="text-white"
                                />
                                </div>
                                <TextInput
                                id="name"
                                type="text"
                                icon={IoMdPerson}
                                placeholder="ჩაწერეთ თქვენი სახელი..."
                                required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                <Label
                                    htmlFor="email4"
                                    value="ელ. ფოსტა"
                                    className="text-white"
                                />
                                </div>
                                <TextInput
                                id="email4"
                                type="email"
                                icon={HiMail}
                                placeholder="ჩაწერეთ თქვენი ელ. ფოსტა..."
                                required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                <Label
                                    htmlFor="phone"
                                    value="ტელეფონის ნომერი"
                                    className="text-white"
                                />
                                </div>
                                <TextInput
                                id="phone"
                                icon={FaPhoneAlt}
                                placeholder="ჩაწერეთ თქვენი ტელეფონის ნომერი..."
                                required
                                />
                            </div>
                            </div>
                            <div className="h-full flex flex-col">
                            <div className="mb-2 block">
                                <Label
                                htmlFor="comment"
                                value="თქვენი მესიჯი"
                                className="text-white"
                                />
                            </div>
                            <Textarea
                                id="comment"
                                placeholder="ჩაწერეთ თქვენი მესიჯი..."
                                required
                                rows={4}
                                className="h-52 lg:flex-1"
                            />
                            </div>
                        </div>
                        <div className="w-full">
                            <Button className="w-full" color={"primary"}>
                            გაგზავნა
                            </Button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
      </div>
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
                  <h4 className="font-semibold text-gray-300">X.O Bakuriani</h4>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                  <div>
                    <FooterFlowbite.Title
                      title="ჩვენ შესახებ"
                      className="text-gray-300"
                    />
                    <FooterFlowbite.LinkGroup col>
                      <FooterFlowbite.Link href="#" className="text-gray-400">
                        X.O Bakuriani
                      </FooterFlowbite.Link>
                      <FooterFlowbite.Link href="#" className="text-gray-400">
                        დაჯავშნა
                      </FooterFlowbite.Link>
                    </FooterFlowbite.LinkGroup>
                  </div>
                  <div>
                    <FooterFlowbite.Title
                      title="გამოგვყევით"
                      className="text-gray-300"
                    />
                    <FooterFlowbite.LinkGroup col>
                      <FooterFlowbite.Link href="#" className="text-gray-400">
                        Github
                      </FooterFlowbite.Link>
                      <FooterFlowbite.Link href="#" className="text-gray-400">
                        Discord
                      </FooterFlowbite.Link>
                    </FooterFlowbite.LinkGroup>
                  </div>
                  <div>
                    <FooterFlowbite.Title
                      title="ლეგალური"
                      className="text-gray-300"
                    />
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
                <FooterFlowbite.Copyright
                  href="#"
                  by="X.O Bakuriani™"
                  year={2024}
                  className="text-gray-300"
                />
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                  <FooterFlowbite.Icon
                    href="#"
                    icon={BsFacebook}
                    className="text-gray-300 hover:text-primary"
                  />
                  <FooterFlowbite.Icon
                    href="#"
                    icon={BsInstagram}
                    className="text-gray-300 hover:text-primary"
                  />
                  <FooterFlowbite.Icon
                    href="#"
                    icon={BsTwitter}
                    className="text-gray-300 hover:text-primary"
                  />
                  <FooterFlowbite.Icon
                    href="#"
                    icon={BsGithub}
                    className="text-gray-300 hover:text-primary"
                  />
                  <FooterFlowbite.Icon
                    href="#"
                    icon={BsDribbble}
                    className="text-gray-300 hover:text-primary"
                  />
                </div>
              </div>
            </div>
          </FooterFlowbite>
        </Container>
      </div>
    </>
  );
}

export default Footer;
