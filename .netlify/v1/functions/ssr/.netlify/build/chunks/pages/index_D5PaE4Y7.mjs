/* empty css                          */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, g as addAttribute, h as createAstro } from '../astro_nfb5K45J.mjs';
import { $ as $$Layout, a as $$Image, b as $$Gallery } from './_id__By88an_y.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import Modal from 'react-modal';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
/* empty css                          */
import Select from 'react-select';
/* empty css                          */

const onSubmit$2 = async (values, actions) => {
  console.log(values);
  actions.resetForm();
};
const BookCar = ({ isOpen, closeModal }) => {
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: ""
    },
    onSubmit: onSubmit$2
  });
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: `px-1 fixed inset-0 flex justify-center items-end bg-dark_gray bg-opacity-80 transition-opacity duration-500 z-30 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`,
      children: /* @__PURE__ */ jsxs(
        "form",
        {
          onSubmit: handleSubmit,
          className: `relative flex items-center flex-col bg-[#1B181899] backdrop-blur-lg rounded-tr-[40px] rounded-tl-[40px] border-2 border-[#A49C4C] transform transition-transform duration-500 w-[300px] h-[530px] xs:w-[350px] xs:h-[600px] xsm:w-[400px] sm:w-[450px] md:w-[600px] md:h-[560px] lg:h-[500px] lg:w-[800px] xl:h-[550px] xl:w-[900px] mac:h-[700px] mac:w-[1000px] hd:w-[1150px] fullhd:w-[1276px] fullhd:h-[760px] ${isOpen ? "translate-y-0" : "translate-y-full"}`,
          children: [
            /* @__PURE__ */ jsx("div", { className: "pt-6 pb-5 xs:pt-9 xs:pb-7 md:py-9 lg:py-7 xl:py-8 mac:py-[55px]", children: /* @__PURE__ */ jsxs("h1", { className: "text-lg font-orbitron text-center text-white xs:text-[22px] xsm:text-2xl mac:text-[32px] hd:text-[40px] fullhd:text-5xl", children: [
              "Reservar ",
              /* @__PURE__ */ jsx("span", { className: "font-extrabold", children: "Peugeot 208" })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col items-center gap-3 xs:px-6 md:gap-4 md:px-0 lg:gap-2 lg:px-0 xl:gap-3 mac:gap-5 hd:w-[900px] fullhd:w-[1031px]", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center h-[50px] w-[255px] gap-1 px-3 py-1 bg-[#474747] rounded-lg xs:w-[300px] xsm:w-[350px] sm:w-[375px] md:w-[525px] lg:py-2 lg:px-4 lg:gap-1 lg:w-[650px] xl:py-3 xl:w-[700px] mac:h-[56px] mac:gap-[2px] mac:w-[770px] hd:w-[900px] fullhd:w-[1031px] fullhd:h-[58px]", children: [
                /* @__PURE__ */ jsx("label", { className: "text-xs text-white", htmlFor: "name", children: "Nombre completo" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    id: "name",
                    name: "name",
                    onBlur: handleBlur,
                    onChange: handleChange,
                    value: values.name,
                    className: "text-xs outline-none bg-[#474747] xl:text-sm mac:text-base",
                    type: "text",
                    placeholder: "Ingresa tu nombre completo"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center h-[50px] w-[255px] gap-1 px-3 py-1 bg-[#474747] rounded-lg xs:w-[300px] xsm:w-[350px] sm:w-[375px] md:w-[525px] lg:py-2 lg:px-4 lg:gap-1 lg:w-[650px] xl:py-3 xl:w-[700px] mac:h-[56px] mac:gap-[2px] mac:w-[770px] hd:w-[900px] fullhd:w-[1031px] fullhd:h-[58px]", children: [
                /* @__PURE__ */ jsx("label", { className: "text-xs text-white", htmlFor: "email", children: "Correo electrónico" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    id: "email",
                    name: "email",
                    onBlur: handleBlur,
                    onChange: handleChange,
                    value: values.email,
                    className: "text-xs outline-none bg-[#474747] xl:text-sm mac:text-base",
                    type: "email",
                    placeholder: "Ingresa tu correo electrónico"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center h-[50px] w-[255px] gap-1 px-3 py-1 bg-[#474747] rounded-lg xs:w-[300px] xsm:w-[350px] sm:w-[375px] md:w-[525px] lg:py-2 lg:px-4 lg:gap-1 lg:w-[650px] xl:py-3 xl:w-[700px] mac:h-[56px] mac:gap-[2px] mac:w-[770px] hd:w-[900px] fullhd:w-[1031px] fullhd:h-[58px]", children: [
                /* @__PURE__ */ jsx("label", { className: "text-xs text-white", htmlFor: "phone", children: "Número de teléfono" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    id: "phone",
                    name: "phone",
                    onBlur: handleBlur,
                    onChange: handleChange,
                    value: values.phone,
                    className: "text-xs outline-none bg-[#474747] xl:text-sm mac:text-base",
                    type: "text",
                    placeholder: "Ingresa tu número de teléfono"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "w-full px-6 py-7 text-white flex items-start flex-col xs:py-8 sm:px-9 md:pt-6 lg:w-[650px] lg:px-0 lg:py-7 xl:w-[700px] mac:w-[770px] hd:w-[900px] fullhd:w-[1031px] fullhd:text-2xl", children: [
              /* @__PURE__ */ jsxs("p", { className: "text-xs xs:text-sm xl:text-base mac:text-[18px] fullhd:text-xl", children: [
                "Monto de reserva:",
                " ",
                /* @__PURE__ */ jsx("span", { className: "font-bold xs:text-sm xl:text-base mac:text-[18px]", children: "$20.000" })
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs pt-2.5 xs:pt-3 xs:text-sm lg:pt-2 xl:text-base mac:text-[18px] mac:pt-3 hd:pt-5 fullhd:text-xl fullhd:pt-3", children: [
                "Turno para visitar las oficinas:",
                " ",
                /* @__PURE__ */ jsx("span", { className: "font-bold", children: "14/05/2024 " }),
                /* @__PURE__ */ jsx("span", { className: "font-light underline", children: "(Cambiar turno)" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xs pt-5 underline font-light sm:pt-8 lg:pt-6 xl:text-sm mac:text-base mac:pt-10 hd:pt-[45px] fullhd:text-lg", children: "Términos y condiciones de la reserva" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-white flex flex-col-reverse gap-3 md:flex-row xl:pt-5 mac:pt-[55px] hd:gap-5 hd:pt-[35px] ", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "submit",
                    className: "h-10 w-[250px] font-ubuntu font-bold text-sm bg-[#B59E57] rounded-[54px] shadow-xl xs:w-[300px] xsm:w-[350px] sm:w-[380px] md:h-[50px] md:w-[200px] lg:h-[45px] lg:w-[200px] xl:text-base mac:h-[50px] mac:text-lg hd:text-lg hd:w-[250px] hd:h-[60px] fullhd:text-2xl fullhd:h-[70px] fullhd:w-[300px]",
                    style: {
                      background: "linear-gradient(-90deg, #A49C4C -15%, #CAA962 35.78%, #BF953F 92.17%, #988001 118.43%)"
                    },
                    children: "Generar reserva"
                  }
                ),
                /* @__PURE__ */ jsxs("p", { className: "text-[9px] text-center font-medium pt-2 xs:text-xs md:pt-2 lg:text-xs hd:text-sm fullhd:pt-4 fullhd:text-base", children: [
                  "Se redirigirá a ",
                  /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Mercado Pago" })
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: closeModal,
                  className: "h-10 w-[250px] font-ubuntu font-bold text-sm border border-white rounded-[94px] shadow-xl xs:w-[300px] xsm:w-[350px] sm:w-[380px] md:h-[50px] md:w-[200px] lg:h-[45px] lg:w-[200px] xl:text-base mac:h-[50px] mac:text-lg hd:text-lg hd:w-[250px] hd:h-[60px] fullhd:text-2xl fullhd:h-[70px] fullhd:w-[300px]",
                  children: "Cancelar"
                }
              )
            ] })
          ]
        }
      )
    }
  );
};

const DetailCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return /* @__PURE__ */ jsxs("div", { class: "pt-[113px] lg:pt-[146px]", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        class: "flex flex-col items-center rounded-2xl w-[300px] pt-[30px] xs:w-[325px] xs:h-[530px] sm:w-[556px] sm:h-[600px] md:w-[644px] md:h-max lg:flex-row lg:items-start lg:w-[970px] lg:py-9 xl:w-[1024px] mac:w-[1100px] mac:py-11 hd:w-[1280px] hd:py-[51px] fullhd:w-[1415px]",
        style: { background: "rgba(0, 0, 0, 0.20)" },
        children: [
          /* @__PURE__ */ jsxs("div", { class: "lg:flex lg:flex-col lg:pl-8 hd:pl-[50px]", children: [
            /* @__PURE__ */ jsx("p", { class: "text-white text-sm xs:text-base font-semibold tracking-wide pb-4 font-ubuntu sm:text-2xl mac:text-[27px] hd:pb-[22px] hd:text-3xl fullhd:text-[32px]", children: "Peugeot 208 1.4 Feline Tiptronic" }),
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/images/buy-car/image_3.png",
                alt: "detail car",
                class: "hidden lg:block lg:w-[410px] mac:w-[460px] hd:w-[520px] fullhd:w-[540px]"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "/images/buy-car/image_2.png",
              alt: "detail car",
              class: "w-full px-[27px] lg:hidden"
            }
          ),
          /* @__PURE__ */ jsxs("div", { class: "lg:flex lg:flex-col lg:pl-7 xl:pl-12 hd:pl-[62px]", children: [
            /* @__PURE__ */ jsx("p", { class: "text-white font-semibold text-center lg:text-start text-2xl pt-4 pb-6 xs:pt-6 xs:pb-8 lg:pb-5 lg:text-[22px] lg:pt-12 mac:text-3xl hd:text-4xl hd:pt-16 fullhd:text-[40px]", children: "US$ 26,000" }),
            /* @__PURE__ */ jsxs("div", { class: "hidden lg:flex lg:gap-[52px] xl:gap-[75px]", children: [
              /* @__PURE__ */ jsxs("div", { class: "flex flex-col gap-4 lg:gap-3 mac:gap-4", children: [
                /* @__PURE__ */ jsxs("div", { class: "flex items-center gap-5", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: "/icons/buy-car/price.svg",
                      alt: "icon",
                      class: "fullhd:w-6"
                    }
                  ),
                  /* @__PURE__ */ jsx("p", { class: "text-white font-medium text-base mac:text-lg hd:text-xl fullhd:text-2xl", children: "Precio: $26,000" })
                ] }),
                /* @__PURE__ */ jsxs("div", { class: "flex items-center gap-5", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: "/icons/buy-car/front_car.svg",
                      alt: "icon",
                      class: "fullhd:w-6"
                    }
                  ),
                  /* @__PURE__ */ jsx("p", { class: "text-white font-medium text-base mac:text-lg hd:text-xl fullhd:text-2xl", children: "Marca: Peugeot" })
                ] }),
                /* @__PURE__ */ jsxs("div", { class: "flex items-center gap-5", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: "/icons/buy-car/front_car.svg",
                      alt: "icon",
                      class: "fullhd:w-6"
                    }
                  ),
                  /* @__PURE__ */ jsx("p", { class: "text-white font-medium text-base mac:text-lg hd:text-xl fullhd:text-2xl", children: "Modelo: 208" })
                ] }),
                /* @__PURE__ */ jsxs("div", { class: "flex items-center gap-5", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: "/icons/buy-car/side_car.svg",
                      alt: "icon",
                      class: "fullhd:w-6"
                    }
                  ),
                  /* @__PURE__ */ jsx("p", { class: "text-white font-medium text-base mac:text-lg hd:text-xl fullhd:text-2xl", children: "Puertas: 5" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { class: "flex flex-col gap-4 lg:gap-3 mac:gap-4", children: [
                /* @__PURE__ */ jsxs("div", { class: "flex items-center gap-5", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: "/icons/buy-car/calendar.svg",
                      alt: "icon",
                      class: "fullhd:w-6"
                    }
                  ),
                  /* @__PURE__ */ jsx("p", { class: "text-white font-medium text-base mac:text-lg hd:text-xl fullhd:text-2xl", children: "Fabricación: 2023" })
                ] }),
                /* @__PURE__ */ jsxs("div", { class: "flex items-center gap-5", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: "/icons/buy-car/fuel_station.svg",
                      alt: "icon",
                      class: "fullhd:w-6"
                    }
                  ),
                  /* @__PURE__ */ jsx("p", { class: "text-white font-medium text-base mac:text-lg hd:text-xl fullhd:text-2xl", children: "Combustible: Nafta" })
                ] }),
                /* @__PURE__ */ jsxs("div", { class: "flex items-center gap-5", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: "/icons/buy-car/route.svg",
                      alt: "icon",
                      class: "fullhd:w-6"
                    }
                  ),
                  /* @__PURE__ */ jsx("p", { class: "text-white font-medium text-base mac:text-lg hd:text-xl fullhd:text-2xl", children: "Kilometraje: 5600km" })
                ] }),
                /* @__PURE__ */ jsxs("div", { class: "flex items-center gap-5", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: "/icons/buy-car/transmission.svg",
                      alt: "icon",
                      class: "fullhd:w-6"
                    }
                  ),
                  /* @__PURE__ */ jsx("p", { class: "text-white font-medium text-base mac:text-lg hd:text-xl fullhd:text-2xl", children: "Transmisión: Automática" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { class: "flex flex-col sm:flex-row gap-6 lg:flex-row lg:pt-7 lg:gap-4 hd:pt-[35px] pb-[52px]", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: openModal,
                  style: {
                    background: "linear-gradient( #A49C4C -15%, #CAA962 35.78%, #BF953F 92.17%, #988001 118.43%)"
                  },
                  class: "text-white rounded-lg py-[14px] font-ubuntu text-2xl font-normal w-[250px] xs:w-[266px] sm:w-[230px] sm:h-[66px] md:w-[280px] lg:w-[165px] lg:text-xl lg:h-[52px] xl:w-[200px] lg:py-2 mac:w-[215px] h-[62px] hd:w-[230px] hd:py-3 fullhd:w-[266px]",
                  children: "Reservar auto"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://api.whatsapp.com/send/?phone=5491160246355&text&type=phone_number&app_absent=0",
                  target: "_blank",
                  children: /* @__PURE__ */ jsx(
                    "button",
                    {
                      style: { background: "rgba(70, 70, 70, 0.15)" },
                      class: "rounded-lg py-[14px] border-[3px] text-2xl border-gold font-ubuntu font-normal w-[250px] xs:w-[266px] sm:w-[230px] md:w-[280px] lg:w-[165px] lg:text-xl lg:py-[9px] xl:w-[200px] mac:w-[215px] hd:w-[230px] hd:py-[9px] fullhd:w-[266px] text-white",
                      children: "Consultar"
                    }
                  )
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(BookCar, { isOpen: isModalOpen, closeModal })
  ] });
};

const InfoDropdown = () => {
  const [toggle, setToggle] = useState(false);
  const toggleDropdown = () => {
    setToggle(!toggle);
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: "w-[300px] h-[67px] inline-flex items-center justify-between text-white bg-ultra_dark_gray focus:outline-none font-ubuntu font-normal rounded-2xl text-2xl px-5 text-center xs:w-[325px] sm:w-[556px] sm:px-7 md:w-[644px]",
        type: "button",
        onClick: toggleDropdown,
        children: [
          "Información general",
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `transition-transform duration-200 ${toggle ? " rotate-180" : "rotate-0"} `,
              children: /* @__PURE__ */ jsx("img", { src: "/icons/chevron_down.svg", alt: "chevron down" })
            }
          )
        ]
      }
    ),
    toggle && /* @__PURE__ */ jsx(
      "div",
      {
        className: `w-[300px] h-[355px] z-10 absolute top-12 bg-ultra_dark_gray rounded-2xl rounded-t-none dark:bg-gray-700 xs:w-[325px] sm:w-[556px] md:w-[644px]`,
        children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col pt-10 pl-5 gap-y-4 text-sm text-gray-700 dark:text-gray-200 sm:pl-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("img", { src: "/icons/buy-car/price.svg", alt: "icon", className: "w-6" }),
            /* @__PURE__ */ jsx("p", { className: "text-white text-base font-medium", children: "Precio: $26,000" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/icons/buy-car/front_car.svg",
                alt: "icon",
                className: "w-6"
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-white text-base font-medium", children: "Marca: Peugeot" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/icons/buy-car/front_car.svg",
                alt: "icon",
                className: "w-6"
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-white text-base font-medium", children: "Modelo: 208" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/icons/buy-car/side_car.svg",
                alt: "icon",
                className: "w-6"
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-white text-base font-medium", children: "Puertas: 5" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/icons/buy-car/calendar.svg",
                alt: "icon",
                className: "w-6"
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-white text-base font-medium", children: "Fabricación: 2023" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("img", { src: "/icons/buy-car/route.svg", alt: "icon", className: "w-6" }),
            /* @__PURE__ */ jsx("p", { className: "text-white text-base font-medium", children: "Combustible: Nafta" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/icons/buy-car/transmission.svg",
                alt: "icon",
                className: "w-6"
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-white text-base font-medium", children: "Kilometraje: 5600km" })
          ] })
        ] })
      }
    )
  ] });
};

const car_detail = [
	{
		id: 1,
		image: "/images/buy-car/detail/image_1.png"
	},
	{
		id: 2,
		image: "/images/buy-car/detail/image_2.png"
	},
	{
		id: 3,
		image: "/images/buy-car/detail/image_3.png"
	},
	{
		id: 4,
		image: "/images/buy-car/detail/image_4.png"
	},
	{
		id: 5,
		image: "/images/buy-car/detail/image_5.png"
	},
	{
		id: 6,
		image: "/images/buy-car/detail/image_6.png"
	},
	{
		id: 7,
		image: "/images/buy-car/detail/image_7.png"
	},
	{
		id: 8,
		image: "/images/buy-car/detail/image_8.png"
	}
];

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
  return /* @__PURE__ */ jsxs("div", { className: "flex justify-center w-full", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-6 sm:grid sm:grid-cols-2 sm:gap-4 md:gap-6 lg:grid-cols-3 mac:grid-cols-4 lg:gap-[18px] lg:gap-y-[24px]", children: car_detail.map((car, index) => /* @__PURE__ */ jsx("div", { onClick: () => openModal(index), children: /* @__PURE__ */ jsx(
      "img",
      {
        src: car.image,
        alt: "car gallery",
        className: "w-[300px] h-[130px] rounded-lg object-cover cursor-pointer xs:w-[325px] xs:h-[150px] sm:w-[270px] sm:h-[150px] md:w-[310px] lg:w-[280px] mac:h-[150px] mac:w-[250px] hd:w-[280px] fullhd:w-[320px] fullhd:h-[180px]"
      }
    ) }, car.id)) }),
    modalIsOpen && /* @__PURE__ */ jsx(
      Modal,
      {
        isOpen: modalIsOpen,
        onRequestClose: closeModal,
        className: "flex items-center justify-center border-none outline-none",
        overlayClassName: "fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center",
        children: /* @__PURE__ */ jsxs("div", { className: "relative bg-dark_gray rounded-lg overflow-hidden w-[280px] p-4 py-8 xs:w-[320px] xsm:w-[400px] sm:w-[500px] sm:px-3 sm:py-10 lg:w-[600px] lg:top-10 lg:px-12 lg:py-8 xl:w-[800px] mac:w-[1000px]", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: closeModal,
              className: "absolute text-white top-[-4px] right-3 sm:top-0 lg:top-[-2px] lg:right-[14px] text-gray-500 hover:text-gray-800 text-3xl lg:text-4xl xl:text-5xl xl:right-3",
              children: "×"
            }
          ),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: car_detail[currentIndex].image,
              alt: "car gallery",
              className: "w-full h-auto object-cover rounded-lg max-h-[80vh] max-w-[90vw]"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: prevImage,
              className: "absolute left-5 lg:left-1 top-1/2 transform -translate-y-1/2 p-2 focus:outline-none",
              children: /* @__PURE__ */ jsx("img", { src: "/icons/chevron_left.svg", alt: "chevronLeft" })
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: nextImage,
              className: "absolute right-6 lg:right-2 top-1/2 transform -translate-y-1/2 p-2 focus:outline-none",
              children: /* @__PURE__ */ jsx("img", { src: "/icons/chevron_right.svg", alt: "chevronRight" })
            }
          )
        ] })
      }
    )
  ] });
};

