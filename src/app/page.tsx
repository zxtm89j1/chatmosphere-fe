import HomeFooter from "@/components/HomeFooter";
import HomeMainBody from "@/components/HomeMainBody";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col justify-evenly">
      <NavBar />
      <HomeMainBody />
      <HomeFooter />
    </div>
  );
}
