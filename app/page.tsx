import Header from "@/components/Header";
import Note from "@/components/Home/note";
import Footer from "@/components/Home/footer";
import About from "@/components/Home/about";
import Home from "@/components/Home/home";

const Page = () => {
  return (
    <div
      className="min-h-screen bg-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <Header />
      <Home />
      <About />
      <Note />
      <Footer />
    </div>
  );
};

export default Page;
