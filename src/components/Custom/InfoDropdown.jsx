import { useState } from "react";

const InfoDropdown = () => {
  const [toggle, setToggle] = useState(false);

  const toggleDropdown = () => {
    setToggle(!toggle);
  };

  return (
    <div className="relative">
      <button
        className="w-[300px] h-[67px] inline-flex items-center justify-between text-white bg-ultra_dark_gray focus:outline-none font-ubuntu font-normal rounded-2xl text-2xl px-5 text-center xs:w-[325px] sm:w-[556px] sm:px-7 md:w-[644px]"
        type="button"
        onClick={toggleDropdown}
      >
        Información general
        <div
          className={`transition-transform duration-200 ${
            toggle ? " rotate-180" : "rotate-0"
          } `}
        >
          <img src="/icons/chevron_down.svg" alt="chevron down" />
        </div>
      </button>

      {toggle && (
        <div
          className={`w-[300px] h-[355px] z-10 absolute top-12 bg-ultra_dark_gray rounded-2xl rounded-t-none dark:bg-gray-700 xs:w-[325px] sm:w-[556px] md:w-[644px]`}
        >
          <div className="flex flex-col pt-10 pl-5 gap-y-4 text-sm text-gray-700 dark:text-gray-200 sm:pl-10">
            <div className="flex items-center gap-4">
              <img src="/icons/buy-car/price.svg" alt="icon" className="w-6" />
              <p className="text-white text-base font-medium">
                Precio: $26,000
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/icons/buy-car/front_car.svg"
                alt="icon"
                className="w-6"
              />
              <p className="text-white text-base font-medium">Marca: Peugeot</p>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/icons/buy-car/front_car.svg"
                alt="icon"
                className="w-6"
              />
              <p className="text-white text-base font-medium">Modelo: 208</p>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/icons/buy-car/side_car.svg"
                alt="icon"
                className="w-6"
              />
              <p className="text-white text-base font-medium">Puertas: 5</p>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/icons/buy-car/calendar.svg"
                alt="icon"
                className="w-6"
              />
              <p className="text-white text-base font-medium">
                Fabricación: 2023
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img src="/icons/buy-car/route.svg" alt="icon" className="w-6" />
              <p className="text-white text-base font-medium">
                Combustible: Nafta
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/icons/buy-car/transmission.svg"
                alt="icon"
                className="w-6"
              />
              <p className="text-white text-base font-medium">
                Kilometraje: 5600km
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoDropdown;
