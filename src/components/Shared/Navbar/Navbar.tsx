import React from 'react'
import { Button, Navbar as Nav } from "flowbite-react";
import Container from '../Container/Container';


function Navbar() {
  return (
    <div className='absolute w-full z-50 left-0'>
      <Container>
        <Nav fluid rounded className='justify-between bg-opacity-0 py-4'>
            <Nav.Brand href="/">
              <img
                src="/images/cottage-logo-01.png"
                className="mr-3 h-9 md:h-12"
                alt="კოტეჯის ლოგო"
              />
              <span className="self-center whitespace-nowrap text-sm md:text-md font-semibold text-slate-100">
                X.O Bakuriani
              </span>
            </Nav.Brand>
            <Nav.Toggle className='bg-white'/>
            <Nav.Collapse className='justify-center items-center bg-darkBackground lg:bg-transparent'>
              <Nav.Link href="/about" className='flex h-full justify-center items-center text-slate-100 hover:text-primary hover:bg-blue-900 font-semibold'>ჩვენ შესახებ</Nav.Link>
              <Nav.Link href="/prices" className='flex h-full justify-center items-center text-slate-100 hover:text-primary hover:bg-blue-900 font-semibold'>ფასები</Nav.Link>
              <Nav.Link href="/contact" className='flex h-full justify-center items-center text-slate-100 hover:text-primary hover:bg-blue-900 font-semibold'>კონტაქტი</Nav.Link>
              <Button color="primary">დაგვიკავშირდი</Button>
            </Nav.Collapse>
          </Nav>
        </Container>
      </div>
  )
}

export default Navbar