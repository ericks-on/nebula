import Header from "@/components/ui/header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="h-screen flex flex-col justify-center">
        <h1 className="text-4xl text-center mt-8">
          Welcome to Nebula Analytics
        </h1>
        <div className="flex justify-center mt-8">
          <Image
            src="/logo.ico"
            alt="Nebula Analytics"
            width={100}
            height={100}
          />
        </div>
      </main>
    </div>
  
  );
}
