import  CategorySection  from "../components/CategorySection"
import  FeaturedCarousel  from "../components/FeaturedCarousel"
import  Footer  from "../components/Footer"
import Header from "../components/Header"
import  Hero  from "../components/Hero"
import  ProductGrid from "../components/ProductGrid"

export default function InicioPage (){
return(
    <div className="min-h-screen bg-black text-white">
         <Header />
         <Hero />
         <CategorySection/>
         <FeaturedCarousel />
         <ProductGrid/>
         <Footer/>
       </div>
)
}