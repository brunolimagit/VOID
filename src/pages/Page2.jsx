import  Header  from "../components/Header";
import  FeaturedCarousel from "../components/FeaturedCarousel";
import  Footer  from "../components/Footer";

export default function page2(){
    return(
         <div className="min-h-screen bg-black text-white">
                 <Header />
                 <FeaturedCarousel/>
                 <Footer/>
               </div>
    )
}