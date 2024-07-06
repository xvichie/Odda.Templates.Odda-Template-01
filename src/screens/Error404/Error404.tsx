import { Button } from 'flowbite-react'
import React from 'react'

function Error404() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center relative h-screen">
        <div className="z-[50] flex flex-col gap-2 items-center">
            <h1 className="font-semibold text-white text-5xl text-center lg:text-8xl">404</h1>
          <h1 className="font-semibold text-white text-4xl text-center lg:text-4xl">
             გვერდი ნაპოვნი არაა
          </h1>
          <h3 className="text-gray-300 text-center">
            მგონი ამდენ ძებნაში გზა აგებნა... ამიტომაც, დაჯავშნე უბრალოდ მარტივად და დაისვენე უკვე :)
          </h3>
          <Button outline color={"primary"} className="bg-none w-80 mt-4">
            მთავარ გვერდზე დაბრუნება
          </Button>
        </div>
        <img
          src="/images/backgrounds/background-03.jpg"
          className="brightness-[30%] h-screen w-screen object-cover absolute"
          alt="background-01"
        />
      </div>
    </div>
  )
}

export default Error404