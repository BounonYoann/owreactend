import Banner from "./components/Banner/index";
import Cook from "./components/Cook/index";
import Gallery from "./components/Gallery/index";
import Newsletter from "./components/Newsletter/Newsletter";
import Features from "./components/Work/index";

export default function Home() {
  return (
    <main>
      <Banner />
      <Features />
      <Cook />
      {/* <Expert /> */}
      <Gallery />
      <Newsletter />
    </main>
  );
}
