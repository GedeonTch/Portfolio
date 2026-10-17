// Badge de statut d'un lab (Terminé / En cours / Planifié).
// Couleurs sémantiques fixes, lisibles sur les deux thèmes (terminal et soc) :
// elles ne dépendent volontairement pas de --accent, pour que « En cours » et
// « Terminé » gardent leur signification visuelle quel que soit le thème.

import { UiTexts } from '@/data/translations';
import { LabStatut } from '@/types';

export default function LabBadgeStatut({ statut, t }: { statut?: LabStatut; t: UiTexts }) {
  if (!statut) return null;

  const config: Record<LabStatut, { label: string; classes: string }> = {
    termine: {
      label: t.labsPage.statutTermine,
      classes: 'text-[#4ade80] border-[#4ade8066] bg-[#4ade8014]',
    },
    'en-cours': {
      label: t.labsPage.statutEnCours,
      classes: 'text-[#fbbf24] border-[#fbbf2466] bg-[#fbbf2414]',
    },
    planifie: {
      label: t.labsPage.statutPlanifie,
      classes: 'text-[var(--text-muted)] border-[var(--border)] bg-transparent',
    },
  };

  const { label, classes } = config[statut];

  return (
    <span
      className={`shrink-0 font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded border ${classes}`}
    >
      {label}
    </span>
  );
}
