interface ServiceProps {
  icon?: React.ReactNode;
  slug?: string;
  name: string;
  description: string;
}

export const Service = ({ icon, name, description }: ServiceProps) => {
  return (
    <div className="flex flex-col items-center text-center px-4 mb-8">
      <div className="text-slate-600 mb-4">{icon}</div>
      <h3 className="text-xl font-medium text-slate-700 mb-3">{name}</h3>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
};
