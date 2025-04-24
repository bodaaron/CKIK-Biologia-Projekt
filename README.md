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
INSERT INTO kep VALUES(null,"A bőr mikroszkópikus szerkezete",7,1);
INSERT INTO kep VALUES(null,"A csontváz",8,1);
INSERT INTO kep VALUES(null,"A hajlító mechanizmus",9,1);
INSERT INTO kep VALUES(null,"A hallószerv",10,1);
INSERT INTO kep VALUES(null,"A koponyacsontok",11,1);
INSERT INTO kep VALUES(null,"A látószerv",12,1);
INSERT INTO kep VALUES(null,"A légzőrendszer",13,1);
INSERT INTO kep VALUES(null,"A szaglószerv",14,1);
INSERT INTO kep VALUES(null,"A szív és a nagyvérkör",15,1);
INSERT INTO kep VALUES(null,"Az emberi szív metszete",16,1);
INSERT INTO kep VALUES(null,"Az emberi szív",17,1);
INSERT INTO kep VALUES(null,"Az agy nyílirányú metszete",18,1);
INSERT INTO kep VALUES(null,"Az emésztőrendszer",19,1);
INSERT INTO kep VALUES(null,"Az idegrendszer",20,1);
INSERT INTO kep VALUES(null,"Az ízlelőszerv",21,1);
INSERT INTO kep VALUES(null,"Szájüreg",22,1);
INSERT INTO kep VALUES(null,"Fogak",23,1);
INSERT INTO kep VALUES(null,"Izmok",24,1);
INSERT INTO kep VALUES(null,"A 8 hónapos magzat",25,1);
INSERT INTO kep VALUES(null,"A here anatómiája",26,1);
INSERT INTO kep VALUES(null,"A hímivarsejt anatómiája",27,1);
INSERT INTO kep VALUES(null,"A hímivarsejtek útja",28,1);
INSERT INTO kep VALUES(null,"A hüvely a méh és a petevezeték metszetképe",29,1);
INSERT INTO kep VALUES(null,"A méhlepény belső felszíne",30,1);
INSERT INTO kep VALUES(null,"A női belső nemi szervek",31,1);
INSERT INTO kep VALUES(null,"A pete",32,1);
INSERT INTO kep VALUES(null,"A petezsák",33,0);
INSERT INTO kep VALUES(null,"A zigóta fejlődése és útja",34,1);
INSERT INTO kep VALUES(null,"Az embrionális fejlődés - 2 hónaposan a méhben",35,1);
INSERT INTO kep VALUES(null,"Az embrionális fejlődés - 3 hetes magzat",36,1);
INSERT INTO kep VALUES(null,"Az embrionális fejlődés - 21 naposan a méhben",37,1);
INSERT INTO kep VALUES(null,"Az emlő anatómiája",38,1);
INSERT INTO kep VALUES(null,"Férfi nemi szervek - nyíl irányú metszet",39,1);
INSERT INTO kep VALUES(null,"Férfi nemi szervek",40,1);
INSERT INTO kep VALUES(null,"Női nemi szervek - nyíl irányú metszet",41,1);
INSERT INTO kep VALUES(null,"Női nemi szervek",42,1);
INSERT INTO kep VALUES(null,"8 hetes magzat",43,0);
INSERT INTO kep VALUES(null,"A szivacstest metszete",44);
INSERT INTO kep VALUES(null,"Amőba",45);
INSERT INTO kep VALUES(null,"Ciliata",46);
INSERT INTO kep VALUES(null,"Ciliata protozon anatómiája",47);
INSERT INTO kep VALUES(null,"Gyűrűs féreg",48);
INSERT INTO kep VALUES(null,"Korall",49);
INSERT INTO kep VALUES(null,"Kovaszivacs metszet - 1",50);
INSERT INTO kep VALUES(null,"Kovaszivacs metszet - 2",51);
INSERT INTO kep VALUES(null,"Lapos féreg",52);
INSERT INTO kep VALUES(null,"Medúza metszete",53);
INSERT INTO kep VALUES(null,"Polip metszete",54);
INSERT INTO kep VALUES(null,"Radiolaria",55);
INSERT INTO kep VALUES(null,"Sztenofóra - 1",56);
INSERT INTO kep VALUES(null,"Sztenofóra - 2",57);
INSERT INTO kep VALUES(null,"Telepképző szivacsok",58);
INSERT INTO kep VALUES(null,"Tengeri uborka anatómiája",59);
INSERT INTO kep VALUES(null,"Tengeri gerinctelenek",60);
INSERT INTO kep VALUES(null,"A pók anatómiája",61);
INSERT INTO kep VALUES(null,"A rovarfej részei",62);
INSERT INTO kep VALUES(null,"A rovarláb felépítése",63);
INSERT INTO kep VALUES(null,"A rovarok anatómiája",64);
INSERT INTO kep VALUES(null,"A rovarok keringése",65);
INSERT INTO kep VALUES(null,"A rovarok külső felépítése",66);
INSERT INTO kep VALUES(null,"A rovarok légzése",67);
INSERT INTO kep VALUES(null,"A rovarok szájszervei",68);
INSERT INTO kep VALUES(null,"Rovarok - 1",69);
INSERT INTO kep VALUES(null,"Rovarok - 2",70);
INSERT INTO kep VALUES(null,"Ezerlábúak és rákok",71);
INSERT INTO kep VALUES(null,"Pókok, skorpiók és atkák",72);
INSERT INTO kep VALUES(null,"A béka belső szervei",73);
INSERT INTO kep VALUES(null,"A béka csontváza",74);
INSERT INTO kep VALUES(null,"A béka szive",75);
INSERT INTO kep VALUES(null,"A csiga",76);
INSERT INTO kep VALUES(null,"A csontos halak anatómiája",77);
INSERT INTO kep VALUES(null,"A halak csontváza",78);
INSERT INTO kep VALUES(null,"A halak szive",79);
INSERT INTO kep VALUES(null,"A hüllők anatómiája",80);
INSERT INTO kep VALUES(null,"A kagyló belső szervei",81);
INSERT INTO kep VALUES(null,"A kígyó fejének a csontjai",82);
INSERT INTO kep VALUES(null,"A kígyófej",83);
INSERT INTO kep VALUES(null,"A magasabbrendű hüllők szíve",84);
INSERT INTO kep VALUES(null,"A polip",85);
INSERT INTO kep VALUES(null,"A tintahal belső szervei",86);
INSERT INTO kep VALUES(null,"Cápa állkapocs",87);
INSERT INTO kep VALUES(null,"Halak - Emésztő és járulékos szervek - 1",88);
INSERT INTO kep VALUES(null,"Halak - Emésztő és járulékos szervek - 2",89);
INSERT INTO kep VALUES(null,"A madarak csontváza",90);
INSERT INTO kep VALUES(null,"A madarak emésztőszerv rendszere",91);
INSERT INTO kep VALUES(null,"A madarak külső megjelenése",92);
INSERT INTO kep VALUES(null,"A madarak légzőszervrendszere",93);
INSERT INTO kep VALUES(null,"A madarak szervezete",94);
INSERT INTO kep VALUES(null,"A tojás",95);


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

