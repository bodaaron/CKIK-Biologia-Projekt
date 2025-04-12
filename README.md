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
### Database Setup
```sh
INSERT INTO kep VALUES(null,"A kutya anatómiája",1,1);
INSERT INTO kep VALUES(null,"A mindenevő állat emésztőrendszere",2,1);
INSERT INTO kep VALUES(null,"A növényevő állat emésztőrendszere",3,1);
INSERT INTO kep VALUES(null,"A növényevő állat légzőrendszere",4,1);
INSERT INTO kep VALUES(null,"A szarvas csontváza",5,1);
INSERT INTO kep VALUES(null,"Gerincesek szíve",6,1);

INSERT INTO kepadat VALUES(null,19,"Fej",587,71,30,1);
INSERT INTO kepadat VALUES(null,20,"Gerincvelő",643,131,30,1);
INSERT INTO kepadat VALUES(null,21,"Csigolya",698,193,30,1);
INSERT INTO kepadat VALUES(null,22,"Aorta",740,252,30,1);
INSERT INTO kepadat VALUES(null,23,"Vese",789,315,30,1);
INSERT INTO kepadat VALUES(null,24,"Epehólyag",1228,1221,30,1);
INSERT INTO kepadat VALUES(null,25,"Vékonybél",1165,1217,30,1);
INSERT INTO kepadat VALUES(null,26,"Hasnyálmirigy",1090,1218,30,1);
INSERT INTO kepadat VALUES(null,27,"Lép",1014,1219,30,1);
INSERT INTO kepadat VALUES(null,28,"Gyomor",949,1218,30,1);
INSERT INTO kepadat VALUES(null,29,"Máj",528,1122,30,1);
INSERT INTO kepadat VALUES(null,30,"Rekeszizom",481,1070,30,1);
INSERT INTO kepadat VALUES(null,31,"Szív",436,1010,30,1);
INSERT INTO kepadat VALUES(null,32,"Tüdők",378,956,30,1);
INSERT INTO kepadat VALUES(null,33,"Légcső",325,899,30,1);
INSERT INTO kepadat VALUES(null,34,"Nyelőcső",266,844,30,1);
INSERT INTO kepadat VALUES(null,35,"Nyakizmok",211,784,30,1);


INSERT INTO kepadat VALUES(null,8,"Nyelőcső",1583,145,35,2);
INSERT INTO kepadat VALUES(null,9,"Gyomor",1583,314,35,2);
INSERT INTO kepadat VALUES(null,10,"Hasnyálmirigy",1563,1001,35,2);
INSERT INTO kepadat VALUES(null,11,"Leszálló vastagbél",1557,1172,35,2);
INSERT INTO kepadat VALUES(null,12,"Vékonybél",1549,1344,35,2);
INSERT INTO kepadat VALUES(null,13,"Végbél",706,2192,35,2);
INSERT INTO kepadat VALUES(null,14,"Féregnyúlvány",561,2080,35,2);
INSERT INTO kepadat VALUES(null,15,"Vakbél",217,1626,35,2);
INSERT INTO kepadat VALUES(null,16,"Felszálló vastagbél",213,1465,35,2);
INSERT INTO kepadat VALUES(null,17,"Patkóbél",212,1287,35,2);
INSERT INTO kepadat VALUES(null,18,"Epehólyag",209,1129,35,2);
INSERT INTO kepadat VALUES(null,19,"Máj",205,965,35,2);

INSERT INTO kepadat VALUES(null,1,"Hálózat",1647,699,35,3);
INSERT INTO kepadat VALUES(null,2,"Omasum",1641,841,35,3);
INSERT INTO kepadat VALUES(null,3,"Abomasum",1635,985,35,3);
INSERT INTO kepadat VALUES(null,4,"Bél",153,1240,35,3);
INSERT INTO kepadat VALUES(null,5,"Bendő",200,68,35,3);
INSERT INTO kepadat VALUES(null,6,"Vezeték",352,77,35,3);
INSERT INTO kepadat VALUES(null,7,"Nyelőcső",518,71,35,3);

INSERT INTO kepadat VALUES(null,20,"Hörgőcskék",1512,767,35,4);
INSERT INTO kepadat VALUES(null,21,"Tüdők",265,767,35,4);
INSERT INTO kepadat VALUES(null,22,"Légcső",273,559,35,4);
INSERT INTO kepadat VALUES(null,23,"Gége",275,356,35,4);
INSERT INTO kepadat VALUES(null,24,"Gégefedő",268,145,35,4);

INSERT INTO kepadat VALUES(null,1,"Szemüreg",1641,367,35,5);
INSERT INTO kepadat VALUES(null,2,"Felső állkapocscsont",1640,464,35,5);
INSERT INTO kepadat VALUES(null,3,"Alsó állkapocscsont",1398,749,35,5);
INSERT INTO kepadat VALUES(null,4,"Lapocka",1317,812,35,5);
INSERT INTO kepadat VALUES(null,5,"Karcsont",1242,889,35,5);
INSERT INTO kepadat VALUES(null,6,"Orsócsont",1207,977,35,5);
INSERT INTO kepadat VALUES(null,7,"Ujjpercek",1207,1068,35,5);
INSERT INTO kepadat VALUES(null,8,"Pata",1199,1161,35,5);
INSERT INTO kepadat VALUES(null,9,"Lábközépcsont",113,1145,35,5);
INSERT INTO kepadat VALUES(null,10,"Lábtőcsont",110,1052,35,5);
INSERT INTO kepadat VALUES(null,11,"Tíbia",107,960,35,5);
INSERT INTO kepadat VALUES(null,12,"Térdkalács",106,879,35,5);
INSERT INTO kepadat VALUES(null,13,"Combcsont",108,784,35,5);
INSERT INTO kepadat VALUES(null,14,"Medence",636,352,35,5);
INSERT INTO kepadat VALUES(null,15,"Bordák",733,351,35,5);
INSERT INTO kepadat VALUES(null,16,"Csigolya",840,347,35,5);
INSERT INTO kepadat VALUES(null,17,"Atlas (Első nyakcsigolya)",928,345,35,5);
INSERT INTO kepadat VALUES(null,18,"Agancs",927,260,35,5);

INSERT INTO kepadat VALUES(null,25,"Függőér",1188,185,35,6);
INSERT INTO kepadat VALUES(null,26,"Tüdőverőerek",1365,186,35,6);
INSERT INTO kepadat VALUES(null,27,"Tüdővénák",1666,1126,35,6);
INSERT INTO kepadat VALUES(null,28,"Kéthegű billentyű",1656,1287,35,6);
INSERT INTO kepadat VALUES(null,29,"Bal kamra",1647,1456,35,6);
INSERT INTO kepadat VALUES(null,30,"Üreg utáni véna",121,585,35,6);
INSERT INTO kepadat VALUES(null,31,"Háromhegű billentyű",253,461,35,6);
INSERT INTO kepadat VALUES(null,32,"Jobb pitvar",364,339,35,6);
INSERT INTO kepadat VALUES(null,33,"Üreg előtti véna",489,221,35,6);
```
