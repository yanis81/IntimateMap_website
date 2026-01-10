# IntimateMap Website 💘

Site web officiel pour IntimateMap - Votre journal intime géolocalisé

## 🚀 Technologies

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 19**

## 📁 Structure du Projet

```
site/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Page d'accueil
│   │   ├── guide/                # Guide de démarrage
│   │   ├── creer-un-spot/        # Documentation création de spots
│   │   ├── coffre-fort/          # Documentation coffre-fort
│   │   ├── faq/                  # Questions fréquentes
│   │   ├── privacy/              # Politique de confidentialité
│   │   ├── layout.tsx            # Layout principal
│   │   └── globals.css           # Styles globaux
│   └── components/
│       ├── Header.tsx            # Header avec navigation
│       ├── Footer.tsx            # Footer
│       └── PageLayout.tsx        # Layout pour pages de documentation
```

## 🎨 Pages Disponibles

- **/** - Page d'accueil avec présentation de l'app
- **/guide** - Guide de démarrage complet
- **/creer-un-spot** - Guide de création de spots
- **/coffre-fort** - Documentation du coffre-fort sécurisé
- **/faq** - Foire aux questions
- **/privacy** - Politique de confidentialité RGPD

## 💻 Développement Local

### Installation

```bash
cd site
npm install
```

### Lancement du serveur de développement

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Build de production

```bash
npm run build
npm start
```

## 🎯 Fonctionnalités

- ✅ Design moderne et responsive
- ✅ Navigation fluide avec Next.js App Router
- ✅ Sidebar de navigation sur toutes les pages
- ✅ Thème sombre par défaut avec dégradés rose/violet
- ✅ Composants réutilisables
- ✅ SEO optimisé
- ✅ Performance optimisée avec Turbopack

## 📝 Mise à jour du contenu

Le contenu des pages est basé sur les fichiers markdown du dossier `wiki/` :

- `Home.md` → Page d'accueil
- `Guide-de-Demarrage.md` → Page /guide
- `Creer-un-Spot.md` → Page /creer-un-spot
- `Coffre-Fort.md` → Page /coffre-fort
- `FAQ.md` → Page /faq
- `privacy-policy.md` → Page /privacy

Pour mettre à jour le contenu, modifiez directement les fichiers tsx correspondants dans `src/app/`.

## 🌐 Déploiement

Le site peut être déployé sur :

- **Vercel** (recommandé pour Next.js)
- **Netlify**
- **AWS Amplify**
- Tout hébergeur supportant Node.js

### Déploiement sur Vercel

```bash
npm install -g vercel
vercel
```

## 📱 Compatibilité

- ✅ Desktop
- ✅ Tablette
- ✅ Mobile
- ✅ Tous les navigateurs modernes

## 🔗 Liens Utiles

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [App IntimateMap](https://apps.apple.com)

## 📄 Licence

© 2026 IntimateMap. Tous droits réservés.

---

**IntimateMap - Votre intimité est sacrée. Vos données aussi.**
