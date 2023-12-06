import { useState } from 'react';
import { expandDown, expandUp } from '../assets/icons';
import Button from './Button';

const PopularProductCard = ({ imgURL, name, price, mailto, wines }) => {
  const [moreInfo, setMoreInfo] = useState(false);

  const handleClick = () => {
    setMoreInfo(!moreInfo);
  };

  const renderWineList = () => {
    return wines.map(wine => (
      <>
        <li key={wine?.name}>
          <strong>{wine?.name}</strong> {wine?.type}
        </li>
        <li>{wine?.info}</li>
        <br></br>
      </>
    ));
  };

  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <div onClick={handleClick}>
        <div className="flex justify-center">
          <img src={imgURL} alt={name} className="w-[282px] h-[350px]" />
        </div>
        <div className="mt-8 flex justify-start gap-2.5"></div>
      </div>
      <Button label={'Bestel'} mailto={mailto}>
        Bestel
      </Button>
      <div onClick={handleClick}>
        <div className="flex items-start">
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

        {moreInfo ? (
          <>
            <ul>{renderWineList()}</ul>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default PopularProductCard;
