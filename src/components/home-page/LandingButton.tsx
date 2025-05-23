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
      className={`rounded-none bg-1 cursor-pointer py-2 px-4 text-lg font-semibold text-black hover:bg-orange-400 transition duration-300 ease-in-out ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
