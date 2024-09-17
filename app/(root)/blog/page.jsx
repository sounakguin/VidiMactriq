import Slick from "@/components/pages/Aboutus/Slick";
import Blogdata from "@/components/pages/Blog/Blogvertical";
import Header from "@/components/pages/Blog/Header";

export default function page() {
  return (
    <div>
      <Header />
      <Blogdata />
      <Slick />
    </div>
  );
}
