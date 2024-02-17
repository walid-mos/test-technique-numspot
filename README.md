This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## MyIMDB

Creez un fichier `.env` basé sur le fichier `.env.example`.
Completez les informations de l'API

Ensuite lancez le serveur :

```bash
pnpm dev
```

L'application web s'affichera sur votre naviagateur [http://localhost:3000](http://localhost:3000) 

# Tests

Pour lancer les tests, lancez la commande :

```bash
pnpm test
```

(Next14 et les serveurs components ne fonctionnent pas avec @testing-library/react lorsque un component est asynchrone, il faudrait realiser des tests E2E pour l'instant [Documentation Next](https://nextjs.org/docs/app/building-your-application/testing/jest#additional-resources))