INSERT INTO kepadat VALUES(null,17,"Haj",1108,81,35,7);
INSERT INTO kepadat VALUES(null,18,"Érzékelő testek",1224,80,35,7);
INSERT INTO kepadat VALUES(null,19,"Irha",1678,402,35,7);
INSERT INTO kepadat VALUES(null,20,"Verejtékmirigy",99,1132,35,7);
INSERT INTO kepadat VALUES(null,21,"Hajhagyma",95,994,35,7);
INSERT INTO kepadat VALUES(null,22,"Idegek",99,866,35,7);
INSERT INTO kepadat VALUES(null,23,"Felhám",91,392,35,7);


INSERT INTO kepadat VALUES(null,1,"Koponya",1635,223,35,8);
INSERT INTO kepadat VALUES(null,2,"Kulcscsont",1635,306,35,8);
INSERT INTO kepadat VALUES(null,3,"Lapocka",1625,392,35,8);
INSERT INTO kepadat VALUES(null,4,"Borda",1621,479,35,8);
INSERT INTO kepadat VALUES(null,5,"Szegycsont",1625,555,35,8);
INSERT INTO kepadat VALUES(null,6,"Karcsont",1622,651,35,8);
INSERT INTO kepadat VALUES(null,7,"Gerincoszlop",1620,863,35,8);
INSERT INTO kepadat VALUES(null,8,"Medence",1620,948,35,8);
INSERT INTO kepadat VALUES(null,9,"Combcsont",1443,1526,35,8);
INSERT INTO kepadat VALUES(null,10,"Térdkalács",1450,1609,35,8);
INSERT INTO kepadat VALUES(null,11,"Szárkapocscsont",1445,1691,35,8);
INSERT INTO kepadat VALUES(null,12,"Sípcsont",1451,1774,35,8);
INSERT INTO kepadat VALUES(null,13,"Lábujjpercek",1445,1948,35,8);
INSERT INTO kepadat VALUES(null,14,"Alapperc",1447,2022,35,8);
INSERT INTO kepadat VALUES(null,15,"Körömperc",1450,2105,35,8);
INSERT INTO kepadat VALUES(null,16,"Lábtő",752,2256,35,8);
INSERT INTO kepadat VALUES(null,17,"Lábközépcsontok",621,2260,35,8);
INSERT INTO kepadat VALUES(null,18,"Körömperc",337,1349,35,8);
INSERT INTO kepadat VALUES(null,19,"Alapperc",213,1347,35,8);
INSERT INTO kepadat VALUES(null,20,"Kézujjpercek",140,1260,35,8);
INSERT INTO kepadat VALUES(null,21,"Kézközépcsontok",143,1175,35,8);
INSERT INTO kepadat VALUES(null,22,"Kéztőcsontok",144,1087,35,8);
INSERT INTO kepadat VALUES(null,23,"Singcsont",144,1009,35,8);
INSERT INTO kepadat VALUES(null,24,"Orsócsont",153,919,35,8);

INSERT INTO kepadat VALUES(null,20,"Könyökízület",1450,1714,35,9);
INSERT INTO kepadat VALUES(null,21,"Singcsont",1297,1794,35,9);
INSERT INTO kepadat VALUES(null,22,"Orsócsont",915,1190,35,9);
INSERT INTO kepadat VALUES(null,23,"Izom",930,1014,35,9);
INSERT INTO kepadat VALUES(null,24,"In",1085,267,35,9);
INSERT INTO kepadat VALUES(null,25,"Lapocka",1239,151,35,9);
INSERT INTO kepadat VALUES(null,26,"Kulcscsont",1394,69,35,9);
INSERT INTO kepadat VALUES(null,27,"In",147,1524,35,9);
INSERT INTO kepadat VALUES(null,28,"Karcsont",149,1363,35,9);
INSERT INTO kepadat VALUES(null,29,"Izom",145,1172,35,9);

INSERT INTO kepadat VALUES(null,7,"Csontos ívjáratok",1663,359,35,10);
INSERT INTO kepadat VALUES(null,8,"Hallóideg",1664,479,35,10);
INSERT INTO kepadat VALUES(null,9,"Tömlőcske",1663,589,35,10);
INSERT INTO kepadat VALUES(null,10,"Csiga",1670,720,35,10);
INSERT INTO kepadat VALUES(null,11,"Dobüreg",1671,826,35,10);
INSERT INTO kepadat VALUES(null,12,"Eustach kürt (Fülkürt)",1672,941,35,10);
INSERT INTO kepadat VALUES(null,13,"Dobhártya",540,1229,35,10);
INSERT INTO kepadat VALUES(null,14,"Hallócsontok",416,1224,35,10);
INSERT INTO kepadat VALUES(null,15,"Hallójárat",287,1225,35,10);
INSERT INTO kepadat VALUES(null,16,"Külsőfül",169,1225,35,10);

