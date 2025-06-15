interface Props {
  onClickMethod: VoidFunction;
  label: string;
}

export const Button = ({ onClickMethod, label }: Props) => {
  return (
    <button
      onClick={onClickMethod}
      className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg uppercase hover:bg-blue-500 transition duration-100 cursor-pointer"
    >
      {label}
    </button>
  );
};
