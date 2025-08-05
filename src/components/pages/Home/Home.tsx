import { Benefits } from "./Benefits";
import { Header } from "./Hero";
import { Navbar } from "./Navbar";

export const Home = () => {
  return (
    <>
    <title>MyStore</title>
    <main className="w-screen">
      <Navbar />
      <Header />
      <Benefits />
      <div className="h-[50vh] "></div>
    </main>
    </>

  );
};