INSERT INTO kepadat VALUES(null,25,"Tarkócsont",1458,922,35,11);
INSERT INTO kepadat VALUES(null,26,"Falcsont",1339,988,35,11);
INSERT INTO kepadat VALUES(null,27,"Halántékcsont",1202,1066,35,11);
INSERT INTO kepadat VALUES(null,28,"Csecsnyúlvány",1079,1143,35,11);
INSERT INTO kepadat VALUES(null,29,"Külső Hallójárat",942,1220,35,11);
INSERT INTO kepadat VALUES(null,30,"Állcsont",109,645,35,11);
INSERT INTO kepadat VALUES(null,31,"Felső állcsont",131,524,35,11);
INSERT INTO kepadat VALUES(null,32,"Járomcsont",160,384,35,11);
INSERT INTO kepadat VALUES(null,33,"Orrcsont",200,260,35,11);
INSERT INTO kepadat VALUES(null,34,"Homlokcsont",235,151,35,11);

INSERT INTO kepadat VALUES(null,1,"Szemgolyó",1194,150,35,12);
INSERT INTO kepadat VALUES(null,2,"Felső szemhélyemelő",1342,153,35,12);
INSERT INTO kepadat VALUES(null,3,"Felső egyenes szemizom",1493,139,35,12);
INSERT INTO kepadat VALUES(null,4,"Külső egyenes szemizom",1639,153,35,12);
INSERT INTO kepadat VALUES(null,5,"Alsó egyenes szemizom",817,1242,35,12);
INSERT INTO kepadat VALUES(null,6,"Alsó ferde szemizom",961,1237,35,12);

INSERT INTO kepadat VALUES(null,1,"Orrüreg",1614,196,35,13);
INSERT INTO kepadat VALUES(null,2,"Garat",1613,322,35,13);
INSERT INTO kepadat VALUES(null,3,"Pajzsporc",1612,439,35,13);
INSERT INTO kepadat VALUES(null,4,"Pajzsmirigy",1607,560,35,13);
INSERT INTO kepadat VALUES(null,5,"Légcső",1613,685,35,13);
INSERT INTO kepadat VALUES(null,6,"Hörgő",1611,2077,35,13);
INSERT INTO kepadat VALUES(null,7,"Jobb tüdő",1614,2209,35,13);

INSERT INTO kepadat VALUES(null,1,"Szaglóideg",92,557,35,14);
INSERT INTO kepadat VALUES(null,2,"Szaglósejtek",95,667,35,14);

INSERT INTO kepadat VALUES(null,1,"Felső fő gyűjtőér",1613,268,35,15);
INSERT INTO kepadat VALUES(null,2,"Aorta ív",1617,352,35,15);
INSERT INTO kepadat VALUES(null,3,"Tüdőverőerek",1616,432,35,15);
INSERT INTO kepadat VALUES(null,4,"Szív",1620,510,35,15);
INSERT INTO kepadat VALUES(null,5,"Függőér",1617,591,35,15);
INSERT INTO kepadat VALUES(null,6,"Lép",1615,671,35,15);
INSERT INTO kepadat VALUES(null,7,"Máj",119,717,35,15);
INSERT INTO kepadat VALUES(null,8,"Alsó fő gyűjtőér",114,628,35,15);
INSERT INTO kepadat VALUES(null,9,"Tüdő",114,553,35,15);
INSERT INTO kepadat VALUES(null,10,"Vénák",118,467,35,15);

INSERT INTO kepadat VALUES(null,16,"Tüdőverőérágak",1602,346,35,16);
INSERT INTO kepadat VALUES(null,17,"Bal tüdővénák",1597,555,35,16);
INSERT INTO kepadat VALUES(null,18,"Bal pitvar",1607,782,35,16);
INSERT INTO kepadat VALUES(null,19,"Bal kamra",1597,986,35,16);
INSERT INTO kepadat VALUES(null,20,"Függőér",808,2190,35,16);
INSERT INTO kepadat VALUES(null,21,"Jobb kamra",633,2197,35,16);
INSERT INTO kepadat VALUES(null,22,"Alsó fő gyűjtőér",121,1245,35,16);
INSERT INTO kepadat VALUES(null,23,"Jobb pitvar",118,1029,35,16);
INSERT INTO kepadat VALUES(null,24,"Jobb tüdővéna",128,825,35,16);
INSERT INTO kepadat VALUES(null,25,"Fő felső gyüjtőér",128,581,35,16);

INSERT INTO kepadat VALUES(null,11,"Truncus brachiocepalicus seu arteria anonyma",289,139,80,17);
INSERT INTO kepadat VALUES(null,12,"Aorta ágak",573,141,80,17);
INSERT INTO kepadat VALUES(null,13,"Közös fejverőér",851,140,80,17);
INSERT INTO kepadat VALUES(null,14,"Kulcscsont alatti verőér",1130,139,80,17);
INSERT INTO kepadat VALUES(null,15,"Koszorús verőér",1415,147,80,17);

INSERT INTO kepadat VALUES(null,6,"Látóideg kereszteződés",753,126,50,18);
INSERT INTO kepadat VALUES(null,7,"Nagyagy",960,128,50,18);
INSERT INTO kepadat VALUES(null,8,"Híd",1136,121,50,18);
INSERT INTO kepadat VALUES(null,9,"Kisagy",1587,1517,50,18);
INSERT INTO kepadat VALUES(null,10,"Gerincvelő",1590,1691,50,18);
INSERT INTO kepadat VALUES(null,11,"Gerincoszlop",992,2227,50,18);
INSERT INTO kepadat VALUES(null,12,"Nyelőcső",802,2226,50,18);
INSERT INTO kepadat VALUES(null,13,"Légcső",618,2228,50,18);
INSERT INTO kepadat VALUES(null,14,"Gége",435,2234,50,18);
INSERT INTO kepadat VALUES(null,15,"Garat",262,2230,50,18);
INSERT INTO kepadat VALUES(null,16,"Nyelv",235,2061,50,18);
INSERT INTO kepadat VALUES(null,17,"Orrüreg",238,1885,50,18);

