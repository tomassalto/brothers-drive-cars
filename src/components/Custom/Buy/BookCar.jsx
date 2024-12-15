import { useFormik } from "formik";

const onSubmit = async (values, actions) => {
  console.log(values);
  actions.resetForm();
};

const BookCar = ({ isOpen, closeModal }) => {
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit,
  });
  return (
    <section
      className={`px-1 fixed inset-0 flex justify-center items-end bg-dark_gray bg-opacity-80 transition-opacity duration-500 z-30 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <form
        onSubmit={handleSubmit}
        className={`relative flex items-center flex-col bg-[#1B181899] backdrop-blur-lg rounded-tr-[40px] rounded-tl-[40px] border-2 border-[#A49C4C] transform transition-transform duration-500 w-[300px] h-[530px] xs:w-[350px] xs:h-[600px] xsm:w-[400px] sm:w-[450px] md:w-[600px] md:h-[560px] lg:h-[500px] lg:w-[800px] xl:h-[550px] xl:w-[900px] mac:h-[700px] mac:w-[1000px] hd:w-[1150px] fullhd:w-[1276px] fullhd:h-[760px] ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="pt-6 pb-5 xs:pt-9 xs:pb-7 md:py-9 lg:py-7 xl:py-8 mac:py-[55px]">
          <h1 className="text-lg font-orbitron text-center text-white xs:text-[22px] xsm:text-2xl mac:text-[32px] hd:text-[40px] fullhd:text-5xl">
            Reservar <span className="font-extrabold">Peugeot 208</span>
          </h1>
        </div>
        <div className="w-full flex flex-col items-center gap-3 xs:px-6 md:gap-4 md:px-0 lg:gap-2 lg:px-0 xl:gap-3 mac:gap-5 hd:w-[900px] fullhd:w-[1031px]">
          <div className="flex flex-col justify-center h-[50px] w-[255px] gap-1 px-3 py-1 bg-[#474747] rounded-lg xs:w-[300px] xsm:w-[350px] sm:w-[375px] md:w-[525px] lg:py-2 lg:px-4 lg:gap-1 lg:w-[650px] xl:py-3 xl:w-[700px] mac:h-[56px] mac:gap-[2px] mac:w-[770px] hd:w-[900px] fullhd:w-[1031px] fullhd:h-[58px]">
            <label className="text-xs text-white" htmlFor="name">
              Nombre completo
            </label>
            <input
              id="name"
              name="name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
              className="text-xs outline-none bg-[#474747] xl:text-sm mac:text-base"
              type="text"
              placeholder="Ingresa tu nombre completo"
            />
          </div>
          <div className="flex flex-col justify-center h-[50px] w-[255px] gap-1 px-3 py-1 bg-[#474747] rounded-lg xs:w-[300px] xsm:w-[350px] sm:w-[375px] md:w-[525px] lg:py-2 lg:px-4 lg:gap-1 lg:w-[650px] xl:py-3 xl:w-[700px] mac:h-[56px] mac:gap-[2px] mac:w-[770px] hd:w-[900px] fullhd:w-[1031px] fullhd:h-[58px]">
            <label className="text-xs text-white" htmlFor="email">
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              className="text-xs outline-none bg-[#474747] xl:text-sm mac:text-base"
              type="email"
              placeholder="Ingresa tu correo electrónico"
            />
          </div>
          <div className="flex flex-col justify-center h-[50px] w-[255px] gap-1 px-3 py-1 bg-[#474747] rounded-lg xs:w-[300px] xsm:w-[350px] sm:w-[375px] md:w-[525px] lg:py-2 lg:px-4 lg:gap-1 lg:w-[650px] xl:py-3 xl:w-[700px] mac:h-[56px] mac:gap-[2px] mac:w-[770px] hd:w-[900px] fullhd:w-[1031px] fullhd:h-[58px]">
            <label className="text-xs text-white" htmlFor="phone">
              Número de teléfono
            </label>
            <input
              id="phone"
              name="phone"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.phone}
              className="text-xs outline-none bg-[#474747] xl:text-sm mac:text-base"
              type="text"
              placeholder="Ingresa tu número de teléfono"
            />
          </div>
        </div>
        <div className="w-full px-6 py-7 text-white flex items-start flex-col xs:py-8 sm:px-9 md:pt-6 lg:w-[650px] lg:px-0 lg:py-7 xl:w-[700px] mac:w-[770px] hd:w-[900px] fullhd:w-[1031px] fullhd:text-2xl">
          <p className="text-xs xs:text-sm xl:text-base mac:text-[18px] fullhd:text-xl">
            Monto de reserva:{" "}
            <span className="font-bold xs:text-sm xl:text-base mac:text-[18px]">
              $20.000
            </span>
          </p>
          <p className="text-xs pt-2.5 xs:pt-3 xs:text-sm lg:pt-2 xl:text-base mac:text-[18px] mac:pt-3 hd:pt-5 fullhd:text-xl fullhd:pt-3">
            Turno para visitar las oficinas:{" "}
            <span className="font-bold">14/05/2024 </span>
            <span className="font-light underline">(Cambiar turno)</span>
          </p>
          <p className="text-xs pt-5 underline font-light sm:pt-8 lg:pt-6 xl:text-sm mac:text-base mac:pt-10 hd:pt-[45px] fullhd:text-lg">
            Términos y condiciones de la reserva
          </p>
        </div>
        <div className="text-white flex flex-col-reverse gap-3 md:flex-row xl:pt-5 mac:pt-[55px] hd:gap-5 hd:pt-[35px] ">
          <div>
            <button
              type="submit"
              className="h-10 w-[250px] font-ubuntu font-bold text-sm bg-[#B59E57] rounded-[54px] shadow-xl xs:w-[300px] xsm:w-[350px] sm:w-[380px] md:h-[50px] md:w-[200px] lg:h-[45px] lg:w-[200px] xl:text-base mac:h-[50px] mac:text-lg hd:text-lg hd:w-[250px] hd:h-[60px] fullhd:text-2xl fullhd:h-[70px] fullhd:w-[300px]"
              style={{
                background:
                  "linear-gradient(-90deg, #A49C4C -15%, #CAA962 35.78%, #BF953F 92.17%, #988001 118.43%)",
              }}
            >
              Generar reserva
            </button>
            <p className="text-[9px] text-center font-medium pt-2 xs:text-xs md:pt-2 lg:text-xs hd:text-sm fullhd:pt-4 fullhd:text-base">
              Se redirigirá a <span className="font-bold">Mercado Pago</span>
            </p>
          </div>
          <button
            type="button"
            onClick={closeModal}
            className="h-10 w-[250px] font-ubuntu font-bold text-sm border border-white rounded-[94px] shadow-xl xs:w-[300px] xsm:w-[350px] sm:w-[380px] md:h-[50px] md:w-[200px] lg:h-[45px] lg:w-[200px] xl:text-base mac:h-[50px] mac:text-lg hd:text-lg hd:w-[250px] hd:h-[60px] fullhd:text-2xl fullhd:h-[70px] fullhd:w-[300px]"
          >
            Cancelar
          </button>
        </div>
      </form>
    </section>
  );
};
export default BookCar;
