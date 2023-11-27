import { bottle20 } from '../assets/images';
import { Button } from '../components';

const SuperQuality = () => {
  return (
    <section
      id="de-wijnen"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl lg:max-w-lg font-bold">
          <span className="text-main-color"> De wijnen </span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Welkom bij onze wijnboxen, samengesteld met passie en zorg voor
          liefhebbers van natuurlijke wijnen. Onze selectie omvat drie unieke
          boxen met een scala aan betoverende natuurwijnen. Elke fles vertelt
          een verhaal, niet alleen over zijn verrukkelijke smaken, maar ook over
          de gepassioneerde makers en de prachtige streek waar ze vandaan komen.
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
          Ontdek onze wijnboxen, elk gevuld met een zorgvuldig gekozen
          assortiment van kwaliteitswijnen die zijn gekozen vanwege hun
          karakter, authenticiteit en verbondenheid met de natuur. Laat je
          verrassen door de diversiteit aan smaken, aroma’s en het verhaal
          achter elke fles terwijl je geniet van de reis door verschillende
          wijnregio’s en wijnmakers.
        </p>

        <p className="mt-4 lg:max-w-lg info-text">
          Of je nu een doorgewinterde wijnkenner bent of gewoon op zoek bent
          naar nieuwe ervaringen, onze wijnboxen bieden een onvergetelijke
          ontdekkingsreis door de wereld van natuurlijke wijnen, waar elk glas
          een verhaal vertelt dat het proeven waard is.
        </p>
        <p className="mt-6 lg:max-w-lg info-text"></p>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={bottle20}
          alt="product detail"
          width={180}
          height={180}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
