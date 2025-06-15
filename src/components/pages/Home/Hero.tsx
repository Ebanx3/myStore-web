import HeaderImg from "../../../assets/home-header.jpg"
import { Button } from "./Button";

export const Header  = () => {
  return (<header className="flex">
    <div className=" flex flex-col justify-center items-end p-16 gap-12">
      <h1 className="text-3xl font-medium text-right">Crea tu tienda online en minutos,<br/> sin complicaciones.</h1>
      <Button label="Empezar" onClickMethod={()=>{}}/>
    </div>
    <img src={HeaderImg} alt="Hero imagen" className="h-[70vh] flex-1 object-cover rounded-lg"/>
  </header>);
};