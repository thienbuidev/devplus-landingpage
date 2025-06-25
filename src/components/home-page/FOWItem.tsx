interface FOWProps {
  icon?: React.ReactNode;
  name: string;
  description: string;
}

export const FOWItem = ({ icon, name, description }: FOWProps) => {
  return (
    <div className="flex flex-col items-center text-center px-4 mb-8">
      <div className="text-600 mb-4 text-[#fb8a38]">{icon}</div>
      <h3 className="text-xl font-medium text-slate-700 mb-3">{name}</h3>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
};
