import React from 'react'
import Container from '../../Shared/Container/Container'
import ActivityPreviewCard from '../../ActivityPreviewCard/ActivityPreviewCard'

function MainLandingActivies() {
  return (
    <div className='py-12 bg-darkBackground '>
        <div className='bg-slate-600 rounded-3xl py-24'>
            <Container>
                <div className='flex flex-col gap-8'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 lg:flex-row'>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-white font-bold text-2xl text-center lg:text-4xl lg:text-left'>სახალისო გარე აქტოვობები</h2>
                            <h4 className='text-slate-100 text-center lg:text-xl lg:text-left'>წადი თავგადასავლებზე!</h4>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h5 className='text-gray-300 text-center text-sm lg:text-lg lg:text-left'>გარეთ იმდენი თავგადასავალი გელოდება, რო რავი, ძაან მაგარია კაროჩე რა, იმენა მაგარია ბოზი ვიყო, ძაან გაერთობი შიგნითაც
                                და გარეთაც.
                            </h5>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                        <ActivityPreviewCard
                        title='საცურაო აუზი'
                        description='სუფთა და გამაგრილებელი აუზი საუკეთესო გზაა ზაფხულში განსატვირთად.'
                        imageUrl='/images/activities/activity-01.jpg'
                        />
                        <ActivityPreviewCard
                        title='საცურაო აუზი'
                        description='სუფთა და გამაგრილებელი აუზი საუკეთესო გზაა ზაფხულში განსატვირთად.'
                        imageUrl='/images/activities/activity-01.jpg'
                        />
                        <ActivityPreviewCard
                        title='საცურაო აუზი'
                        description='სუფთა და გამაგრილებელი აუზი საუკეთესო გზაა ზაფხულში განსატვირთად.'
                        imageUrl='/images/activities/activity-01.jpg'
                        />
                    </div>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default MainLandingActivies