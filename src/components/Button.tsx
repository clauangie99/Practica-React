import { useState } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "destructive";
    rounded?: boolean;
  }
  
  export const Button = ({
    variant = "primary",
    children,
    rounded = false,
    ...props
  }: ButtonProps) => {
    const [activated, setActivated] = useState(false);

    const baseClasses =
      "px-3 py-2 text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 rounded-full";
  
    let variantClasses = "";

    if (activated) {
        // Activado → azul y redondo
        variantClasses =
          "bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600 rounded-full";
          
    } else {
        if (variant === "primary") {
        variantClasses =
            "bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600 rounded-md";
        } else if (variant === "outline") {
        variantClasses =
            "bg-white text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 rounded-md";
        } else if (variant === "destructive") {
        variantClasses =
            "bg-red-500 text-white hover:bg-red-600 focus-visible:outline-indigo-600 rounded-md";
        }
    } 
    
    const finalClassName = baseClasses + " " + variantClasses;
  
    return (
      <button 
        type="button" 
        className={finalClassName} 
        onClick={() => setActivated(!activated)} 
        {...props}
        >
        {activated ? "Este es un boton Redondeado": children}
      </button>
    );
  };
  