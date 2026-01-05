import { Zap, Clock, Target, Link2 } from 'lucide-react';

function Solution() {
  const solutions = [
    {
      icon: Zap,
      title: 'Automação de respostas',
      description: 'Respostas instantâneas para perguntas frequentes, informações de produtos e qualificação inicial'
    },
    {
      icon: Clock,
      title: 'Atendimento 24 horas',
      description: 'Seu negócio funciona mesmo quando você está dormindo, no fim de semana ou em reuniões'
    },
    {
      icon: Target,
      title: 'Qualificação automática de leads',
      description: 'Separe automaticamente leads qualificados de curiosos, priorizando seu tempo no que importa'
    },
    {
      icon: Link2,
      title: 'Integração Instagram + WhatsApp',
      description: 'Centralize e organize todas as conversas em um único sistema inteligente'
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/10 rounded-full mb-6">
            <span className="text-blue-400 font-semibold">A Solução</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Infraestrutura de automação que escala seu atendimento
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Não é criação de conteúdo. Não é gestão de redes sociais. É tecnologia aplicada para responder, qualificar e converter mais leads.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4">
                  <div className="inline-block p-3 bg-blue-500/10 rounded-lg">
                    <Icon className="w-7 h-7 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {solution.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Solution;
