import { useState } from 'react';
import { expandDown, expandUp } from '../assets/icons';

const PopularProductCard = ({ imgURL, name, price, productInfo, wines }) => {
  const [moreInfo, setMoreInfo] = useState(false);

  const handleClick = () => {
    setMoreInfo(!moreInfo);
  };

  const renderWineList = () => {
    return wines.map(wine => (
      <li key={wine.name}>
        <strong>{wine.name}</strong> {wine.type}
      </li>
    ));
  };

  return (
    <div
      className="flex flex-1 flex-col w-full max-sm:w-full"
      onClick={handleClick}
    >
      <div className="flex justify-center">
        <img src={imgURL} alt={name} className="w-[282px] h-[350px]" />
      </div>
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
      <a href="mailto:dansendewijnen@gmail.com?subject=Bestelling%20box%201&body=Hi%2C%20Ik%20wil%20graag%20box%201%20bestellen">
        Order Box 1
      </a>
      {moreInfo ? (
        <>
          <ul>{renderWineList()}</ul>
        </>
      ) : null}
    </div>
  );
};

export default PopularProductCard;
