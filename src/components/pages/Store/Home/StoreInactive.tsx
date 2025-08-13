interface Props {
    storeName:string;
}

export const StoreInactive = ({storeName}:Props) => {
  return (<>
        <title>{storeName}</title>
        <div className="flex justify-center mt-[12vh]">
          <span className="text-2xl font-medium">
            Esta tienda está actualmente inactiva.
          </span>
        </div>
      </>);
};