const $$CarDetail = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col items-center bg-[url(/icons/backgrounds/mobile_forlife_background.svg)] sm:bg-[url(/icons/backgrounds/forlife_background.svg)] bg-cover bg-no-repeat bg-dark_gray"> <div class="pb-6 lg:pb-[27px]"> ${renderComponent($$result, "DetailCard", DetailCard, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/components/Custom/Buy/DetailCard.jsx", "client:component-export": "default" })} </div> <div class="pb-6 lg:hidden"> ${renderComponent($$result, "InfoDropdown", InfoDropdown, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/components/Custom/InfoDropdown", "client:component-export": "default" })} </div> <div id="root" class="pb-20"> ${renderComponent($$result, "CarGallery", CarGallery, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/components/Custom/CarGallery.jsx", "client:component-export": "default" })} </div> </section>`;
}, "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/components/BuyCar/CarDetail/CarDetail.astro", void 0);

const $$Index$6 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Detalle del auto" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CarDetail", $$CarDetail, {})} ` })}`;
}, "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/pages/comprar-un-auto/detalle/index.astro", void 0);

const $$file$6 = "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/pages/comprar-un-auto/detalle/index.astro";
const $$url$6 = "/comprar-un-auto/detalle";

const index$6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$6,
  file: $$file$6,
  url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$StockCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$StockCard;
  const { id, image, price, year, brand } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/comprar-un-auto/detalle`, "href")}> <div class="w-[256px] shadow-xl bg-dark_gray_3 rounded-[10px] pt-[10px] pb-[15px] px-[10px] xs:w-[300px] xs:h-[213px] sm:w-[270px] md:w-[310px] lg:w-[280px] fullhd:w-[380px] fullhd:h-[264px]"> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": "car stock", "width": "100", "height": "100", "class": "w-full h-max pb-2" })} <p class="text-white text-base font-medium fullhd:text-2xl">${price}</p> <span class="text-gray text-xs font-thin pt-2 fullhd:tracking-tight fullhd:font-medium fullhd:text-base">${year}</span> <p class="text-white text-xs font-semibold tracking-wide fullhd:text-base"> ${brand} </p> </div> </a>`;
}, "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/components/Custom/Buy/StockCard.astro", void 0);

