interface Props {
    onClickMethod: VoidFunction;
    label: string;
}

export const AdminPanelButton = ({onClickMethod, label}:Props) => {
  return (<button onClick={onClickMethod} className="border px-4 font-medium hover:bg-stone-900 hover:text-white cursor-pointer">{label}</button>);
};