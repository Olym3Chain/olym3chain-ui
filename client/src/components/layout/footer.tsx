import { useLanguage } from '@/hooks/use-language';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-olym3-gray-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://lh3.googleusercontent.com/a/ACg8ocLUnrUWHbTX61LIFg6cpQ4vSS2hnNEl6cG19HJWxYw8NIQJWX0=s288-c-no" 
                alt="OLYM3 Logo" 
                className="h-8 w-8 rounded-lg"
              />
              <span className="text-xl font-bold">OLYM3</span>
            </div>
            <p className="text-gray-300 text-sm">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t('footer.network')}
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://faucet.olym3.xyz" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Testnet Faucet</a></li>
              <li><a href="https://olym3scan.xyz" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Explorer</a></li>
              <li><a href="https://rpc-testnet.olym3.xyz" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">RPC Endpoint</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Network Stats</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t('footer.developers')}
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">SDK</a></li>
              <li><a href="https://github.com/orgs/Olym3Chain" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hackathons</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t('footer.community')}
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://discord.gg/gynTC8paaP" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Discord</a></li>
              <li><a href="https://x.com/Olym3Chain" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Telegram</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            {t('footer.copyright')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              {t('footer.terms')}
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              {t('footer.contact')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
