import { Button } from "flowbite-react";
import { FaBed } from "react-icons/fa";
import { FaShower } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";

interface CottagePreviewCard {
  name: string;
  price: string;
  imageUrl: string;
  beds: number;
  wetPoints: number;
  freeWifi: boolean;
}

function CottagePreviewCard({
  name,
  price,
  imageUrl,
  beds,
  wetPoints,
  freeWifi,
}: CottagePreviewCard) {
  return (
    <div className="rounded-2xl bg-lightBackground z-[10]">
      <img src={imageUrl} alt="cottage-02" className="rounded-t-2xl" />
      <div className="flex justify-between gap-8 p-6">
        <div className="flex flex-col justify-between flex-1">
          <div className="flex items-center">
            <h3 className="text-indigo-500 text-2xl font-bold">{price}</h3>
            <h4 className="ml-1 text-lg text-gray-300">/ღამე</h4>
          </div>
          <h3 className="text-white font-semibold text-lg mt-1">{name}</h3>
          <div className="flex justify-between mt-6">
            <div className="flex items-center gap-1">
              <FaBed className="text-white"></FaBed>
              <div className="text-white">: {beds}</div>
            </div>
            <div className="flex items-center gap-1">
              <FaShower className="text-white"></FaShower>
              <div className="text-white">: {beds}</div>
            </div>
            <div className="flex items-center gap-1">
              <FaWifi className="text-white"></FaWifi>
              <div className="text-white">: {freeWifi ? "უფასო" : "არა"}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
            <Button color="primary">ნახვა</Button>
        </div>
      </div>
    </div>
  );
}

export default CottagePreviewCard;
