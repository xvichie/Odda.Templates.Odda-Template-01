import CottagePreviewCard from "../../CottagePreviewCard/CottagePreviewCard";
import Container from "../../Shared/Container/Container";

function MainLandingRooms() {
  return (
    <>
      <div className="bg-darkBackground py-16 relative z-[-1]">
        <Container>
          <div className="text-center gap-2">
            <h3 className="text-white text-3xl font-bold text-center">
              გახადე შენი დასვენება დამამახსოვრებელი
            </h3>
            <h4 className="text-gray-400">
              შეარჩიე ოთახი რომელიც ყველაზე მეტად მოგწონს
            </h4>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            <CottagePreviewCard
              beds={3}
              freeWifi
              imageUrl="/images/cottages/cottage-02.jpg"
              name="ზღვისპირა კოტეჯი"
              price="$ 250"
              wetPoints={2}
            />
            <CottagePreviewCard
              beds={2}
              freeWifi
              imageUrl="/images/cottages/cottage-03.jpg"
              name="მთის კოტეჯი"
              price="$ 115"
              wetPoints={1}
            />
            <CottagePreviewCard
              beds={3}
              freeWifi
              imageUrl="/images/cottages/cottage-04.jpg"
              name="ოროთახიანი კოტეჯი"
              price="$ 150"
              wetPoints={2}
            />
          </div>
        </Container>
        <div className="min-h-48 bg-lightBackground2 absolute left-0 bottom-0 w-full rounded-t-[36px]" />
      </div>
    </>
  );
}

export default MainLandingRooms;
