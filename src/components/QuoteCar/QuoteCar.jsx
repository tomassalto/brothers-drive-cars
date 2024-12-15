import { useFormik } from "formik";
import Select from 'react-select';
import { brands } from '../../data/select_brands_data.json'
import { useEffect } from "react";

const onSubmit = async (values, actions) => {
  console.log(values);
  actions.resetForm();
};

const customStyles = {
  control: (base, state) => ({
    ...base,
    minHeight: '28px',
    height: '28px',
    borderColor: 'transparent',
    '&:hover': {
      borderColor: 'transparent'
    },
    boxShadow: state.isFocused ? 'none' : 'none',
  }),
  valueContainer: (base) => ({
    ...base,
    height: '100%',
    padding: '0',
    fontSize: '15px',
  }),
  dropdownIndicator: (base) => ({
    ...base,
    padding: 0,
    svg: {
      position: 'absolute',
      top: '-5px',
      right:'0px',
      marginButtom: '20px',
      width: '24px',
      height: '24px',
    }
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  placeholder: (base) => ({
    ...base,
    padding:'0',
    marginLeft:'0',
    fontSize: '14px',
    color: '#A9A9A9',
    '@media (min-width: 1024px)': {
      fontSize: '16px',
    },
  }),
};

const QuoteCar = () => {
  const { values, handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      brand: "",
      model: "",
      year: "",
    },
    onSubmit
  });
  
  useEffect(() => {
    if (!values.brand) {
      setFieldValue("brand", "");
    }
  },[]);

  return (
    <section className="relative w-full bg-[url('/icons/backgrounds/mobile_home.svg')] bg-dark_gray bg-cover bg-no-repeat flex justify-center lg:bg-[url(/icons/backgrounds/home.svg)] lg:h-auto ">
      <div className="h-auto w-[300px] pt-[127px] pb-[80px] flex justify-center items-center flex-col lg:w-[600px] lg:pt-[140px] lg:pb-[90px] xl:pt-[170px] xl:w-[700px] mac:w-[800px] hd:pt-[190px] hd:w-[900px] fullhd:pb-[80px] fullhd:pt-[209px] fullhd:w-[1031px]">
        <div className="flex justify-center items-center text-center flex-col">
          <h1 className="w-[260px] text-2xl font-orbitron text-white font-bold md:text-3xl md:w-[300px] lg:w-auto xl:text-[35px] hd:text-[45px] fullhd:text-[55px]">
          COTIZA TU AUTO RAPIDAMENTE
          </h1>
          <p className="pt-2 w-[277px] text-sm font-ubuntumono font-normal text-gray md:text-base md:w-[350px] lg:w-auto xl:text-lg hd:text-xl hd:pt-6 fullhd:text-2xl fullhd:pt-7">
            Completá el formulario a continuación:
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full pt-12 flex justify-center items-center flex-col gap-6 xs:w-[320px] sm:w-[400px] md:w-[500px] lg:w-full lg:pt-[30px] xl:pt-[38px] hd:pt-[45px] fullhd:pt-14">
          <div className="h-[58px] w-full px-4 py-[3px] flex flex-col justify-center gap-1 rounded-lg bg-white">
            <label className="text-xs mac:text-sm" htmlFor="name">
              Nombre completo
            </label>
            <input
              id="name"
              name="name"
              onBlur={handleBlur}
              value={values.name}
              onChange={handleChange}
              className="text-sm outline-none lg:text-base"
              type="text"
              placeholder="Ingresa tu nombre completo"
            />
          </div>
          <div className="h-[58px] w-full px-4 py-[3px] flex flex-col justify-center gap-1 rounded-lg bg-white">
            <label className="text-xs mac:text-sm" htmlFor="email">
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              onBlur={handleBlur}
              value={values.email}
              onChange={handleChange}
              className="text-sm outline-none lg:text-base"
              type="text"
              placeholder="Ingresa tu correo electrónico"
            />
          </div>
          <div className="h-[58px] w-full px-4 py-[3px] flex flex-col justify-center gap-1 rounded-lg bg-white">
            <label className="text-xs mac:text-sm" htmlFor="phone">
              Número de teléfono
            </label>
            <input
              id="phone"
              name="phone"
              onBlur={handleBlur}
              value={values.phone}
              onChange={handleChange}
              className="text-sm outline-none lg:text-base"
              type="text"
              placeholder="Ingresa tu número de teléfono"
            />
          </div>
          <div className="h-[58px] w-full px-4 flex flex-col justify-center rounded-[8px] bg-white">
            <label className="text-xs mac:text-sm" htmlFor="brand">
              Marca del vehículo
            </label>
            <Select
              name="brand"
              id="brand"
              value={brands.find(option => option.value === values.brand) || null}
              onChange={(option) => setFieldValue("brand", option ? option.value : "")}
              onBlur={handleBlur}
              options={brands}
              styles={customStyles}
              placeholder="Elige una opción"
            />
          </div>
          <div className="h-[58px] w-full px-4 py-[3px] flex flex-col justify-center gap-1 rounded-lg bg-white">
            <label className="text-xs mac:text-sm" htmlFor="model">
              Modelo del vehículo
            </label>
            <input
              id="model"
              name="model"
              onBlur={handleBlur}
              value={values.model}
              onChange={handleChange}
              className="text-sm outline-none lg:text-base"
              type="text"
              placeholder="Ingresa el modelo del vehículo"
            />
          </div>
          <div className="h-[58px] w-full px-4 py-[3px] flex flex-col justify-center gap-1 rounded-lg bg-white">
            <label className="text-xs mac:text-sm" htmlFor="year">
              Año de fabricación del vehículo
            </label>
            <input
              id="year"
              name="year"
              onBlur={handleBlur}
              value={values.year}
              onChange={handleChange}
              className="text-sm outline-none lg:text-base"
              type="text"
              placeholder="Ingresa el año de fabricación"
            />
          </div>
          <div className="flex justify-center items-center text-white pt-[38px] fullhd:pt-8">
            <button
              type="submit"
              className="h-[58px] w-[256px] font-orbitron font-bold text-base bg-[#B59E57] rounded-[54px] shadow-xl lg:text-xl lg:h-[64px] lg:w-[300px] fullhd:text-[24px] fullhd:h-[76px] fullhd:w-[400px]"
              style={{ boxShadow: "0px 0px 52px 4px rgba(180,157,86,0.9)" }}>
              Enviar formulario
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default QuoteCar;