// Affiche "SentinelX" avec le X en rouge (signature visuelle du logo officiel)
// À utiliser partout où le nom SentinelX apparaît dans l'interface
export default function BrandText({ text }: { text: string }) {
  return (
    <>
      {text.split(/(SentinelX)/g).map((part, index) =>
        part === 'SentinelX' ? (
          <span key={index}>
            Sentinel<span style={{ color: '#e11d2e' }}>X</span>
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}
