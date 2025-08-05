import HeaderImg from "../../../assets/hero.jpg"
import { Button } from "./Button";

export const Header  = () => {
  return (<header className=" bg-white py-16">
   <div className="flex max-w-[1200px] m-auto gap-4">
     <div className=" flex flex-col justify-center items-end p-2 gap-6">
      <h1 className="text-3xl font-medium text-right overflow-hidden">Crea tu tienda online en minutos,<br/> sin complicaciones.</h1>
      <Button label="Empezar" onClickMethod={()=>{}}/>
    </div>
    <img src={HeaderImg} alt="Hero imagen" className="h-[60vh] w-4/5 object-cover "/>
   </div>
  </header>);
};