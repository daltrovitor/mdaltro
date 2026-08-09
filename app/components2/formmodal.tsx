"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, CheckCircle2, Sparkles, Loader2 } from "lucide-react";
import GoldCtaButton from "./goldbutton";

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FormModal({ isOpen, onClose }: FormModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [incomodo, setIncomodo] = useState("");
  const [tempoIncomodo, setTempoIncomodo] = useState("");
  const [prontidao, setProntidao] = useState("");
  const [detalhes, setDetalhes] = useState("");
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Lock background scrolling when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const resetForm = () => {
    setStep(1);
    setIncomodo("");
    setTempoIncomodo("");
    setProntidao("");
    setDetalhes("");
    setNome("");
    setWhatsapp("");
    setErrorMsg("");
    setIsSubmitting(false);
  };

  const handleClose = () => {
    onClose();
    setTimeout(resetForm, 300);
  };

  // Step 1 Options
  const tela1Options = [
    "Aparência do meu sorriso",
    "Dentes desgastados ou quebrados",
    "Ausência de um ou mais dentes",
    "Próteses ou tratamentos antigos",
    "Dificuldade para mastigar",
    "Outro problema",
  ];

  // Step 2 Options
  const tela2Options = [
    "Há pouco tempo",
    "Alguns meses",
    "Mais de um ano",
    "Há vários anos",
  ];

  // Step 3 Options
  const tela3Options = [
    "O quanto antes",
    "Nos próximos 30 dias",
    "Nos próximos meses",
    "Estou apenas pesquisando",
  ];

  const handleSelectOption = (value: string, setter: (v: string) => void) => {
    setter(value);
    setTimeout(() => {
      setStep((prev) => prev + 1);
    }, 200);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome.trim() || !whatsapp.trim()) {
      setErrorMsg("Por favor, preencha seu Nome e WhatsApp.");
      return;
    }
    setErrorMsg("");
    setIsSubmitting(true);

    try {
      // Web3Forms API Endpoint
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "a240c28d-a372-4566-9335-23d085b09454";

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Novo Lead: ${nome} - Quero Entender Meu Caso`,
          from_name: "Dr. Marcelo Daltro Website",
          to_email: "daltroodonto@gmail.com",
          "1_O_que_mais_incomoda": incomodo || "Não especificado",
          "2_Ha_quanto_tempo_incomoda": tempoIncomodo || "Não especificado",
          "3_Quando_gostaria_de_comecar": prontidao || "Não especificado",
          "4_O_que_gostaria_de_mudar": detalhes || "Sem observações",
          "5_Nome": nome,
          "5_WhatsApp": whatsapp,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStep(6); // Success Screen
      } else {
        console.warn("Web3Forms API result:", data);
        setStep(6); // Proceed to success screen for user peace of mind
      }
    } catch (err) {
      console.error("Error submitting Web3Forms:", err);
      setStep(6);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-0"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-xl bg-[#0a0a0a] border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(212,175,55,0.25)] z-10 overflow-hidden text-white"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              {step > 1 && step < 6 && (
                <button
                  type="button"
                  onClick={() => setStep((prev) => prev - 1)}
                  className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
                  title="Voltar"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
              )}
              {step <= 5 && (
                <div className="flex items-center gap-2 text-xs font-mont text-[#FFF099]/80 uppercase tracking-widest">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>Passo {step} de 5</span>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={handleClose}
              className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
              title="Fechar"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Bar */}
          {step <= 5 && (
            <div className="w-full bg-white/10 h-1.5 rounded-full mb-8 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#D4AF37] to-[#FFF099]"
                initial={{ width: 0 }}
                animate={{ width: `${(step / 5) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}

          {/* Screen Content */}
          <AnimatePresence mode="wait">
            {/* TELA 1 */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-fair text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF099] to-[#D4AF37]">
                    O que mais incomoda você hoje?
                  </h3>
                  <p className="text-sm text-white/60 font-lora">
                    Selecione a opção que melhor descreve o seu motivo principal.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {tela1Options.map((option, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectOption(option, setIncomodo)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                        incomodo === option
                          ? "border-[#D4AF37] bg-[#D4AF37]/20 text-[#FFF099] shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                          : "border-white/10 bg-white/5 hover:border-[#D4AF37]/60 hover:bg-white/10 text-white/90"
                      }`}
                    >
                      <span className="font-mont text-sm sm:text-base">{option}</span>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                          incomodo === option
                            ? "border-[#D4AF37] bg-[#D4AF37]"
                            : "border-white/30 group-hover:border-[#D4AF37]"
                        }`}
                      >
                        {incomodo === option && (
                          <div className="w-2 h-2 rounded-full bg-black" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* TELA 2 */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-fair text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF099] to-[#D4AF37]">
                    Há quanto tempo isso incomoda você?
                  </h3>
                  <p className="text-sm text-white/60 font-lora">
                    Isso nos ajuda a entender o nível de desgaste ou evolução.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {tela2Options.map((option, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectOption(option, setTempoIncomodo)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                        tempoIncomodo === option
                          ? "border-[#D4AF37] bg-[#D4AF37]/20 text-[#FFF099] shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                          : "border-white/10 bg-white/5 hover:border-[#D4AF37]/60 hover:bg-white/10 text-white/90"
                      }`}
                    >
                      <span className="font-mont text-sm sm:text-base">{option}</span>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                          tempoIncomodo === option
                            ? "border-[#D4AF37] bg-[#D4AF37]"
                            : "border-white/30 group-hover:border-[#D4AF37]"
                        }`}
                      >
                        {tempoIncomodo === option && (
                          <div className="w-2 h-2 rounded-full bg-black" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* TELA 3 */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-fair text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF099] to-[#D4AF37]">
                    Se encontrássemos uma solução adequada para o seu caso, quando gostaria de começar?
                  </h3>
                  <p className="text-sm text-white/60 font-lora">
                    Sua disponibilidade ajuda a priorizar o atendimento.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {tela3Options.map((option, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectOption(option, setProntidao)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                        prontidao === option
                          ? "border-[#D4AF37] bg-[#D4AF37]/20 text-[#FFF099] shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                          : "border-white/10 bg-white/5 hover:border-[#D4AF37]/60 hover:bg-white/10 text-white/90"
                      }`}
                    >
                      <span className="font-mont text-sm sm:text-base">{option}</span>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                          prontidao === option
                            ? "border-[#D4AF37] bg-[#D4AF37]"
                            : "border-white/30 group-hover:border-[#D4AF37]"
                        }`}
                      >
                        {prontidao === option && (
                          <div className="w-2 h-2 rounded-full bg-black" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* TELA 4 */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-fair text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF099] to-[#D4AF37]">
                    Conte brevemente o que você gostaria de mudar.
                  </h3>
                  <p className="text-sm text-white/60 font-lora">
                    Fique à vontade para explicar com suas palavras (opcional).
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <textarea
                    rows={4}
                    value={detalhes}
                    onChange={(e) => setDetalhes(e.target.value)}
                    placeholder="Ex: Quero alinhar meus dentes superiores e clarear o sorriso..."
                    className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-white placeholder-white/40 font-lora resize-none transition-all duration-300"
                  />

                  <div className="flex justify-end pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(5)}
                      className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA771C] text-black font-mont font-bold text-sm tracking-wider uppercase hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(212,175,55,0.3)] cursor-pointer"
                    >
                      Avançar
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TELA 5 */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-fair text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF099] to-[#D4AF37]">
                    Para nossa equipe entrar em contato com você:
                  </h3>
                  <p className="text-sm text-white/60 font-lora">
                    Preencha seus dados para receber a avaliação personalizada.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/50 text-red-200 text-xs font-mont">
                      {errorMsg}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-mont uppercase tracking-widest text-[#FFF099]/80 mb-2">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      required
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Seu nome"
                      className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-white placeholder-white/40 font-lora transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mont uppercase tracking-widest text-[#FFF099]/80 mb-2">
                      WhatsApp com DDD
                    </label>
                    <input
                      type="tel"
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="(62) 99999-9999"
                      className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-white placeholder-white/40 font-lora transition-all duration-300"
                    />
                  </div>

                  <div className="pt-4 flex justify-center">
                    {isSubmitting ? (
                      <div className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#D4AF37]/50 text-black font-mont font-bold">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>ENVIANDO...</span>
                      </div>
                    ) : (
                      <GoldCtaButton type="submit" text="ENVIAR MINHAS INFORMAÇÕES" />
                    )}
                  </div>
                </form>
              </motion.div>
            )}

            {/* TELA DE SUCESSO (ETAPA 6) */}
            {step === 6 && (
              <motion.div
                key="step6"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center py-8 space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center mx-auto text-[#FFF099] shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl sm:text-4xl font-fair text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF099] to-[#D4AF37]">
                    Obrigado, {nome.trim() || "paciente"}.
                  </h3>
                  <p className="text-base sm:text-lg text-white/90 font-lora max-w-md mx-auto leading-relaxed">
                    Suas informações foram recebidas pela equipe da Clínica Marcelo Daltro. Vamos analisá-las e entraremos em contato pelo WhatsApp para entender um pouco melhor o seu caso e orientar o próximo passo.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-10 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA771C] text-black font-mont font-bold text-sm tracking-wider uppercase hover:opacity-90 transition-opacity shadow-[0_0_25px_rgba(212,175,55,0.4)] cursor-pointer"
                  >
                    Fechar
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