const brands$1 = [
	{
		id: 1,
		brand: "Ford",
		image: "icons/brands/ford.svg"
	},
	{
		id: 2,
		brand: "Hyundai",
		image: "icons/brands/hyundai.svg"
	},
	{
		id: 3,
		brand: "Nissan",
		image: "icons/brands/nissan.svg"
	},
	{
		id: 4,
		brand: "Toyota",
		image: "icons/brands/toyota.svg"
	},
	{
		id: 5,
		brand: "Fiat",
		image: "icons/brands/fiat.svg"
	},
	{
		id: 6,
		brand: "Renault",
		image: "icons/brands/renault.svg"
	},
	{
		id: 7,
		brand: "Citroen",
		image: "icons/brands/citroen.svg"
	},
	{
		id: 8,
		brand: "Peugeot",
		image: "icons/brands/peugeot.svg"
	},
	{
		id: 9,
		brand: "Chevrolet",
		image: "icons/brands/chevrolet.svg"
	},
	{
		id: 10,
		brand: "Porsche",
		image: "icons/brands/porsche.svg"
	},
	{
		id: 11,
		brand: "Volkswagen",
		image: "icons/brands/volkswagen.svg"
	},
	{
		id: 12,
		brand: "Alfa Romeo",
		image: "icons/brands/alfa_romeo.svg"
	},
	{
		id: 13,
		brand: "Mini",
		image: "icons/brands/mini.svg"
	},
	{
		id: 14,
		brand: "Dodge",
		image: "icons/brands/dodge.svg"
	},
	{
		id: 15,
		brand: "Jeep",
		image: "icons/brands/jeep.svg"
	},
	{
		id: 16,
		brand: "Audi",
		image: "icons/brands/audi.svg"
	},
	{
		id: 17,
		brand: "BMW",
		image: "icons/brands/BMW.svg"
	},
	{
		id: 18,
		brand: "Mercedes",
		image: "icons/brands/mercedes.svg"
	}
];

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
  return /* @__PURE__ */ jsxs("section", { className: "flex items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row border border-gold items-center bg-[#191919] w-[270px] xs:w-[317px] h-[70px] lg:w-[888px] xl:h-full p-4 rounded-[10px] mac:w-[1192px] mac:h-[92px] fullhd:w-[1664px] fullhd:h-[120px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative mac:pr-2", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "font-orbitron placeholder:font-orbitron rounded-[10px] placeholder:text-sm text-sm p-2 truncate ... pr-[52px] placeholder:-translate-y-0 w-[170px] xs:w-[207px] lg:w-[130px] lg:pr-8 xl:pr-8 mac:w-[150px] mac:h-[58px] mac:pl-4 mac:pr-12 mac:placeholder:text-base mac:text-base fullhd:w-[237px] fullhd:h-[86px] fullhd:placeholder:text-lg fullhd:text-[17px] fullhd:placeholder:-translate-y-[-1px] fullhd:pr-14",
            type: "text",
            placeholder: "Buscar Vehiculo..."
          }
        ),
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "absolute right-10 top-[2px] xs:right-12 lg:right-[34px] lg:hidden",
            src: "/icons/buy-car/divider.svg",
            alt: "divider icon"
          }
        ),
        /* @__PURE__ */ jsx("button", { children: /* @__PURE__ */ jsx(
          "img",
          {
            className: "absolute items-center right-2 top-2 xs:top-[6px] xs:right-4 lg:right-1 xl:right-1 mac:size-8 mac:top-3 mac:right-4 fullhd:right-5 fullhd:top-7",
            src: "/icons/buy-car/search.svg",
            alt: "search icon"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx("button", { className: "pl-6 lg:hidden", onClick: openModal, children: /* @__PURE__ */ jsx("img", { src: "/icons/buy-car/filter_list.svg", alt: "filter icon" }) }),
      /* @__PURE__ */ jsxs("div", { className: "gap-x-2 h-full hidden lg:flex lg:flex-row lg:pl-3 relative mac:h-full mac:gap-x-3 fullhd:gap-x-8 fullhd:pl-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              id: "button-0",
              onClick: toggleDropdown,
              className: "flex items-center h-full bg-medium_gray border-[#252323] justify-center w-[100px] border-2 rounded-[8px] mac:w-[150px] fullhd:w-[199px]",
              children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    className: "size-5 pr-2 mac:mr-1 mac:size-7 fullhd:size-[34px] fullhd:mr-2",
                    src: "/icons/buy-car/brand.svg",
                    alt: "brand icon"
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-normal font-orbitron text-white mac:text-xl fullhd:text-2xl", children: "Marcas" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `filter-scroll content absolute left-0 mt-2 w-[200px] mac:w-[290px] fullhd:w-[415px] bg-[#343232] rounded-lg h-[319px] overflow-auto ${activeButton === "button-0" ? "" : "hidden"}`,
              children: /* @__PURE__ */ jsx("div", { className: "filter-scroll flex flex-col gap-y-2 p-2 w-full overflow-y-auto overflow-x-hidden", children: brands$1.map((brand) => /* @__PURE__ */ jsxs(
                "button",
                {
                  className: "btn-gradient py-1 flex justify-center items-center border border-gray rounded-lg fullhd:h-[55px]",
                  children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: brand.image,
                        alt: brand.brand,
                        className: "lg:size-6 pr-1 fullhd:size-8"
                      }
                    ),
                    /* @__PURE__ */ jsx("p", { className: "text-white lg:text-md fullhd:text-xl", children: brand.brand })
                  ]
                },
                brand.id
              )) })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              id: "button-1",
              onClick: toggleDropdown,
              className: "w-[80px] h-full bg-medium_gray border-[#2B2B2B] border-2 rounded-[10px] items-center flex justify-center mac:w-[110px] fullhd:w-[148px]",
              children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    className: "pr-2 size-6 mac:mr-1 mac:size-7 fullhd:size-[34px] fullhd:mr-2",
                    src: "/icons/buy-car/calendar_white.svg",
                    alt: "calendar_white icon"
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-normal font-orbitron text-white mac:text-xl fullhd:text-2xl", children: "Año" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `filter-scroll content absolute left-0 mt-2 w-[200px] bg-[#343232] mac:w-[290px] fullhd:w-[400px] rounded-lg h-[315px] overflow-auto ${activeButton === "button-1" ? "" : "hidden"}`,
              children: /* @__PURE__ */ jsx("div", { className: "filter-scroll flex flex-col gap-y-2 p-2 w-full overflow-y-auto overflow-x-hidden", children: years.map((year) => /* @__PURE__ */ jsx(
                "button",
                {
                  className: "btn-gradient flex justify-center items-center text-white w-full h-[30px] text-base rounded-lg shadow-md hover border border-gray",
                  children: year
                },
                year
              )) })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              id: "button-2",
              onClick: toggleDropdown,
              className: "w-[100px] h-full bg-medium_gray border-[#2B2B2B] border-2 rounded-[10px] items-center flex justify-center mac:w-[150px] mac:h-full fullhd:w-[180px]",
              children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    className: "pr-2 size-6 mac:mr-1 mac:size-7 fullhd:size-[34px] fullhd:mr-2",
                    src: "/icons/buy-car/price_tag.svg",
                    alt: "price_tag icon"
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-normal font-orbitron text-white mac:text-xl fullhd:text-2xl", children: "Precio" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `content absolute left-0 mt-2 w-[210px] mac:w-[260px] bg-[#343232] rounded-lg fullhd:w-[330px] ${activeButton === "button-2" ? "" : "hidden"}`,
              children: /* @__PURE__ */ jsxs("div", { className: "p-3 gap-3 rounded-lg flex flex-col items-center fullhd:p-4 fullhd:gap-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-3 w-[176x] mac:w-full", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      className: "w-full h-[62px] rounded-[10px] border border-gray justify-center items-center gap-3 inline-flex text-white text-xl font-ubuntumono placeholder:text-center bg-[#343232] placeholder:text-white text-center",
                      type: "number",
                      placeholder: "$ Minimo"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "w-[38px] h-[0px] border border-white" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      className: "w-full h-[62px] rounded-[10px] border border-gray justify-center items-center gap-3 inline-flex text-white text-xl font-ubuntumono placeholder:text-center bg-[#343232] placeholder:text-white text-center",
                      type: "number",
                      placeholder: "$ Máximo"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-white text-sm w-full pt-[16px] font-bold pb-2 fullhd:text-lg", children: "Opciones prefabricadas:" }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start w-full", children: [
                  /* @__PURE__ */ jsx("button", { className: "btn-gradient rounded-lg text-white text-sm font-normal mb-1 p-1 fullhd:text-lg", children: "Hasta $ 10.000.000" }),
                  /* @__PURE__ */ jsx("button", { className: "btn-gradient rounded-lg mb-1 p-1 text-white text-sm font-normal fullhd:text-lg", children: "$ 10.000.000 a $ 20.000.000" }),
                  /* @__PURE__ */ jsx("button", { className: "btn-gradient rounded-lg mb-1 p-1 text-white text-sm font-normal fullhd:text-lg", children: "Más de $ 20.000.000" })
                ] })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              id: "button-3",
              onClick: toggleDropdown,
              className: "w-[110px] h-full bg-medium_gray border-[#2B2B2B] border-2 rounded-[10px] items-center flex justify-center mac:w-[150px] mac:h-full fullhd:w-[182px]",
              children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    className: "pr-2 size-6 mac:mr-1 mac:size-7 fullhd:size-[34px] fullhd:mr-2",
                    src: "/icons/buy-car/change_circle.svg",
                    alt: "change_circle icon"
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-normal font-orbitron text-white mac:text-xl fullhd:text-2xl", children: "Estado" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `content absolute left-0 mt-2 w-[200px] mac:w-[260px] bg-[#343232] rounded-lg fullhd:w-[340px] ${activeButton === "button-3" ? "" : "hidden"}`,
              children: /* @__PURE__ */ jsxs("div", { className: "gap-3 p-3 flex flex-col justify-center items-center fullhd:p-4 fullhd:gap-4", children: [
                /* @__PURE__ */ jsx("button", { className: "btn-gradient w-full h-[62px] rounded-[10px] border border-gray justify-center items-center inline-flex text-white text-xl font-ubuntumono fullhd:text-2xl", children: "Nuevo" }),
                /* @__PURE__ */ jsx("button", { className: "btn-gradient w-full h-[62px] rounded-[10px] border border-gray justify-center items-center inline-flex text-white text-xl font-ubuntumono fullhd:text-2xl", children: "Usado" })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              id: "button-4",
              onClick: toggleDropdown,
              className: "w-[140px] h-full bg-medium_gray border-[#2B2B2B] border-2 rounded-[10px] items-center flex justify-center mac:w-[180px] mac:h-full fullhd:w-[237px]",
              children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    className: "pr-2 size-6 mac:mr-1 mac:size-7 fullhd:mr-2 fullhd:size-[34px]",
                    src: "/icons/buy-car/kilometers.svg",
                    alt: "kilometers icon"
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-normal font-orbitron text-white mac:text-xl fullhd:text-2xl", children: "Kilometraje" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `content absolute left-0 mt-2 w-[200px] mac:w-[260px] bg-[#343232] rounded-lg fullhd:w-[370px] ${activeButton === "button-4" ? "" : "hidden"}`,
              children: /* @__PURE__ */ jsxs("div", { className: "p-3 gap-3 rounded-lg flex flex-col items-center fullhd:gap-4 fullhd:p-4", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    className: "w-full h-[62px] rounded-[10px] border border-gray justify-center items-center gap-3 inline-flex text-white text-xl font-ubuntumono placeholder:text-center bg-[#343232] placeholder:text-white text-center",
                    type: "number",
                    placeholder: "Minimo (0km)"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "w-[38px] h-[0px] border border-white" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    className: "w-full h-[62px] rounded-[10px] border border-gray justify-center items-center gap-3 inline-flex text-white text-xl font-ubuntumono placeholder:text-center bg-[#343232] placeholder:text-white text-center",
                    type: "number",
                    placeholder: "Máximo"
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "text-white font-bold text-sm pt-[16px] pb-2 fullhd:text-lg", children: "Opciones prefabricadas:" }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start w-full", children: [
                  /* @__PURE__ */ jsx("button", { className: "text-white text-sm font-normal btn-gradient rounded-lg mb-1 p-1 fullhd:text-lg", children: "0 KM" }),
                  /* @__PURE__ */ jsx("button", { className: "text-white text-sm font-normal btn-gradient rounded-lg mb-1 p-1 fullhd:text-lg", children: "0 a 40.000 km" }),
                  /* @__PURE__ */ jsx("button", { className: "text-white text-sm font-normal btn-gradient rounded-lg mb-1 p-1 fullhd:text-lg", children: "40.000 a 75.000 km" }),
                  /* @__PURE__ */ jsx("button", { className: "text-white text-sm font-normal btn-gradient rounded-lg mb-1 p-1 fullhd:text-lg", children: "75.000 a 100.000 km" }),
                  /* @__PURE__ */ jsx("button", { className: "text-white text-sm font-normal btn-gradient rounded-lg mb-1 p-1 fullhd:text-lg", children: "100.000 o más km" })
                ] })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              id: "button-5",
              onClick: toggleDropdown,
              className: "w-[140px] h-full bg-medium_gray border-[#2B2B2B] border-2 rounded-[10px] items-center flex justify-center mac:w-[190px] mac:h-full fullhd:w-64",
              children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    className: "pr-1 size-6 mac:mr-1 mac:size-7 fullhd:size-[34px] fullhd:mr-2",
                    src: "/icons/buy-car/car_transmission.svg",
                    alt: "car_transmission icon"
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-normal font-orbitron text-white mac:text-xl fullhd:text-2xl", children: "Transmisión" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `content absolute right-0 mt-2 w-[200px] mac:w-[260px] bg-[#343232] rounded-lg fullhd:w-[365px] ${activeButton === "button-5" ? "" : "hidden"}`,
              children: /* @__PURE__ */ jsxs("div", { className: "gap-3 p-3 flex flex-col justify-center items-center fullhd:gap-4 fullhd:p-4", children: [
                /* @__PURE__ */ jsx("button", { className: "btn-gradient w-full h-[62px] rounded-[10px] border border-gray justify-center items-center inline-flex text-white text-xl font-ubuntumono fullhd:text-2xl", children: "Manual" }),
                /* @__PURE__ */ jsx("button", { className: "btn-gradient w-full h-[62px] rounded-[10px] border border-gray justify-center items-center inline-flex text-white text-xl font-ubuntumono fullhd:text-2xl", children: "Automático" })
              ] })
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      Modal,
      {
        isOpen: modalIsOpen,
        onRequestClose: closeModal,
        className: "flex items-center justify-center border-none outline-none lg:hidden",
        overlayClassName: "fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center lg:hidden",
        children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-start  bg-[#343232] rounded-lg xs:w-[280px] max-h-screen top-2 sm:w-[300px] md:w-[400px] max-w-lg mx-auto  overflow-y-auto", children: [
          /* @__PURE__ */ jsx("div", { className: "flex justify-end w-full", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: closeModal,
              className: "mr-3 xs:text-3xl xs:mr-4 sm:mr-7 md:text-4xl md:mr-3 text-gray-500 text-2xl text-white",
              children: "×"
            }
          ) }),
          /* @__PURE__ */ jsxs(
            Accordion,
            {
              className: "w-full flex flex-col p-3 gap-3 xs:gap-y-4 xs:p-4 md:gap-y-6 justify-center items-center",
              allowZeroExpanded: true,
              children: [
                /* @__PURE__ */ jsx("h2", { className: "text-lg xs:text-xl font-bold text-center text-white font-orbitron md:text-2xl ", children: "Encontra tu auto ideal" }),
                /* @__PURE__ */ jsxs(AccordionItem, { className: "flex flex-col items-center justify-center w-full", children: [
                  /* @__PURE__ */ jsx(AccordionItemHeading, { className: "flex w-full", children: /* @__PURE__ */ jsxs(AccordionItemButton, { className: "bg-medium_gray rounded-lg shadow-md w-full h-10 xs:w-64 xs:h-[64px] sm:w-full md:h-[82px] text-left focus:outline-none flex text-white items-center justify-center", children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        className: "pr-2 size-8 xs:pr-4 xs:size-12 md:size-14",
                        src: "/icons/buy-car/brand.svg",
                        alt: "brand icon"
                      }
                    ),
                    /* @__PURE__ */ jsx("p", { className: "text-xl xs:text-2xl font-normal font-orbitron md:text-3xl", children: "Marcas" })
                  ] }) }),
                  /* @__PURE__ */ jsx(AccordionItemPanel, { className: "flex justify-center rounded-lg mt-2 h-[200px]", children: /* @__PURE__ */ jsx("div", { className: "filter-scroll flex flex-col gap-y-4 mt-2 overflow-y-auto overflow-x-hidden", children: brands$1.map((brand) => /* @__PURE__ */ jsxs(
                    "button",
                    {
                      className: "btn-gradient w-full flex justify-center items-center gap-3 border border-gray rounded-lg px-4 py-2 bg-gray-800 hover:border-gray-300",
                      children: [
                        /* @__PURE__ */ jsx(
                          "img",
                          {
                            src: brand.image,
                            alt: brand.brand,
                            className: "size-8 xs:size-12"
                          }
                        ),
                        /* @__PURE__ */ jsx("p", { className: "text-white text-lg font-normal xs:text-[32px]", children: brand.brand })
                      ]
                    },
                    brand.id
                  )) }) })
                ] }),
                /* @__PURE__ */ jsxs(AccordionItem, { className: "flex flex-col items-center w-full", children: [
                  /* @__PURE__ */ jsx(AccordionItemHeading, { className: "flex w-full", children: /* @__PURE__ */ jsxs(AccordionItemButton, { className: "bg-medium_gray rounded-lg shadow-md w-full h-10 xs:w-64 xs:h-16 sm:w-full md:h-[82px] text-left focus:outline-none flex text-white items-center justify-center", children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        className: "size-8 pr-2 xs:pr-4 xs:size-12 md:size-14",
                        src: "/icons/buy-car/calendar_white.svg",
                        alt: "calendar_white icon"
                      }
                    ),
                    /* @__PURE__ */ jsx("p", { className: " text-xl xs:text-2xl font-normal font-orbitron md:text-3xl", children: "Año" })
                  ] }) }),
                  /* @__PURE__ */ jsx(AccordionItemPanel, { className: "flex justify-center rounded-lg w-full mt-2 h-[200px]", children: /* @__PURE__ */ jsx("div", { className: "filter-scroll flex flex-col gap-y-2 p-2 w-full overflow-y-auto overflow-x-hidden", children: years.map((year) => /* @__PURE__ */ jsx(
                    "button",
                    {
                      className: "btn-gradient flex justify-center items-center text-white w-full h-[30px] text-base rounded-lg shadow-md hover border border-gray",
                      children: year
                    },
                    year
                  )) }) })
                ] }),
                /* @__PURE__ */ jsxs(AccordionItem, { className: "flex flex-col items-center w-full", children: [
                  /* @__PURE__ */ jsx(AccordionItemHeading, { className: "flex w-full", children: /* @__PURE__ */ jsxs(AccordionItemButton, { className: "bg-medium_gray rounded-lg shadow-md w-full h-10 xs:w-64 xs:h-16 sm:w-full md:h-[82px] text-left focus:outline-none flex text-white items-center justify-center", children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        className: "pr-2 size-8 xs:pr-4 xs:size-12 md:size-14",
                        src: "/icons/buy-car/price_tag.svg",
                        alt: "price_tag icon"
                      }
                    ),
                    /* @__PURE__ */ jsx("p", { className: "text-xl xs:text-2xl font-normal font-orbitron md:text-3xl", children: "Precio" })
                  ] }) }),
                  /* @__PURE__ */ jsxs(AccordionItemPanel, { className: "flex flex-col justify-center items-center w-full", children: [
                    /* @__PURE__ */ jsxs("div", { className: "gap-2 p-2 flex flex-col justify-center items-center w-full mt-2", children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "number",
                          className: "w-[205px] xs:w-[248px] xs:h-[92px] rounded-[10px] border border-gray justify-center items-center px-4 py-2 inline-flex text-white text-xl xs:text-[32px] md:text-2xl md:w-[352px] bg-[#343232] placeholder:text-center text-center placeholder:text-white",
                          placeholder: "$ Minimo"
                        }
                      ),
                      /* @__PURE__ */ jsx("div", { className: "w-[38px] h-[0px] border border-white" }),
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "number",
                          className: "w-[205px] xs:w-[248px] xs:h-[92px] rounded-[10px] border border-gray justify-center items-center px-4 py-2 inline-flex text-white text-xl xs:text-[32px] md:text-2xl md:w-[352px] bg-[#343232] placeholder:text-center text-center placeholder:text-white",
                          placeholder: "$ Máximo"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-white font-bold text-lg xs:text-xl pt-2", children: "Opciones prefabricadas:" }),
                    /* @__PURE__ */ jsxs("div", { className: "w-full flex-col justify-start items-start inline-flex", children: [
                      /* @__PURE__ */ jsx("button", { className: "text-center text-white text-md xs:text-lg font-normal btn-gradient rounded-lg ml-1 mb-1 p-1", children: "Hasta $ 10.000.000" }),
                      /* @__PURE__ */ jsx("button", { className: "text-center text-white text-md xs:text-lg font-normal btn-gradient rounded-lg ml-1 mb-1 p-1", children: "$ 10.000.000 a $ 20.000.000" }),
                      /* @__PURE__ */ jsx("button", { className: "text-center text-white text-md xs:text-lg font-normal btn-gradient rounded-lg ml-1 mb-1 p-1", children: "Más de $ 20.000.000" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs(AccordionItem, { className: "flex flex-col items-center w-full", children: [
                  /* @__PURE__ */ jsx(AccordionItemHeading, { className: "flex w-full", children: /* @__PURE__ */ jsxs(AccordionItemButton, { className: "bg-medium_gray rounded-lg shadow-md w-full h-10 xs:w-64 xs:h-16 sm:w-full md:h-[82px] text-left focus:outline-none flex text-white items-center justify-center", children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        className: "pr-2 size-8 xs:pr-4 xs:size-12 md:size-14",
                        src: "/icons/buy-car/change_circle.svg",
                        alt: "change_circle icon"
                      }
                    ),
                    /* @__PURE__ */ jsx("p", { className: "text-xl xs:text-2xl font-normal font-orbitron md:text-3xl", children: "Estado" })
                  ] }) }),
                  /* @__PURE__ */ jsx(AccordionItemPanel, { className: "flex flex-col justify-center items-center w-full", children: /* @__PURE__ */ jsxs("div", { className: "gap-4 p-2 flex flex-col justify-center items-center w-full mt-2", children: [
                    /* @__PURE__ */ jsx("button", { className: "btn-gradient w-full h-14 xs:h-[92px] rounded-[10px] border border-slate-400 justify-center items-center px-4 py-2 inline-flex text-white text-xl xs:text-[32px] md:text-2xl", children: "Nuevo" }),
                    /* @__PURE__ */ jsx("button", { className: "btn-gradient w-full h-14 xs:h-[92px] rounded-[10px] border border-slate-400 justify-center px-4 py-2 items-center inline-flex text-white text-xl xs:text-[32px] md:text-2xl", children: "Usado" })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxs(AccordionItem, { className: "flex flex-col items-center w-full", children: [
                  /* @__PURE__ */ jsx(AccordionItemHeading, { className: "flex w-full", children: /* @__PURE__ */ jsxs(AccordionItemButton, { className: "bg-medium_gray rounded-lg shadow-md w-full h-10 xs:w-64 xs:h-16 sm:w-full md:h-[82px] text-left focus:outline-none flex text-white items-center justify-center", children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        className: "pr-2 size-8 xs:pr-4 xs:size-12 md:size-14",
                        src: "/icons/buy-car/kilometers.svg",
                        alt: "kilometers icon"
                      }
                    ),
                    /* @__PURE__ */ jsx("p", { className: "text-xl xs:text-2xl font-normal font-orbitron md:text-3xl", children: "Kilometraje" })
                  ] }) }),
                  /* @__PURE__ */ jsxs(AccordionItemPanel, { className: "flex flex-col justify-center items-center w-full", children: [
                    /* @__PURE__ */ jsxs("div", { className: "gap-2 p-2 flex flex-col justify-center items-center w-full mt-2", children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "number",
                          placeholder: "Minimo (0km)",
                          className: "w-[205px] xs:w-[248px] xs:h-[92px] rounded-[10px] border border-gray justify-center items-center px-4 py-2 inline-flex text-white text-xl xs:text-[32px] md:text-2xl md:w-[352px] bg-[#343232] placeholder:text-center text-center placeholder:text-white"
                        }
                      ),
                      /* @__PURE__ */ jsx("div", { className: "w-[38px] h-[0px] border border-white" }),
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "number",
                          placeholder: "Máximo",
                          className: "w-[205px] xs:w-[248px] xs:h-[92px] rounded-[10px] border border-gray justify-center items-center px-4 py-2 inline-flex text-white text-xl xs:text-[32px] md:text-2xl md:w-[352px] bg-[#343232] placeholder:text-center text-center placeholder:text-white"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-white font-bold text-lg xs:text-xl pt-2 pb-2", children: "Opciones prefabricadas:" }),
                    /* @__PURE__ */ jsxs("div", { className: "w-full flex-col justify-start items-start inline-flex", children: [
                      /* @__PURE__ */ jsx("button", { className: "text-center text-white md:text-md xs:text-xl font-normal btn-gradient rounded-lg ml-1 mb-1 p-1", children: "0 KM" }),
                      /* @__PURE__ */ jsx("button", { className: "text-center text-white md:text-md xs:text-xl font-normal btn-gradient rounded-lg ml-1 mb-1 p-1", children: "0 a 40.000 km" }),
                      /* @__PURE__ */ jsx("button", { className: "text-center text-white md:text-md xs:text-xl font-normal btn-gradient rounded-lg ml-1 mb-1 p-1", children: "40.000 a 75.000 km" }),
                      /* @__PURE__ */ jsx("button", { className: "text-center text-white md:text-md xs:text-xl font-normal btn-gradient rounded-lg ml-1 mb-1 p-1", children: "75.000 a 100.000 km" }),
                      /* @__PURE__ */ jsx("button", { className: "text-center text-white md:text-md xs:text-xl font-normal btn-gradient rounded-lg ml-1 mb-1 p-1", children: "100.000 o más km" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs(AccordionItem, { className: "flex flex-col items-center w-full", children: [
                  /* @__PURE__ */ jsx(AccordionItemHeading, { className: "flex w-full", children: /* @__PURE__ */ jsxs(AccordionItemButton, { className: "bg-medium_gray rounded-lg shadow-md w-full h-10 xs:w-64 xs:h-16 sm:w-full md:h-[82px] text-left focus:outline-none flex text-white items-center justify-center", children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        className: "pr-2 size-8 xs:pr-4 xs:size-12 md:size-14",
                        src: "/icons/buy-car/car_transmission.svg",
                        alt: "car_transmission icon"
                      }
                    ),
                    /* @__PURE__ */ jsx("p", { className: "text-xl xs:text-2xl font-normal font-orbitron md:text-3xl", children: "Transmisión" })
                  ] }) }),
                  /* @__PURE__ */ jsx(AccordionItemPanel, { className: "flex flex-col justify-center items-center w-full", children: /* @__PURE__ */ jsxs("div", { className: "gap-4 p-2 flex flex-col justify-center items-center w-full mt-2", children: [
                    /* @__PURE__ */ jsx("button", { className: "btn-gradient w-full h-14 xs:h-[92px] rounded-[10px] border border-slate-400 justify-center px-4 py-2 items-center inline-flex text-white text-xl xs:text-[32px] md:text-2xl", children: "Manual" }),
                    /* @__PURE__ */ jsx("button", { className: "btn-gradient w-full h-14 xs:h-[92px] rounded-[10px] border border-slate-400 justify-center px-4 py-2 items-center inline-flex text-white text-xl xs:text-[32px] md:text-2xl", children: "Automático" })
                  ] }) })
                ] })
              ]
            }
          )
        ] })
      }
    )
  ] });
};

const stock = [
	{
		id: 1,
		image: "/images/buy-car/image_1.png",
		price: "US$ 26.000",
		year: "2023 - 5.600KM",
		brand: "PEUGEOT 208 1.6 FELINE TIPTRONIC"
	},
	{
		id: 2,
		image: "/images/buy-car/image_1.png",
		price: "US$ 26.000",
		year: "2023 - 5.600KM",
		brand: "PEUGEOT 208 1.6 FELINE TIPTRONIC"
	},
	{
		id: 3,
		image: "/images/buy-car/image_1.png",
		price: "US$ 26.000",
		year: "2023 - 5.600KM",
		brand: "PEUGEOT 208 1.6 FELINE TIPTRONIC"
	},
	{
		id: 4,
		image: "/images/buy-car/image_1.png",
		price: "US$ 26.000",
		year: "2023 - 5.600KM",
		brand: "PEUGEOT 208 1.6 FELINE TIPTRONIC"
	},
	{
		id: 5,
		image: "/images/buy-car/image_1.png",
		price: "US$ 26.000",
		year: "2023 - 5.600KM",
		brand: "PEUGEOT 208 1.6 FELINE TIPTRONIC"
	},
	{
		id: 6,
		image: "/images/buy-car/image_1.png",
		price: "US$ 26.000",
		year: "2023 - 5.600KM",
		brand: "PEUGEOT 208 1.6 FELINE TIPTRONIC"
	},
	{
		id: 7,
		image: "/images/buy-car/image_1.png",
		price: "US$ 26.000",
		year: "2023 - 5.600KM",
		brand: "PEUGEOT 208 1.6 FELINE TIPTRONIC"
	},
	{
		id: 8,
		image: "/images/buy-car/image_1.png",
		price: "US$ 26.000",
		year: "2023 - 5.600KM",
		brand: "PEUGEOT 208 1.6 FELINE TIPTRONIC"
	}
];

const $$KnowOurStock = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-[url(/icons/backgrounds/mobile_forlife_background.svg)] sm:bg-[url(/icons/backgrounds/forlife_background.svg)] bg-cover bg-no-repeat bg-dark_gray"> <div class="flex flex-col justify-center items-center text-center"> <h1 class="text-2xl text-white font-orbitron font-bold pt-[127px] pb-4 w-[250px] xsm:w-[390px] xsm:text-4xl xsm:pt-[160px] md:leading-tight lg:text-[48px] lg:w-full hd:text-[56px] fullhd:pt-[177px]">
CONOCE NUESTRO STOCK
</h1> <p class="text-gray leading-normal text-sm xsm:text-2xl font-ubuntumono pb-[34px] w-[226px] xsm:w-[400px] lg:w-full lg:text-[20px] hd:text-[24px]">
Encontraste el lugar ideal para adquirir <span class="text-gold font-bold">tu próximo vehículo</span> </p> </div> <div id="root" class="flex justify-center pb-6"> ${renderComponent($$result, "Filters", Filters, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/components/Custom/Filters/Filters", "client:component-export": "default" })} </div> <div class="flex justify-center w-full pb-20"> <div class="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-4 md:gap-6 lg:grid-cols-3 mac:grid-cols-4 mac:gap-6 mac:gap-y-6 fullhd:gap-12 fullhd:gap-y-12"> ${stock.map((car) => renderTemplate`${renderComponent($$result, "StockCard", $$StockCard, { "id": car.id, "image": car.image, "price": car.price, "year": car.year, "brand": car.brand })}`)} </div> </div> </section>`;
}, "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/components/BuyCar/KnowOurStock.astro", void 0);

const $$Index$5 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Comprar un auto" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "KnowOurStock", $$KnowOurStock, {})}  ` })}`;
}, "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/pages/comprar-un-auto/index.astro", void 0);

const $$file$5 = "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/pages/comprar-un-auto/index.astro";
const $$url$5 = "/comprar-un-auto";

const index$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$5,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const onSubmit$1 = async (values, actions) => {
  console.log(values);
  actions.resetForm();
};
const Contact = () => {
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    },
    onSubmit: onSubmit$1
  });
  return /* @__PURE__ */ jsx("section", { className: "relative w-full bg-[url('/icons/backgrounds/mobile_home.svg')] bg-dark_gray bg-cover bg-no-repeat flex justify-center lg:bg-[url(/icons/backgrounds/home.svg)] lg:h-auto ", children: /* @__PURE__ */ jsxs("div", { className: "h-auto w-[300px] pt-[127px] pb-20 flex justify-center items-center flex-col lg:w-[600px] lg:pt-[140px] lg:pb-[130px] xl:pt-[170px] xl:w-[700px] mac:w-[800px] hd:pt-[190px] hd:w-[900px] fullhd:pb-[130px] fullhd:pt-[209px] fullhd:w-[1031px]", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center text-center flex-col", children: [
      /* @__PURE__ */ jsx("h1", { className: "w-[200px] text-2xl font-orbitron text-white font-bold lg:w-auto md:text-3xl md:w-[300px] xl:text-[35px] hd:text-[45px] fullhd:text-[56px]", children: "ENVIANOS TU CONSULTA" }),
      /* @__PURE__ */ jsx("p", { className: "pt-2 w-[277px] text-sm font-ubuntumono font-normal text-[#fff8] md:text-base md:w-[350px] lg:w-auto xl:text-lg hd:text-xl fullhd:text-2xl fullhd:pt-5", children: "Completá el formulario a continuación:" })
    ] }),
    /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: handleSubmit,
        className: "w-full pt-12 flex justify-center items-center flex-col gap-6 xs:w-[320px] sm:w-[400px] md:w-[500px] lg:w-full lg:pt-[30px] xl:pt-[38px] hd:pt-[45px] fullhd:pt-14 ",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "h-[58px] w-full px-4 py-[3px] flex flex-col justify-center gap-1 rounded-lg bg-white", children: [
            /* @__PURE__ */ jsx("label", { className: "text-xs mac:text-sm", htmlFor: "name", children: "Nombre completo" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "name",
                onBlur: handleBlur,
                name: "name",
                value: values.name,
                onChange: handleChange,
                className: "text-sm focus:outline-none lg:text-base",
                type: "text",
                placeholder: "Ingresa tu nombre completo"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "h-[58px] w-full px-4 flex flex-col justify-center gap-1 rounded-lg bg-white", children: [
            /* @__PURE__ */ jsx("label", { className: "text-xs mac:text-sm", htmlFor: "email", children: "Correo electrónico" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "email",
                onBlur: handleBlur,
                name: "email",
                value: values.email,
                onChange: handleChange,
                className: "text-sm focus:outline-none lg:text-base",
                type: "text",
                placeholder: "Ingresa tu correo electrónico"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "h-[58px] w-full px-4 flex flex-col justify-center gap-1 rounded-lg bg-white", children: [
            /* @__PURE__ */ jsx("label", { className: "text-xs mac:text-sm", htmlFor: "phone", children: "Número de teléfono" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "phone",
                onBlur: handleBlur,
                name: "phone",
                value: values.phone,
                onChange: handleChange,
                className: "text-sm focus:outline-none lg:text-base",
                type: "text",
                placeholder: "Ingresa tu número de teléfono"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "h-[226px] w-full px-4 py-2 flex flex-col gap-1 rounded-lg bg-white lg:gap-2 lg:h-[130px] fullhd:h-[142px]", children: [
            /* @__PURE__ */ jsx("label", { className: "text-xs mac:text-sm", htmlFor: "message", children: "Contanos tu consulta" }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                id: "message",
                onBlur: handleBlur,
                name: "message",
                value: values.message,
                onChange: handleChange,
                className: "w-full h-full text-sm outline-none lg:text-base",
                style: { resize: "none" },
                placeholder: "Este espacio esta preparado para escribir hasta 3000 caracteres para que puedas expresar lo que haga falta.",
                maxLength: "500"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center text-white pt-[34px] lg:pt-[51px] fullhd:pt-[66px]", children: /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "h-[58px] w-[256px] text-base bg-[#B59E57] font-bold font-orbitron rounded-[54px] shadow-xl mac:w-[350px] mac:text-[24px] mac:h-[76px] fullhd:w-[400px]",
              style: { boxShadow: "0px 0px 52px 4px rgba(180,157,86,0.9)" },
              children: "Enviar consulta"
            }
          ) })
        ]
      }
    )
  ] }) });
};

const $$Index$4 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Contact", Contact, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/components/Contact/Contact.jsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/pages/contacto/index.astro", void 0);

const $$file$4 = "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/pages/contacto/index.astro";
const $$url$4 = "/contacto";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$4,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const brands = [
	{
		value: "ford",
		label: "Ford"
	},
	{
		value: "hyundai",
		label: "Hyundai"
	},
	{
		value: "nissan",
		label: "Nissan"
	},
	{
		value: "toyota",
		label: "Toyota"
	},
	{
		value: "fiat",
		label: "Fiat"
	},
	{
		value: "renault",
		label: "Renault"
	},
	{
		value: "citroen",
		label: "Citroen"
	},
	{
		value: "peugeot",
		label: "Peugeot"
	},
	{
		value: "chevrolet",
		label: "Chevrolet"
	},
	{
		value: "porsche",
		label: "Porsche"
	},
	{
		value: "volkswagen",
		label: "Volkswagen"
	},
	{
		value: "alfa_romeo",
		label: "Alfa Romeo"
	},
	{
		value: "mini",
		label: "Mini"
	},
	{
		value: "dodge",
		label: "Dodge"
	},
	{
		value: "jeep",
		label: "Jeep"
	},
	{
		value: "audi",
		label: "Audi"
	},
	{
		value: "bmw",
		label: "BMW"
	},
	{
		value: "mercedes",
		label: "Mercedes"
	}
];

const onSubmit = async (values, actions) => {
  console.log(values);
  actions.resetForm();
};
const customStyles = {
  control: (base, state) => ({
    ...base,
    minHeight: "28px",
    height: "28px",
    borderColor: "transparent",
    "&:hover": {
      borderColor: "transparent"
    },
    boxShadow: state.isFocused ? "none" : "none"
  }),
  valueContainer: (base) => ({
    ...base,
    height: "100%",
    padding: "0",
    fontSize: "15px"
  }),
  dropdownIndicator: (base) => ({
    ...base,
    padding: 0,
    svg: {
      position: "absolute",
      top: "-5px",
      right: "0px",
      marginButtom: "20px",
      width: "24px",
      height: "24px"
    }
  }),
  indicatorSeparator: () => ({
    display: "none"
  }),
  placeholder: (base) => ({
    ...base,
    padding: "0",
    marginLeft: "0",
    fontSize: "14px",
    color: "#A9A9A9",
    "@media (min-width: 1024px)": {
      fontSize: "16px"
    }
  })
};
const QuoteCar = () => {
  const { values, handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      brand: "",
      model: "",
      year: ""
    },
    onSubmit
  });
  useEffect(() => {
    if (!values.brand) {
      setFieldValue("brand", "");
    }
  }, []);
  return /* @__PURE__ */ jsx("section", { className: "relative w-full bg-[url('/icons/backgrounds/mobile_home.svg')] bg-dark_gray bg-cover bg-no-repeat flex justify-center lg:bg-[url(/icons/backgrounds/home.svg)] lg:h-auto ", children: /* @__PURE__ */ jsxs("div", { className: "h-auto w-[300px] pt-[127px] pb-[80px] flex justify-center items-center flex-col lg:w-[600px] lg:pt-[140px] lg:pb-[90px] xl:pt-[170px] xl:w-[700px] mac:w-[800px] hd:pt-[190px] hd:w-[900px] fullhd:pb-[80px] fullhd:pt-[209px] fullhd:w-[1031px]", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center text-center flex-col", children: [
      /* @__PURE__ */ jsx("h1", { className: "w-[260px] text-2xl font-orbitron text-white font-bold md:text-3xl md:w-[300px] lg:w-auto xl:text-[35px] hd:text-[45px] fullhd:text-[55px]", children: "COTIZA TU AUTO RAPIDAMENTE" }),
      /* @__PURE__ */ jsx("p", { className: "pt-2 w-[277px] text-sm font-ubuntumono font-normal text-gray md:text-base md:w-[350px] lg:w-auto xl:text-lg hd:text-xl hd:pt-6 fullhd:text-2xl fullhd:pt-7", children: "Completá el formulario a continuación:" })
    ] }),
    /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: handleSubmit,
        className: "w-full pt-12 flex justify-center items-center flex-col gap-6 xs:w-[320px] sm:w-[400px] md:w-[500px] lg:w-full lg:pt-[30px] xl:pt-[38px] hd:pt-[45px] fullhd:pt-14",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "h-[58px] w-full px-4 py-[3px] flex flex-col justify-center gap-1 rounded-lg bg-white", children: [
            /* @__PURE__ */ jsx("label", { className: "text-xs mac:text-sm", htmlFor: "name", children: "Nombre completo" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "name",
                name: "name",
                onBlur: handleBlur,
                value: values.name,
                onChange: handleChange,
                className: "text-sm outline-none lg:text-base",
                type: "text",
                placeholder: "Ingresa tu nombre completo"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "h-[58px] w-full px-4 py-[3px] flex flex-col justify-center gap-1 rounded-lg bg-white", children: [
            /* @__PURE__ */ jsx("label", { className: "text-xs mac:text-sm", htmlFor: "email", children: "Correo electrónico" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "email",
                name: "email",
                onBlur: handleBlur,
                value: values.email,
                onChange: handleChange,
                className: "text-sm outline-none lg:text-base",
                type: "text",
                placeholder: "Ingresa tu correo electrónico"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "h-[58px] w-full px-4 py-[3px] flex flex-col justify-center gap-1 rounded-lg bg-white", children: [
            /* @__PURE__ */ jsx("label", { className: "text-xs mac:text-sm", htmlFor: "phone", children: "Número de teléfono" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "phone",
                name: "phone",
                onBlur: handleBlur,
                value: values.phone,
                onChange: handleChange,
                className: "text-sm outline-none lg:text-base",
                type: "text",
                placeholder: "Ingresa tu número de teléfono"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "h-[58px] w-full px-4 flex flex-col justify-center rounded-[8px] bg-white", children: [
            /* @__PURE__ */ jsx("label", { className: "text-xs mac:text-sm", htmlFor: "brand", children: "Marca del vehículo" }),
            /* @__PURE__ */ jsx(
              Select,
              {
                name: "brand",
                id: "brand",
                value: brands.find((option) => option.value === values.brand) || null,
                onChange: (option) => setFieldValue("brand", option ? option.value : ""),
                onBlur: handleBlur,
                options: brands,
                styles: customStyles,
                placeholder: "Elige una opción"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "h-[58px] w-full px-4 py-[3px] flex flex-col justify-center gap-1 rounded-lg bg-white", children: [
            /* @__PURE__ */ jsx("label", { className: "text-xs mac:text-sm", htmlFor: "model", children: "Modelo del vehículo" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "model",
                name: "model",
                onBlur: handleBlur,
                value: values.model,
                onChange: handleChange,
                className: "text-sm outline-none lg:text-base",
                type: "text",
                placeholder: "Ingresa el modelo del vehículo"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "h-[58px] w-full px-4 py-[3px] flex flex-col justify-center gap-1 rounded-lg bg-white", children: [
            /* @__PURE__ */ jsx("label", { className: "text-xs mac:text-sm", htmlFor: "year", children: "Año de fabricación del vehículo" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "year",
                name: "year",
                onBlur: handleBlur,
                value: values.year,
                onChange: handleChange,
                className: "text-sm outline-none lg:text-base",
                type: "text",
                placeholder: "Ingresa el año de fabricación"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center text-white pt-[38px] fullhd:pt-8", children: /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "h-[58px] w-[256px] font-orbitron font-bold text-base bg-[#B59E57] rounded-[54px] shadow-xl lg:text-xl lg:h-[64px] lg:w-[300px] fullhd:text-[24px] fullhd:h-[76px] fullhd:w-[400px]",
              style: { boxShadow: "0px 0px 52px 4px rgba(180,157,86,0.9)" },
              children: "Enviar formulario"
            }
          ) })
        ]
      }
    )
  ] }) });
};

const $$Index$3 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cotizar mi auto" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "QuoteCar", QuoteCar, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/components/QuoteCar/QuoteCar.jsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/pages/cotizar-mi-auto/index.astro", void 0);

const $$file$3 = "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/pages/cotizar-mi-auto/index.astro";
const $$url$3 = "/cotizar-mi-auto";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$ForLife = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-[url(/icons/backgrounds/mobile_forlife_background.svg)] sm:bg-[url(/icons/backgrounds/forlife_background.svg)] bg-cover bg-no-repeat bg-dark_gray"> <div class="flex flex-col justify-center items-center text-center"> <h1 class="text-2xl text-white font-orbitron font-bold pt-[127px] pb-2 xsm:pb-5 xsm:text-4xl xsm:pt-[160px] sm:pt-[209px] sm:pb-7 sm:text-[56px] lg:text-5xl mac:text-[56px]">
FOR LIFE
</h1> <p class="text-gray leading-normal text-sm xsm:text-2xl font-ubuntumono w-[226px] xsm:w-[400px] sm:w-[370px] lg:text-xl lg:w-full mac:text-2xl">
Una sección dedicada a nuestra <span class="text-gold font-bold block sm:inline">increible comunidad</span> </p> </div> <div class="flex flex-col px-4 pt-8 pb-20 xs:px-8 xsm:px-14 sm:pt-16"> ${renderComponent($$result, "Gallery", $$Gallery, {})} </div> </section>`;
}, "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/components/ForLife/ForLife.astro", void 0);

const $$Index$2 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "For Life" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ForLife", $$ForLife, {})} ` })}`;
}, "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/pages/for-life/index.astro", void 0);

const $$file$2 = "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/pages/for-life/index.astro";
const $$url$2 = "/for-life";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$WeAreBrothers = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-dark_gray flex flex-col"> <div class="bg-[url(/icons/backgrounds/mobile_somos_brothers_background.svg)] bg-no-repeat bg-cover bg-origin-border flex flex-col items-center pt-40 sm:pt-48 lg:bg-[url(/icons/backgrounds/somos_brothers_background.svg)] hd:pt-[217px]"> <h1 class="text-white font-bold font-orbitron text-xl xs:text-2xl sm:text-3xl lg:text-5xl hd:text-[80px]">
SOMOS <span class="text-gold">BROTHERS</span> </h1> ${renderComponent($$result, "Image", $$Image, { "src": "/icons/shiny_buda.svg", "alt": "buda", "width": "200", "height": "200", "class": "py-8 sm:py-12 sm:w-72 fullhd:py-16 hd:w-max" })} <p class="font-ubuntumono text-gray text-center text-base w-[240px] pb-16 sm:text-xl sm:w-[280px] lg:w-[470px] hd:text-2xl hd:w-[550px]">
Siempre buscamos lograr una <span class="text-gold">mejor experiencia</span> para nuestros clientes
</p> </div> <div class="flex flex-col items-center"> ${renderComponent($$result, "Image", $$Image, { "src": "/images/we-are-brothers/image_1.png", "alt": "offices", "width": "280", "height": "280", "class": "pb-16 pt-16 sm:w-[400px] lg:w-[500px] hd:w-[900px] fullhd:w-max hd:pb-20" })} <p class="font-orbitron font-bold text-center text-white w-[260px] pb-8 xs:w-[320px] sm:w-[410px] sm:pb-0 lg:w-[700px] hd:text-[32px] hd:w-[1400px]">
EL CONCEPTO DE DISEÑO DE LAS OFICINAS ESTÁ CENTRADO EN <span class="text-gold">SORPRENDER AL CLIENTE</span>, OTORGANDO UN ESPACIO DE INTERACCIÓN DIFERENTE AL CONVENCIONAL DE UN
      NEGOCIO DE AUTOMÓVILES.
</p> </div> <div class="flex flex-col items-center"> <div class="flex flex-col items-center lg:flex-row lg:gap-x-6"> ${renderComponent($$result, "Image", $$Image, { "src": "/images/we-are-brothers/image_2.png", "alt": "offices", "width": "280", "height": "280", "class": "pt-12 pb-8 sm:w-[400px] sm:pt-16 sm:pb-12 lg:w-[450px] lg:pb-16 hd:w-[600px] hd:py-24 fullhd:w-max" })} <p class="text-gray text-center font-ubuntumono w-[280px] xs:w-[320px] sm:w-[400px] lg:text-start lg:w-[270px] hd:text-2xl hd:w-[400px] fullhd:text-[32px] fullhd:leading-snug fullhd:w-[558px]">
Se ha generado un ambiente que desde el concepto de comodidad
        proporciona dinamismo, practicidad y un impacto diferencial mediante los
        distintos elementos de diseño. Que infunden en los visitantes un sentido
        de intimidad y confianza. <span class="text-gold">Siempre buscando lograr una mejor interacción con el cliente.</span> </p> </div> <div class="pt-8 sm:pt-12 lg:flex lg:items-center lg:justify-center lg:gap-x-6 lg:pt-0"> ${renderComponent($$result, "Image", $$Image, { "src": "/images/we-are-brothers/image_3.png", "alt": "offices", "width": "280", "height": "280", "class": "pb-10 sm:w-[400px] lg:pb-0 lg:w-[270px] hd:w-[430px] fullhd:w-max" })}${renderComponent($$result, "Image", $$Image, { "src": "/images/we-are-brothers/image_4.png", "alt": "offices", "width": "280", "height": "280", "class": "pb-10 sm:w-[400px] lg:pb-0 lg:w-[270px] hd:w-[430px] fullhd:w-max" })}${renderComponent($$result, "Image", $$Image, { "src": "/images/we-are-brothers/image_5.png", "alt": "offices", "width": "280", "height": "280", "class": "sm:w-[400px] lg:w-[270px] hd:w-[430px] fullhd:w-max" })} </div> <div class="flex flex-col text-white font-orbitron font-bold text-center gap-y-5 py-20 hd:text-3xl hd:py-[170px] fullhd:text-[40px]"> <p>EN BROTHERS</p> <p>HACEMOS LA DIFERENCIA</p> </div> </div> </section>`;
}, "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/components/WeAreBrothers/WeAreBrothers.astro", void 0);

const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Somos Brothers" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "WeAreBrothers", $$WeAreBrothers, {})} ` })}`;
}, "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/pages/somos-brothers/index.astro", void 0);