INSERT INTO kepadat VALUES(null,1,"Máj",1658,1489,35,19);
INSERT INTO kepadat VALUES(null,2,"Gyomor",1660,1613,35,19);
INSERT INTO kepadat VALUES(null,3,"Hasnyálmirigy",1660,1731,35,19);
INSERT INTO kepadat VALUES(null,4,"Gyomorkapu",1659,1843,35,19);
INSERT INTO kepadat VALUES(null,5,"Haránt vastagbél",1655,1959,35,19);
INSERT INTO kepadat VALUES(null,6,"Vékonybelek",1664,2072,35,19);
INSERT INTO kepadat VALUES(null,7,"Leszálló vastagbél",1663,2189,35,19);
INSERT INTO kepadat VALUES(null,8,"Végbél",317,2142,35,19);
INSERT INTO kepadat VALUES(null,9,"Féregnyúlvány",317,2024,35,19);
INSERT INTO kepadat VALUES(null,10,"Vakbél",316,1907,35,19);
INSERT INTO kepadat VALUES(null,11,"Ileosoecalis billentyű",320,1691,35,19);
INSERT INTO kepadat VALUES(null,12,"Felszálló vastagbél",320,1774,35,19);
INSERT INTO kepadat VALUES(null,13,"Epehólyag",125,1263,35,19);
INSERT INTO kepadat VALUES(null,14,"Gyomorszáj",117,1147,35,19);
INSERT INTO kepadat VALUES(null,15,"Nyelőcső",116,1030,35,19);

INSERT INTO kepadat VALUES(null,1,"Nagyagy",1489,241,35,20);
INSERT INTO kepadat VALUES(null,2,"Gerincvelő",1493,325,35,20);
INSERT INTO kepadat VALUES(null,3,"Afferens idegsejt",1498,402,35,20);
INSERT INTO kepadat VALUES(null,4,"Gerincvelői idegek",1409,1463,35,20);
INSERT INTO kepadat VALUES(null,5,"Efferens idegsejt",1402,1535,35,20);

INSERT INTO kepadat VALUES(null,3,"Gégefedő",1653,217,35,21);
INSERT INTO kepadat VALUES(null,4,"Szájpadmandulák",1656,323,35,21);
INSERT INTO kepadat VALUES(null,5,"Körülárkolt ízlelőbimbók",1658,433,35,21);
INSERT INTO kepadat VALUES(null,6,"Gomba alakú ízlelőbimbók",1662,537,35,21);
INSERT INTO kepadat VALUES(null,7,"Fonal alakú ízlelőbimbók",1661,643,35,21);

INSERT INTO kepadat VALUES(null,8,"Keményszájpad",1657,115,50,22);
INSERT INTO kepadat VALUES(null,9,"Nyelvcsap",1658,348,50,22);
INSERT INTO kepadat VALUES(null,10,"Torokszoros",1651,569,50,22);
INSERT INTO kepadat VALUES(null,11,"Szájpadmandula",1657,788,50,22);
INSERT INTO kepadat VALUES(null,12,"Nyelv",1653,1016,50,22);

INSERT INTO kepadat VALUES(null,13,"Nagyörlők",1377,1166,50,23);
INSERT INTO kepadat VALUES(null,14,"Kisörlők",1016,1171,50,23);
INSERT INTO kepadat VALUES(null,15,"Szemfogak",667,1182,50,23);
INSERT INTO kepadat VALUES(null,16,"Metszőfogak",323,1179,50,23);

INSERT INTO kepadat VALUES(null,1,"Fejbőrizmok",1614,119,35,24);
INSERT INTO kepadat VALUES(null,2,"Arcizmok",1617,203,35,24);
INSERT INTO kepadat VALUES(null,3,"Nyakizmok",1614,273,35,24);
INSERT INTO kepadat VALUES(null,4,"Delta izom",1615,365,35,24);
INSERT INTO kepadat VALUES(null,5,"Nagy mellizom",1613,445,35,24);
INSERT INTO kepadat VALUES(null,6,"Kétfejű karizom",1604,728,35,24);
INSERT INTO kepadat VALUES(null,7,"Egyenes hasizom",1598,807,35,24);
INSERT INTO kepadat VALUES(null,8,"Hajlító izmok",1597,884,35,24);
INSERT INTO kepadat VALUES(null,9,"Combfeszítő izom",1592,1558,35,24);
INSERT INTO kepadat VALUES(null,10,"Szabóizom",1584,1638,35,24);
INSERT INTO kepadat VALUES(null,11,"Ikerizom",1589,1886,35,24);
INSERT INTO kepadat VALUES(null,12,"Hajlítóizmok",1584,1965,35,24);
INSERT INTO kepadat VALUES(null,13,"Hosszú ujjfeszítő izom",368,1908,35,24);
INSERT INTO kepadat VALUES(null,14,"Elülső lábszárizom",368,1829,35,24);
INSERT INTO kepadat VALUES(null,15,"Musculus vastus medialis",368,1746,35,24);
INSERT INTO kepadat VALUES(null,16,"Musculus vastus lateralis",368,1662,35,24);
INSERT INTO kepadat VALUES(null,17,"Ujjfeszítő izmok",105,1037,35,24);
INSERT INTO kepadat VALUES(null,18,"Hasizmok",107,958,35,24);
INSERT INTO kepadat VALUES(null,19,"Csuklyásizom",434,246,35,24);


