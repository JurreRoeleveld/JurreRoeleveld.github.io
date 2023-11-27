import { useState } from 'react';

import { shoes } from '../constants';
import { Button, ShoeCard } from '../components';
import { box1 } from '../assets/images';
import { arrowRight } from '../assets/icons';

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(box1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        {/* <p className="text-xl font-montserrat text-main-color">
          Dansende wijnen
        </p> */}
        <h1 className="mt-10 font-palanquin text-6xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:whitespace-wrap relative z-10 pr-5">
            Wijnen om van te
          </span>
          <span className="text-main-color inline-block mt-3">dansen!</span>
        </h1>

        {/* //todo add link to shop */}
        <Button label="Shop now" iconURL={arrowRight} />
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe colletion"
          width={600}
          height={500}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={shoe => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
