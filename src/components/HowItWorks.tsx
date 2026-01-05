import { FileText, Settings, Rocket } from 'lucide-react';

function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: FileText,
      title: 'Preenche o formulário',
      description: 'Responda perguntas simples sobre seu negócio e necessidades. Leva menos de 3 minutos.'
    },
    {
      number: '02',
      icon: Settings,
      title: 'A automação é configurada',
      description: 'Nossa equipe técnica configura tudo: fluxos, respostas, integrações e testes.'
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Você responde menos e vende mais',
      description: 'Sistema entra no ar. Leads são qualificados automaticamente e você foca nas conversões.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Como funciona
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Processo simples e direto. Sem reuniões desnecessárias, sem propostas manuais.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent -translate-x-4"></div>
                )}

                <div className="relative bg-slate-900/50 rounded-xl border border-slate-700/50 p-8 hover:border-blue-500/30 transition-all duration-300">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-white text-lg">
                    {step.number}
                  </div>

                  <div className="mb-6 mt-4">
                    <div className="inline-block p-3 bg-blue-500/10 rounded-lg">
                      <Icon className="w-8 h-8 text-blue-400" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