const $$file$1 = "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/pages/somos-brothers/index.astro";
const $$url$1 = "/somos-brothers";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const Button = ({ isGlowy, isGolden = false, text, href }) => {
  return /* @__PURE__ */ jsx(
    "a",
    {
      href,
      className: `${isGolden ? "text-2xl lg:text-lg hd:text-xl" : ""}`,
      children: /* @__PURE__ */ jsx(
        "button",
        {
          style: {
            boxShadow: isGlowy ? "0px 0px 52px 4px rgba(180,157,86,0.9);" : "none",
            background: isGolden ? "linear-gradient( #A49C4C -15%, #CAA962 35.78%, #BF953F 92.17%, #988001 118.43%)" : ""
          },
          className: `sm:w-[350px] w-[250px] flex lg:w-[400px] justify-center items-center h-[76px] rounded-[94px] text-xl text-white font-extrabold font-orbitron ${isGlowy ? "bg-gold" : "bg-dark_gray"} ${isGolden ? "rounded-lg h-max py-[14px] font-ubuntu font-normal xs:w-[266px] sm:w-[340px] lg:w-[165px] xl:w-[200px] lg:py-2 mac:w-[215px] hd:w-[230px] hd:py-3 fullhd:w-[266px]" : ""} `,
          children: text
        }
      )
    }
  );
};

