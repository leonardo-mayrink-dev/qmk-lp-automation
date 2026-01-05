import { X } from 'lucide-react';

function WhatItIsNot() {
  const notItems = [
    'Não é criação de conteúdo',
    'Não é gestão de redes sociais',
    'Não é social media tradicional',
    'Não é agência de marketing',
    'Não é consultoria de branding',
    'Não prometemos viralização'
  ];

  return (
    <section className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O que este serviço NÃO é
          </h2>
          <p className="text-xl text-slate-300">
            Para evitar expectativas erradas: isso é automação técnica, não marketing de conteúdo
          </p>
        </div>

        <div className="bg-slate-900/50 rounded-2xl border border-red-500/20 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-4">
            {notItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50"
              >
                <div className="flex-shrink-0 p-1 bg-red-500/10 rounded-full">
                  <X className="w-5 h-5 text-red-400" />
                </div>
                <span className="text-slate-200 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-blue-500/10 rounded-lg border border-blue-500/20">
            <p className="text-blue-300 text-center font-medium">
              Se você busca posts, stories ou viralização, este não é o serviço certo. Aqui trabalhamos com infraestrutura de atendimento automatizado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatItIsNot;
