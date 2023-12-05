const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  onClick,
  href,
  mailto
}) => {
  const handleClick = e => {
    if (href) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (onClick) {
      onClick(e);
    }
  };

  const commonProps = {
    className: `flex my-2 justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : 'bg-main-color text-white border-main-color'
      } rounded-full ${fullWidth && 'w-full'}`
  };

  if (mailto) {
    return (
      <a
        {...commonProps}
        href={mailto}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
        {iconURL && (
          <img
            src={iconURL}
            alt="icon"
            className="ml-2 rounded-full bg-white w-5 h-5"
          />
        )}
      </a>
    );
  } else {
    return (
      <button {...commonProps} onClick={handleClick}>
        {label}
        {iconURL && (
          <img
            src={iconURL}
            alt="icon"
            className="ml-2 rounded-full bg-white w-5 h-5"
          />
        )}
      </button>
    );
  }
};

export default Button;