const $$Astro$1 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { title, icon, paragraph, border, color_text } = Astro2.props;
  const words = title.split(" ");
  const segments = paragraph.split("`");
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${color_text === "white" ? "" : "bg-white"} p-6 text-left rounded border w-[280px] xs:w-[350px]  md:w-[350px] sm:w-[250px] h-48 ${border === "gold" ? "border-gold" : "border-gray"}`, "class")}> <img class="lg:mb-4 mb-2"${addAttribute(icon, "src")}${addAttribute(title, "alt")}> <h1${addAttribute(`${color_text === "white" ? "text-white" : "text-medium_gray"} xs:text-xl md:text-xl lg:text-[28px] font-bold pb-3`, "class")}> ${words.map((word, index) => renderTemplate`<span${addAttribute(word.toLowerCase() === "real" ? "text-gold font-orbitron" : "", "class")}> ${word} ${index < words.length - 1 ? " " : ""} </span>`)} </h1> <p${addAttribute(`${color_text === "white" ? "text-white" : "text-medium_gray"} xs:text-[14px] sm:text-[15px] text-xs opacity-60 py-1 font-normal-400"`, "class")}> ${segments.map((segment, index) => renderTemplate`<span${addAttribute(index % 2 === 1 ? "font-bold" : "", "class")}>${segment}</span>`)} </p> </div>`;
}, "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/components/Custom/Card.astro", void 0);

