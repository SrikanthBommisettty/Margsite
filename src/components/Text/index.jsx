import React from "react";

const sizeClasses = {
  txtOutfitRegular14Gray90004: "font-normal font-outfit",
  txtOutfitMedium18: "font-medium font-outfit",
  txtLexendRegular18Amber600: "font-lexend font-normal",
  txtOutfitMedium16: "font-medium font-outfit",
  txtLexendMedium24: "font-lexend font-medium",
  txtLexendSemiBold16: "font-lexend font-semibold",
  txtOutfitSemiBold52Gray90001: "font-outfit font-semibold",
  txtOutfitRegular20: "font-normal font-outfit",
  txtOutfitMedium32: "font-medium font-outfit",
  txtOutfitRegular16Black900: "font-normal font-outfit",
  txtOutfitMedium18Gray900: "font-medium font-outfit",
  txtOutfitMedium16Gray900: "font-medium font-outfit",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtOutfitRegular14: "font-normal font-outfit",
  txtOutfitMedium24: "font-medium font-outfit",
  txtOutfitRegular16: "font-normal font-outfit",
  txtOutfitRegular16Gray90001: "font-normal font-outfit",
  txtOutfitRegular16Gray90003: "font-normal font-outfit",
  txtOutfitMedium20: "font-medium font-outfit",
  txtOutfitRegular16Gray700: "font-normal font-outfit",
  txtLexendRegular18: "font-lexend font-normal",
  txtOutfitRegular16Gray600: "font-normal font-outfit",
  txtOutfitSemiBold13: "font-outfit font-semibold",
  txtOutfitRegular18Gray90001: "font-normal font-outfit",
  txtLexendMedium20: "font-lexend font-medium",
  txtOutfitBold40: "font-bold font-outfit",
  txtOutfitSemiBold52: "font-outfit font-semibold",
  txtOutfitRegular18: "font-normal font-outfit",
  txtOutfitMedium16Gray90004: "font-medium font-outfit",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
