import { useLanguage } from '@/hooks/use-language';
import { motion } from 'framer-motion';
import { Layers, Users, Code } from 'lucide-react';

export default function Architecture() {
  const { t } = useLanguage();

  const architectureItems = [
    { 
      id: 'evm', 
      icon: Layers, 
      color: 'olym3-blue',
      bgGradient: 'from-blue-50 to-white',
      borderColor: 'border-blue-100'
    },
    { 
      id: 'validators', 
      icon: Users, 
      color: 'olym3-emerald',
      bgGradient: 'from-green-50 to-white',
      borderColor: 'border-green-100'
    },
    { 
      id: 'sdk', 
      icon: Code, 
      color: 'olym3-amber',
      bgGradient: 'from-amber-50 to-white',
      borderColor: 'border-amber-100'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-olym3-gray-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-olym3-gray-dark dark:text-white">
            {t('architecture.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-olym3-blue to-olym3-emerald mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {architectureItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                className={`bg-gradient-to-br ${item.bgGradient} dark:from-gray-700 dark:to-gray-600 border ${item.borderColor} dark:border-gray-600 rounded-xl p-6`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-6">
                  <div className={`w-12 h-12 bg-${item.color} rounded-lg mx-auto mb-3 flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-olym3-gray-dark dark:text-white">
                    {t(`architecture.${item.id}.title`)}
                  </h3>
                </div>
                <p className="text-sm text-olym3-gray dark:text-gray-300 text-center">
                  {t(`architecture.${item.id}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
