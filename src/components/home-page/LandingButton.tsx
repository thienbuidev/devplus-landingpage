interface LandingButtonProb {
  text: string;
  onClick?: () => Promise<void> | void;
  className?: string;
}
export const LandingButton = ({
  text,
  onClick,
  className,
}: LandingButtonProb) => {
  return (
    <button
      className={`hover:scale-105 hover:shadow-lg hover:shadow-black rounded-[25px] bg-[#fb8a38] cursor-pointer py-2 px-4 text-lg font-semibold text-white hover:text-black transition duration-300 ease-in-out ${className}`}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