INSERT INTO kepadat VALUES(null,10,"Méhlepény",1254,63,35,25);
INSERT INTO kepadat VALUES(null,11,"Hullóhártya",1317,131,35,25);
INSERT INTO kepadat VALUES(null,12,"Külső magzatburokrés",1378,204,35,25);
INSERT INTO kepadat VALUES(null,13,"Hasüreg",1441,284,35,25);
INSERT INTO kepadat VALUES(null,14,"Köldökzsinór artériák",1493,354,35,25);
INSERT INTO kepadat VALUES(null,15,"Köldökzsinór vénák",1553,428,35,25);
INSERT INTO kepadat VALUES(null,16,"Köldökzsinór",1608,495,35,25);
INSERT INTO kepadat VALUES(null,17,"Magzatburok",1657,562,35,25);
INSERT INTO kepadat VALUES(null,18,"Köldök",1662,759,35,25);
INSERT INTO kepadat VALUES(null,19,"Magzatburok a magzatvízzel",1660,844,30,25);
INSERT INTO kepadat VALUES(null,20,"Méh",1620,996,30,25);
INSERT INTO kepadat VALUES(null,21,"Magzat",1582,1104,30,25);
INSERT INTO kepadat VALUES(null,22,"Húgyhólyag",1536,1205,30,25);
INSERT INTO kepadat VALUES(null,23,"Szeméremcsont ízületi felszíne",1489,1313,30,25);
INSERT INTO kepadat VALUES(null,24,"Csikló",944,2020,30,25);
INSERT INTO kepadat VALUES(null,25,"Húgycső ",945,2136,30,25);
INSERT INTO kepadat VALUES(null,26,"Hüvely",948,2243,30,25);
INSERT INTO kepadat VALUES(null,27,"Végbélnyílás",133,2211,30,25);
INSERT INTO kepadat VALUES(null,28,"Méhnyak",98,1015,30,25);
INSERT INTO kepadat VALUES(null,29,"Nyakcsatorna",95,910,30,25);
INSERT INTO kepadat VALUES(null,30,"Végbél",92,801,30,25);

INSERT INTO kepadat VALUES(null,14,"Mellékhere",692,138,70,26);
INSERT INTO kepadat VALUES(null,15,"Herecsatorna hálózat",849,136,70,26);
INSERT INTO kepadat VALUES(null,16,"Ondóvezeték",1003,136,70,26);
INSERT INTO kepadat VALUES(null,17,"Here",1584,1864,50,26);
INSERT INTO kepadat VALUES(null,18,"Herezacskó",1582,2042,50,26);
INSERT INTO kepadat VALUES(null,19,"Egyenes herecsatornák",137,1117,70,26);
INSERT INTO kepadat VALUES(null,20,"Kanyarulatos herecsatornák",133,952,70,26);
INSERT INTO kepadat VALUES(null,21,"Here lebenyke",136,792,70,26);
INSERT INTO kepadat VALUES(null,22,"Rostos hüvely",140,634,70,26);

INSERT INTO kepadat VALUES(null,23,"Fejsisak",1611,263,70,27);
INSERT INTO kepadat VALUES(null,24,"23 Chromosoma",1617,424,70,27);
INSERT INTO kepadat VALUES(null,25,"Centriolum ",1618,580,70,27);
INSERT INTO kepadat VALUES(null,26,"Axillaris szál",1618,743,70,27);
INSERT INTO kepadat VALUES(null,27,"Homloksík ",910,1206,70,27);
INSERT INTO kepadat VALUES(null,28,"Oldalsík ",631,1210,70,27);
INSERT INTO kepadat VALUES(null,29,"Farok",137,890,70,27);
INSERT INTO kepadat VALUES(null,30,"Nyak",136,662,70,27);
INSERT INTO kepadat VALUES(null,31,"Fej",144,427,70,27);

INSERT INTO kepadat VALUES(null,1,"Ondóvezeték",1054,73,35,28);
INSERT INTO kepadat VALUES(null,2,"Húgyhólyag",1245,71,35,28);
INSERT INTO kepadat VALUES(null,3,"Ondó Hólyag",1436,62,35,28);
INSERT INTO kepadat VALUES(null,4,"Dülmirigy ",1667,1144,35,28);
INSERT INTO kepadat VALUES(null,5,"Cowper Mirigy",1667,1250,35,28);
INSERT INTO kepadat VALUES(null,6,"Mellékhere",1469,1735,35,28);
INSERT INTO kepadat VALUES(null,7,"Hímivarsejt",1473,1841,35,28);
INSERT INTO kepadat VALUES(null,8,"Here",1281,2157,35,28);
INSERT INTO kepadat VALUES(null,9,"Ondó ",102,1673,35,28);
INSERT INTO kepadat VALUES(null,10,"Hímivarsejt ",99,1555,35,28);
INSERT INTO kepadat VALUES(null,11,"Ernyedt állapotú Hímvessző",459,1219,35,28);
INSERT INTO kepadat VALUES(null,12,"Erektált Hímvessző",459,1079,35,28);
INSERT INTO kepadat VALUES(null,13,"Vénák és artériák",458,927,35,28);

INSERT INTO kepadat VALUES(null,19,"Méh",298,99,30,29);
INSERT INTO kepadat VALUES(null,20,"Méhfenék",429,97,30,29);
INSERT INTO kepadat VALUES(null,21,"Méhüreg",556,99,30,29);
INSERT INTO kepadat VALUES(null,22,"Petevezető (Tuba-méhkürt)",1153,290,30,29);
INSERT INTO kepadat VALUES(null,23,"Kilökődött petesejt",1684,876,30,29);
INSERT INTO kepadat VALUES(null,24,"A méhkürt belsőnyálkahártyája",1682,985,30,29);
INSERT INTO kepadat VALUES(null,25,"A méhkürt bolyhai (nyúlványai)",1499,983,30,29);
INSERT INTO kepadat VALUES(null,26,"Kiürült tüsző (megrepedt tüsző)",1414,983,30,29);
INSERT INTO kepadat VALUES(null,27,"Petefészek",1253,979,30,29);
INSERT INTO kepadat VALUES(null,28,"A méh belső nyálkahártyája",994,801,30,29);
INSERT INTO kepadat VALUES(null,29,"A méhfal izomrétege",992,905,30,29);
INSERT INTO kepadat VALUES(null,30,"Külső nőinemiszerv (szeméremtest)",780,2091,30,29);
INSERT INTO kepadat VALUES(null,31,"Hüvelybemenet",255,2245,30,29);
INSERT INTO kepadat VALUES(null,32,"Nagy szeméremajkak",257,2162,30,29);
INSERT INTO kepadat VALUES(null,33,"Kis szeméremajkak",259,2074,30,29);
INSERT INTO kepadat VALUES(null,34,"Hüvely",256,1582,30,29);
INSERT INTO kepadat VALUES(null,35,"Spermiumok (hímivarsejtek)",260,1478,30,29);
INSERT INTO kepadat VALUES(null,36,"Nyakcsatorna",153,1222,30,29);
INSERT INTO kepadat VALUES(null,37,"Hüvelyboltozat",156,1120,30,29);
INSERT INTO kepadat VALUES(null,38,"Méhnyak",155,1014,30,29);
INSERT INTO kepadat VALUES(null,39,"Méhtest",153,905,30,29);

