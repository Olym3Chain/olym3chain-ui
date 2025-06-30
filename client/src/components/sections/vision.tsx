import { useLanguage } from '@/hooks/use-language';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Vision() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-olym3-gray-light dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-olym3-gray-dark dark:text-white">
            {t('vision.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-olym3-blue to-olym3-emerald mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-olym3-gray dark:text-gray-300 leading-relaxed">
              {t('vision.description')}
            </p>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-olym3-blue dark:text-olym3-blue-light mb-4">
                {t('vision.differentiators')}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-olym3-emerald rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-olym3-gray dark:text-gray-300">{t('vision.merit')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-olym3-emerald rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-olym3-gray dark:text-gray-300">{t('vision.community')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-olym3-emerald rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-olym3-gray dark:text-gray-300">{t('vision.evm')}</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Vietnamese blockchain ecosystem visualization */}
            <div className="gradient-olym3 rounded-2xl p-8 text-white">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">🇻🇳 Vietnam Web3</h3>
                <p className="text-blue-100">Building the future of blockchain</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-colors">
                  <div className="text-2xl mb-2">🎓</div>
                  <div className="text-sm">Universities</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-colors">
                  <div className="text-2xl mb-2">👥</div>
                  <div className="text-sm">Communities</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-colors">
                  <div className="text-2xl mb-2">🚀</div>
                  <div className="text-sm">Startups</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-colors">
                  <div className="text-2xl mb-2">🏆</div>
                  <div className="text-sm">Hackathons</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
