import { Button } from 'flowbite-react'
import React from 'react'
import MainLandingRooms from '../../components/MainPage/MainLandingRooms/MainLandingRooms'
import MainLandingAboutUs from '../../components/MainPage/MainLandingAboutUs/MainLandingAboutUs'
import MainLandingPerks from '../../components/MainPage/MainLandingPerks/MainLandingPerks'
import MainLandingAddedPerks from '../../components/MainPage/MainLandingAddedPerks/MainLandingAddedPerks'

function Prices() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center relative h-[75vh]">
        <div className="z-[50] flex flex-col gap-2 items-center">
          <h1 className="font-semibold text-white text-4xl text-center lg:text-5xl">
            ჩვენი <br /> ფასები
          </h1>
          <h3 className="text-gray-300 text-center">
            საუკეთესო დასვენება, საუკეთესო ფასად
          </h3>
          <Button outline color={"primary"} className="bg-none w-40 mt-4">
            დაგვიკავშირდი
          </Button>
        </div>
        <img
          src="/images/backgrounds/background-01.jpg"
          className="brightness-[30%] h-[75vh] w-screen object-cover absolute"
          alt="background-01"
        />
      </div>
      <MainLandingRooms />
      <MainLandingAboutUs />
      <MainLandingPerks />
      <MainLandingAddedPerks />
    </div>
  )
}

export default Prices