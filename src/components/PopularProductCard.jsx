import { useState } from 'react';
import { expandDown, expandUp } from '../assets/icons';

const PopularProductCard = ({ imgURL, name, price, productInfo }) => {
  const [moreInfo, setMoreInfo] = useState(false);

  const handleClick = () => {
    setMoreInfo(!moreInfo);
  };

  return (
    <div
      className="flex flex-1 flex-col w-full max-sm:w-full"
      onClick={handleClick}
    >
      <img src={imgURL} alt={name} className="w-[282px] h-[282px]" />

      <div className="mt-8 flex justify-start gap-2.5"></div>

      <div className="flex block">
        <h3 className="text-2xl leading-normal font-semibold font-palanquin">
          {name}
        </h3>
        <img
          src={moreInfo ? expandUp : expandDown}
          alt="Wine colletion"
          width={40}
          height={40}
          className="object-contain relative z-10"
        />
      </div>

      <p className="mt-2 font-semibold font-montserrat text-main-color text-2xl leading-normal">
        {price}
      </p>
      {moreInfo ? <p>{productInfo}</p> : null}
    </div>
  );
};

export default PopularProductCard;
