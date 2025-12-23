import  FeaturedCarousel from "../components/FeaturedCarousel";
import  Footer  from "../components/Footer";
import  Header  from "../components/Header";

export default function page2(){
    return(
         <div className="min-h-screen bg-black text-white">
                 <Header />
                 <FeaturedCarousel/>
                 <Footer/>
               </div>
    )
}