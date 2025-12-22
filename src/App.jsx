
import './App.css'
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductGrid } from "./components/ProductGrid";
import { CategorySection } from "./components/CategorySection";
import { FeaturedCarousel } from "./components/FeaturedCarousel";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <CategorySection />
      <FeaturedCarousel />
      <ProductGrid />
      <Footer />
    </div>
  );
}