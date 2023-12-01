import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full bg-white">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <p className="text-xl font-montserrat text-main-color">
            Dansende wijnen
          </p>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map(item => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-700"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* <button className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </button> */}
      </nav>
    </header>
  );
};

export default Nav;
