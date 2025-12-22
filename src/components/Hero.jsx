import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1516915630182-b9601fd260bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwY2xvdGhpbmclMjB1cmJhbnxlbnwxfHx8fDE3NjU4MjIzODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "ESTILO QUE\nDEFINE VOCÊ",
      subtitle: "COLEÇÃO 2025",
      objectPosition: "object-top",
      description: "Explore nossa nova coleção de streetwear com designs exclusivos que expressam sua personalidade urbana.",
    },
    {
      image: "https://images.unsplash.com/photo-1624736712409-4620d5765f45?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "NOVA COLEÇÃO\nURBANA",
      subtitle: "LANÇAMENTO",
      objectPosition: "object-top",
      description: "Peças exclusivas para quem vive o estilo de rua com autenticidade e atitude.",
    },
    {
      image: "https://images.unsplash.com/photo-1618791690855-e81193620941?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "ATITUDE\nSEM LIMITES",
      subtitle: "LIFESTYLE",
      description: "Vista-se com peças que representam o movimento street em sua essência mais pura.",
    },
    
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[500px] sm:h-[600px] lg:h-[700px] mt-16 sm:mt-20 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0">
            <img
              src={slides[currentSlide].image}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          </div>

          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12 sm:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="max-w-2xl"
            >
              <p className="text-sm sm:text-base tracking-widest mb-4 text-white/80">
                {slides[currentSlide].subtitle}
              </p>
              <h2 className="text-white text-4xl sm:text-5xl lg:text-7xl mb-6 tracking-tight whitespace-pre-line">
                {slides[currentSlide].title}
              </h2>
              <p className="text-base sm:text-lg text-white/70 mb-8 max-w-lg">
                {slides[currentSlide].description}
              </p>
              <button className="bg-white text-black px-8 py-3 sm:px-10 sm:py-4 hover:bg-white/90 transition-colors tracking-wide">
                EXPLORAR AGORA
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/20 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/20 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}