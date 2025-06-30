import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-20 gradient-olym3 dark:bg-gradient-to-br dark:from-gray-900 dark:via-olym3-gray-dark dark:to-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-blue-100 dark:text-gray-300 mb-8 leading-relaxed">
            {t('cta.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="px-8 py-4 bg-olym3-amber text-olym3-gray-dark font-semibold hover:bg-yellow-400 transition-all transform hover:scale-105"
              onClick={() => window.open('https://github.com/orgs/Olym3Chain/repositories', '_blank')}
            >
              {t('cta.build')}
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-4 border-2 border-olym3-amber text-olym3-amber font-semibold hover:bg-olym3-amber hover:text-olym3-gray-dark transition-all"
              onClick={() => window.open('https://discord.gg/gynTC8paaP', '_blank')}
            >
              {t('cta.discord')}
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-4 border-2 border-olym3-emerald text-olym3-emerald font-semibold hover:bg-olym3-emerald hover:text-white transition-all"
            >
              {t('cta.whitepaper')}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
