// Section Outils & Technologies avec badges cliquables et vraies icônes de marque
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';
import BrandText from '@/components/BrandText';

// Couleurs officielles des marques (simple-icons, licence CC0)
const BRAND_COLORS = {
  kali: '#557C94',
  wireshark: '#1679A7',
  docker: '#2496ED',
  nmap: '#E04E39',   // PLACEHOLDER cohérent avec le site — pas de logo officiel SVG libre
  wazuh: '#4DA3FF',  // PLACEHOLDER cohérent avec le site — pas de logo officiel SVG libre
  owasp: '#B8BFC9',  // logo OWASP officiel, éclairci pour lisibilité sur fond sombre
};

export default function Tools() {
  const { t, data } = useLanguage();

  // Icônes pour chaque outil : SVG officiels (simple-icons) quand disponibles
  const getToolIcon = (iconName: string) => {
    const icons: { [key: string]: JSX.Element } = {
      python: (
        // Logo Python officiel
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 5.373 2.688 5.373 2.688L5.375 5.5H12.125V6.25H3.375C3.375 6.25 0 5.875 0 12S3.375 17.75 3.375 17.75H5.5V14.875C5.5 14.875 5.375 11.5 8.75 11.5H15.25C15.25 11.5 18.5 11.5 18.5 8.25V3.375C18.5 3.375 18.875 0 12 0ZM8.625 2C9.24 2 9.75 2.51 9.75 3.125C9.75 3.74 9.24 4.25 8.625 4.25C8.01 4.25 7.5 3.74 7.5 3.125C7.5 2.51 8.01 2 8.625 2Z" fill="#3776AB" />
          <path d="M12 24C18.627 24 18.627 21.312 18.627 21.312L18.625 18.5H11.875V17.75H20.625C20.625 17.75 24 18.125 24 12S20.625 6.25 20.625 6.25H18.5V9.125C18.5 9.125 18.625 12.5 15.25 12.5H8.75C8.75 12.5 5.5 12.5 5.5 15.75V20.625C5.5 20.625 5.125 24 12 24ZM15.375 22C14.76 22 14.25 21.49 14.25 20.875C14.25 20.26 14.76 19.75 15.375 19.75C15.99 19.75 16.5 20.26 16.5 20.875C16.5 21.49 15.99 22 15.375 22Z" fill="#FFD43B" />
        </svg>
      ),
      kali: (
        // Logo Kali Linux officiel (simple-icons, CC0)
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill={BRAND_COLORS.kali}>
          <path d="M12.778 5.943s-1.97-.13-5.327.92c-3.42 1.07-5.36 2.587-5.36 2.587s5.098-2.847 10.852-3.008zm7.351 3.095l.257-.017s-1.468-1.78-4.278-2.648c1.58.642 2.954 1.493 4.021 2.665zm.42.74c.039-.068.166.217.263.337.004.024.01.039-.045.027-.005-.025-.013-.032-.013-.032s-.135-.08-.177-.137c-.041-.057-.049-.157-.028-.195zm3.448 8.479s.312-3.578-5.31-4.403a18.277 18.277 0 0 0-2.524-.187c-4.506.06-4.67-5.197-1.275-5.462 1.407-.116 3.087.643 4.73 1.408-.007.204.002.385.136.552.134.168.648.35.813.445.164.094.691.43 1.014.85.07-.131.654-.512.654-.512s-.14.003-.465-.119c-.326-.122-.713-.49-.722-.511-.01-.022-.015-.055.06-.07.059-.049-.072-.207-.13-.265-.058-.058-.445-.716-.454-.73-.009-.016-.012-.031-.04-.05-.085-.027-.46.04-.46.04s-.575-.283-.774-.893c.003.107-.099.224 0 .469-.3-.127-.558-.344-.762-.88-.12.305 0 .499 0 .499s-.707-.198-.82-.85c-.124.293 0 .469 0 .469s-1.153-.602-3.069-.61c-1.283-.118-1.55-2.374-1.43-2.754 0 0-1.85-.975-5.493-1.406-3.642-.43-6.628-.065-6.628-.065s6.45-.31 11.617 1.783c.176.785.704 2.094.989 2.723-.815.563-1.733 1.092-1.876 2.97-.143 1.878 1.472 3.53 3.474 3.58 1.9.102 3.214.116 4.806.942 1.52.84 2.766 3.4 2.89 5.703.132-1.709-.509-5.383-3.5-6.498 4.181.732 4.549 3.832 4.549 3.832zM12.68 5.663l-.15-.485s-2.484-.441-5.822-.204C3.37 5.211 0 6.38 0 6.38s6.896-1.735 12.68-.717Z" />
        </svg>
      ),
      nmap: (
        // À REMPLACER : pas de logo Nmap en SVG libre (retiré de simple-icons pour
        // raisons de marque). Placeholder radar cohérent avec le style du site.
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke={BRAND_COLORS.nmap} strokeWidth="1.6" strokeLinecap="round">
          <circle cx="12" cy="12" r="9" opacity="0.5" />
          <circle cx="12" cy="12" r="5.5" opacity="0.7" />
          <path d="M12 12 L19.5 5.5" />
          <circle cx="12" cy="12" r="1.4" fill={BRAND_COLORS.nmap} stroke="none" />
          <circle cx="16" cy="15.5" r="1.2" fill={BRAND_COLORS.nmap} stroke="none" />
          <circle cx="8" cy="15" r="1" fill={BRAND_COLORS.nmap} stroke="none" opacity="0.7" />
        </svg>
      ),
      docker: (
        // Logo Docker officiel
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill={BRAND_COLORS.docker}>
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" />
        </svg>
      ),
      wireshark: (
        // Logo Wireshark officiel (simple-icons, CC0)
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill={BRAND_COLORS.wireshark}>
          <path d="m2.95 0c-1.62 0-2.95 1.32-2.95 2.95v18.1c0 1.63 1.32 2.95 2.95 2.95h18.1c1.62 0 2.95-1.32 2.95-2.95v-18.1c-.00024-1.63-1.32-2.95-2.95-2.95zm0 1.09h18.1c1.04 0 1.85.818 1.85 1.86v14h-5.27c-.335-.796-2.57-6.47.283-10.9a.516.517 0 0 0-.443-.794c-5.24.0827-8.2 3.19-9.74 6.21-1.35 2.64-1.63 4.91-1.69 5.53h-4.95v-14c0-1.04.817-1.86 1.85-1.86zm13.6 5.24c-2.62 5.24.248 11.4.248 11.4a.516.517 0 0 0 .469.301h5.62v3.05c0 1.04-.817 1.86-1.85 1.86h-18.1c-1.04 0-1.85-.818-1.85-1.86v-3.05h5.39a.516.517 0 0 0 .514-.477s.226-2.8 1.66-5.62c1.34-2.62 3.67-5.17 7.91-5.57z" />
        </svg>
      ),
      zap: (
        // Logo OWASP officiel (simple-icons, CC0) — ZAP est un projet OWASP ;
        // l'éclair spécifique à ZAP n'existe pas en SVG libre
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill={BRAND_COLORS.owasp}>
          <path d="M15.897 20.503c-.384 0-1.782-2.489-1.97-3.198-.393-1.486-.308-2.114-.285-2.314.072-.613.667-.92.703-1.748.01-.256.14-1.535.243-2.534a1.723 1.723 0 0 1-.733-.343c.676.908-.32 1.995-1.767 3.443-1.536 1.536-4.945 2.961-4.945 2.961s1.425-3.41 2.961-4.945c1.13-1.129 2.04-1.983 2.816-1.983.22 0 .427.067.627.216a1.722 1.722 0 0 1-.343-.733c-.999.103-2.278.232-2.534.244-.829.036-1.135.63-1.747.702-.07.008-.194.024-.388.024-.36 0-.963-.054-1.926-.31-.772-.203-3.648-1.84-3.14-2.045.26-.105 1.087-.176 2.175-.176 1.047 0 2.337.066 3.596.23 1.57.205 3.01.463 3.992.656.016-.053.035-.104.058-.154l-1.004-.48s-.8-.92-.715-.984a.02.02 0 0 1 .012-.003c.126 0 .767.733.829.816l.605.202-.284-.249s-.388-1.438-.287-1.472h.004c.106 0 .459 1.25.489 1.34.07.06.303.152.596.32l-.308-.79s.14-1.305.243-1.305h.003c.105.021-.02 1.089-.047 1.221l.51.783a1.31 1.31 0 0 1 .463-.082c.184 0 .374.036.558.107-.236-.502-.218-1.025.095-1.338a.84.84 0 0 1 .353-.209.462.462 0 0 1 .457-.383c.127 0 .254.05.352.148a.497.497 0 0 1 .147.335c.151-.311.329-.73.317-.867-.03-.307-.386-.852-.39-.857a.076.076 0 0 1 .064-.119c.025 0 .05.012.064.035.016.023.381.582.414.927.018.198-.21.696-.333.95a2.227 2.227 0 0 1 .873.874c.245-.12.715-.334.927-.334l.024.001c.345.033.904.399.927.414a.076.076 0 0 1-.084.128c-.005-.004-.55-.36-.857-.39h-.015c-.15 0-.552.171-.852.317.12.004.242.053.335.147a.482.482 0 0 1 .012.681.459.459 0 0 1-.247.128.845.845 0 0 1-.21.354.924.924 0 0 1-.67.255c-.212 0-.441-.055-.667-.16.132.343.142.708.025 1.02l.783.51c.095-.019.666-.088.993-.088.13 0 .222.011.228.04.02.106-1.305.247-1.305.247l-.79-.308c.168.293.26.527.32.596.091.03 1.374.392 1.34.493-.004.012-.026.017-.063.017-.283 0-1.41-.304-1.41-.304l-.248-.284.202.605c.087.065.876.755.813.841-.004.005-.009.007-.016.007-.139 0-.967-.722-.967-.722l-.481-1.004a1.18 1.18 0 0 1-.154.058c.193.982.451 2.422.656 3.992.335 2.569.26 5.261.054 5.77-.016.041-.042.06-.076.06M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12m0-22.153C6.393 1.847 1.847 6.393 1.847 12S6.393 22.153 12 22.153 22.153 17.607 22.153 12 17.607 1.847 12 1.847Z" />
        </svg>
      ),
      wazuh: (
        // À REMPLACER : pas de logo Wazuh en SVG libre dans simple-icons.
        // Placeholder hexagone W cohérent avec le style du site (couleur proche de la marque).
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke={BRAND_COLORS.wazuh} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1.8 L21.1 7 v10 L12 22.2 2.9 17 V7 Z" />
          <path d="M6.8 8.6 L9.3 16.2 L12 10.8 L14.7 16.2 L17.2 8.6" strokeWidth="1.8" />
        </svg>
      ),
      sentinelx: (
        // Logo officiel SentinelX (public/icons/sentinelx.png)
        <Image
          src="/icons/sentinelx.png"
          alt="Logo SentinelX"
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
        />
      ),
    };

    // Fallback générique : losange technique (et non plus un cercle check)
    return (
      icons[iconName] || (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
          <path d="M12 2 L22 12 L12 22 L2 12 Z" />
          <path d="M12 7 L17 12 L12 17 L7 12 Z" />
        </svg>
      )
    );
  };

  return (
    <section id="tools" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-[var(--accent)]"
        >
          {t.tools.title}
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.tools.map((tool, index) => (
            <motion.a
              key={index}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="group relative p-6 rounded-lg border border-[var(--accent)] bg-[var(--card-bg)] flex flex-col items-center justify-center gap-3 hover:shadow-lg transition-all duration-300"
            >
              {/* Effet de lueur au survol */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-[var(--accent)]" />

              {/* Icône de l'outil */}
              <div className="relative z-10">
                {getToolIcon(tool.icon)}
              </div>

              {/* Nom de l'outil (SentinelX garde son X rouge de marque) */}
              <span className="relative z-10 text-sm font-semibold text-[var(--foreground)] text-center">
                <BrandText text={tool.name} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
