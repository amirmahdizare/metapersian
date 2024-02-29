import Image from "next/image";
import { SideMenu } from "./_components/SideMenu/SideMenu";

export default function Home() {
  return (
    <main className="flex flex-row p-1">
      <SideMenu />
    </main>
  );
}
