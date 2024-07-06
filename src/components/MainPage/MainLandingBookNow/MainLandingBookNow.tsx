import { Button, Datepicker, Select, TextInput, Tooltip } from "flowbite-react";
import { IoPerson } from "react-icons/io5";
import { FaChild } from "react-icons/fa";
import Container from "../../Shared/Container/Container";

function MainLandingBookNow() {
  return (
    <div className="z-[50] bg-lightBackground opacity-95 w-full">
      <Container>
        <div className="grid grid-rows-4 lg:grid-rows-1 lg:grid-cols-5 gap-8 py-16 lg:py-12">
          <div className="flex flex-col justify-between">
            <h3 className="text-md text-slate-100 font-semibold">
              შემოსვლის თარიღი:
            </h3>
            <Datepicker minDate={new Date()} className="z-[60]"/>
          </div>
          <div className="flex flex-col justify-between">
            <h3 className="text-md text-slate-100 font-semibold">
              გასვლის თარიღი:
            </h3>
            <Datepicker minDate={new Date()} className="z-[60]"/>
          </div>
          <div className="flex flex-col justify-between w-full">
            <h3 className="text-md text-slate-100 font-semibold">
              კოტეჯი:
            </h3>
            <div className="grid grid-cols-1 gap-3">
              <Select id="countries" required className="w-full">
                <option>ზღვისპირა კოტეჯი</option>
                <option>მთის კოტეჯი</option>
                <option>ოროთახიანი კოტეჯი</option>
              </Select>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h3 className="text-md text-slate-100 font-semibold">
              სტუმრების რაოდენობა:
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {/* <Tooltip content="ზრდასრულების რაოდენობა"> */}
                <TextInput
                  id="adults"
                  type="number"
                  min={0}
                  icon={IoPerson}
                  placeholder="ზრდასრულები"
                  required
                />
              {/* </Tooltip> */}
              {/* <Tooltip content="ბავშვების რაოდენობა"> */}
                <TextInput
                  id="adults"
                  type="number"
                  min={0}
                  icon={FaChild}
                  placeholder="ბავშვები"
                  required
                />
              {/* </Tooltip> */}
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <Button
              outline
              color="primary"
              className="w-full hover:bg-blue-800 hover:text-white"
            >
              დაგვიკავშირდი
            </Button>
            <Button color="primary" className="w-full mt-2">
              დაჯავშნა
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default MainLandingBookNow;
