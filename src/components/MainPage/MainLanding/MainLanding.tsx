import { Button } from "flowbite-react";
import Container from "../../Shared/Container/Container";
import HeaderSpace from "../../Shared/HeaderSpace/HeaderSpace";

function MainLanding() {
  return (
    <>
      <img
        src="/images/cottages/cottage-01.jpg"
        alt="Main"
        className="absolute w-[100vw] h-[70vh] lg:h-[70vh] left-0 object-cover object-bottom brightness-[20%]"
      />
      <div className="relative flex items-center justify-center w-full h-[70vh] lg:h-[70vh] overflow-hidden">
        <Container>
          <HeaderSpace />
          <div className="relative flex flex-col items-center lg:items-start z-10 w-full gap-4 px-4">
            <h3 className="text-5xl md:text-6xl lg:text-7xl text-white font-bold text-center lg:text-left">
              ადგილი <br /> შენს <br /> გულში
            </h3>
            <h6 className="text-slate-200 text-center lg:text-left">
              მიიღე დასვენება, რომელიც შენ გეკუთვნის
            </h6>
            <Button color="primary" className="w-full lg:w-40">
              დაჯავშნა
            </Button>
          </div>
          {/* <div className="absolute bottom-0 w-full flex justify-center z-10">
        <MouseScrollEffect />
      </div> */}
        </Container>
      </div>
    </>
  );
}

export default MainLanding;
