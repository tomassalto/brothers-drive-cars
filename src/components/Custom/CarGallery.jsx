import { useState } from "react";
import Modal from "react-modal";
import { car_detail } from "../../data/car_detail_data.json";

Modal.setAppElement("#root");

const CarGallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % car_detail.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + car_detail.length) % car_detail.length
    );
  };

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 sm:gap-4 md:gap-6 lg:grid-cols-3 mac:grid-cols-4 lg:gap-[18px] lg:gap-y-[24px]">
        {car_detail.map((car, index) => (
          <div key={car.id} onClick={() => openModal(index)}>
            <img
              src={car.image}
              alt="car gallery"
              className="w-[300px] h-[130px] rounded-lg object-cover cursor-pointer xs:w-[325px] xs:h-[150px] sm:w-[270px] sm:h-[150px] md:w-[310px] lg:w-[280px] mac:h-[150px] mac:w-[250px] hd:w-[280px] fullhd:w-[320px] fullhd:h-[180px]"
            />
          </div>
        ))}
      </div>

      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="flex items-center justify-center border-none outline-none"
          overlayClassName="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center"
        >
          <div className="relative bg-dark_gray rounded-lg overflow-hidden w-[280px] p-4 py-8 xs:w-[320px] xsm:w-[400px] sm:w-[500px] sm:px-3 sm:py-10 lg:w-[600px] lg:top-10 lg:px-12 lg:py-8 xl:w-[800px] mac:w-[1000px]">
            <button
              onClick={closeModal}
              className="absolute text-white top-[-4px] right-3 sm:top-0 lg:top-[-2px] lg:right-[14px] text-gray-500 hover:text-gray-800 text-3xl lg:text-4xl xl:text-5xl xl:right-3"
            >
              &times;
            </button>
            <img
              src={car_detail[currentIndex].image}
              alt="car gallery"
              className="w-full h-auto object-cover rounded-lg max-h-[80vh] max-w-[90vw]"
            />
            <button
              onClick={prevImage}
              className="absolute left-5 lg:left-1 top-1/2 transform -translate-y-1/2 p-2 focus:outline-none"
            >
              <img src="/icons/chevron_left.svg" alt="chevronLeft" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-6 lg:right-2 top-1/2 transform -translate-y-1/2 p-2 focus:outline-none"
            >
              <img src="/icons/chevron_right.svg" alt="chevronRight" />
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CarGallery;
