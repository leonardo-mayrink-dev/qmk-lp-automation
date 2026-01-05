import { Instagram, MessageSquare, Brain, Send } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: Instagram,
      title: 'Automação Instagram',
      description: 'Respostas automáticas no Direct, qualificação de leads e encaminhamento inteligente',
      features: ['Auto-resposta DM', 'Qualificação de leads', 'Mensagens agendadas'],
      gradient: 'from-pink-500/10 to-purple-500/10',
      iconColor: 'text-pink-400'
    },
    {
      icon: MessageSquare,
      title: 'Chatbot WhatsApp',
      description: 'Atendimento automático 24h com fluxos personalizados para seu negócio',
      features: ['Atendimento 24/7', 'Fluxos personalizados', 'Integração com CRM'],
      gradient: 'from-green-500/10 to-emerald-500/10',
      iconColor: 'text-green-400'
    },
    {
      icon: Brain,
      title: 'Automação com IA',
      description: 'Respostas inteligentes com compreensão de contexto e linguagem natural',
      features: ['Respostas contextuais', 'Aprendizado contínuo', 'Humanização'],
      gradient: 'from-blue-500/10 to-cyan-500/10',
      iconColor: 'text-blue-400'
    },
    {
      icon: Send,
      title: 'Disparo Automatizado',
      description: 'Envios em massa com compliance total e segmentação inteligente',
      features: ['Listas segmentadas', 'Conformidade LGPD', 'Agendamento'],
      gradient: 'from-violet-500/10 to-purple-500/10',
      iconColor: 'text-violet-400'
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Serviços de automação
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Escolha a solução ideal para o seu negócio ou combine múltiplas automações
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-slate-300">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Entrega: 5 a 15 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>A partir de R$ 1.000</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`p-8 bg-gradient-to-br ${service.gradient} rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:scale-105`}
              >
                <div className="mb-6">
                  <div className="inline-block p-3 bg-slate-800/50 rounded-lg">
                    <Icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-400">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
