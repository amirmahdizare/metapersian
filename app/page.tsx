import Image from "next/image";
// import { SideMenu } from "./_components/";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-row p-1 justify-center items-center h-screen">

      <Link href={'/levels'} prefetch={false} >رفتن به صفحه سطوح</Link>
      {/* <SideMenu /> */}
    </main>
  );
}
