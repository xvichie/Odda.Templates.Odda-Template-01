import React from 'react'
import Container from '../Shared/Container/Container';
import { Button } from 'flowbite-react';

interface ActivityPreviewCard {
    imageUrl: string;
    title: string;
    description: string;
}

function ActivityPreviewCard({imageUrl, title, description} : ActivityPreviewCard) {
  return (
    <div className='grid grid-cols-1 grid-rows-2 rounded-3xl w-full'>
        <img src={imageUrl} alt="Activity" className='w-full h-full object-cover rounded-t-3xl' />
        <div className='bg-gray-900 rounded-b-3xl flex-1'>
            <Container>
                <div className='p-8 flex flex-col gap-2 items-center justify-center h-full flex-1'>
                    <h2 className='text-white font-semibold text-lg text-center'>{title}</h2>
                    <h4 className='text-slate-100 text-sm text-center'>{description}</h4>
                    <Button color={"primary"} className='mt-4 bg-primary hover:bg-blue-600'>
                        გაიგე მეტი
                    </Button>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default ActivityPreviewCard