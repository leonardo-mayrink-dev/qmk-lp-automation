import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

function FinalCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    monthlyMessages: '',
    mainGoal: '',
    currentPain: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessType: '',
        monthlyMessages: '',
        mainGoal: '',
        currentPain: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <section id="qualification-form" className="py-20 px-4 bg-slate-900">
        <div className="max-w-2xl mx-auto text-center">
          <div className="p-12 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl border border-green-500/30">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Formulário enviado com sucesso!
            </h3>
            <p className="text-lg text-slate-300">
              Nossa equipe técnica vai analisar suas informações e retornar em até 24 horas com a viabilidade e próximos passos.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="qualification-form" className="py-20 px-4 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Preencha o questionário de qualificação
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Sem reunião inicial. Sem proposta manual. Responda abaixo e saiba se seu negócio se qualifica para automação.
          </p>
        </div>

        <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
                  Nome completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-300 mb-2">
                WhatsApp *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="(00) 00000-0000"
              />
            </div>

            <div>
              <label htmlFor="businessType" className="block text-sm font-semibold text-slate-300 mb-2">
                Tipo de negócio *
              </label>
              <select
                id="businessType"
                name="businessType"
                required
                value={formData.businessType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="">Selecione</option>
                <option value="ecommerce">E-commerce</option>
                <option value="servicos">Prestação de serviços</option>
                <option value="consultoria">Consultoria</option>
                <option value="saude">Saúde e bem-estar</option>
                <option value="educacao">Educação</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div>
              <label htmlFor="monthlyMessages" className="block text-sm font-semibold text-slate-300 mb-2">
                Quantas mensagens você recebe por mês no Instagram/WhatsApp? *
              </label>
              <select
                id="monthlyMessages"
                name="monthlyMessages"
                required
                value={formData.monthlyMessages}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="">Selecione</option>
                <option value="0-100">Menos de 100</option>
                <option value="100-500">100 a 500</option>
                <option value="500-1000">500 a 1.000</option>
                <option value="1000+">Mais de 1.000</option>
              </select>
            </div>

            <div>
              <label htmlFor="mainGoal" className="block text-sm font-semibold text-slate-300 mb-2">
                Principal objetivo com a automação *
              </label>
              <select
                id="mainGoal"
                name="mainGoal"
                required
                value={formData.mainGoal}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="">Selecione</option>
                <option value="resposta-rapida">Responder mais rápido</option>
                <option value="qualificar-leads">Qualificar leads automaticamente</option>
                <option value="reduzir-equipe">Reduzir carga da equipe</option>
                <option value="atendimento-24h">Atendimento 24h</option>
                <option value="escalar">Escalar o negócio</option>
              </select>
            </div>

            <div>
              <label htmlFor="currentPain" className="block text-sm font-semibold text-slate-300 mb-2">
                Qual sua maior dor hoje com atendimento? *
              </label>
              <textarea
                id="currentPain"
                name="currentPain"
                required
                value={formData.currentPain}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                placeholder="Descreva brevemente sua principal dificuldade..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:scale-105"
            >
              Enviar questionário
              <Send className="w-5 h-5" />
            </button>

            <p className="text-sm text-slate-400 text-center">
              Ao enviar, você concorda em receber contato da nossa equipe técnica via WhatsApp ou e-mail.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
