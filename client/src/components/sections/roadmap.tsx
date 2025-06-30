import { useLanguage } from '@/hooks/use-language';
import { motion } from 'framer-motion';

export default function Roadmap() {
  const { t } = useLanguage();

  const roadmapItems = [
    { id: 'q2', quarter: 'Q2 2025', color: 'olym3-blue', position: 'left' },
    { id: 'q3', quarter: 'Q3 2025', color: 'olym3-amber', position: 'right' },
    { id: 'q4', quarter: 'Q4 2025', color: 'olym3-emerald', position: 'left' },
    { id: '2026', quarter: '2026', color: 'purple-600', position: 'right' }
  ];

  return (
    <section id="roadmap" className="py-20 bg-white dark:bg-olym3-gray-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-olym3-gray-dark dark:text-white">
            {t('roadmap.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-olym3-blue to-olym3-emerald mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-gradient-to-b from-olym3-blue to-olym3-emerald"></div>
          
          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative grid md:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, x: item.position === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {item.position === 'left' ? (
                  <>
                    <div className="md:text-right space-y-4">
                      <div className={`inline-block px-4 py-2 bg-${item.color} text-white rounded-full text-sm font-semibold`}>
                        {item.quarter}
                      </div>
                      <h3 className="text-2xl font-bold text-olym3-gray-dark dark:text-white">
                        {t(`roadmap.${item.id}.title`)}
                      </h3>
                      <p className="text-olym3-gray dark:text-gray-300">
                        {t(`roadmap.${item.id}.description`)}
                      </p>
                    </div>
                    <div className="hidden md:block"></div>
                  </>
                ) : (
                  <>
                    <div className="hidden md:block"></div>
                    <div className="space-y-4">
                      <div className={`inline-block px-4 py-2 bg-${item.color} text-white rounded-full text-sm font-semibold`}>
                        {item.quarter}
                      </div>
                      <h3 className="text-2xl font-bold text-olym3-gray-dark dark:text-white">
                        {t(`roadmap.${item.id}.title`)}
                      </h3>
                      <p className="text-olym3-gray dark:text-gray-300">
                        {t(`roadmap.${item.id}.description`)}
                      </p>
                    </div>
                  </>
                )}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-${item.color} rounded-full border-4 border-white shadow-lg`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
