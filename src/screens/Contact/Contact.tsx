import { Button, Label, Textarea, TextInput } from "flowbite-react";
import React from "react";
import Container from "../../components/Shared/Container/Container";

import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import GoogleMapComponent from "../../components/GoogleMapComponent/GoogleMapComponent";

function Contact() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center relative h-[45vh]">
        <div className="z-[50] flex flex-col gap-2 items-center">
          <h1 className="font-semibold text-white text-4xl text-center lg:text-5xl">
            კონტაქტი
          </h1>
          <h3 className="text-gray-300 text-center">მოგვწერე</h3>
        </div>
        <img
          src="/images/backgrounds/background-01.jpg"
          className="brightness-[30%] h-[45vh] w-screen object-cover absolute"
          alt="background-01"
        />
      </div>
      <div className="bg-darkBackground py-12">
        <Container>
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-8">
              <h1 className="text-white font-bold text-center text-2xl">
                მოგვწერე
              </h1>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <h2 className="text-white font-bold text-center lg:text-left text-2xl">
                  მონაცემები
                </h2>
                <div className="flex flex-col gap-1">
                  <h2 className="text-gray-300 text-left text-sm">
                    <strong>მისამართი:</strong>{" "}
                    {"თბილისი, ი. ვეკა~უას #42, 32 ჩიხი, მეშვიდე სართული"}
                  </h2>
                  <h2 className="text-gray-300 text-left text-sm">
                    <strong>ტელეფონი:</strong> {"+332 2 34 22 98"}
                  </h2>
                  <h2 className="text-gray-300 text-left text-sm">
                    <strong>მობილური ტელეფონი:</strong> {"+995 555 48 67 50"}
                  </h2>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-white font-bold text-center lg:text-left text-2xl">
                  სოციალური მედია
                </h2>
                <div className="flex gap-2">
                  <div className="flex items-center text-white rounded-full p-4 bg-primary">
                    <FaFacebook></FaFacebook>
                  </div>
                  <div className="flex items-center text-white rounded-full p-4 bg-primary">
                    <FaInstagram></FaInstagram>
                  </div>
                  <div className="flex items-center text-white rounded-full p-4 bg-primary">
                    <FaTiktok></FaTiktok>
                  </div>
                  <div className="flex items-center text-white rounded-full p-4 bg-primary">
                    <FaYoutube></FaYoutube>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <GoogleMapComponent />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Contact;