const card_sell_with_us = [
	{
		id: 1,
		title: "Valor Real",
		icon: "/icons/cards/car.svg",
		paragraph: "El valor de tu auto lo pones vos. `No cobramos comisiones.`",
		border: "gold"
	},
	{
		id: 2,
		title: "Exposición Real",
		icon: "/icons/cards/screen.svg",
		paragraph: "Lo exhibimos en `todos` nuestros canales de ventas. (+20.000 Seguidores)",
		border: "gold"
	},
	{
		id: 3,
		title: "Contenido Real",
		icon: "/icons/cards/gallery.svg",
		paragraph: "Te ofrecemos 15 fotos de la mejor calidad y un `video editado de regalo`",
		border: "gold"
	},
	{
		id: 4,
		title: "Hasta el final",
		icon: "/icons/cards/coins.svg",
		paragraph: "Nos ocupamos de venderlo `sin que lo dejes de usar`.",
		border: "gray"
	},
	{
		id: 5,
		title: "Gestoría propia",
		icon: "/icons/cards/hands.svg",
		paragraph: "Contamos con gestoría propia. `El vehículo se va si o si transferido`.",
		border: "gray"
	},
	{
		id: 6,
		title: "Nos encargamos",
		icon: "/icons/cards/user.svg",
		paragraph: "Finaciamos, permutamos, nos ocupamos de todo; `tu tiempo es valioso!`",
		border: "gray"
	}
];
const card_buy_with_us = [
	{
		id: 1,
		title: "Calidad garantizada",
		icon: "/icons/cards/guarantee.svg",
		paragraph: "Ofrecemos únicamente `lo mejor del mercado.`",
		border: "gold"
	},
	{
		id: 2,
		title: "Servicio Post-venta",
		icon: "/icons/cards/car_service.svg",
		paragraph: "Nuestras unidades son inspeccionadas por `técnicos especializados`.",
		border: "gold"
	},
	{
		id: 3,
		title: "Exclusividad",
		icon: "/icons/cards/help_desk.svg",
		paragraph: "Asesoramiento especializado, atención distinguida,`ventas al interior`.",
		border: "gold"
	},
	{
		id: 4,
		title: "Impecable estado",
		icon: "/icons/cards/clean_car.svg",
		paragraph: "Todas nuestras unidades reciben tratamiento `estético y limpieza de interior`.",
		border: "gray"
	},
	{
		id: 5,
		title: "Solo para vos",
		icon: "/icons/cards/custom_service.svg",
		paragraph: "Servicio de venta a pedido. Si no lo tememos en stock `lo conseguimos a pedido`.",
		border: "gray"
	},
	{
		id: 6,
		title: "Asesoramiento",
		icon: "/icons/cards/car_management.svg",
		paragraph: "Te facilitamos a reunir la documentación de `tu vehículo en parte de pago`.",
		border: "gray"
	}
];

