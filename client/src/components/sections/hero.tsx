import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { motion } from 'framer-motion';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="pt-16 min-h-screen gradient-olym3 dark:bg-gradient-to-br dark:from-gray-900 dark:via-olym3-gray-dark dark:to-black text-white relative overflow-hidden">
      {/* Blockchain network background visualization */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-4 h-4 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-olym3-amber rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 left-40 w-5 h-5 bg-olym3-emerald rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-60 left-1/2 w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-48 right-20 w-4 h-4 bg-olym3-amber rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-olym3-amber bg-clip-text text-transparent">
                  {t('hero.title')}
                </span>
              </h1>
              <p className="text-xl text-blue-100 dark:text-gray-300 leading-relaxed">
                {t('hero.description')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="px-8 py-4 bg-olym3-amber text-olym3-gray-dark font-semibold hover:bg-yellow-400 transition-all transform hover:scale-105"
                onClick={() => window.open('https://github.com/orgs/Olym3Chain/repositories', '_blank')}
              >
                {t('hero.buildButton')}
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-4 border-2 border-olym3-amber text-olym3-amber font-semibold hover:bg-olym3-amber hover:text-olym3-gray-dark transition-all"
                onClick={() => window.open('https://discord.gg/gynTC8paaP', '_blank')}
              >
                {t('hero.joinButton')}
              </Button>
            </div>

            {/* Key Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-olym3-amber">3</div>
                <div className="text-sm text-blue-200 dark:text-gray-400">{t('hero.stats.mechanisms')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-olym3-emerald">2025</div>
                <div className="text-sm text-blue-200 dark:text-gray-400">{t('hero.stats.launch')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">EVM</div>
                <div className="text-sm text-blue-200 dark:text-gray-400">{t('hero.stats.compatible')}</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Modern geometric blockchain visualization */}
            <div className="relative w-full h-96 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-olym3-amber/20 to-olym3-emerald/20 rounded-3xl backdrop-blur-sm"></div>
              <div className="relative z-10 grid grid-cols-3 gap-4 p-8">
                <div className="col-span-3 text-center mb-4">
                  <div className="w-16 h-16 bg-olym3-amber rounded-xl mx-auto mb-2 flex items-center justify-center animate-float">
                    <svg className="w-8 h-8 text-olym3-gray-dark" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div className="text-white font-semibold">OLYM3 Core</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-olym3-amber font-bold">PoC1</div>
                  <div className="text-xs text-blue-200">Challenge</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-olym3-emerald font-bold">PoC2</div>
                  <div className="text-xs text-blue-200">Contribution</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-white font-bold">PoR</div>
                  <div className="text-xs text-blue-200">Reputation</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
