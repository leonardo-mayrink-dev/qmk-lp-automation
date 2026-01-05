import { Clock, TrendingDown, Repeat, MessagesSquare } from 'lucide-react';

function Problem() {
  const problems = [
    {
      icon: Clock,
      title: 'Demora para responder mensagens',
      description: 'Clientes esperam horas ou dias por uma resposta simples'
    },
    {
      icon: TrendingDown,
      title: 'Leads perdidos no Instagram e WhatsApp',
      description: 'Oportunidades escapam enquanto você está ocupado'
    },
    {
      icon: Repeat,
      title: 'Atendimento repetitivo e manual',
      description: 'Mesmas perguntas respondidas dezenas de vezes por dia'
    },
    {
      icon: MessagesSquare,
      title: 'Falta de organização',
      description: 'Mensagens perdidas entre conversas, sem controle ou histórico'
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Você está perdendo dinheiro todos os dias
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Enquanto seu negócio cresce, o atendimento manual não acompanha. O resultado? Clientes frustrados e vendas perdidas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="p-6 bg-slate-900/50 rounded-xl border border-slate-700/50 hover:border-red-500/30 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500/10 rounded-lg">
                    <Icon className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-slate-400">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Problem;
