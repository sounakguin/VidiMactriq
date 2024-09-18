import Blogdata from "@/components/pages/Blog/Blogvertical";
import ExploreBlog from "@/components/pages/Blog/ExploreBlog";
import Header from "@/components/pages/Blog/Header";
import React from "react";

export default function page() {
  return (
    <div>
      <Header />
      <Blogdata />
      <ExploreBlog />
    </div>
  );
}
