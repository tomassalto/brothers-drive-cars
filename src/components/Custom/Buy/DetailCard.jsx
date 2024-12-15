import { useState } from "react";
import BookCar from "./BookCar.jsx";

const DetailCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div class="pt-[113px] lg:pt-[146px]">
      <div
        class="flex flex-col items-center rounded-2xl w-[300px] pt-[30px] xs:w-[325px] xs:h-[530px] sm:w-[556px] sm:h-[600px] md:w-[644px] md:h-max lg:flex-row lg:items-start lg:w-[970px] lg:py-9 xl:w-[1024px] mac:w-[1100px] mac:py-11 hd:w-[1280px] hd:py-[51px] fullhd:w-[1415px]"
        style={{ background: "rgba(0, 0, 0, 0.20)" }}
      >
        <div class="lg:flex lg:flex-col lg:pl-8 hd:pl-[50px]">
          <p class="text-white text-sm xs:text-base font-semibold tracking-wide pb-4 font-ubuntu sm:text-2xl mac:text-[27px] hd:pb-[22px] hd:text-3xl fullhd:text-[32px]">
            Peugeot 208 1.4 Feline Tiptronic
          </p>
          <img
            src="/images/buy-car/image_3.png"
            alt="detail car"
            class="hidden lg:block lg:w-[410px] mac:w-[460px] hd:w-[520px] fullhd:w-[540px]"
          />
        </div>
        <img
          src="/images/buy-car/image_2.png"
          alt="detail car"
          class="w-full px-[27px] lg:hidden"
        />
        <div class="lg:flex lg:flex-col lg:pl-7 xl:pl-12 hd:pl-[62px]">
          <p class="text-white font-semibold text-center lg:text-start text-2xl pt-4 pb-6 xs:pt-6 xs:pb-8 lg:pb-5 lg:text-[22px] lg:pt-12 mac:text-3xl hd:text-4xl hd:pt-16 fullhd:text-[40px]">
            US$ 26,000
          </p>
          <div class="hidden lg:flex lg:gap-[52px] xl:gap-[75px]">
            <div class="flex flex-col gap-4 lg:gap-3 mac:gap-4">
              <div class="flex items-center gap-5">
                <img
                  src="/icons/buy-car/price.svg"
                  alt="icon"
                  class="fullhd:w-6"
                />
                <p class="text-white font-medium text-base mac:text-lg hd:text-xl fullhd:text-2xl">
                  Precio: $26,000
                </p>
              </div>
              <div class="flex items-center gap-5">
                <img
                  src="/icons/buy-car/front_car.svg"
                  alt="icon"
                  class="fullhd:w-6"
                />
                <p class="text-white font-medium text-base mac:text-lg hd:text-xl fullhd:text-2xl">
                  Marca: Peugeot
                </p>
              </div>
              <div class="flex items-center gap-5">
                <img
                  src="/icons/buy-car/front_car.svg"
                  alt="icon"
                  class="fullhd:w-6"
                />
                <p class="text-white font-medium text-base mac:text-lg hd:text-xl fullhd:text-2xl">
                  Modelo: 208
                </p>
              </div>
              <div class="flex items-center gap-5">
                <img
                  src="/icons/buy-car/side_car.svg"
                  alt="icon"
                  class="fullhd:w-6"
                />
                <p class="text-white font-medium text-base mac:text-lg hd:text-xl fullhd:text-2xl">
                  Puertas: 5
                </p>
              </div>
            </div>
            <div class="flex flex-col gap-4 lg:gap-3 mac:gap-4">
              <div class="flex items-center gap-5">
                <img
                  src="/icons/buy-car/calendar.svg"
                  alt="icon"
                  class="fullhd:w-6"
                />
                <p class="text-white font-medium text-base mac:text-lg hd:text-xl fullhd:text-2xl">
                  Fabricación: 2023
                </p>
              </div>
              <div class="flex items-center gap-5">
                <img
                  src="/icons/buy-car/fuel_station.svg"
                  alt="icon"
                  class="fullhd:w-6"
                />
                <p class="text-white font-medium text-base mac:text-lg hd:text-xl fullhd:text-2xl">
                  Combustible: Nafta
                </p>
              </div>
              <div class="flex items-center gap-5">
                <img
                  src="/icons/buy-car/route.svg"
                  alt="icon"
                  class="fullhd:w-6"
                />
                <p class="text-white font-medium text-base mac:text-lg hd:text-xl fullhd:text-2xl">
                  Kilometraje: 5600km
                </p>
              </div>
              <div class="flex items-center gap-5">
                <img
                  src="/icons/buy-car/transmission.svg"
                  alt="icon"
                  class="fullhd:w-6"
                />
                <p class="text-white font-medium text-base mac:text-lg hd:text-xl fullhd:text-2xl">
                  Transmisión: Automática
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row gap-6 lg:flex-row lg:pt-7 lg:gap-4 hd:pt-[35px] pb-[52px]">
            <button
              onClick={openModal}
              style={{
                background:
                  "linear-gradient( #A49C4C -15%, #CAA962 35.78%, #BF953F 92.17%, #988001 118.43%)",
              }}
              class="text-white rounded-lg py-[14px] font-ubuntu text-2xl font-normal w-[250px] xs:w-[266px] sm:w-[230px] sm:h-[66px] md:w-[280px] lg:w-[165px] lg:text-xl lg:h-[52px] xl:w-[200px] lg:py-2 mac:w-[215px] h-[62px] hd:w-[230px] hd:py-3 fullhd:w-[266px]"
            >
              Reservar auto
            </button>
            <a
              href="https://api.whatsapp.com/send/?phone=5491160246355&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              <button
                style={{ background: "rgba(70, 70, 70, 0.15)" }}
                class="rounded-lg py-[14px] border-[3px] text-2xl border-gold font-ubuntu font-normal w-[250px] xs:w-[266px] sm:w-[230px] md:w-[280px] lg:w-[165px] lg:text-xl lg:py-[9px] xl:w-[200px] mac:w-[215px] hd:w-[230px] hd:py-[9px] fullhd:w-[266px] text-white"
              >
                Consultar
              </button>
            </a>
          </div>
        </div>
      </div>
      <BookCar isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};
export default DetailCard;
