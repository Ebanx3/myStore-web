interface Props {
  user: Usuario;
}

export const UserData = ({ user }: Props) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-stone-700">{user.name}</h1>
      <h2 className="text-2xl font-bold text-stone-500">{user.lastname}</h2>
      <h3 className="text-xl  font-medium">{user.email}</h3>
    </>
  );
};
