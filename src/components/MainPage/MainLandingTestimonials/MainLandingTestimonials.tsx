import React from 'react'
import Container from '../../Shared/Container/Container'

function MainLandingTestimonials() {
  return (
    <div className='bg-darkBackground p-24'>
        <Container>
            <div className='flex flex-col gap-4'>
                <h2 className='text-white font-bold text-3xl text-center'>რას ამბობენ ჩვენი სტუმრები</h2>
                <h4 className='text-slate-100 text-center'>მომხმარებლის შეფასებები</h4>
            </div>
            <div className='flex flex-col lg:flex-row justify-between items-center mt-16 gap-16'>
                <div className='flex flex-col gap-16'>
                    <div className='flex flex-col lg:flex-row gap-8'>
                        <img src="/images/persons/person-01.jpg" alt="person" className='rounded-full lg:h-32 lg:w-32'/>
                        <div className='flex flex-col justify-between gap-4'>
                            <h4 className='text-gray-300 text-center text-sm lg:text-left'>
                                დიდი მადლობა X.O კოტეჯებს შესანიშნავი დროისთვის
                            </h4>
                            <div>
                                <h2 className='text-center font-semibold text-white lg:text-left'>ნიკა კოჭლამაზიშვილი</h2>
                                <h4 className='text-center text-primary text-xs lg:text-left'>დამსვნებელი</h4>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-8'>
                        <img src="/images/persons/person-01.jpg" alt="person" className='rounded-full lg:h-32 lg:w-32'/>
                        <div className='flex flex-col justify-between gap-4'>
                            <h4 className='text-gray-300 text-center text-sm lg:text-left'>
                                ძაან მაგარი იყო, იმენა ეგრე არსად არ გავრთობილვარ. მადლობა X.O კოტეჯებს, მიყვარხართ
                            </h4>
                            <div>
                                <h2 className='text-center font-semibold text-white lg:text-left'>სანდრო სიჭინავა</h2>
                                <h4 className='text-center text-primary text-xs lg:text-left'>დამსვნებელი</h4>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-8'>
                        <img src="/images/persons/person-01.jpg" alt="person" className='rounded-full lg:h-32 lg:w-32'/>
                        <div className='flex flex-col justify-between gap-4'>
                            <h4 className='text-gray-300 text-center text-sm lg:text-left'>
                                მართლა საუკეთესო ადგილია დასასვენებლად. ძალიან ვწუხვარ რომ მეტი ხანი ვერ დავრჩი 
                            </h4>
                            <div>
                                <h2 className='text-center font-semibold text-white lg:text-left'>ირაკლი დათიაშვილი</h2>
                                <h4 className='text-center text-primary text-xs lg:text-left'>დამსვნებელი</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/images/cottage-nature.jpg" alt="cottage nature" className='h-[36rem] rounded-3xl hidden lg:block' />
            </div>
        </Container>
    </div>
  )
}

export default MainLandingTestimonials