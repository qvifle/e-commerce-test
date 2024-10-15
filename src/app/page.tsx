import Catalog from "@/modules/Catalog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalog",
};

const Home = () => <Catalog />;

export default Home;