INSERT INTO kepadat VALUES(null,31,"Érhálózat",1214,107,75,30);
INSERT INTO kepadat VALUES(null,32,"Köldökzsinór ",1369,226,75,30);
INSERT INTO kepadat VALUES(null,33,"Artériák és vénák",1523,333,75,30);
INSERT INTO kepadat VALUES(null,34,"Magzatburok",1358,2090,75,30);

INSERT INTO kepadat VALUES(null,1,"Külső kötőszövetes burok",293,90,35,31);
INSERT INTO kepadat VALUES(null,2,"Elsődleges tüsző",417,98,35,31);
INSERT INTO kepadat VALUES(null,3,"Érésben lévő másodlagos tüsző",538,95,35,31);
INSERT INTO kepadat VALUES(null,4,"Harmadlagos tüsző ",866,95,35,31);
INSERT INTO kepadat VALUES(null,5,"A petefészek kéregállománya",986,96,35,31);
INSERT INTO kepadat VALUES(null,6,"Graaf–tüsző",1104,100,35,31);
INSERT INTO kepadat VALUES(null,7,"Tüsződomb ",1559,336,35,31);
INSERT INTO kepadat VALUES(null,8,"A tüsző ürege",1643,429,35,31);
INSERT INTO kepadat VALUES(null,9,"Petesejt ",1634,895,35,31);
INSERT INTO kepadat VALUES(null,10,"A petesejt magja",1535,960,35,31);
INSERT INTO kepadat VALUES(null,11,"Kilökődött petesejt",1424,1229,35,31);
INSERT INTO kepadat VALUES(null,12,"A megrepedt tüsző ",1296,1230,35,31);
INSERT INTO kepadat VALUES(null,13,"A tüsző helyén keletkezett vérzéses test",992,1230,35,31);
INSERT INTO kepadat VALUES(null,14,"A petefészek velő állománya",811,1222,35,31);
INSERT INTO kepadat VALUES(null,15,"A vérzéses testből kialakult sárgatest",557,1219,35,31);
INSERT INTO kepadat VALUES(null,16,"Fehértest",185,881,35,31);
INSERT INTO kepadat VALUES(null,17,"Vér erek",189,749,35,31);
INSERT INTO kepadat VALUES(null,18,"Nyél",61,523,35,31);

INSERT INTO kepadat VALUES(null,40,"Koronasejtek ",148,719,80,32);
INSERT INTO kepadat VALUES(null,41,"Sejtplazma ",155,490,80,32);
INSERT INTO kepadat VALUES(null,42,"Sarki testecskék",673,175,80,32);
INSERT INTO kepadat VALUES(null,43,"Átlátszó réteg",839,177,80,32);
INSERT INTO kepadat VALUES(null,44,"Spermiumsejt",1195,233,80,32);
INSERT INTO kepadat VALUES(null,45,"A hímivarsejt behatolása",1348,354,80,32);
INSERT INTO kepadat VALUES(null,46,"A petesejt magja a kromoszómákkal",1601,1036,80,32);


INSERT INTO kepadat VALUES(null,1,"Dosphera",224,1702,35,34);
INSERT INTO kepadat VALUES(null,"a","Megtermékenyítés",147,1479,35,34);
INSERT INTO kepadat VALUES(null,2,"Spermiumok behatolnak a petesejtbe",72,1479,35,34);
INSERT INTO kepadat VALUES(null,3,"A férfi és női maganyagok egyesülése (zygota)",96,1100,35,34);
INSERT INTO kepadat VALUES(null,4,"Az osztódás első stádiuma (mitosis)",168,702,35,34);
INSERT INTO kepadat VALUES(null,5,"Blastomer állapot",407,376,35,34);
INSERT INTO kepadat VALUES(null,"b","Első nappal a megtermékenyítés után",818,107,35,34);
INSERT INTO kepadat VALUES(null,6,"4 sejtű zygota",891,108,35,34);
INSERT INTO kepadat VALUES(null,"c","3. és 4. nap",1128,87,35,34);
INSERT INTO kepadat VALUES(null,7,"Morul a stádium",1205,93,35,34);
INSERT INTO kepadat VALUES(null,"d","5. nap",1515,144,35,34);
INSERT INTO kepadat VALUES(null,8,"Belső sejtvonal",1514,213,35,34);
INSERT INTO kepadat VALUES(null,9,"Méhüreg",1591,219,35,34);
INSERT INTO kepadat VALUES(null,10,"Külső sejtréteg ",1666,219,35,34);
INSERT INTO kepadat VALUES(null,11,"Méhüreg",1394,656,35,34);
INSERT INTO kepadat VALUES(null,12,"A méhnyálkahártya deciduális átalakulása",1242,1204,35,34);
INSERT INTO kepadat VALUES(null,13,"Méh",1196,1148,35,34);
INSERT INTO kepadat VALUES(null,14,"Petefészek",1142,1216,35,34);
INSERT INTO kepadat VALUES(null,15,"Petevezeték",866,659,35,34);
INSERT INTO kepadat VALUES(null,"e","6. és 7. nap",784,1303,35,34);
INSERT INTO kepadat VALUES(null,16,"Blastocysta",786,1382,35,34);
INSERT INTO kepadat VALUES(null,17,"Alapi hullóhártya",786,1461,35,34);
INSERT INTO kepadat VALUES(null,"f","8. nap",780,1776,35,34);
INSERT INTO kepadat VALUES(null,18,"Blastocysták",779,1863,35,34);
INSERT INTO kepadat VALUES(null,19,"Testnyél",779,1945,35,34);
INSERT INTO kepadat VALUES(null,20,"Alapi Hullóhártya",783,2031,35,34);

