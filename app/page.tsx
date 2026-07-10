import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import ClientList from "@/components/ClientList";
import MooshureeWrapper from "@/components/MooshureeWrapper";
import fs from "fs";
import path from "path";

export default function Home() {

  const logoDir = path.join(process.cwd(), "public", "clients");

  const logos = fs
    .readdirSync(logoDir)
    .filter((file) => /\.(png|jpg|jpeg|webp|svg)$/i.test(file))
    .map((file) => `/clients/${file}`);

  return (
    <div className="overflow-x-hidden w-screen">
      <MooshureeWrapper>
        <Navbar />
        <Hero />
        <ClientList logos={logos} />
      </MooshureeWrapper>
    </div>
  );
}
