import { useLanguage } from '@/hooks/use-language';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Star } from 'lucide-react';

export default function Consensus() {
  const { t } = useLanguage();

  const mechanisms = [
    {
      id: 'poc1',
      icon: CheckCircle,
      color: 'olym3-amber',
      bgColor: 'from-olym3-amber/10 to-yellow-50'
    },
    {
      id: 'poc2',
      icon: Users,
      color: 'olym3-emerald',
      bgColor: 'from-olym3-emerald/10 to-green-50'
    },
    {
      id: 'por',
      icon: Star,
      color: 'olym3-blue',
      bgColor: 'from-olym3-blue/10 to-blue-50'
    }
  ];

  return (
    <section id="consensus" className="py-20 bg-white dark:bg-olym3-gray-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-olym3-gray-dark dark:text-white">
            {t('consensus.title')}
          </h2>
          <p className="text-xl text-olym3-gray dark:text-gray-300 max-w-3xl mx-auto">
            {t('consensus.description')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-olym3-blue to-olym3-emerald mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {mechanisms.map((mechanism, index) => {
            const Icon = mechanism.icon;
            return (
              <motion.div
                key={mechanism.id}
                className={`bg-gradient-to-br ${mechanism.bgColor} rounded-2xl p-8 hover:shadow-lg transition-all group`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-${mechanism.color} rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-olym3-gray-dark dark:text-white mb-2">
                    {t(`consensus.${mechanism.id}.title`)}
                  </h3>
                  <div className={`text-sm text-${mechanism.color} font-semibold`}>
                    {t(`consensus.${mechanism.id}.subtitle`)}
                  </div>
                </div>
                
                <p className="text-olym3-gray dark:text-gray-300 mb-6 leading-relaxed">
                  {t(`consensus.${mechanism.id}.description`)}
                </p>

                <div className="space-y-3">
                  {Array.from({ length: 3 }, (_, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-${mechanism.color} rounded-full`}></div>
                      <span className="text-sm text-olym3-gray dark:text-gray-300">
                        {t(`consensus.${mechanism.id}.features.${i}`)}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
