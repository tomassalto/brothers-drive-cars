import { useState, useEffect } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const [path, setPath] = useState("");

  useEffect(() => {
    const currentPathname = window.location.pathname;
    setPath(currentPathname);
  }, []);

  return (
    <div>
      <div
        className="hidden lg:flex lg:fixed justify-between items-center px-10 w-full h-[100px] bg-opacity-10 backdrop-blur-[34.40px] z-50 mac:h-[129px] xl:px-16 fullhd:px-20"
        style={{
          background: "rgba(19, 16, 16, 0.60)",
        }}
      >
        <div className="flex items-center gap-x-3">
          <img
            src="/logo.svg"
            alt="logo"
            loading="eager"
            className="hidden lg:block lg:w-12 mac:w-16 fullhd:w-max"
          />
          <p className="text-white xl:text-xl mac:text-2xl hd:text-3xl font-orbitron">
            <span className="text-light_gold">BROTHERS</span> DRIVE CARS
          </p>
        </div>

        <div className="hidden lg:flex items-center gap-5 text-white font-medium text-xs xl:text-base mac:text-lg mac:gap-7 2k:gap-[56px] fullhd:text-2xl ">
          <a
            href="/"
            className={`hover:text-gold ${
              path === "/" ? "text-gold" : "text-white"
            }`}
          >
            INICIO
          </a>
          <a
            href="/somos-brothers"
            className={`hover:text-gold ${
              path === "/somos-brothers" ? "text-gold" : "text-white"
            }`}
          >
            SOMOS BROTHERS
          </a>
          <a
            href="/comprar-un-auto"
            className={`hover:text-gold ${
              path === "/comprar-un-auto" ? "text-gold" : "text-white"
            }`}
          >
            COMPRAR UN AUTO
          </a>
          <a
            href="/cotizar-mi-auto"
            className={`hover:text-gold ${
              path === "/cotizar-mi-auto" ? "text-gold" : "text-white"
            }`}
          >
            COTIZAR MI AUTO
          </a>
          <a
            href="/for-life"
            className={`hover:text-gold ${
              path === "/for-life" ? "text-gold" : "text-white"
            }`}
          >
            FOR LIFE
          </a>
          <a
            href="/contacto"
            className={`hover:text-gold ${
              path === "/contacto" ? "text-gold" : "text-white"
            }`}
          >
            CONTACTO
          </a>
        </div>
      </div>

      <div
        className="flex fixed justify-between items-center px-6 text-white font-medium h-[95px] w-full z-50 bg-opacity-10 backdrop-blur-[34.40px] lg:hidden"
        style={{
          background: !openMenu ? "rgba(19, 16, 16, 0.40)" : "#111010",
        }}
      >
        <img src="/logo.svg" alt="profile" className="w-12" />
        <button onClick={() => setOpenMenu(!openMenu)} className="w-10">
          {openMenu ? (
            <img src="/icons/close.svg" alt="close" />
          ) : (
            <img src="/icons/menu.svg" alt="menu" />
          )}
        </button>
      </div>

      <div
        className={`fixed top-0 h-screen w-full transition-transform duration-500 ease-in z-40 bg-dark_gray lg:hidden ${
          openMenu ? "translate-y-[93px]" : "-translate-y-full"
        }`}
      >
        <div className="pt-12 pl-10 flex flex-col text-white gap-y-12 ">
          <a
            href="/"
            className={`text-2xl inline-block ${
              path === "/" ? "text-gold" : "text-white"
            }`}
          >
            INICIO
          </a>
          <a
            href="/somos-brothers"
            className={`text-2xl inline-block ${
              path === "/somos-brothers" ? "text-gold" : "text-white"
            }`}
          >
            SOMOS BROTHERS
          </a>
          <a
            href="/comprar-un-auto"
            className={`text-2xl inline-block ${
              path === "/comprar-un-auto" ? "text-gold" : "text-white"
            }`}
          >
            COMPRAR UN AUTO
          </a>
          <a
            href="/cotizar-mi-auto"
            className={`text-2xl inline-block ${
              path === "/cotizar-mi-auto" ? "text-gold" : "text-white"
            }`}
          >
            COTIZAR MI AUTO
          </a>
          <a
            href="/for-life"
            className={`text-2xl inline-block ${
              path === "/for-life" ? "text-gold" : "text-white"
            }`}
          >
            FOR LIFE
          </a>
          <a
            href="/contacto"
            className={`text-2xl inline-block ${
              path === "/contacto" ? "text-gold" : "text-white"
            }`}
          >
            CONTACTO
          </a>
          <div className="relative">
            <img
              src="/icons/search.svg"
              className="w-7 absolute top-3 left-3"
            />
            <input
              type="text"
              placeholder="BUSCAR VEHÍCULO"
              className="bg-ultra_dark_gray border border-medium_gray w-[250px] pl-16 text-white placeholder:text-white xs:w-[280px] xs:pl-20 h-[53px] rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
