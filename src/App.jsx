import { Header } from "./components/Header";
import { CoverPage } from "./components/CoverPage";
import { Services } from "./components/Services";
import { TestimonialsContainer } from "./components/TestimonialsContainer";
import { Gallery } from "./components/Gallery";
import { Footer } from "./components/Footer";
import { DevFooter } from "./components/DevFooter";

TestimonialsContainer;
function App() {
  return (
    <main className="max-w-[1280px] min-w-[320px] mx-auto">
      <Header />
      <CoverPage />
      <Services />
      <TestimonialsContainer />
      <Gallery />
      <Footer />
      <DevFooter />
    </main>
  );
}

export default App;
