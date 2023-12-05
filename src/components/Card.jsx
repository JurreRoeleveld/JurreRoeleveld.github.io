const Card = ({ imgURL, changeBigHeroImage, bigHeroImg }) => {
  const handleClick = () => {
    if (bigHeroImg !== imgURL.bigHero) {
      changeBigHeroImage(imgURL.bigHero);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigHeroImg === imgURL.bigHero
          ? 'border-main-color'
          : 'border-transparent'
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-white bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="wine colletion"
          width={250}
          height={250}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Card;
