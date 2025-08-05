const TechIconCardExperience = ({ model }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <img
        src={model.imagePath}
        alt={model.name}
        className="w-16 h-16 mb-3 object-contain"
      />
      <p className="text-sm font-medium text-white">{model.name}</p>
    </div>
  );
};

export default TechIconCardExperience;
