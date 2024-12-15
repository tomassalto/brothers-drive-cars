import { useState } from "react";
import Modal from "react-modal";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { brands } from "../../../data/brands_data.json";
import "./filter.css";

Modal.setAppElement("#root");

const Filters = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const toggleDropdown = (event) => {
    const buttonId = event.currentTarget.id;

    if (activeButton === buttonId) {
      setActiveButton(null);
    } else {
      setActiveButton(buttonId);
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const years = Array.from(
    { length: 2024 - 2010 + 1 },
    (_, index) => 2024 - index
  );

  return (
    <section className="flex items-center">
      <div className="flex flex-row border border-gold items-center bg-[#191919] w-[270px] xs:w-[317px] h-[70px] lg:w-[888px] xl:h-full p-4 rounded-[10px] mac:w-[1192px] mac:h-[92px] fullhd:w-[1664px] fullhd:h-[120px]">
        <div className="relative mac:pr-2">
          <input
            className="font-orbitron placeholder:font-orbitron rounded-[10px] placeholder:text-sm text-sm p-2 truncate ... pr-[52px] placeholder:-translate-y-0 w-[170px] xs:w-[207px] lg:w-[130px] lg:pr-8 xl:pr-8 mac:w-[150px] mac:h-[58px] mac:pl-4 mac:pr-12 mac:placeholder:text-base mac:text-base fullhd:w-[237px] fullhd:h-[86px] fullhd:placeholder:text-lg fullhd:text-[17px] fullhd:placeholder:-translate-y-[-1px] fullhd:pr-14"
            type="text"
            placeholder="Buscar Vehiculo..."
          />
          <img
            className="absolute right-10 top-[2px] xs:right-12 lg:right-[34px] lg:hidden"
            src="/icons/buy-car/divider.svg"
            alt="divider icon"
          />
          <button>
            <img
              className="absolute items-center right-2 top-2 xs:top-[6px] xs:right-4 lg:right-1 xl:right-1 mac:size-8 mac:top-3 mac:right-4 fullhd:right-5 fullhd:top-7"
              src="/icons/buy-car/search.svg"
              alt="search icon"
            />
          </button>
        </div>
        <button className="pl-6 lg:hidden" onClick={openModal}>
          <img src="/icons/buy-car/filter_list.svg" alt="filter icon" />
        </button>
        <div className="gap-x-2 h-full hidden lg:flex lg:flex-row lg:pl-3 relative mac:h-full mac:gap-x-3 fullhd:gap-x-8 fullhd:pl-6">
          <div className="relative">
            <button
              id="button-0"
              onClick={toggleDropdown}
              className="flex items-center h-full bg-medium_gray border-[#252323] justify-center w-[100px] border-2 rounded-[8px] mac:w-[150px] fullhd:w-[199px]"
            >
              <img
                className="size-5 pr-2 mac:mr-1 mac:size-7 fullhd:size-[34px] fullhd:mr-2"
                src="/icons/buy-car/brand.svg"
                alt="brand icon"
              />
              <p className="text-sm font-normal font-orbitron text-white mac:text-xl fullhd:text-2xl">
                Marcas
              </p>
            </button>
            <div
              className={`filter-scroll content absolute left-0 mt-2 w-[200px] mac:w-[290px] fullhd:w-[415px] bg-[#343232] rounded-lg h-[319px] overflow-auto ${
                activeButton === "button-0" ? "" : "hidden"
              }`}
            >
              <div className="filter-scroll flex flex-col gap-y-2 p-2 w-full overflow-y-auto overflow-x-hidden">
                {brands.map((brand) => (
                  <button
                    key={brand.id}
                    className="btn-gradient py-1 flex justify-center items-center border border-gray rounded-lg fullhd:h-[55px]"
                  >
                    <img
                      src={brand.image}
                      alt={brand.brand}
                      className="lg:size-6 pr-1 fullhd:size-8"
                    />
                    <p className="text-white lg:text-md fullhd:text-xl">
                      {brand.brand}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <button
              id="button-1"
              onClick={toggleDropdown}
              className="w-[80px] h-full bg-medium_gray border-[#2B2B2B] border-2 rounded-[10px] items-center flex justify-center mac:w-[110px] fullhd:w-[148px]"
            >
              <img
                className="pr-2 size-6 mac:mr-1 mac:size-7 fullhd:size-[34px] fullhd:mr-2"
                src="/icons/buy-car/calendar_white.svg"
                alt="calendar_white icon"
              />
              <p className="text-sm font-normal font-orbitron text-white mac:text-xl fullhd:text-2xl">
                Año
              </p>
            </button>
            <div
              className={`filter-scroll content absolute left-0 mt-2 w-[200px] bg-[#343232] mac:w-[290px] fullhd:w-[400px] rounded-lg h-[315px] overflow-auto ${
                activeButton === "button-1" ? "" : "hidden"
              }`}
            >
              <div className="filter-scroll flex flex-col gap-y-2 p-2 w-full overflow-y-auto overflow-x-hidden">
                {years.map((year) => (
                  <button
                    key={year}
                    className="btn-gradient flex justify-center items-center text-white w-full h-[30px] text-base rounded-lg shadow-md hover border border-gray"
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <button
              id="button-2"
              onClick={toggleDropdown}
              className="w-[100px] h-full bg-medium_gray border-[#2B2B2B] border-2 rounded-[10px] items-center flex justify-center mac:w-[150px] mac:h-full fullhd:w-[180px]"
            >
              <img
                className="pr-2 size-6 mac:mr-1 mac:size-7 fullhd:size-[34px] fullhd:mr-2"
                src="/icons/buy-car/price_tag.svg"
                alt="price_tag icon"
              />
              <p className="text-sm font-normal font-orbitron text-white mac:text-xl fullhd:text-2xl">
                Precio
              </p>
            </button>
            <div
              className={`content absolute left-0 mt-2 w-[210px] mac:w-[260px] bg-[#343232] rounded-lg fullhd:w-[330px] ${
                activeButton === "button-2" ? "" : "hidden"
              }`}
            >
              <div className="p-3 gap-3 rounded-lg flex flex-col items-center fullhd:p-4 fullhd:gap-4">
                <div className="flex flex-col items-center gap-3 w-[176x] mac:w-full">
                  <input
                    className="w-full h-[62px] rounded-[10px] border border-gray justify-center items-center gap-3 inline-flex text-white text-xl font-ubuntumono placeholder:text-center bg-[#343232] placeholder:text-white text-center"
                    type="number"
                    placeholder="$ Minimo"
                  />
                  <div className="w-[38px] h-[0px] border border-white"></div>
                  <input
                    className="w-full h-[62px] rounded-[10px] border border-gray justify-center items-center gap-3 inline-flex text-white text-xl font-ubuntumono placeholder:text-center bg-[#343232] placeholder:text-white text-center"
                    type="number"
                    placeholder="$ Máximo"
                  />
                </div>
                <p className="text-white text-sm w-full pt-[16px] font-bold pb-2 fullhd:text-lg">
                  Opciones prefabricadas:
                </p>
                <div className="flex flex-col items-start w-full">
                  <button className="btn-gradient rounded-lg text-white text-sm font-normal mb-1 p-1 fullhd:text-lg">
                    Hasta $ 10.000.000
                  </button>
                  <button className="btn-gradient rounded-lg mb-1 p-1 text-white text-sm font-normal fullhd:text-lg">
                    $ 10.000.000 a $ 20.000.000
                  </button>
                  <button className="btn-gradient rounded-lg mb-1 p-1 text-white text-sm font-normal fullhd:text-lg">
                    Más de $ 20.000.000
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <button
              id="button-3"
              onClick={toggleDropdown}
              className="w-[110px] h-full bg-medium_gray border-[#2B2B2B] border-2 rounded-[10px] items-center flex justify-center mac:w-[150px] mac:h-full fullhd:w-[182px]"
            >
              <img
                className="pr-2 size-6 mac:mr-1 mac:size-7 fullhd:size-[34px] fullhd:mr-2"
                src="/icons/buy-car/change_circle.svg"
                alt="change_circle icon"
              />
              <p className="text-sm font-normal font-orbitron text-white mac:text-xl fullhd:text-2xl">
                Estado
              </p>
            </button>
            <div
              className={`content absolute left-0 mt-2 w-[200px] mac:w-[260px] bg-[#343232] rounded-lg fullhd:w-[340px] ${
                activeButton === "button-3" ? "" : "hidden"
              }`}
            >
              <div className="gap-3 p-3 flex flex-col justify-center items-center fullhd:p-4 fullhd:gap-4">
                <button className="btn-gradient w-full h-[62px] rounded-[10px] border border-gray justify-center items-center inline-flex text-white text-xl font-ubuntumono fullhd:text-2xl">
                  Nuevo
                </button>
                <button className="btn-gradient w-full h-[62px] rounded-[10px] border border-gray justify-center items-center inline-flex text-white text-xl font-ubuntumono fullhd:text-2xl">
                  Usado
                </button>
              </div>
            </div>
          </div>

          <div className="relative">
            <button
              id="button-4"
              onClick={toggleDropdown}
              className="w-[140px] h-full bg-medium_gray border-[#2B2B2B] border-2 rounded-[10px] items-center flex justify-center mac:w-[180px] mac:h-full fullhd:w-[237px]"
            >
              <img
                className="pr-2 size-6 mac:mr-1 mac:size-7 fullhd:mr-2 fullhd:size-[34px]"
                src="/icons/buy-car/kilometers.svg"
                alt="kilometers icon"
              />
              <p className="text-sm font-normal font-orbitron text-white mac:text-xl fullhd:text-2xl">
                Kilometraje
              </p>
            </button>
            <div
              className={`content absolute left-0 mt-2 w-[200px] mac:w-[260px] bg-[#343232] rounded-lg fullhd:w-[370px] ${
                activeButton === "button-4" ? "" : "hidden"
              }`}
            >
              <div className="p-3 gap-3 rounded-lg flex flex-col items-center fullhd:gap-4 fullhd:p-4">
                <input
                  className="w-full h-[62px] rounded-[10px] border border-gray justify-center items-center gap-3 inline-flex text-white text-xl font-ubuntumono placeholder:text-center bg-[#343232] placeholder:text-white text-center"
                  type="number"
                  placeholder="Minimo (0km)"
                />

                <div className="w-[38px] h-[0px] border border-white"></div>

                <input
                  className="w-full h-[62px] rounded-[10px] border border-gray justify-center items-center gap-3 inline-flex text-white text-xl font-ubuntumono placeholder:text-center bg-[#343232] placeholder:text-white text-center"
                  type="number"
                  placeholder="Máximo"
                />

                <p className="text-white font-bold text-sm pt-[16px] pb-2 fullhd:text-lg">
                  Opciones prefabricadas:
                </p>
                <div className="flex flex-col items-start w-full">
                  <button className="text-white text-sm font-normal btn-gradient rounded-lg mb-1 p-1 fullhd:text-lg">
                    0 KM
                  </button>
                  <button className="text-white text-sm font-normal btn-gradient rounded-lg mb-1 p-1 fullhd:text-lg">
                    0 a 40.000 km
                  </button>
                  <button className="text-white text-sm font-normal btn-gradient rounded-lg mb-1 p-1 fullhd:text-lg">
                    40.000 a 75.000 km
                  </button>
                  <button className="text-white text-sm font-normal btn-gradient rounded-lg mb-1 p-1 fullhd:text-lg">
                    75.000 a 100.000 km
                  </button>
                  <button className="text-white text-sm font-normal btn-gradient rounded-lg mb-1 p-1 fullhd:text-lg">
                    100.000 o más km
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <button
              id="button-5"
              onClick={toggleDropdown}
              className="w-[140px] h-full bg-medium_gray border-[#2B2B2B] border-2 rounded-[10px] items-center flex justify-center mac:w-[190px] mac:h-full fullhd:w-64"
            >
              <img
                className="pr-1 size-6 mac:mr-1 mac:size-7 fullhd:size-[34px] fullhd:mr-2"
                src="/icons/buy-car/car_transmission.svg"
                alt="car_transmission icon"
              />
              <p className="text-sm font-normal font-orbitron text-white mac:text-xl fullhd:text-2xl">
                Transmisión
              </p>
            </button>
            <div
              className={`content absolute right-0 mt-2 w-[200px] mac:w-[260px] bg-[#343232] rounded-lg fullhd:w-[365px] ${
                activeButton === "button-5" ? "" : "hidden"
              }`}
            >
              <div className="gap-3 p-3 flex flex-col justify-center items-center fullhd:gap-4 fullhd:p-4">
                <button className="btn-gradient w-full h-[62px] rounded-[10px] border border-gray justify-center items-center inline-flex text-white text-xl font-ubuntumono fullhd:text-2xl">
                  Manual
                </button>
                <button className="btn-gradient w-full h-[62px] rounded-[10px] border border-gray justify-center items-center inline-flex text-white text-xl font-ubuntumono fullhd:text-2xl">
                  Automático
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="flex items-center justify-center border-none outline-none lg:hidden"
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center lg:hidden"
      >
        <div className="flex flex-col items-center justify-start  bg-[#343232] rounded-lg xs:w-[280px] max-h-screen top-2 sm:w-[300px] md:w-[400px] max-w-lg mx-auto  overflow-y-auto">
          <div className="flex justify-end w-full">
            <button
              onClick={closeModal}
              className="mr-3 xs:text-3xl xs:mr-4 sm:mr-7 md:text-4xl md:mr-3 text-gray-500 text-2xl text-white"
            >
              &times;
            </button>
          </div>
          <Accordion
            className="w-full flex flex-col p-3 gap-3 xs:gap-y-4 xs:p-4 md:gap-y-6 justify-center items-center"
            allowZeroExpanded
          >
            <h2 className="text-lg xs:text-xl font-bold text-center text-white font-orbitron md:text-2xl ">
              Encontra tu auto ideal
            </h2>
            <AccordionItem className="flex flex-col items-center justify-center w-full">
              <AccordionItemHeading className="flex w-full">
                <AccordionItemButton className="bg-medium_gray rounded-lg shadow-md w-full h-10 xs:w-64 xs:h-[64px] sm:w-full md:h-[82px] text-left focus:outline-none flex text-white items-center justify-center">
                  <img
                    className="pr-2 size-8 xs:pr-4 xs:size-12 md:size-14"
                    src="/icons/buy-car/brand.svg"
                    alt="brand icon"
                  />
                  <p className="text-xl xs:text-2xl font-normal font-orbitron md:text-3xl">
                    Marcas
                  </p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="flex justify-center rounded-lg mt-2 h-[200px]">
                <div className="filter-scroll flex flex-col gap-y-4 mt-2 overflow-y-auto overflow-x-hidden">
                  {brands.map((brand) => (
                    <button
                      key={brand.id}
                      className="btn-gradient w-full flex justify-center items-center gap-3 border border-gray rounded-lg px-4 py-2 bg-gray-800 hover:border-gray-300"
                    >
                      <img
                        src={brand.image}
                        alt={brand.brand}
                        className="size-8 xs:size-12"
                      />
                      <p className="text-white text-lg font-normal xs:text-[32px]">
                        {brand.brand}
                      </p>
                    </button>
                  ))}
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="flex flex-col items-center w-full">
              <AccordionItemHeading className="flex w-full">
                <AccordionItemButton className="bg-medium_gray rounded-lg shadow-md w-full h-10 xs:w-64 xs:h-16 sm:w-full md:h-[82px] text-left focus:outline-none flex text-white items-center justify-center">
                  <img
                    className="size-8 pr-2 xs:pr-4 xs:size-12 md:size-14"
                    src="/icons/buy-car/calendar_white.svg"
                    alt="calendar_white icon"
                  />
                  <p className=" text-xl xs:text-2xl font-normal font-orbitron md:text-3xl">
                    Año
                  </p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="flex justify-center rounded-lg w-full mt-2 h-[200px]">
                <div className="filter-scroll flex flex-col gap-y-2 p-2 w-full overflow-y-auto overflow-x-hidden">
                  {years.map((year) => (
                    <button
                      key={year}
                      className="btn-gradient flex justify-center items-center text-white w-full h-[30px] text-base rounded-lg shadow-md hover border border-gray"
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="flex flex-col items-center w-full">
              <AccordionItemHeading className="flex w-full">
                <AccordionItemButton className="bg-medium_gray rounded-lg shadow-md w-full h-10 xs:w-64 xs:h-16 sm:w-full md:h-[82px] text-left focus:outline-none flex text-white items-center justify-center">
                  <img
                    className="pr-2 size-8 xs:pr-4 xs:size-12 md:size-14"
                    src="/icons/buy-car/price_tag.svg"
                    alt="price_tag icon"
                  />
                  <p className="text-xl xs:text-2xl font-normal font-orbitron md:text-3xl">
                    Precio
                  </p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="flex flex-col justify-center items-center w-full">
                <div className="gap-2 p-2 flex flex-col justify-center items-center w-full mt-2">
                  <input
                    type="number"
                    className="w-[205px] xs:w-[248px] xs:h-[92px] rounded-[10px] border border-gray justify-center items-center px-4 py-2 inline-flex text-white text-xl xs:text-[32px] md:text-2xl md:w-[352px] bg-[#343232] placeholder:text-center text-center placeholder:text-white"
                    placeholder="$ Minimo"
                  />
                  <div className="w-[38px] h-[0px] border border-white"></div>
                  <input
                    type="number"
                    className="w-[205px] xs:w-[248px] xs:h-[92px] rounded-[10px] border border-gray justify-center items-center px-4 py-2 inline-flex text-white text-xl xs:text-[32px] md:text-2xl md:w-[352px] bg-[#343232] placeholder:text-center text-center placeholder:text-white"
                    placeholder="$ Máximo"
                  />
                </div>
                <p className="text-white font-bold text-lg xs:text-xl pt-2">
                  Opciones prefabricadas:
                </p>
                <div className="w-full flex-col justify-start items-start inline-flex">
                  <button className="text-center text-white text-md xs:text-lg font-normal btn-gradient rounded-lg ml-1 mb-1 p-1">
                    Hasta $ 10.000.000
                  </button>
                  <button className="text-center text-white text-md xs:text-lg font-normal btn-gradient rounded-lg ml-1 mb-1 p-1">
                    $ 10.000.000 a $ 20.000.000
                  </button>
                  <button className="text-center text-white text-md xs:text-lg font-normal btn-gradient rounded-lg ml-1 mb-1 p-1">
                    Más de $ 20.000.000
                  </button>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="flex flex-col items-center w-full">
              <AccordionItemHeading className="flex w-full">
                <AccordionItemButton className="bg-medium_gray rounded-lg shadow-md w-full h-10 xs:w-64 xs:h-16 sm:w-full md:h-[82px] text-left focus:outline-none flex text-white items-center justify-center">
                  <img
                    className="pr-2 size-8 xs:pr-4 xs:size-12 md:size-14"
                    src="/icons/buy-car/change_circle.svg"
                    alt="change_circle icon"
                  />
                  <p className="text-xl xs:text-2xl font-normal font-orbitron md:text-3xl">
                    Estado
                  </p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="flex flex-col justify-center items-center w-full">
                <div className="gap-4 p-2 flex flex-col justify-center items-center w-full mt-2">
                  <button className="btn-gradient w-full h-14 xs:h-[92px] rounded-[10px] border border-slate-400 justify-center items-center px-4 py-2 inline-flex text-white text-xl xs:text-[32px] md:text-2xl">
                    Nuevo
                  </button>
                  <button className="btn-gradient w-full h-14 xs:h-[92px] rounded-[10px] border border-slate-400 justify-center px-4 py-2 items-center inline-flex text-white text-xl xs:text-[32px] md:text-2xl">
                    Usado
                  </button>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="flex flex-col items-center w-full">
              <AccordionItemHeading className="flex w-full">
                <AccordionItemButton className="bg-medium_gray rounded-lg shadow-md w-full h-10 xs:w-64 xs:h-16 sm:w-full md:h-[82px] text-left focus:outline-none flex text-white items-center justify-center">
                  <img
                    className="pr-2 size-8 xs:pr-4 xs:size-12 md:size-14"
                    src="/icons/buy-car/kilometers.svg"
                    alt="kilometers icon"
                  />
                  <p className="text-xl xs:text-2xl font-normal font-orbitron md:text-3xl">
                    Kilometraje
                  </p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="flex flex-col justify-center items-center w-full">
                <div className="gap-2 p-2 flex flex-col justify-center items-center w-full mt-2">
                  <input
                    type="number"
                    placeholder="Minimo (0km)"
                    className="w-[205px] xs:w-[248px] xs:h-[92px] rounded-[10px] border border-gray justify-center items-center px-4 py-2 inline-flex text-white text-xl xs:text-[32px] md:text-2xl md:w-[352px] bg-[#343232] placeholder:text-center text-center placeholder:text-white"
                  />
                  <div className="w-[38px] h-[0px] border border-white"></div>
                  <input
                    type="number"
                    placeholder="Máximo"
                    className="w-[205px] xs:w-[248px] xs:h-[92px] rounded-[10px] border border-gray justify-center items-center px-4 py-2 inline-flex text-white text-xl xs:text-[32px] md:text-2xl md:w-[352px] bg-[#343232] placeholder:text-center text-center placeholder:text-white"
                  />
                </div>
                <p className="text-white font-bold text-lg xs:text-xl pt-2 pb-2">
                  Opciones prefabricadas:
                </p>
                <div className="w-full flex-col justify-start items-start inline-flex">
                  <button className="text-center text-white md:text-md xs:text-xl font-normal btn-gradient rounded-lg ml-1 mb-1 p-1">
                    0 KM
                  </button>
                  <button className="text-center text-white md:text-md xs:text-xl font-normal btn-gradient rounded-lg ml-1 mb-1 p-1">
                    0 a 40.000 km
                  </button>
                  <button className="text-center text-white md:text-md xs:text-xl font-normal btn-gradient rounded-lg ml-1 mb-1 p-1">
                    40.000 a 75.000 km
                  </button>
                  <button className="text-center text-white md:text-md xs:text-xl font-normal btn-gradient rounded-lg ml-1 mb-1 p-1">
                    75.000 a 100.000 km
                  </button>
                  <button className="text-center text-white md:text-md xs:text-xl font-normal btn-gradient rounded-lg ml-1 mb-1 p-1">
                    100.000 o más km
                  </button>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="flex flex-col items-center w-full">
              <AccordionItemHeading className="flex w-full">
                <AccordionItemButton className="bg-medium_gray rounded-lg shadow-md w-full h-10 xs:w-64 xs:h-16 sm:w-full md:h-[82px] text-left focus:outline-none flex text-white items-center justify-center">
                  <img
                    className="pr-2 size-8 xs:pr-4 xs:size-12 md:size-14"
                    src="/icons/buy-car/car_transmission.svg"
                    alt="car_transmission icon"
                  />
                  <p className="text-xl xs:text-2xl font-normal font-orbitron md:text-3xl">
                    Transmisión
                  </p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="flex flex-col justify-center items-center w-full">
                <div className="gap-4 p-2 flex flex-col justify-center items-center w-full mt-2">
                  <button className="btn-gradient w-full h-14 xs:h-[92px] rounded-[10px] border border-slate-400 justify-center px-4 py-2 items-center inline-flex text-white text-xl xs:text-[32px] md:text-2xl">
                    Manual
                  </button>
                  <button className="btn-gradient w-full h-14 xs:h-[92px] rounded-[10px] border border-slate-400 justify-center px-4 py-2 items-center inline-flex text-white text-xl xs:text-[32px] md:text-2xl">
                    Automático
                  </button>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </Modal>
    </section>
  );
};

export default Filters;
