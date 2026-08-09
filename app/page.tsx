"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState, useEffect } from "react";
import Testimonial from "@/app/components2/testimonial";
import Videosec from "./components2/videosec";
import GoldCtaButton from "@/app/components2/goldbutton";
import FormModal from "@/app/components2/formmodal";
import { Instagram, Linkedin, Facebook, Phone, MapPin, Mail, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const services = [
    {
      title: "LENTES DE CONTATO DENTAIS",
      image: "/1.jpg",
      description:
        "As lentes de contato dentais são a solução ideal para quem deseja transformar o sorriso de forma rápida, minimamente invasiva e com resultado altamente estético. Elas corrigem formato, cor e pequenas imperfeições, trazendo um sorriso harmônico, natural e personalizado para cada paciente.",
      url: "https://wa.me/5562991873755",
    },
    {
      title: "IMPLANTES DENTÁRIOS GUIADOS",
      image: "/2.jpg",
      description:
        "Com a tecnologia do planejamento digital e da cirurgia guiada, os implantes dentários se tornam um procedimento muito mais preciso e seguro. Essa técnica garante maior previsibilidade, conforto no pós-operatório e resultados estéticos superiores, devolvendo não apenas dentes, mas também confiança e qualidade de vida.",
      url: "https://wa.me/5562991873755",
    },
    {
      title: "BRUXISMO",
      image: "/3.jpg",
      description:
        "O bruxismo é um hábito inconsciente de apertar ou ranger os dentes, que pode causar dores, desgastes e até fraturas. Na clínica, utilizamos soluções modernas de diagnóstico e tratamento, como placas personalizadas de proteção e protocolos de reabilitação, que aliviam os sintomas e preservam a saúde bucal a longo prazo.",
      url: "https://wa.me/5562991873755",
    },
    {
      title: "REABILITAÇÃO ORAL",
      image: "/4.jpg",
      description:
        "A reabilitação oral é um conjunto de tratamentos que devolvem função, estética e saúde ao sorriso. Indicada para casos complexos, combina técnicas modernas de prótese, implantes e estética dental, sempre com foco em resultados duradouros e naturais, que restauram tanto o sorriso quanto a autoconfiança.",
      url: "https://wa.me/5562991873755",
    },
    {
      title: "ALINHADORES INVISÍVEIS",
      image: "/5.jpg",
      description:
        "Os alinhadores invisíveis são uma alternativa moderna e discreta ao aparelho ortodôntico convencional. Produzidos sob medida, eles proporcionam conforto, praticidade e estética durante o tratamento, permitindo alinhar os dentes de forma eficiente sem comprometer o seu dia a dia.",
      url: "https://wa.me/5562991873755",
    },
    {
      title: "FACETAS EM RESINA",
      image: "/6.jpg",
      description:
        "As facetas em resina composta são uma alternativa acessível e versátil para transformar o sorriso. Elas permitem corrigir forma, cor e pequenas imperfeições dos dentes em apenas uma sessão, com resultado estético imediato. Além disso, o procedimento é minimamente invasivo e pode ser facilmente ajustado ou reparado quando necessário, oferecendo beleza e funcionalidade ao sorriso com praticidade.",
      url: "https://wa.me/5562991873755",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-foreground font-lora selection:bg-primary/30 selection:text-primary relative">
      {/* High-tech animated cyber grid background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#d4af3708_1px,transparent_1px),linear-gradient(to_bottom,#d4af3708_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_30%,#000_20%,transparent_100%)]"></div>
      
      {/* Cinematic Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          style={{ y: yBg }}
          className="absolute inset-0 bg-center bg-no-repeat bg-cover bg-[url(/hero12.jpg)]"
        />
        {/* High-tech Vignette & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-[#050505] z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.8)_100%)] z-0"></div>
        
        {/* Glowing Orb */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0"
        ></motion.div>

        <motion.div 
          initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="container relative z-10 mx-auto px-4 text-center text-white flex flex-col items-center justify-center pt-20 h-full"
        >
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-secondary-foreground/50 text-xs tracking-[0.3em] uppercase font-mont">Descubra</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-primary/70" />
          </motion.div>
        </motion.div>
      </section>

      {/* Futuristic Separator Line */}
      <div className="relative w-full z-20 flex justify-center py-4 bg-[#050505]">
         <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className="h-[1px] w-3/4 bg-gradient-to-r from-transparent via-primary/50 to-transparent box-shadow-[0_0_15px_rgba(212,175,55,1)]"
         />
      </div>

      {/* Video Section */}
      <Videosec onOpenModal={() => setIsModalOpen(true)} />

      {/* Futuristic Separator Line */}
      <div className="relative w-full z-20 flex justify-center py-4 bg-[#050505]">
         <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className="h-[1px] w-3/4 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
         />
      </div>

      {/* Services Section */}
      <section className="relative bg-transparent py-32 z-10">
        <div className="container relative z-10 mx-auto px-4 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-center text-primary mb-24 relative"
          >
            <span className="text-xs font-mont tracking-[0.4em] text-primary/60 uppercase mb-4 block">Especialidades</span>
            <h2 className="text-5xl md:text-7xl font-fair mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/50 drop-shadow-[0_0_25px_rgba(212,175,55,0.3)]">
              Nossos Serviços
            </h2>
            <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent mx-auto mt-8"></div>
          </motion.div>
          
          <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="w-full"
            >
              <Card className="border border-white/5 bg-black/40 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.8)] hover:shadow-[0_0_50px_rgba(212,175,55,0.1)] hover:border-primary/30 transition-all duration-700 group overflow-hidden rounded-3xl relative">
                {/* Tech glowing animated border effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0 pointer-events-none"></div>
                
                <CardContent className="p-0 relative z-10">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16 p-6 md:p-8 h-full`}>
                    
                    {/* Image Container */}
                    <div className="w-full md:w-1/2 overflow-hidden relative rounded-2xl aspect-[4/3] md:aspect-[16/10] shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                      {service.image ? (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 opacity-60 group-hover:opacity-20 transition-opacity duration-700"></div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="w-full h-full"
                          >
                            <Image
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover filter contrast-[1.1] grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                              width={813}
                              height={432}
                            />
                          </motion.div>
                        </>
                      ) : null}
                    </div>

                    {/* Content Container */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center py-4 md:py-8 pr-4">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-primary/30 font-mont font-bold text-5xl md:text-6xl tracking-tighter">0{index + 1}</span>
                        <h3 className="text-3xl md:text-5xl font-fair text-white tracking-wide group-hover:text-primary transition-colors duration-500">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-white/60 text-lg md:text-xl font-lora mb-10 leading-relaxed font-light mt-4">
                        {service.description}
                      </p>
                      <div className="mt-2">
                        <GoldCtaButton onClick={() => setIsModalOpen(true)} text="Quero entender meu caso" />
                      </div>
                    </div>

                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          </div>
        </div>
      </section>

      {/* Futuristic Separator Line */}
      <div className="relative w-full z-20 flex justify-center py-4 bg-[#050505]">
         <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className="h-[1px] w-3/4 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
         />
      </div>
      
      <Testimonial />

      <section className="bg-transparent py-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mont tracking-[0.4em] text-primary/60 uppercase mb-4 block">Onde Estamos</span>
          <h2 className="text-5xl md:text-7xl font-fair text-primary tracking-tight bg-clip-text bg-gradient-to-b from-primary to-primary/50 text-transparent">
            Localização
          </h2>
          <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent mx-auto mt-8"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex items-center justify-center max-w-7xl mx-auto px-4 relative"
        >
          <div className="absolute inset-0 bg-primary/10 blur-[150px] rounded-full z-0 pointer-events-none w-1/2 mx-auto h-[400px]"></div>
          
          <div className="relative z-10 w-full p-2 rounded-[2.5rem] bg-gradient-to-b from-white/5 to-transparent backdrop-blur-xl border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <div className="rounded-[2rem] overflow-hidden relative group h-[500px] md:h-[600px] bg-[#0a0a0a]">
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-[2rem] z-20"></div>
              {/* Technological Scanning Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent h-full w-full -translate-y-full group-hover:animate-[scan_2s_ease-in-out_infinite] z-10 pointer-events-none opacity-0 group-hover:opacity-100 mix-blend-overlay"></div>
              
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.4279628749086!2d-49.27400592485033!3d-16.705484984070026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef11822f5990b%3A0xca8b1e646dc89a22!2sDr.%20Marcelo%20Daltro%20-%20Dentista%20-%20Goi%C3%A2nia!5e0!3m2!1sen!2sbr!4v1756940523080!5m2!1sen!2sbr"
                className="w-full h-full filter invert-[90%] hue-rotate-[180deg] contrast-[1.2] opacity-80 group-hover:opacity-100 transition-all duration-1000"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#020202] text-primary relative overflow-hidden pt-24 border-t border-white/5 mt-20">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-6 pb-12 relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20 lg:mb-24">
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center lg:items-start justify-start pt-4 order-2 lg:order-1"
            >
              <h3 className="text-sm font-mont tracking-[0.3em] uppercase mb-8 text-primary/70">Contato</h3>
              <div className="space-y-6">
                <a href="tel:+5562991873755" className="flex items-center gap-5 hover:text-white transition-colors group">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                    <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-lg font-lora font-light tracking-wide text-white/70 group-hover:text-white">(62) 99187-3755</span>
                </a>
                <a href="mailto:contato@marcelodaltro.com.br" className="flex items-center gap-5 hover:text-white transition-colors group">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                    <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-lg font-lora font-light tracking-wide text-white/70 group-hover:text-white">daltroodonto<br/><span className="text-sm opacity-60">@gmail.com</span></span>
                </a>
              </div>
            </motion.div>

            {/* Logo and Tagline Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center text-center justify-start order-1 lg:order-2"
            >
              <div className="mb-8">
                <Image
                  width={3543}
                  height={1181}
                  src="/logo3.png"
                  alt="Logo Marcelo Daltro"
                  className="w-64 md:w-[320px] object-contain drop-shadow-[0_0_25px_rgba(212,175,55,0.2)] dark:invert-0"
                />
              </div>
              <div className="space-y-3">
                <p className="text-xl md:text-2xl font-fair italic text-white/80">Recuperando Autoestimas,</p>
                <p className="text-xl md:text-2xl font-fair italic text-white/80 block">Redesenhando Sorrisos.</p>
                <div className="w-12 h-px bg-primary/40 mx-auto mt-6 lg:mt-8"></div>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col items-center lg:items-end justify-start pt-4 order-3 lg:order-3"
            >
              <div className="flex flex-col items-center lg:items-start w-full max-w-[280px]">
                <h3 className="text-sm font-mont tracking-[0.3em] uppercase mb-8 text-primary/70">Localização</h3>
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-1 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                    <MapPin className="w-5 h-5 text-primary group-hover:animate-bounce" />
                  </div>
                  <div className="text-lg leading-loose text-left font-lora text-white/70 font-light">
                    <p>Ed. Walk Bueno Business</p>
                    <p>R. T-55, 930 - Sala 1608</p>
                    <p>St. Bueno, Goiânia - GO</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-10"></div>

          {/* Bottom Bar: Social & Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4">
            <p className="text-sm text-white/40 font-lora tracking-wider">
              &copy; {new Date().getFullYear()} Marcelo Daltro. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center gap-4">
              {[
                { icon: Instagram, url: "https://instagram.com" },
                { icon: Facebook, url: "https://facebook.com" },
                { icon: Linkedin, url: "https://linkedin.com" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.1, translateY: -5 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-colors text-white hover:text-primary shadow-[0_5px_15px_rgba(0,0,0,0.3)]"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Multi-Step Form Modal */}
      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
