import { useLanguage } from '@/hooks/use-language';
import { motion } from 'framer-motion';

export default function UseCases() {
  const { t } = useLanguage();

  const useCases = [
    { id: 'competitions', emoji: '🎓' },
    { id: 'dao', emoji: '🏛️' },
    { id: 'gaming', emoji: '🎮' },
    { id: 'education', emoji: '📚' }
  ];

  return (
    <section id="ecosystem" className="py-20 bg-olym3-gray-light dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-olym3-gray-dark dark:text-white">
            {t('useCases.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-olym3-blue to-olym3-emerald mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{useCase.emoji}</div>
              <h3 className="text-xl font-semibold text-olym3-gray-dark dark:text-white mb-3">
                {t(`useCases.${useCase.id}.title`)}
              </h3>
              <p className="text-olym3-gray dark:text-gray-300 text-sm">
                {t(`useCases.${useCase.id}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
