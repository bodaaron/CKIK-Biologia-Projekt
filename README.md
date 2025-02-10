# Biologia Weboldal

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
Database Setup
```sh
INSERT INTO kep values(null,"Gerinctelenek",064);
INSERT INTO kepAdat values(null,1,"Álláb",1645,540,21,1);
INSERT INTO kepAdat values(null,2,"Mag",1642,609,21,1);
INSERT INTO kepAdat values(null,3,"Vacuolum",1644,679,21,1);
INSERT INTO kepAdat values(null,4,"Cilia",1579,2099,21,1);
INSERT INTO kepAdat values(null,5,"Zárványtest",1506,2131,21,1);
INSERT INTO kepAdat values(null,6,"Emésztő rendszer",1431,2146,21,1);
INSERT INTO kepAdat values(null,7,"Láb vacuolum",1359,2193,21,1);
INSERT INTO kepAdat values(null,8,"Gullet",1285,2227,21,1);
INSERT INTO kepAdat values(null,9,"Szájnyílás",1220,2251,21,1);
INSERT INTO kepAdat values(null,10,"Cilia",479,1747,21,1);
INSERT INTO kepAdat values(null,11,"Összehúzódó vacuolumok",547,1715,21,1);
INSERT INTO kepAdat values(null,12,"Kiválasztó nyílás",629,1700,21,1);
INSERT INTO kepAdat values(null,13,"Láb vacuolum",708,1667,21,1);
INSERT INTO kepAdat values(null,14,"Nagymag",782,1640,21,1);
INSERT INTO kepAdat values(null,15,"Kismag",853,1619,21,1); 
INSERT INTO felhasznalo (nev, email, jelszo, osztaly, jogosultsag)   VALUES ('Kiss Péter', 'kiss.peter@gmail.com', '$2b$10$IU65XRxR7h1Ah9TiuD65pexc/MYhbo/0Neb.Tsz0.q8g7Tx2TpmGe', '10.A', 'tanulo'); 
```
