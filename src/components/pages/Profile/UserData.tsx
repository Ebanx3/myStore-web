interface Props {
  user: User;
}

export const UserData = ({ user }: Props) => {
  return (
    <div className="flex justify-between border-b pb-4 border-stone-400">
      <div>
        <h1 className="text-3xl font-bold text-stone-700">{user.name}</h1>
        <h2 className="text-2xl font-bold text-stone-500">{user.lastname}</h2>
        <h3 className="text-xl  font-medium">{user.email}</h3>
      </div>
      <div className="font-medium text-xl flex flex-col gap-2 items-end mt-2 ">
        <h3>
          Plan actual:{" "}
          <span className="font-bold text-md ml-4 text-stone-500">
            {user.actualPlan}
          </span>
        </h3>
        <button className="ml-8 bg-rose-700 text-white py-2 text-lg px-2 cursor-pointer hover:bg-rose-600">
          Cambiar Plan
        </button>
      </div>
    </div>
  );
};
