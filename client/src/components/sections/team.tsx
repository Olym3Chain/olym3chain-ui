import { useLanguage } from '@/hooks/use-language';
import { motion } from 'framer-motion';

export default function Team() {
  const { t } = useLanguage();

  const teamSections = [
    { id: 'core', emoji: '👨‍💻', gradient: 'from-olym3-blue to-olym3-blue-dark' },
    { id: 'academic', emoji: '🎓', gradient: 'from-olym3-emerald to-green-600' },
    { id: 'community', emoji: '🚀', gradient: 'from-olym3-amber to-yellow-600' }
  ];

  return (
    <section id="team" className="py-20 bg-olym3-gray-light dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-olym3-gray-dark dark:text-white">
            {t('team.title')}
          </h2>
          <p className="text-xl text-olym3-gray dark:text-gray-300 max-w-3xl mx-auto">
            {t('team.description')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-olym3-blue to-olym3-emerald mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {teamSections.map((section, index) => (
            <motion.div
              key={section.id}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${section.gradient} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                <span className="text-2xl text-white font-bold">{section.emoji}</span>
              </div>
              <h3 className="text-xl font-semibold text-olym3-gray-dark dark:text-white mb-2">
                {t(`team.${section.id}.title`)}
              </h3>
              <p className="text-olym3-gray dark:text-gray-300 text-sm">
                {t(`team.${section.id}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
