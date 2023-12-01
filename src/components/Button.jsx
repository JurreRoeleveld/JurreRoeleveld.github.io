const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  onClick,
  href,
}) => {
  
  const handleClick = e => {
    if (href) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        // Scroll to the target element
        targetElement?.scrollIntoView({ behavior: 'smooth' });
      }
    }

    if (onClick) {
      onClick(e); // Call any additional onClick handler passed to the component
    }
  };

  return (
    <button
      className={`flex my-2 justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : 'bg-main-color text-white border-main-color'
      } rounded-full ${fullWidth && 'w-full'}`}
      onClick={handleClick} 
    >
      <a href={href}></a>
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full bg-white w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
