import React from 'react'
import Container from '../../Shared/Container/Container'
import { MdFindInPage } from "react-icons/md";
import { MdHotel } from "react-icons/md";
import { MdVerified } from "react-icons/md";



function MainLandingHowItWorks() {
  return (
    <div className='bg-darkBackground py-12 '>
        <Container>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-white font-bold text-2xl text-center lg:text-4xl'>როგორ უნდა დავისვენო თქვენთან?</h1>
                    <h4 className='text-gray-300 text-center'>გამოიყენე ჩვენი გამარტივებული სისტემა</h4>
                </div>
                <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
                    <div className='flex flex-col items-center gap-4 hover:scale-105
                    transition-all duration-200 ease-in'>
                        <div className='h-56 w-56 p-4 bg-lightBackground rounded-full
                        flex flex-col justify-center items-center'>
                            <div className='outline-gray-600 bg-gray-700 outline-2 outline-double w-32 h-32 rounded-3xl
                            flex flex-col justify-center items-center'>
                                <div className='rounded-full bg-primary p-4'>
                                    <MdFindInPage className='w-12 h-12 text-white'></MdFindInPage>
                                </div>
                            </div>
                        </div>
                        <h3 className='text-white font-semibold text-center text-lg'>მოძებნე შენთვის სასურველი კოტეჯი</h3>
                        <h4 className='text-gray-300 text-center text-sm'>დაათვალიერე სხვადასხვა კოტეჯები</h4>
                    </div>
                    <div className='flex flex-col items-center gap-4 hover:scale-105
                    transition-all duration-150 ease-in'>
                        <div className='h-56 w-56 p-4 bg-lightBackground rounded-full
                        flex flex-col justify-center items-center'>
                            <div className='outline-gray-600 bg-gray-700 outline-2 outline-double w-32 h-32 rounded-3xl
                            flex flex-col justify-center items-center'>
                                <div className='rounded-full bg-blue-700 p-4'>
                                    <MdHotel className='w-12 h-12 text-white'></MdHotel>
                                </div>
                            </div>
                        </div>
                        <h3 className='text-white font-semibold text-center text-lg'>დაჯავშნე</h3>
                        <h4 className='text-gray-300 text-center text-sm'>დაჯავშნე ნებისმიერ დროს</h4>
                    </div>
                    <div className='flex flex-col items-center gap-4 hover:scale-105
                    transition-all duration-150 ease-in'>
                        <div className='h-56 w-56 p-4 bg-lightBackground rounded-full
                        flex flex-col justify-center items-center'>
                            <div className='outline-gray-600 bg-gray-700 outline-2 outline-double w-32 h-32 rounded-3xl
                            flex flex-col justify-center items-center'>
                                <div className='rounded-full bg-green-500 p-4'>
                                    <MdVerified className='w-12 h-12 text-white'></MdVerified>
                                </div>
                            </div>
                        </div>
                        <h3 className='text-white font-semibold text-center text-lg'>დაისვენე</h3>
                        <h4 className='text-gray-300 text-center text-sm'>მიიღე დასვენება, რომელიც შენ გეკუთვნის</h4>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default MainLandingHowItWorks