INSERT INTO kepadat VALUES(null,17,"Méhüreg",390,120,80,35);
INSERT INTO kepadat VALUES(null,18,"Hullohártya",552,127,80,35);
INSERT INTO kepadat VALUES(null,19,"Méh",715,126,80,35);
INSERT INTO kepadat VALUES(null,20,"Méhlepény",1608,1599,80,35);
INSERT INTO kepadat VALUES(null,21,"Magzatburok üreg",1528,1768,80,35);
INSERT INTO kepadat VALUES(null,22,"Külső magzatburok",1436,1911,80,35);
INSERT INTO kepadat VALUES(null,23,"Pete",1322,2062,80,35);
INSERT INTO kepadat VALUES(null,24,"Belső méhszáj",479,2135,80,35);
INSERT INTO kepadat VALUES(null,25,"Köldökzsák",367,1994,80,35);
INSERT INTO kepadat VALUES(null,26,"Külső magzatburokrés",264,1854,80,35);
INSERT INTO kepadat VALUES(null,27,"Magzat",107,1526,80,35);
INSERT INTO kepadat VALUES(null,28,"Köldökzsinór",109,1344,80,35);
INSERT INTO kepadat VALUES(null,29,"Méhlepény",108,1139,80,35);

INSERT INTO kepadat VALUES(null,1,"Hullóhártya",156,85,40,36);
INSERT INTO kepadat VALUES(null,2,"Magzaton kívüli üreg",157,253,40,36);
INSERT INTO kepadat VALUES(null,3,"Másodlagos petehártya",156,421,40,36);
INSERT INTO kepadat VALUES(null,4,"Embriónyél",152,587,40,36);
INSERT INTO kepadat VALUES(null,5,"Későbbi magzati sejtek",148,762,40,36);
INSERT INTO kepadat VALUES(null,6,"Magzatburok üreg",148,928,40,36);
INSERT INTO kepadat VALUES(null,7,"Külső magzatburokrés ",152,1096,40,36);

INSERT INTO kepadat VALUES(null,8,"Külső magzatburokrés",351,131,50,37);
INSERT INTO kepadat VALUES(null,9,"Petehártya",545,130,50,37);
INSERT INTO kepadat VALUES(null,10,"Alapi hullóhártya",739,138,50,37);
INSERT INTO kepadat VALUES(null,11,"Méhüreg",936,132,50,37);
INSERT INTO kepadat VALUES(null,12,"Méh",1128,124,50,37);
INSERT INTO kepadat VALUES(null,13,"Másodlagos petehártya",1467,1909,50,37);
INSERT INTO kepadat VALUES(null,14,"Külső magzatburokrés",1382,2067,50,37);
INSERT INTO kepadat VALUES(null,15,"Magzat",289,1920,50,37);
INSERT INTO kepadat VALUES(null,16,"Magzatburok üreg",186,1772,50,37);

INSERT INTO kepadat VALUES(null,1,"Emlőbimbóudvar",1334,104,60,38);
INSERT INTO kepadat VALUES(null,2,"Emlők",1488,107,60,38);
INSERT INTO kepadat VALUES(null,3,"Az emlők zsírszövete",1649,98,60,38);
INSERT INTO kepadat VALUES(null,4,"Emlőmirigy lebenyek",1656,261,60,38);
INSERT INTO kepadat VALUES(null,5,"Nagy mellizom",1649,421,60,38);
INSERT INTO kepadat VALUES(null,6,"Erek",1656,581,60,38);
INSERT INTO kepadat VALUES(null,7,"Tejvezeték",1654,737,60,38);
INSERT INTO kepadat VALUES(null,8,"Kis mellizom",1652,887,60,38);
INSERT INTO kepadat VALUES(null,9,"Mellbimbó",1654,1043,60,38);

INSERT INTO kepadat VALUES(null,1,"Húgy vezeték",1098,82,35,39);
INSERT INTO kepadat VALUES(null,2,"Húgy hólyag",1189,82,35,39);
INSERT INTO kepadat VALUES(null,3,"Végbél",1277,79,35,39);
INSERT INTO kepadat VALUES(null,4,"Keresztcsont",1666,664,35,39);
INSERT INTO kepadat VALUES(null,5,"Farokcsont",1657,1345,35,39);
INSERT INTO kepadat VALUES(null,6,"Ondóhólyag",1593,1502,35,39);
INSERT INTO kepadat VALUES(null,7,"Dülmirigy",1594,1590,35,39);
INSERT INTO kepadat VALUES(null,8,"Cowper mirigy",1595,1676,35,39);
INSERT INTO kepadat VALUES(null,9,"Vénás fonat",1591,1767,35,39);
INSERT INTO kepadat VALUES(null,10,"Végbélzáró izom",1474,1913,35,39);
INSERT INTO kepadat VALUES(null,11,"Végbélnyílás",1481,2050,35,39);
INSERT INTO kepadat VALUES(null,12,"Hugycső-hagyma",1382,2262,35,39);
INSERT INTO kepadat VALUES(null,13,"Hugycső",1306,2263,35,39);
INSERT INTO kepadat VALUES(null,14,"Szivacsos test",1215,2265,35,39);
INSERT INTO kepadat VALUES(null,15,"Herezacskó",349,2266,35,39);
INSERT INTO kepadat VALUES(null,16,"Here",287,2200,35,39);
INSERT INTO kepadat VALUES(null,17,"Mellékhere",222,2138,35,39);
INSERT INTO kepadat VALUES(null,18,"Fitymafék",162,2078,35,39);
INSERT INTO kepadat VALUES(null,19,"Húgycső nyílás",102,1937,35,39);
INSERT INTO kepadat VALUES(null,20,"Makk",102,1857,35,39);
INSERT INTO kepadat VALUES(null,21,"Fityma",106,1783,35,39);
INSERT INTO kepadat VALUES(null,22,"Szivacsos test",105,1698,35,39);
INSERT INTO kepadat VALUES(null,23,"Barlangos test",105,1616,35,39);
INSERT INTO kepadat VALUES(null,24,"Hímvessző",104,1382,35,39);
INSERT INTO kepadat VALUES(null,25,"Santorini féle vénás fonat",106,1301,35,39);
INSERT INTO kepadat VALUES(null,26,"Hímvessző rögzítő szalagok",103,1215,35,39);
INSERT INTO kepadat VALUES(null,27,"Szeméremcsont",107,1127,35,39);
INSERT INTO kepadat VALUES(null,28,"Egyenes hasizom",102,840,35,39);
INSERT INTO kepadat VALUES(null,29,"Ondóvezeték ",103,752,35,39);
INSERT INTO kepadat VALUES(null,30,"Hasfal",100,664,35,39);
INSERT INTO kepadat VALUES(null,31,"Hashártya",101,576,35,39);

