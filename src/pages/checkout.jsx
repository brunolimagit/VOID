import  Header  from "../components/Header";
import  CheckoutPage from "../components/CheckoutPage";
import  Footer  from "../components/Footer";

export default function CheckoutPage(){
    return(
         <div className="min-h-screen bg-black text-white">
                 <Header />
                 <CheckoutPage/>
                 <Footer/>
               </div>
    )
}