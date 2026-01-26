import PageLayout from '@/components/PageLayout'

export default function ContactPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Contact - IntimateMap</h1>
        
        <p className="text-lg mb-8"><strong>Dernière mise à jour : 26 janvier 2026</strong></p>

        <hr className="my-8" />

         <h2 className="text-3xl font-bold mt-8 mb-4">Contact</h2>

        <p className="mb-4"><strong>Pour toute question vous concernant :</strong> team.ylstudio@gmail.com</p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">Introduction</h2>
        
        <p className="mb-4">IntimateMap est un journal intime numérique personnel. Vos données restent sur votre appareil par défaut. Nous ne collectons, ne vendons ni ne partageons vos informations personnelles.</p>

        <p className="mb-2"><strong>Éditeur de l&apos;application :</strong></p>
        <p className="mb-1">IntimateMap team</p>
        <p className="mb-1">Email : team.ylstudio@gmail.com</p>
        <p className="mb-4">Pays : France</p>

        

       

        <p className="text-sm italic mb-2"><strong>Dernière mise à jour :</strong> 15 janvier 2026</p>
        <p className="text-sm italic mb-2"><strong>Éditeur :</strong> YL Studio</p>
        <p className="text-sm italic"><strong>Email de contact :</strong> team.ylstudio@gmail.com</p>
      </div>
    </PageLayout>
  )
}
