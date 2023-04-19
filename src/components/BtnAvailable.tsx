export interface ButtonAvailableProps {
  onClick: () => void;
  id?: string;
}


const ButtonAvailable: React.FC<ButtonAvailableProps> = ({
  onClick,
  id,
}) => {
  return (
    <div>
      <button onClick= {() => onClick()} id={id} className="bg-fuchsia-900 align-middle rounded-lg w-full text-white ">
        Agregar
      </button>
    </div>
  );
};

export default ButtonAvailable;
