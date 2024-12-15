import { useFormik } from "formik";

const onSubmit = async (values, actions) => {
  console.log(values);
  actions.resetForm();
};

const Contact = () => {
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit,
  });
  return (
    <section className="relative w-full bg-[url('/icons/backgrounds/mobile_home.svg')] bg-dark_gray bg-cover bg-no-repeat flex justify-center lg:bg-[url(/icons/backgrounds/home.svg)] lg:h-auto ">
      <div className="h-auto w-[300px] pt-[127px] pb-20 flex justify-center items-center flex-col lg:w-[600px] lg:pt-[140px] lg:pb-[130px] xl:pt-[170px] xl:w-[700px] mac:w-[800px] hd:pt-[190px] hd:w-[900px] fullhd:pb-[130px] fullhd:pt-[209px] fullhd:w-[1031px]">
        <div className="flex justify-center items-center text-center flex-col">
          <h1 className="w-[200px] text-2xl font-orbitron text-white font-bold lg:w-auto md:text-3xl md:w-[300px] xl:text-[35px] hd:text-[45px] fullhd:text-[56px]">
            ENVIANOS TU CONSULTA
          </h1>
          <p className="pt-2 w-[277px] text-sm font-ubuntumono font-normal text-[#fff8] md:text-base md:w-[350px] lg:w-auto xl:text-lg hd:text-xl fullhd:text-2xl fullhd:pt-5">
            Completá el formulario a continuación:
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full pt-12 flex justify-center items-center flex-col gap-6 xs:w-[320px] sm:w-[400px] md:w-[500px] lg:w-full lg:pt-[30px] xl:pt-[38px] hd:pt-[45px] fullhd:pt-14 "
        >
          <div className="h-[58px] w-full px-4 py-[3px] flex flex-col justify-center gap-1 rounded-lg bg-white">
            <label className="text-xs mac:text-sm" htmlFor="name">
              Nombre completo
            </label>
            <input
              id="name"
              onBlur={handleBlur}
              name="name"
              value={values.name}
              onChange={handleChange}
              className="text-sm focus:outline-none lg:text-base"
              type="text"
              placeholder="Ingresa tu nombre completo"
            />
          </div>
          <div className="h-[58px] w-full px-4 flex flex-col justify-center gap-1 rounded-lg bg-white">
            <label className="text-xs mac:text-sm" htmlFor="email">
              Correo electrónico
            </label>
            <input
              id="email"
              onBlur={handleBlur}
              name="email"
              value={values.email}
              onChange={handleChange}
              className="text-sm focus:outline-none lg:text-base"
              type="text"
              placeholder="Ingresa tu correo electrónico"
            />
          </div>
          <div className="h-[58px] w-full px-4 flex flex-col justify-center gap-1 rounded-lg bg-white">
            <label className="text-xs mac:text-sm" htmlFor="phone">
              Número de teléfono
            </label>
            <input
              id="phone"
              onBlur={handleBlur}
              name="phone"
              value={values.phone}
              onChange={handleChange}
              className="text-sm focus:outline-none lg:text-base"
              type="text"
              placeholder="Ingresa tu número de teléfono"
            />
          </div>
          <div className="h-[226px] w-full px-4 py-2 flex flex-col gap-1 rounded-lg bg-white lg:gap-2 lg:h-[130px] fullhd:h-[142px]">
            <label className="text-xs mac:text-sm" htmlFor="message">
              Contanos tu consulta
            </label>
            <textarea
              id="message"
              onBlur={handleBlur}
              name="message"
              value={values.message}
              onChange={handleChange}
              className="w-full h-full text-sm outline-none lg:text-base"
              style={{ resize: "none" }}
              placeholder="Este espacio esta preparado para escribir hasta 3000 caracteres para que puedas expresar lo que haga falta."
              maxLength={"500"}
            ></textarea>
          </div>
          <div className="flex justify-center items-center text-white pt-[34px] lg:pt-[51px] fullhd:pt-[66px]">
            <button
              type="submit"
              className="h-[58px] w-[256px] text-base bg-[#B59E57] font-bold font-orbitron rounded-[54px] shadow-xl mac:w-[350px] mac:text-[24px] mac:h-[76px] fullhd:w-[400px]"
              style={{ boxShadow: "0px 0px 52px 4px rgba(180,157,86,0.9)" }}
            >
              Enviar consulta
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