const $$Astro = createAstro();
const $$Title = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Title;
  const { color_text, title, size } = Astro2.props;
  const segments = title.split("`");
  return renderTemplate`${maybeRenderHead()}<h1${addAttribute(`${color_text === "white" ? "text-white" : "text-medium_gray"} ${size === "xl" && "w-[300px] sm:w-[500px]"} ${size === "2xl" && "w-[300px] xs:w-[340px] sm:w-[560px] sm:pt-[212px]"} lg:w-full text-[25px] xs:text-[32px] sm:text-5xl font-bold sm:pb-6 pb-4 sm:pt-44 pt-[100px] md:px-4`, "class")}> ${segments.map((segment, index) => renderTemplate`<span${addAttribute(
    index % 2 === 1 ? "text-gold font-orbitron text-[26px] text-3xl sm:text-5xl" : "",
    "class"
  )}> ${segment} </span>`)} </h1>`;
}, "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/components/Custom/Title.astro", void 0);

const $$SellWithUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex justify-center bg-[url(/icons/backgrounds/mobile_dark_background.png)] md:bg-[url(/icons/backgrounds/dark_background.png)] w-full h-full bg-dark_gray md:bg-cover md:bg-center 2k:h-max"> <div> <div class="flex flex-col items-center lg:justify-center"> <div class="text-center flex flex-col items-center w-full mx-auto"> ${renderComponent($$result, "Title", $$Title, { "title": "\xBFPor qu\xE9 `VENDER` con nosotros?", "color_text": "white", "size": "xl" })} <p class="text-[16px] w-[270px] xs:w-[333px] lg:w-[800px] sm:w-[600px] text-pretty opacity-60 text-white p-2">
Somos una empresa joven enfocada fundamentalmente en un servicio
          distinguido y un<span class="lg:block">
asesoramiento destacado a la hora de comprar o vender un vehículo.
<span class="font-bold">Algo nunca antes visto.</span></span> </p> </div> <div class="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 md:gap-5 gap-8 gap-y-8 lg:gap-8 pt-10 w-max justify-center"> ${card_sell_with_us.map((card) => renderTemplate`${renderComponent($$result, "Card", $$Card, { "title": card.title, "icon": card.icon, "paragraph": card.paragraph, "border": card.border, "color_text": "white" })}`)} </div> <div class="sm:pt-[108px] pt-[100px] sm:pb-[135px] pb-[100px] flex justify-center w-full md:w-full"> ${renderComponent($$result, "Button", Button, { "text": "Cotizar mi auto", "isGlowy": true, "href": "/cotizar-mi-auto" })} </div> </div> </div> </section>`;
}, "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/components/Home/SellWithUs.astro", void 0);

const $$BuyWithUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex justify-center bg-white w-full h-full relative 2k:h-max"> <img class="hidden lg:block absolute md:w-full hd:w-screen top-[20px] lg:h-[1080px] 2k:hidden" src="/icons/backgrounds/cubes.svg" alt="cubes_desktop-bg"> <img class="block lg:hidden absolute top-[500px] w-full max-h-[600px]" src="/icons/backgrounds/mobile_cubes.svg" alt="cubes_mobile-bg"> <div class="flex flex-col items-center lg:justify-center px-4 w-full"> <div class="text-center flex flex-col justify-center items-center w-full mx-auto"> ${renderComponent($$result, "Title", $$Title, { "title": "\xBFPor qu\xE9 `COMPRAR` con nosotros?", "color_text": "black", "size": "2xl" })} <p class="text-[16px] w-64 xs:w-[250px] md:w-full text-medium_gray font-bold p-2">
Tenemos las mejores unidades seleccionadas del mercado.
</p> </div> <div class="z-10 grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 md:gap-5 gap-8 gap-y-8 lg:gap-8 pt-10 w-max justify-center"> ${card_buy_with_us.map((card) => renderTemplate`${renderComponent($$result, "Card", $$Card, { "title": card.title, "icon": card.icon, "paragraph": card.paragraph, "border": card.border, "color_text": "black" })}`)} </div> <div class="sm:pt-[96px] pt-[93px] sm:pb-[135px] pb-[98px] z-10"> ${renderComponent($$result, "Button", Button, { "text": "Comprar un auto", "isGlowy": false, "href": "/comprar-un-auto" })} </div> </div> </section>`;
}, "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/components/Home/BuyWithUs.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header id="header" class="w-full bg-[url(/icons/backgrounds/mobile_home.svg)] bg-cover bg-no-repeat bg-dark_gray md:bg-[url(/icons/backgrounds/home.svg)] fullhd:h-[1080px]"> <div class="flex flex-col items-center justify-center text-center relative pt-[170px] pb-[126px] sm:pt-[195px] lg:pb-56 lg:pt-[270px] mac:pb-[293px] mac:pt-[306px]"> <img src="/icons/home/icosahedron.svg" alt="iconsahedron" loading="eager" class="absolute w-24 sm:w-36 bottom-0 left-0 xl:w-52 mac:w-56 fullhd:w-max fullhd:bottom-[-53px]"> <img src="/icons/home/car.svg" alt="car" loading="eager" class="hidden md:block md:absolute md:w-32 md:top-16 md:left-20 lg:top-40 lg:left-8 xl:w-36 mac:w-40 mac:top-[420px] mac:left-10 fullhd:w-max"> <img src="/icons/home/pyramid.svg" alt="pyramid" loading="eager" class="hidden md:block md:absolute md:bottom-40 md:right-6 md:w-36 lg:top-24 xl:w-40 mac:w-44 mac:top-32 hd:right-6 fullhd:w-max"> <h1 class="w-[320px] text-3xl font-bold font-orbitron text-white text-center sm:w-[450px] md:w-[650px] lg:w-[800px] lg:leading-[50px] lg:text-4xl mac:text-5xl mac:w-[1050px] fullhd:w-[1400px] fullhd:mx-0 fullhd:leading-[70px] fullhd:text-[60px] uppercase">
El nuevo concepto a la hora de <span class="text-gold md:text-4xl lg:text-5xl mac:text-6xl fullhd:text-[80px]">COMPRAR</span>, <span class="text-gold md:text-4xl lg:text-5xl mac:text-6xl fullhd:text-[80px]">VENDER</span><span class="md:text-4xl mac:text-[55px]"> o </span><span class="text-gold md:text-4xl lg:text-5xl mac:text-6xl fullhd:text-[80px]">CAMBIAR
</span>tu auto
</h1> <p class="lg:hidden pt-5 w-[300px] text-base text-gray font-ubuntumono">
En <span class="text-gold text-bold uppercase">BROTHERS</span> marcamos la
      diferencia. Nos ocupamos de todo.
</p> <p class="hidden lg:block pt-10 px-5 text-base text-gray font-ubuntumono lg:text-sm mac:text-base fullhd:text-2xl">
En <span class="text-gold text-bold uppercase">BROTHERS</span> marcamos la
      diferencia. Nos ocupamos de todo; tu tiempo, es valioso.
</p> <div class="flex flex-col justify-center text-white items-center gap-5 pt-10 lg:flex-row lg:px-10 mac:gap-[32px]"> <a href="/comprar-un-auto"> <button class="h-[60px] mac:h-[80px] w-[289px] lg:w-[250px] rounded-full lg:rounded-lg bg-gradient-to-br from-gold to-light_gold fullhd:w-[285px]">COMPRAR UN AUTO</button> </a> <a href="/cotizar-mi-auto"> <button class="h-[60px] mac:h-[80px] w-[289px] lg:w-[250px] rounded-full lg:rounded-lg bg-[#FFFFFF0F] backdrop-blur-[10px] border-2 border-[#A1AEBF] fullhd:w-[289px]">COTIZAR MI AUTO</button> </a> <div class="hidden lg:block"> <a href="/cotizar-mi-auto"> <button class="h-[60px] mac:h-[80px] w-[289px] lg:w-[250px] rounded-lg bg-[#FFFFFF0F] backdrop-blur-[10px] fullhd:w-[289px]">CAMBIAR MI AUTO</button> </a> </div> </div> </div> </header>`;
}, "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/components/Home/Header.astro", void 0);

const $$Community = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex justify-center flex-col items-center w-full bg-[url(/icons/backgrounds/dark_background.png)] bg-dark_gray"> <div class="h-auto w-auto pt-10 xs:pt-[54px] lg:w-[800px] xl:pt-0 xl:w-[950px] mac:w-[1100px] hd:w-[1200px] fullhd:w-[1300px] fullhd:pt-10"> <div class="flex justify-center rounded-[23px] lg:rounded-[4px]"${addAttribute({
    background: "linear-gradient(-90deg, #A49C4C -15%, #CAA962 35.78%, #BF953F 92.17%, #988001 118.43%)"
  }, "style")}> <div class="flex flex-col items-center justify-center text-white text-center px-5 py-20 xs:px-8 lg:py-16 lg:w-[1000px] mac:py-[60px] hd:py-20"> <div class="w-[250px] flex justify-center items-center flex-col gap-4 sm:w-[310px] lg:flex-col lg:w-full fullhd:gap-4"> <h3 class="font-orbitron font-bold leading-[56px] text-4xl xs:text-[40px] lg:text-3xl xl:text-4xl hd:text-[40px]">
Unite a la comunidad BROTHERS
</h3> <p class="w-[230px] text-[#FFFFFFCC] font-semibold text-base lg:leading-normal lg:w-[450px] lg:text-sm mac:text-base mac:w-[500px]">
Suscribite GRATIS a nuestro newsletter, a través del cual recibirás
            últimas novedades, productos destacados, noticias, etc...
</p> </div> <div class="flex flex-col justify-center items-center gap-4 pt-6 mac:pt-8 lg:flex-row"> <input class="w-[250px] py-3 bg-[#FBFDFE] text-[#0D0E14] text-center text-sm font-semibold border-2 border-[#896C05] rounded-[43px] placeholder:text-dark_gray outline-none lg:py-2 md:px-10 hd:py-3 mac:w-[300px]" placeholder="Ingresa tu email" type="email"> <button class="py-[10px] px-6 bg-medium_gray font-semibold text-white rounded-[43px] text-sm lg:py-[10px] lg:px-6 lg:text-xs hd:text-sm">
UNIRME A LA COMUNIDAD
</button> </div> </div> </div> <div class="flex justify-center pt-[70px] pb-[108px] lg:pb-[83px]"> <a href="#header"> <button class="py-3 px-6 bg-transparent text-white font-bold text-sm border border-yellow rounded-full lg:px-7">
IR HASTA ARRIBA
</button> </a> </div> </div> </section>`;
}, "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/components/Home/Community.astro", void 0);

