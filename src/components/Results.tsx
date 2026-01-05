import { Clock, TrendingUp, Users, Shield } from 'lucide-react';

function Results() {
  const metrics = [
    {
      icon: Clock,
      value: '< 1 minuto',
      label: 'Tempo médio de primeira resposta',
      description: 'Clientes recebem atenção imediata'
    },
    {
      icon: TrendingUp,
      value: '70-90%',
      label: 'Redução de atendimento humano',
      description: 'Sua equipe foca no que realmente importa'
    },
    {
      icon: Users,
      value: '3x mais',
      label: 'Leads qualificados identificados',
      description: 'Separação automática de curiosos e compradores'
    },
    {
      icon: Shield,
      value: '24/7',
      label: 'Disponibilidade total',
      description: 'Nunca mais perca uma oportunidade'
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Resultados reais e mensuráveis
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            KPIs que importam para o seu negócio crescer de forma sustentável
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50 hover:border-green-500/30 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-green-400" />
                </div>

                <div className="mb-2">
                  <div className="text-3xl font-bold text-white mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold text-green-400 mb-3">
                    {metric.label}
                  </div>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-2xl border border-slate-700/50">
          <div className="text-center">
            <p className="text-lg text-slate-300 mb-4">
              <span className="font-semibold text-white">Importante:</span> Os resultados variam conforme o volume de mensagens, tipo de negócio e qualidade da configuração inicial.
            </p>
            <p className="text-slate-400">
              Não garantimos vendas, mas garantimos eficiência operacional e redução de tempo em atendimento repetitivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Results;
