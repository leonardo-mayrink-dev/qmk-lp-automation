import { ArrowRight, MessageSquare, Instagram } from 'lucide-react';

function Hero() {
  const scrollToForm = () => {
    document.getElementById('qualification-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center z-10">
        <div className="flex justify-center gap-4 mb-8">
          <div className="p-3 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50">
            <Instagram className="w-8 h-8 text-pink-400" />
          </div>
          <div className="p-3 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50">
            <MessageSquare className="w-8 h-8 text-green-400" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Automação Técnica para
          <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Instagram e WhatsApp
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Transformamos Instagram e WhatsApp em canais automáticos de atendimento e captação — sem depender de posts, designers ou viralização
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={scrollToForm}
            className="group px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:scale-105"
          >
            Ver se meu negócio se qualifica
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Entrega em 5 a 15 dias</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>A partir de R$ 1.000</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span>Sem reunião inicial</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
