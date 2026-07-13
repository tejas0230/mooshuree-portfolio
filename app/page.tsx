import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import ClientList from "@/components/ClientList";
import MooshureeWrapper from "@/components/MooshureeWrapper";
import fs from "fs";
import path from "path";
import AboutUs from "@/components/AboutUs";
import OurModels from "@/components/Models";
import OurPricing from "@/components/OurPricing";
import Reviews from "@/components/Reviews";
import LetsConnect from "@/components/LetsConnect";
import Videos from "@/components/Videos";
import TypesOfVideos from "@/components/TypesOfVideos";
export default function Home() {

  const logoDir = path.join(process.cwd(), "public", "clients");
  const modelDir = path.join(process.cwd(), "public", "models");


  const logos = fs
    .readdirSync(logoDir)
    .filter((file) => /\.(png|jpg|jpeg|webp|svg)$/i.test(file))
    .map((file) => `/clients/${file}`);

  const models = fs
    .readdirSync(modelDir)
    .filter((file) => /\.(png|jpg|jpeg|webp|svg)$/i.test(file))
    .map((file) => `/models/${file}`);

  return (
    <div className="overflow-x-hidden w-screen">
      {/* <MooshureeWrapper> */}
        <Navbar />
        <Hero />
        <ClientList logos={logos} />
        <Reviews />
        <Videos />
        <TypesOfVideos />
        <AboutUs />
        <OurModels models={models}/>
        <OurPricing />
        <LetsConnect />
      {/* </MooshureeWrapper> */}
    </div>
  );
}