const $$Benefits = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="h-auto flex justify-center items-center w-full bg-[url('/icons/backgrounds/light_gray_background.svg')] bg-dark_gray_2"> <div class="py-[100px] grid justify-center grid-cols-2 gap-x-[24px] gap-y-10 lg:py-0 lg:h-[350px] lg:w-full lg:flex lg:justify-center lg:gap-0 lg:px-5 xl:h-[420px] mac:h-[450px] hd:h-[470px] fullhd:px-0 fullhd:h-[600px] fullhd:max-w-[1920px] fullhd:gap-x-[62px]"> <div class="h-[158px] w-[129px] py-[10px] flex justify-center items-center flex-col bg-[#ffffff1a] rounded-[16px] sm:h-[200px] sm:w-[160px] lg:py-0 lg:h-auto lg:w-[300px] lg:bg-transparent"> <img class="w-[115px] sm:w-[150px] lg:w-44 xl:w-56 mac:w-64 hd:w-[270px] fullhd:w-max" src="/icons/benefits/buda.svg" alt="Keys"> <h3 class="w-[90px] text-[16px] text-white font-medium text-center leading-none pt-2 sm:text-[18px] sm:leading-[21px] lg:pt-5 lg:text-[20px] lg:leading-[23px] lg:w-[120px] xl:text-2xl xl:leading-[28px] hd:text-3xl hd:w-[150px] fullhd:pt-7 fullhd:text-[40px] fullhd:w-52">
Atención Distinguida
</h3> </div> <div class="h-[158px] w-[129px] py-[10px] flex justify-center items-center flex-col bg-[#ffffff1a] rounded-[16px] sm:h-[200px] sm:w-[160px] lg:py-0 lg:h-auto lg:w-[300px] lg:bg-transparent"> <img class="w-[115px] sm:w-[150px] lg:w-44 xl:w-56 mac:w-64 hd:w-[270px] fullhd:w-max" src="/icons/benefits/shaking_hands.svg" alt="Keys"> <h3 class="w-[90px] text-[16px] text-white font-medium text-center leading-none pt-2 sm:text-[18px] sm:leading-[21px] sm:w-[100px] lg:pt-5 lg:text-[20px] lg:leading-[23px] lg:w-[120px] xl:text-2xl xl:leading-[28px] xl:w-[140px] hd:text-3xl hd:w-[160px] fullhd:pt-7 fullhd:text-[40px] fullhd:w-52">
Relación de por vida
</h3> </div> <div class="h-[158px] w-[129px] py-[10px] flex justify-center items-center flex-col bg-[#ffffff1a] rounded-[16px] sm:h-[200px] sm:w-[160px] lg:py-0 lg:h-auto lg:w-[300px] lg:bg-transparent"> <img class="w-[115px] sm:w-[150px] lg:w-44 xl:w-56 mac:w-64 hd:w-[270px] fullhd:w-max" src="/icons/benefits/check.svg" alt="Keys"> <h3 class="w-[90px] text-[16px] text-white font-medium text-center leading-none pt-2 sm:text-[18px] sm:leading-[21px] sm:w-[100px] lg:pt-5 lg:text-[20px] lg:leading-[23px] lg:w-[120px] xl:text-2xl xl:leading-[28px] xl:w-[140px] hd:text-3xl hd:w-[160px] fullhd:pt-7 fullhd:text-[40px] fullhd:w-52">
Oficinas de categoría
</h3> </div> <div class="h-[158px] w-[129px] py-[10px] flex justify-center items-center flex-col bg-[#ffffff1a] rounded-[16px] sm:h-[200px] sm:w-[160px] lg:py-0 lg:h-auto lg:w-[300px] lg:bg-transparent"> <img class="w-[115px] sm:w-[150px] lg:w-44 xl:w-56 mac:w-64 hd:w-[270px] fullhd:w-max" src="/icons/benefits/calendar.svg" alt="Keys"> <h3 class="w-[90px] text-[16px] text-white font-medium text-center leading-none pt-2 sm:text-[18px] sm:leading-[21px] lg:pt-5 lg:text-[20px] lg:w-[120px] lg:leading-[23px] xl:text-2xl xl:leading-[28px] hd:text-3xl hd:w-[150px] fullhd:pt-7 fullhd:text-[40px] fullhd:w-52">
Calidad garantizada
</h3> </div> <div class="h-[158px] w-full py-[10px] col-span-2 flex flex-col items-center justify-center bg-[#ffffff1a] lg:h-auto sm:h-[200px] lg:w-[300px] lg:py-0 lg:bg-transparent rounded-[16px]"> <img class="w-[115px] sm:w-[150px] lg:w-44 xl:w-56 mac:w-64 hd:w-[270px] fullhd:w-max" src="/icons/benefits/keys.svg" alt="Keys"> <h3 class="text-[16px] text-white font-medium text-center text-nowrap pt-2 sm:text-[18px] lg:text-wrap lg:pt-5 lg:text-[20px] lg:leading-[23px] lg:w-[120px] xl:text-2xl xl:leading-[28px] hd:text-3xl hd:w-[150px] fullhd:pt-7 fullhd:text-[40px] fullhd:w-52">
Gestoría propia
</h3> </div> </div> </section>`;
}, "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/components/Home/Benefits.astro", void 0);

const $$Brand = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-y-5 pb-[100px] sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-y-10 sm:gap-x-5 md:pb[104px] xl:grid-cols-4 hd:grid-cols-5 fullhd:grid-cols-6" data-astro-cid-ikk3j4hj> ${brands$1.map((brand) => renderTemplate`<div class="flex flex-row items-center justify-center gap-3 border border-gray rounded-[10px] px-8 py-4 w-[260px] h-[60px] sm:h-[80px] fullhd:w-[275px] hover:border-hidden brand-container" data-astro-cid-ikk3j4hj> <img${addAttribute(brand.image, "src")}${addAttribute(brand.brand, "alt")} data-astro-cid-ikk3j4hj> <p class="text-white text-[22px]" data-astro-cid-ikk3j4hj>${brand.brand}</p> </div>`)} </div> `;
}, "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/components/Custom/Brand.astro", void 0);

const $$Brands = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex justify-center bg-[url(/icons/backgrounds/mobile_dark_background.png)] md:bg-[url(/icons/backgrounds/dark_background.png)] w-full bg-dark_gray h-[1050px] xs:h-[1100px] sm:h-[1500px] lg:h-[1050px] xl:h-[950px] hd:h-[820px] fullhd:h-[720px]"> <div class="flex flex-col items-center lg:justify-center px-4 w-full"> <div class="text-center flex flex-col items-center w-full mx-auto sm:pb-10"> <h1 class="text-white font-bold text-[25px] xs:text-[32px] sm:leading-tight w-[251px] xs:w-[330px] sm:w-[482px] md:w-[514px] lg:w-[795px] xl:w-[900px] sm:text-5xl sm:pb-10 pb-4 pt-[100px] md:px-4">
Toda nuestra <span class="block lg:inline">variedad automotriz,</span> <span class="block text-gold font-orbitron font-bold">SOLO PARA VOS.</span> </h1> </div> <div class="container mx-auto sm:hidden"> ${renderComponent($$result, "CarouselMobile", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/components/Custom/Carousel/CarouselMobile", "client:component-export": "default" })} </div> <div class="hidden sm:block"> ${renderComponent($$result, "Brand", $$Brand, {})} </div> </div> </section>`;
}, "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/components/Home/Brands.astro", void 0);

const $$BrothersForLife = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-dark_gray bg-[url(/icons/backgrounds/mobile_dark_background.png)] md:bg-[url(/icons/backgrounds/dark_background.png)] sm:flex sm:flex-col sm:items-center xl:flex-row xl:items-start xl:justify-center xl:gap-x-10 mac:gap-x-12 fullhd:h-[1065px]"> <div class="flex flex-col items-center pt-2 xl:items-start xl:pt-32"> <h1 class="text-[40px] leading-snug text-white text-center font-orbitron font-extrabold w-[300px] sm:w-full xl:leading-snug xl:w-[300px] xl:text-start xl:text-4xl mac:text-[40px]">
BROTHERS <span class="text-gold">FOR LIFE</span> </h1> <p class="text-gray text-center text-lg w-[278px] pt-4 pb-6 sm:w-[400px] xl:text-start xl:text-base mac:text-lg">
Todos estos clientes pasaron por las puertas de <span class="font-semibold"><span class="font-orbitron">BROTHERS</span> y nos dieron la oportunidad
        de entregarles el mejor servicio</span>.
</p> <button class="font-orbitron text-gold border border-gold rounded-full px-6 py-3 xl:px-4 xl:text-sm mac:px-6"> <a href="/for-life"> VER MÁS HISTORIAS </a> </button> </div> <div class="flex flex-col items-center text-white pt-[56px] pb-[100px] sm:grid sm:grid-cols-2 sm:gap-4 sm:items-start xl:pt-32 xl:pb-[193px] mac:gap-8"> <div class="flex flex-col gap-y-8 sm:grid sm:gap-4 mac:gap-8"> <div class="w-64 border border-gold rounded-[4px] p-6 sm:w-[270px] md:w-[330px] lg:w-[365px] fullhd:w-[414px]"> ${renderComponent($$result, "Image", $$Image, { "src": "/images/brothers-for-life/image_1.png", "alt": "testimonial", "width": "100", "height": "100", "class": "w-full" })} <p class="font-orbitron text-2xl pt-6">Gonzalo Torres</p> </div> <div class="w-64 border border-gold rounded-[4px] p-6 sm:w-[270px] md:w-[330px] lg:w-[365px] fullhd:w-[414px]"> <div class="rounded-[4px] px-2 py-1 w-[205px] sm:w-[220px] md:w-max"${addAttribute({
    background: "linear-gradient( #A49C4C -15%, #CAA962 35.78%, #BF953F 92.17%, #988001 118.43%)"
  }, "style")}> <p class="font-orbitron text-sm">VALERIA RODRIGUEZ - CLIENTA</p> </div> <div class="flex flex-col lg:flex-row lg:items-center lg:text-nowrap lg:pt-5 lg:gap-1"> <p class="pt-5 font-light lg:pt-0">Maravillosa experiencia!!</p> <p class="font-light">Un 10 para todos!!</p> </div> <p class="w-[200px] font-light md:w-[260px] lg:w-[300px] fullhd:w-[350px]">
Eficientes al 100%. Gracias por resolver todo en tiempo y forma!! No
          me cansaré de recomendarlos!!
</p> </div> <div class="w-64 border border-gold rounded-[4px] p-6 sm:w-[270px] md:w-[330px] lg:w-[365px] fullhd:w-[414px]"> ${renderComponent($$result, "Image", $$Image, { "src": "/images/brothers-for-life/image_2.png", "alt": "testimonial", "width": "100", "height": "100", "class": "w-full" })} <p class="font-orbitron text-2xl pt-6">David Martinez</p> </div> </div> <div class="sm:grid sm:gap-4 lg:gap-5 mac:gap-8"> <div class="hidden sm:block w-64 border border-gold rounded-[4px] p-6 sm:w-[270px] md:w-[330px] lg:w-[365px] fullhd:w-[414px]"> <div class="rounded-[4px] px-2 py-1 w-max"${addAttribute({
    background: "linear-gradient( #A49C4C -15%, #CAA962 35.78%, #BF953F 92.17%, #988001 118.43%)"
  }, "style")}> <p class="font-orbitron text-sm">MAURO VISANI - CLIENTE</p> </div> <p class="pt-5 font-light">
Excelente e incomparable experiencia. Este excepcional equipo de
          trabajo, hace que el verdadero objetivo que es comprar tu vehículo,
          pase a un segundo plano. Desde el momento que llegás hasta ya
          concretada la operación, pasando por todos los trámites
          administrativos, te hacen sentir realmente cómodo y tranquilo gracias
          a la confianza que generan con la excelente ejecución de su trabajo.
          Impecable todo chicos, los felicito de todo corazón y les agradezco en
          nombre de mi familia por habernos hecho conocer la “Experiencia
          Brothers”.
</p> <p>PD: Un párrafo aparte la entrega de la unidad, sin palabras.</p> <p>Sigan así!!!! Gracias, TOTALES!!!!👏🏻👏🏻👏🏻👏🏻👏🏻👏🏻</p> </div> <div class="hidden sm:block w-64 border border-gold rounded-[4px] p-6 sm:w-[270px] md:w-[330px] lg:w-[365px] fullhd:w-[414px]"> <div class="rounded-[4px] px-2 py-1 w-max"${addAttribute({
    background: "linear-gradient( #A49C4C -15%, #CAA962 35.78%, #BF953F 92.17%, #988001 118.43%)"
  }, "style")}> <p class="font-orbitron text-sm">ALEJANDRO - CLIENTE</p> </div> <p class="pt-6 font-light">
Todo excelente tanto la atención como el auto vendido. Mil gracias
          Mauro y Nico.
</p> </div> </div> </div> </section>`;
}, "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/components/Home/BrothersForLife.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Brothers Drive Cars" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "SellWithUs", $$SellWithUs, {})} ${renderComponent($$result2, "Benefits", $$Benefits, {})} ${renderComponent($$result2, "BuyWithUs", $$BuyWithUs, {})} ${renderComponent($$result2, "Brands", $$Brands, {})} ${renderComponent($$result2, "BrothersForLife", $$BrothersForLife, {})} ${renderComponent($$result2, "Community", $$Community, {})} ` })}`;
}, "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/pages/index.astro", void 0);

const $$file = "C:/Users/tomis/Desktop/NEOWYZE/bdc/brothers-drive-cars-web/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$5 as a, index$4 as b, index$3 as c, index$2 as d, index$1 as e, index as f, index$6 as i };
