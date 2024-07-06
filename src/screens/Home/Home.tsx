import React from 'react'
import MainLanding from '../../components/MainPage/MainLanding/MainLanding'
import MainLandingBookNow from '../../components/MainPage/MainLandingBookNow/MainLandingBookNow'
import MainLandingRooms from '../../components/MainPage/MainLandingRooms/MainLandingRooms'
import MainLandingAboutUs from '../../components/MainPage/MainLandingAboutUs/MainLandingAboutUs'
import MainLandingPerks from '../../components/MainPage/MainLandingPerks/MainLandingPerks'
import MainLandingAddedPerks from '../../components/MainPage/MainLandingAddedPerks/MainLandingAddedPerks'
import MainLandingHowItWorks from '../../components/MainPage/MainLandingHowItWorks/MainLandingHowItWorks'
import MainLandingActivies from '../../components/MainPage/MainLandingActivities/MainLandingActivies'
import MainLandingTestimonials from '../../components/MainPage/MainLandingTestimonials/MainLandingTestimonials'

function Home() {
  return (
    <div>
        <MainLanding />
        <MainLandingBookNow />
        <MainLandingRooms />
        <MainLandingAboutUs />
        <MainLandingPerks />
        <MainLandingAddedPerks />
        <MainLandingHowItWorks />
        <MainLandingActivies />
        <MainLandingTestimonials />
    </div>
  )
}

export default Home