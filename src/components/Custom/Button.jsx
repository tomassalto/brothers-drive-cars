const Button = ({ isGlowy, isGolden = false, text, href }) => {
  return (
    <a
      href={href}
      className={`${isGolden ? "text-2xl lg:text-lg hd:text-xl" : ""}`}
    >
      <button
        style={{
          boxShadow: isGlowy
            ? "0px 0px 52px 4px rgba(180,157,86,0.9);"
            : "none",
          background: isGolden
            ? "linear-gradient( #A49C4C -15%, #CAA962 35.78%, #BF953F 92.17%, #988001 118.43%)"
            : "",
        }}
        className={`sm:w-[350px] w-[250px] flex lg:w-[400px] justify-center items-center h-[76px] rounded-[94px] text-xl text-white font-extrabold font-orbitron ${
          isGlowy ? "bg-gold" : "bg-dark_gray"
        } ${
          isGolden
            ? "rounded-lg h-max py-[14px] font-ubuntu font-normal xs:w-[266px] sm:w-[340px] lg:w-[165px] xl:w-[200px] lg:py-2 mac:w-[215px] hd:w-[230px] hd:py-3 fullhd:w-[266px]"
            : ""
        } `}
      >
        {text}
      </button>
    </a>
  );
};

export default Button;
