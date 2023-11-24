import { shoe8 } from '../assets/images';
import { Button } from '../components';

const SuperQuality2 = () => {
  return (
    <section
      id="natuurwijn"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >


      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>


      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          <span className="text-deep-green"> Wat zijn natuurwijnen? </span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Natuurwijnen, een levendige uitdrukking van de aarde zelf, vangen de
          essentie van de natuur in elke slok. Ze zijn een viering van het
          ongetemde, een eerbetoon aan de cycli van de natuur en een terugkeer
          naar traditionele wijnbouwpraktijken. In tegenstelling tot
          conventionele wijnen, die vaak worden geproduceerd met toevoegingen en
          chemische ingrepen, omarmen natuurwijnen het idee van non-interventie.
          Ze worden gemaakt van biologisch-dynamisch of organisch geteelde
          druiven, en het wijnmaakproces minimaliseert ingrijpen, waardoor de
          wijn zijn eigen unieke karakter kan onthullen. Het resultaat is een
          wijn die spreekt van zijn terroir, met levendige smaken, soms
          onvoorspelbaar, maar altijd intrigerend. Natuurwijnen zijn een reis
          door de seizoenen, een eerbetoon aan biodiversiteit en een herinnering
          aan de verbinding tussen mens en natuur.
        </p>
        <p className="mt-6 lg:max-w-lg info-text"></p>
      </div>
    </section>
  );
};

export default SuperQuality2;