INSERT INTO kepadat VALUES(null,1,"Ondóvezeték",1570,1257,35,40);
INSERT INTO kepadat VALUES(null,2,"Herezacskó",1482,1258,35,40);
INSERT INTO kepadat VALUES(null,3,"Mellékhere",1392,1256,35,40);
INSERT INTO kepadat VALUES(null,4,"Húgycső nyílás",1260,1255,35,40);
INSERT INTO kepadat VALUES(null,5,"Here",1116,1259,35,40);
INSERT INTO kepadat VALUES(null,6,"Hímvessző",79,1128,35,40);
INSERT INTO kepadat VALUES(null,7,"Húgycső",80,1049,35,40);
INSERT INTO kepadat VALUES(null,8,"Cowper mirigy",84,966,35,40);
INSERT INTO kepadat VALUES(null,9,"Húgycső-hagyma",81,886,35,40);
INSERT INTO kepadat VALUES(null,10,"Dülmirigy",82,803,35,40);
INSERT INTO kepadat VALUES(null,11,"Ondóhólyag",82,724,35,40);

INSERT INTO kepadat VALUES(null,1,"Méhkürt",854,81,35,41);
INSERT INTO kepadat VALUES(null,2,"Petefészek",1004,84,35,41);
INSERT INTO kepadat VALUES(null,3,"Petefészek és méh közötti szalag",1162,81,35,41);
INSERT INTO kepadat VALUES(null,4,"Húgy vezeték",1318,81,35,41);
INSERT INTO kepadat VALUES(null,5,"Méh",1638,416,35,41);
INSERT INTO kepadat VALUES(null,6,"Végbél",1636,518,35,41);
INSERT INTO kepadat VALUES(null,7,"Keresztcsont",1694,874,35,41);
INSERT INTO kepadat VALUES(null,8,"Farokcsont",1685,1331,35,41);
INSERT INTO kepadat VALUES(null,9,"Hátsó hüvelyboltozat",1689,1663,35,41);
INSERT INTO kepadat VALUES(null,10,"Nyakcsatorna",1651,1733,35,41);
INSERT INTO kepadat VALUES(null,11,"Végbél kiöblösödése",1624,1803,35,41);
INSERT INTO kepadat VALUES(null,12,"Méhnyak",1590,1871,35,41);
INSERT INTO kepadat VALUES(null,13,"Elülső hüvelyboltozat",1556,1937,35,41);
INSERT INTO kepadat VALUES(null,14,"Vénáspont",1522,2007,35,41);
INSERT INTO kepadat VALUES(null,15,"Végbélzáróizom",1491,2075,35,41);
INSERT INTO kepadat VALUES(null,16,"Végbélnyílás",1420,2201,35,41);
INSERT INTO kepadat VALUES(null,17,"Hüvely",1395,2271,35,41);
INSERT INTO kepadat VALUES(null,18,"Szűzhártya",363,2238,35,41);
INSERT INTO kepadat VALUES(null,19,"Szeméremtest",332,2103,35,41);
INSERT INTO kepadat VALUES(null,20,"Nagy szeméremajkak",308,2001,35,41);
INSERT INTO kepadat VALUES(null,21,"Kis szeméremajkak",291,1913,35,41);
INSERT INTO kepadat VALUES(null,22,"Csikló",262,1793,35,41);
INSERT INTO kepadat VALUES(null,23,"Csiklórögzítő szalagok",246,1718,35,41);
INSERT INTO kepadat VALUES(null,24,"Húgycső",224,1647,35,41);
INSERT INTO kepadat VALUES(null,25,"Santorini féle vénás fonat",207,1576,35,41);
INSERT INTO kepadat VALUES(null,26,"Szeméremcsont ízületi felszíne",185,1502,35,41);
INSERT INTO kepadat VALUES(null,27,"Szeméremcsont",170,1429,35,41);
INSERT INTO kepadat VALUES(null,28,"Húgy vezeték bevezető",152,1358,35,41);
INSERT INTO kepadat VALUES(null,29,"Húgyhólyag",133,1284,35,41);
INSERT INTO kepadat VALUES(null,30,"Egyenes hasizom",83,1061,35,41);
INSERT INTO kepadat VALUES(null,31,"Hashártya",65,985,35,41);

INSERT INTO kepadat VALUES(null,12,"Petevezeték",1664,345,35,42);
INSERT INTO kepadat VALUES(null,13,"Petefészek szalag",1665,433,35,42);
INSERT INTO kepadat VALUES(null,14,"Petefészek",1663,522,35,42);
INSERT INTO kepadat VALUES(null,15,"Méh",1660,611,35,42);
INSERT INTO kepadat VALUES(null,16,"Kerek méhszalag",1660,699,35,42);
INSERT INTO kepadat VALUES(null,17,"Hüvelyboltozat",1661,787,35,42);
INSERT INTO kepadat VALUES(null,18,"Külső méhszáj és méhnyak",1660,877,35,42);
INSERT INTO kepadat VALUES(null,19,"Méhnyak",1665,966,35,42);
INSERT INTO kepadat VALUES(null,20,"Húgycső",1660,1054,35,42);
INSERT INTO kepadat VALUES(null,21,"Batholin mirigyek",1660,1145,35,42);
INSERT INTO kepadat VALUES(null,22,"Szeméremtest",1667,1236,35,42);
