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
INSERT INTO kep VALUES(1,"A kutya anatómiája",1,1);
INSERT INTO kep VALUES(2,"A mindenevő állat emésztőrendszere",2,1);
INSERT INTO kep VALUES(3,"A növényevő állat emésztőrendszere",3,1);
INSERT INTO kep VALUES(4,"A növényevő állat légzőrendszere",4,1);
INSERT INTO kep VALUES(5,"A szarvas csontváza",5,1);
INSERT INTO kep VALUES(6,"Gerincesek szíve",6,1);
INSERT INTO kep VALUES(7,"A bőr mikroszkópikus szerkezete",7,1);
INSERT INTO kep VALUES(8,"A csontváz",8,1);
INSERT INTO kep VALUES(9,"A hajlító mechanizmus",9,1);
INSERT INTO kep VALUES(10,"A hallószerv",10,1);
INSERT INTO kep VALUES(11,"A koponyacsontok",11,1);
INSERT INTO kep VALUES(12,"A látószerv",12,1);
INSERT INTO kep VALUES(13,"A légzőrendszer",13,1);
INSERT INTO kep VALUES(14,"A szaglószerv",14,1);
INSERT INTO kep VALUES(15,"A szív és a nagyvérkör",15,1);
INSERT INTO kep VALUES(16,"Az emberi szív metszete",16,1);
INSERT INTO kep VALUES(17,"Az emberi szív",17,1);
INSERT INTO kep VALUES(18,"Az agy nyílirányú metszete",18,1);
INSERT INTO kep VALUES(19,"Az emésztőrendszer",19,1);
INSERT INTO kep VALUES(20,"Az idegrendszer",20,1);
INSERT INTO kep VALUES(21,"Az ízlelőszerv",21,1);
INSERT INTO kep VALUES(22,"Szájüreg",22,1);
INSERT INTO kep VALUES(23,"Fogak",23,1);
INSERT INTO kep VALUES(24,"Izmok",24,1);
INSERT INTO kep VALUES(25,"A 8 hónapos magzat",25,1);
INSERT INTO kep VALUES(26,"A here anatómiája",26,1);
INSERT INTO kep VALUES(27,"A hímivarsejt anatómiája",27,1);
INSERT INTO kep VALUES(28,"A hímivarsejtek útja",28,1);
INSERT INTO kep VALUES(29,"A hüvely a méh és a petevezeték metszetképe",29,1);
INSERT INTO kep VALUES(30,"A méhlepény belső felszíne",30,1);
INSERT INTO kep VALUES(31,"A női belső nemi szervek",31,1);
INSERT INTO kep VALUES(32,"A pete",32,1);
INSERT INTO kep VALUES(33,"A petezsák",33,0);
INSERT INTO kep VALUES(34,"A zigóta fejlődése és útja",34,1);
INSERT INTO kep VALUES(35,"Az embrionális fejlődés - 2 hónaposan a méhben",35,1);
INSERT INTO kep VALUES(36,"Az embrionális fejlődés - 3 hetes magzat",36,1);
INSERT INTO kep VALUES(37,"Az embrionális fejlődés - 21 naposan a méhben",37,1);
INSERT INTO kep VALUES(38,"Az emlő anatómiája",38,1);
INSERT INTO kep VALUES(39,"Férfi nemi szervek - nyíl irányú metszet",39,1);
INSERT INTO kep VALUES(40,"Férfi nemi szervek",40,1);
INSERT INTO kep VALUES(41,"Női nemi szervek - nyíl irányú metszet",41,1);
INSERT INTO kep VALUES(42,"Női nemi szervek",42,1);
INSERT INTO kep VALUES(43,"8 hetes magzat",43,0);
INSERT INTO kep VALUES(44,"A szivacstest metszete",44,1);
INSERT INTO kep VALUES(45,"Amőba",45,1);
INSERT INTO kep VALUES(46,"Ciliata",46,0);
INSERT INTO kep VALUES(47,"Ciliata protozon anatómiája",47,1);
INSERT INTO kep VALUES(48,"Gyűrűs féreg",48,0);
INSERT INTO kep VALUES(49,"Korall",49,0);
INSERT INTO kep VALUES(50,"Kovaszivacs metszet",50,1);
INSERT INTO kep VALUES(51,"Lapos féreg",51,1);
INSERT INTO kep VALUES(52,"Medúza metszete",52,1);
INSERT INTO kep VALUES(53,"Polip metszete",53,1);
INSERT INTO kep VALUES(54,"Radiolaria",54,0);
INSERT INTO kep VALUES(55,"Sztenofóra - 1",55,1);
INSERT INTO kep VALUES(56,"Sztenofóra - 2",56,1);
INSERT INTO kep VALUES(57,"Telepképző szivacsok",57,1);
INSERT INTO kep VALUES(58,"Tengeri uborka anatómiája",58,1);
INSERT INTO kep VALUES(59,"Tengeri gerinctelenek",59,1);
INSERT INTO kep VALUES(60,"A pók anatómiája",60,1);
INSERT INTO kep VALUES(61,"A rovarfej részei",61,1);
INSERT INTO kep VALUES(62,"A rovarláb felépítése",62,1);
INSERT INTO kep VALUES(63,"A rovarok anatómiája",63,1);
INSERT INTO kep VALUES(64,"A rovarok keringése",64,1);
INSERT INTO kep VALUES(65,"A rovarok külső felépítése",65,1);
INSERT INTO kep VALUES(66,"A rovarok légzése",66,1);
INSERT INTO kep VALUES(67,"A rovarok szájszervei",67,1);
INSERT INTO kep VALUES(68,"Rovarok - 1",68,1);
INSERT INTO kep VALUES(69,"Rovarok - 2",69,1);
INSERT INTO kep VALUES(70,"Ezerlábúak és rákok",70,1);
INSERT INTO kep VALUES(71,"Pókok, skorpiók és atkák",71,1);
INSERT INTO kep VALUES(72,"A béka belső szervei",72,1);
INSERT INTO kep VALUES(73,"A béka csontváza",73,1);
INSERT INTO kep VALUES(74,"A béka szive",74,1);
INSERT INTO kep VALUES(75,"A csiga",75,1);
INSERT INTO kep VALUES(76,"A csontos halak anatómiája",76,1);
INSERT INTO kep VALUES(77,"A halak csontváza",77,1);
INSERT INTO kep VALUES(78,"A halak szive",78,1);
INSERT INTO kep VALUES(79,"A hüllők anatómiája",79,1);
INSERT INTO kep VALUES(80,"A kagyló belső szervei",80,1);
INSERT INTO kep VALUES(81,"A kígyó fejének a csontjai",81,1);
INSERT INTO kep VALUES(82,"A kígyófej",82,1);
INSERT INTO kep VALUES(83,"A magasabbrendű hüllők szíve",83,1);
INSERT INTO kep VALUES(84,"A polip",84,0);
INSERT INTO kep VALUES(85,"A tintahal belső szervei",85,1);
INSERT INTO kep VALUES(86,"Cápa állkapocs",86,0);
INSERT INTO kep VALUES(87,"Halak - Emésztő és járulékos szervek - 1",87,1);
INSERT INTO kep VALUES(88,"Halak - Emésztő és járulékos szervek - 2",88,1);
INSERT INTO kep VALUES(89,"A madarak csontváza",89,1);
INSERT INTO kep VALUES(90,"A madarak emésztőszerv rendszere",90,1);
INSERT INTO kep VALUES(91,"A madarak külső megjelenése",91,1);
INSERT INTO kep VALUES(92,"A madarak légzőszervrendszere",92,1);
INSERT INTO kep VALUES(93,"A madarak szervezete",93,1);
INSERT INTO kep VALUES(94,"A tojás",94,1);


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

INSERT INTO kepadat VALUES(null,7,"Töltelékszövetek (Mezoderma)",1585,550,35,44);
INSERT INTO kepadat VALUES(null,8,"Vázképződmény",1532,1049,35,44);
INSERT INTO kepadat VALUES(null,9,"Pórusok",1451,1101,35,44);
INSERT INTO kepadat VALUES(null,10,"Külső sejtréteg (Ektoderma)",1370,1155,35,44);
INSERT INTO kepadat VALUES(null,11,"Vándorsejtek (Amőboid sejtek)",1085,1234,35,44);
INSERT INTO kepadat VALUES(null,12,"Csatornahálózat",994,1233,35,44);
INSERT INTO kepadat VALUES(null,13,"Tüskék",834,1227,35,44);
INSERT INTO kepadat VALUES(null,14,"Megtermékenyített szaporítósejt",745,1229,35,44);
INSERT INTO kepadat VALUES(null,15,"Pórusok",657,1229,35,44);
INSERT INTO kepadat VALUES(null,16,"Vázképző sejtek",298,1110,35,44);
INSERT INTO kepadat VALUES(null,17,"Kovatüske",160,1035,35,44);
INSERT INTO kepadat VALUES(null,18,"Vázképző sejtek",68,983,35,44);
INSERT INTO kepadat VALUES(null,19,"Ivarsejt",512,77,35,44);
INSERT INTO kepadat VALUES(null,20,"Galléros ostoros sejtek",593,131,35,44);
INSERT INTO kepadat VALUES(null,21,"Vándorsejtek",669,182,35,44);

INSERT INTO kepadat VALUES(null,1,"Álláb",1644,748,45,45);
INSERT INTO kepadat VALUES(null,2,"Mag",1644,874,45,45);
INSERT INTO kepadat VALUES(null,3,"Vacuolum",1642,995,45,45);

INSERT INTO kepadat VALUES(null,4,"Cilia",1545,929,35,47);
INSERT INTO kepadat VALUES(null,5,"Zárványtest",1458,983,35,47);
INSERT INTO kepadat VALUES(null,6,"Emésztő rendszer",1380,1040,35,47);
INSERT INTO kepadat VALUES(null,7,"Láb vacuolum",1304,1093,35,47);
INSERT INTO kepadat VALUES(null,8,"Gullet",1223,1148,35,47);
INSERT INTO kepadat VALUES(null,9,"Szájnyílás",1143,1204,35,47);
INSERT INTO kepadat VALUES(null,10,"Cilia",336,295,35,47);
INSERT INTO kepadat VALUES(null,11,"Összehúzódó vacuolumok",421,254,35,47);
INSERT INTO kepadat VALUES(null,12,"Kiválasztó nyílás",504,215,35,47);
INSERT INTO kepadat VALUES(null,13,"Láb vacuolum",586,172,35,47);
INSERT INTO kepadat VALUES(null,14,"Nagymag",667,130,35,47);
INSERT INTO kepadat VALUES(null,15,"Kismag",745,94,35,47);

INSERT INTO kepadat VALUES(null,1,"(Ős) Szájnyílás",1654,394,50,50);
INSERT INTO kepadat VALUES(null,2,"(Ős) Bélüreg",1654,558,50,50);
INSERT INTO kepadat VALUES(null,3,"Bélüreget határoló sejtréteg",1650,706,50,50);

INSERT INTO kepadat VALUES(null,1,"Scoolex",1646,395,45,51);
INSERT INTO kepadat VALUES(null,2,"Proglottis",1655,566,45,51);
INSERT INTO kepadat VALUES(null,3,"Scoolex nyílás",655,1223,45,51);

INSERT INTO kepadat VALUES(null,16,"Ectoderma",749,206,110,52);
INSERT INTO kepadat VALUES(null,17,"Endoderma",1106,194,110,52);
INSERT INTO kepadat VALUES(null,18,"Mezoderma",1441,178,110,52);
INSERT INTO kepadat VALUES(null,19,"Ostor",852,2139,110,52);
INSERT INTO kepadat VALUES(null,20,"Száj",1200,2130,110,52);

INSERT INTO kepadat VALUES(null,21,"Ostor",1599,1068,100,53);
INSERT INTO kepadat VALUES(null,22,"Endoderma",1596,834,100,53);
INSERT INTO kepadat VALUES(null,23,"Száj",1603,598,100,53);
INSERT INTO kepadat VALUES(null,24,"Ectoderma",1592,388,100,53);
INSERT INTO kepadat VALUES(null,25,"Gyomorér-üreg",1587,160,100,53);

INSERT INTO kepadat VALUES(null,4,"Ostor",1546,331,60,55);
INSERT INTO kepadat VALUES(null,5,"Sugárcsatorna",1559,532,60,55);
INSERT INTO kepadat VALUES(null,6,"Harántcsatorna",1574,728,60,55);
INSERT INTO kepadat VALUES(null,7,"Gyomor",1584,929,60,55);
INSERT INTO kepadat VALUES(null,8,"Közti sugárcsatorna",1595,1124,60,55);

INSERT INTO kepadat VALUES(null,9,"Csáp nyílása",1655,885,50,56);
INSERT INTO kepadat VALUES(null,10,"Gyomor",1644,1050,50,56);
INSERT INTO kepadat VALUES(null,11,"Száj",1652,1223,50,56);
INSERT INTO kepadat VALUES(null,12,"Harántcsatorna",100,724,50,56);
INSERT INTO kepadat VALUES(null,13,"Meridionális csatornák",100,555,50,56);
INSERT INTO kepadat VALUES(null,14,"Kiválasztó nyílás",100,386,50,56);
INSERT INTO kepadat VALUES(null,15,"Sztatociszta",103,220,50,56);

INSERT INTO kepadat VALUES(null,4,"Ősbélüreg",197,217,35,57);
INSERT INTO kepadat VALUES(null,5,"Pórusok",297,143,35,57);
INSERT INTO kepadat VALUES(null,6,"Szájnyílás",399,73,35,57);

INSERT INTO kepadat VALUES(null,1,"Végbélnyílás",1159,83,45,58);
INSERT INTO kepadat VALUES(null,2,"Madrepora lemez",1326,89,45,58);
INSERT INTO kepadat VALUES(null,3,"Polian hólyag",1516,819,45,58);
INSERT INTO kepadat VALUES(null,4,"Szájnyílás",1356,888,45,58);
INSERT INTO kepadat VALUES(null,5,"Gyomor",1201,959,45,58);
INSERT INTO kepadat VALUES(null,6,"A vízedényrendszer gyűrűcsatornája",1040,1028,45,58);
INSERT INTO kepadat VALUES(null,7,"Sugárirányú csatorna",894,1092,45,58);
INSERT INTO kepadat VALUES(null,8,"A vízérrendszer ampullája és lábkürtje",737,1156,45,58);
INSERT INTO kepadat VALUES(null,9,"Emésztőrmirigyek",587,1235,45,58);

INSERT INTO kepadat VALUES(null,"a","Tengeri csillag",649,295,35,59);
INSERT INTO kepadat VALUES(null,"b","Tengeri liliom",1430,279,35,59);
INSERT INTO kepadat VALUES(null,"c","Tengeri uborka",252,601,35,59);
INSERT INTO kepadat VALUES(null,"d","Tengeri sün",1163,1537,35,59);

INSERT INTO kepadat VALUES(null,1,"Gyomor",964,212,45,60);
INSERT INTO kepadat VALUES(null,2,"Gyomor pumpáló izmok",1089,212,45,60);
INSERT INTO kepadat VALUES(null,3,"Elülső gyomor",1206,212,45,60);
INSERT INTO kepadat VALUES(null,4,"Méregmirigy",1330,221,45,60);
INSERT INTO kepadat VALUES(null,5,"Pontszemek",1448,223,45,60);
INSERT INTO kepadat VALUES(null,6,"Csápok",1539,1064,45,60);
INSERT INTO kepadat VALUES(null,7,"Csáprágók",1430,1114,45,60);
INSERT INTO kepadat VALUES(null,8,"Szájnyílás",1314,1155,45,60);
INSERT INTO kepadat VALUES(null,9,"Dúcidegrendszer",1205,1199,45,60);
INSERT INTO kepadat VALUES(null,10,"Ízeltláb",852,1217,45,60);
INSERT INTO kepadat VALUES(null,11,"Potroh ideg",739,1215,45,60);
INSERT INTO kepadat VALUES(null,12,"Lemezes *tüdő*",615,1217,45,60);
INSERT INTO kepadat VALUES(null,13,"Szövőmirigy",491,1208,45,60);
INSERT INTO kepadat VALUES(null,14,"Légcső (trachea)",370,1208,45,60);
INSERT INTO kepadat VALUES(null,15,"Fonószemölcs",246,1209,45,60);
INSERT INTO kepadat VALUES(null,16,"Malpighi-edények",106,253,45,60);
INSERT INTO kepadat VALUES(null,17,"Petefészek",213,171,45,60);
INSERT INTO kepadat VALUES(null,18,"Bélcsatorna",320,99,45,60);
INSERT INTO kepadat VALUES(null,19,"Máj",435,97,45,60);
INSERT INTO kepadat VALUES(null,20,"Epevezeték",559,91,45,60);
INSERT INTO kepadat VALUES(null,21,"Szív",682,90,45,60);

INSERT INTO kepadat VALUES(null,44,"Szem",873,190,60,61);
INSERT INTO kepadat VALUES(null,45,"Csáp",1143,192,60,61);
INSERT INTO kepadat VALUES(null,46,"Ocelli",1532,395,60,61);
INSERT INTO kepadat VALUES(null,47,"Felső ajak",1542,595,60,61);
INSERT INTO kepadat VALUES(null,48,"Állkapocs ",1542,800,60,61);
INSERT INTO kepadat VALUES(null,49,"Felső állkapocs tapogató",1536,997,60,61);
INSERT INTO kepadat VALUES(null,50,"Felső állkapocs",981,1157,60,61);
INSERT INTO kepadat VALUES(null,51,"Ajak csáp",731,1163,60,61);
INSERT INTO kepadat VALUES(null,52,"Ajak",456,1169,60,61);

INSERT INTO kepadat VALUES(null,57,"Csípő",1286,530,100,62);
INSERT INTO kepadat VALUES(null,58,"Trochanter",1288,912,100,62);
INSERT INTO kepadat VALUES(null,59,"Comb",1278,1285,100,62);
INSERT INTO kepadat VALUES(null,60,"Lábszár",1291,1676,100,62);
INSERT INTO kepadat VALUES(null,61,"Boka",1303,2050,100,62);

INSERT INTO kepadat VALUES(null,10,"Első szárny",898,94,40,63);
INSERT INTO kepadat VALUES(null,11,"Nyálmirigy",1032,90,40,63);
INSERT INTO kepadat VALUES(null,12,"Tori Idegdúcok",1166,90,40,63);
INSERT INTO kepadat VALUES(null,13,"Nyelőcső",1296,88,40,63);
INSERT INTO kepadat VALUES(null,14,"Nyelőcső feletti idegdúcok",1418,86,40,63);
INSERT INTO kepadat VALUES(null,15,"Csáp",1544,93,40,63);
INSERT INTO kepadat VALUES(null,16,"Száj",1537,1206,40,63);
INSERT INTO kepadat VALUES(null,17,"Nyelőcső alatti idegdúco",1412,1208,40,63);
INSERT INTO kepadat VALUES(null,18,"Lábideg",1282,1205,40,63);
INSERT INTO kepadat VALUES(null,19,"Középső láb",1151,1204,40,63);
INSERT INTO kepadat VALUES(null,20,"Hátsó láb",1024,1206,40,63);
INSERT INTO kepadat VALUES(null,21,"Középbél",903,1212,40,63);
INSERT INTO kepadat VALUES(null,22,"Kari idegdúcok",773,1213,40,63);
INSERT INTO kepadat VALUES(null,23,"Végbélnyílás",77,898,40,63);
INSERT INTO kepadat VALUES(null,24,"Szív",147,792,40,63);
INSERT INTO kepadat VALUES(null,25,"Előbél",223,704,40,63);
INSERT INTO kepadat VALUES(null,26,"Nemzőszervek",294,608,40,63);
INSERT INTO kepadat VALUES(null,27,"Malpighi-edények",366,507,40,63);
INSERT INTO kepadat VALUES(null,28,"Főverőér",436,412,40,63);
INSERT INTO kepadat VALUES(null,29,"Hátsó szárny",514,315,40,63);

INSERT INTO kepadat VALUES(null,"a","Fej",1656,293,50,64);
INSERT INTO kepadat VALUES(null,"b","Tor",1657,782,50,64);
INSERT INTO kepadat VALUES(null,"c","Potroh",1641,1686,50,64);
INSERT INTO kepadat VALUES(null,1,"Perifériás erek",1389,826,50,64);
INSERT INTO kepadat VALUES(null,2,"Tubulusok-csövecskék",1388,1014,50,64);
INSERT INTO kepadat VALUES(null,3,"Főverőér",1385,1187,50,64);
INSERT INTO kepadat VALUES(null,4,"Emitocskák",1384,1363,50,64);
INSERT INTO kepadat VALUES(null,5,"Odavezető erek",1377,1544,50,64);
INSERT INTO kepadat VALUES(null,6,"Szív",1378,1722,50,64);

INSERT INTO kepadat VALUES(null,30,"Állkapocs",1266,126,55,65);
INSERT INTO kepadat VALUES(null,31,"Csáp",1561,297,55,65);
INSERT INTO kepadat VALUES(null,32,"Szem",1559,466,55,65);
INSERT INTO kepadat VALUES(null,33,"Fej",1555,636,55,65);
INSERT INTO kepadat VALUES(null,34,"Középtor",1554,802,55,65);
INSERT INTO kepadat VALUES(null,35,"Utótor",1558,974,55,65);
INSERT INTO kepadat VALUES(null,36,"Potroh",1560,1134,55,65);
INSERT INTO kepadat VALUES(null,37,"3 Láb",170,1123,55,65);
INSERT INTO kepadat VALUES(null,38,"2 Szárny",169,958,55,65);
INSERT INTO kepadat VALUES(null,39,"Előtor",156,777,55,65);
INSERT INTO kepadat VALUES(null,40,"Első szárny",156,615,55,65);
INSERT INTO kepadat VALUES(null,41,"Első szárny",164,446,55,65);
INSERT INTO kepadat VALUES(null,42,"2 Láb",159,279,55,65);
INSERT INTO kepadat VALUES(null,43,"1 Láb",162,121,55,65);

INSERT INTO kepadat VALUES(null,7,"Légcsőágak",147,1634,55,66);
INSERT INTO kepadat VALUES(null,8,"Légcsőnyílás",148,1818,55,66);
INSERT INTO kepadat VALUES(null,9,"Légcső",142,2005,55,66);

INSERT INTO kepadat VALUES(null,53,"Ajak",1518,599,105,67);
INSERT INTO kepadat VALUES(null,54,"Ajak tapogató",1516,1028,105,67);
INSERT INTO kepadat VALUES(null,55,"Felső állkapocs",1512,1483,105,67);
INSERT INTO kepadat VALUES(null,56,"Ajkak",1507,1936,105,67);

INSERT INTO kepadat VALUES(null,"a","Bogarak rendje",1042,130,30,68);
INSERT INTO kepadat VALUES(null,"b","Hártyásszárnyúak rendje",1436,554,30,68);
INSERT INTO kepadat VALUES(null,"c","Lepkék rendje",602,790,30,68);
INSERT INTO kepadat VALUES(null,"d","Egyenesszárnyúak rendje",1088,1336,30,68);
INSERT INTO kepadat VALUES(null,"e","Kétszárnyúak rendje",138,1893,30,68);
INSERT INTO kepadat VALUES(null,"f","Bolhák rendje",1054,1796,30,68);

INSERT INTO kepadat VALUES(null,"a","Poloskák rendje",1578,179,30,69);
INSERT INTO kepadat VALUES(null,"b","Fülbemászók rendje",899,855,30,69);
INSERT INTO kepadat VALUES(null,"c","Termeszek rendje",1667,988,30,69);
INSERT INTO kepadat VALUES(null,"d","Szitakötők rendje",449,1265,30,69);
INSERT INTO kepadat VALUES(null,"e","Sertefarkúak rendje",1227,1801,30,69);

INSERT INTO kepadat VALUES(null,"a","Vaspondrók rendje",976,204,30,70);
INSERT INTO kepadat VALUES(null,"b","Pinceászka",1492,649,30,70);
INSERT INTO kepadat VALUES(null,"c","Remeterák",838,1039,30,70);
INSERT INTO kepadat VALUES(null,"d","Languszta",401,1627,30,70);
INSERT INTO kepadat VALUES(null,"e","Tarisznyarák",1432,1589,30,70);

INSERT INTO kepadat VALUES(null,"b","Valódi pókok rendje",1575,173,30,71);
INSERT INTO kepadat VALUES(null,"c","Kaszáspókok rendje",715,762,30,71);
INSERT INTO kepadat VALUES(null,"d","Skorpiók rendje",916,1926,30,71);
INSERT INTO kepadat VALUES(null,"e","Atkák rendje",1485,1325,30,71);

INSERT INTO kepadat VALUES(null,16,"Vese",800,232,40,72);
INSERT INTO kepadat VALUES(null,17,"Háti verőér",894,214,40,72);
INSERT INTO kepadat VALUES(null,18,"Tüdő",990,192,40,72);
INSERT INTO kepadat VALUES(null,19,"Gerincvelő",1085,177,40,72);
INSERT INTO kepadat VALUES(null,20,"Csigolya",1177,154,40,72);
INSERT INTO kepadat VALUES(null,21,"Dobüreg",1281,138,40,72);
INSERT INTO kepadat VALUES(null,22,"Orrüreg",1375,118,40,72);
INSERT INTO kepadat VALUES(null,23,"Orrnyílás",1467,93,40,72);
INSERT INTO kepadat VALUES(null,24,"Nyelőcső",1591,608,40,72);
INSERT INTO kepadat VALUES(null,25,"Szív",1585,706,40,72);
INSERT INTO kepadat VALUES(null,26,"Máj",1268,1194,40,72);
INSERT INTO kepadat VALUES(null,27,"Hasnyálmirigy",1173,1200,40,72);
INSERT INTO kepadat VALUES(null,28,"Gyomor",1080,1198,40,72);
INSERT INTO kepadat VALUES(null,29,"Vékonybél",134,1159,40,72);
INSERT INTO kepadat VALUES(null,30,"Nagybél",129,1058,40,72);
INSERT INTO kepadat VALUES(null,31,"Epehólyag",129,960,40,72);
INSERT INTO kepadat VALUES(null,32,"Lép",126,861,40,72);
INSERT INTO kepadat VALUES(null,33,"Cloaca",120,760,40,72);
INSERT INTO kepadat VALUES(null,34,"Szaporítószervek",118,661,40,72);

INSERT INTO kepadat VALUES(null,1,"Állkapocs",567,137,60,73);
INSERT INTO kepadat VALUES(null,2,"Atlas (Első nyakcsigolya",706,139,60,73);
INSERT INTO kepadat VALUES(null,3,"Orrüreg",846,133,60,73);
INSERT INTO kepadat VALUES(null,4,"Szemüreg",985,136,60,73);
INSERT INTO kepadat VALUES(null,5,"Lapocka Feletti Régió",1123,139,60,73);
INSERT INTO kepadat VALUES(null,6,"Karcsont",1250,142,60,73);
INSERT INTO kepadat VALUES(null,7,"Radio-ulna (Alkarcsont)",1511,1085,60,73);
INSERT INTO kepadat VALUES(null,8,"Harántnyúlvány",1512,1260,60,73);
INSERT INTO kepadat VALUES(null,9,"Keresztcsonti csigolya",1515,1437,60,73);
INSERT INTO kepadat VALUES(null,10,"Tarsus (Lábtő)",1264,2222,60,73);
INSERT INTO kepadat VALUES(null,11,"Tibio-Fibula (Lábszárcsont)",1128,2227,60,73);
INSERT INTO kepadat VALUES(null,12,"Combcsont",990,2228,60,73);
INSERT INTO kepadat VALUES(null,13,"Vizeletrendszer",847,2227,60,73);
INSERT INTO kepadat VALUES(null,14,"Csípőcsont",707,2234,60,73);
INSERT INTO kepadat VALUES(null,15,"Metatarsus (Lábközépcsont)",569,2239,60,73);

INSERT INTO kepadat VALUES(null,35,"Egyrekeszű kamra",207,1597,50,74);
INSERT INTO kepadat VALUES(null,36,"Pitvar",195,1419,50,74);

INSERT INTO kepadat VALUES(null,22,"Tüdő",1006,202,45,75);
INSERT INTO kepadat VALUES(null,23,"Köpönyeg",1114,264,45,75);
INSERT INTO kepadat VALUES(null,24,"Légzőnyílás",1219,323,45,75);
INSERT INTO kepadat VALUES(null,25,"Száj",1122,1212,45,75);
INSERT INTO kepadat VALUES(null,26,"Csáp",999,1208,45,75);
INSERT INTO kepadat VALUES(null,27,"Nyelőcső",870,1207,45,75);
INSERT INTO kepadat VALUES(null,28,"Nemzőcsatorna",742,1205,45,75);
INSERT INTO kepadat VALUES(null,29,"Gyomor",621,1202,45,75);
INSERT INTO kepadat VALUES(null,30,"Végbélnyílás",494,1203,45,75);
INSERT INTO kepadat VALUES(null,31,"Láb",376,1200,45,75);
INSERT INTO kepadat VALUES(null,32,"Nemzőszervek",186,241,45,75);
INSERT INTO kepadat VALUES(null,33,"Bél",290,169,45,75);
INSERT INTO kepadat VALUES(null,34,"Meszes burok",394,103,45,75);

INSERT INTO kepadat VALUES(null,1,"Koponya",182,246,40,76);
INSERT INTO kepadat VALUES(null,2,"Háti Főverőér",249,215,40,76);
INSERT INTO kepadat VALUES(null,3,"Gerincoszlop",321,166,40,76);
INSERT INTO kepadat VALUES(null,4,"Vese",391,128,40,76);
INSERT INTO kepadat VALUES(null,5,"Izmok",458,94,40,76);
INSERT INTO kepadat VALUES(null,6,"Vizeleti és nemzőcsatorna nyílás",1035,1200,40,76);
INSERT INTO kepadat VALUES(null,7,"Végbélnyílás",957,1195,40,76);
INSERT INTO kepadat VALUES(null,8,"Nemi szervek",882,1196,40,76);
INSERT INTO kepadat VALUES(null,9,"Úszóhólyag",806,1198,40,76);
INSERT INTO kepadat VALUES(null,10,"Bél",732,1198,40,76);
INSERT INTO kepadat VALUES(null,11,"Gyomor",452,1078,40,76);
INSERT INTO kepadat VALUES(null,12,"Lép",387,1059,40,76);
INSERT INTO kepadat VALUES(null,13,"Máj",317,1035,40,76);
INSERT INTO kepadat VALUES(null,14,"Szív",254,1017,40,76);
INSERT INTO kepadat VALUES(null,15,"Verőérágak",185,993,40,76);
INSERT INTO kepadat VALUES(null,16,"Elágazások",115,965,40,76);

INSERT INTO kepadat VALUES(null,6,"Háti uszonyok",883,75,40,77);
INSERT INTO kepadat VALUES(null,7,"Farki uszonyok",968,73,40,77);
INSERT INTO kepadat VALUES(null,8,"Anális uszonyok",1006,986,40,77);
INSERT INTO kepadat VALUES(null,9,"Melluszonyok",936,1041,40,77);
INSERT INTO kepadat VALUES(null,10,"Medenceuszonyok",866,1098,40,77);
INSERT INTO kepadat VALUES(null,11,"Szemüreg",798,1156,40,77);
INSERT INTO kepadat VALUES(null,12,"Brachiostegal és opercularis csontok",729,1212,40,77);

INSERT INTO kepadat VALUES(null,1,"Legfőbb vénák",1623,2065,50,78);
INSERT INTO kepadat VALUES(null,2,"Cuveir vezeték",873,2255,50,78);
INSERT INTO kepadat VALUES(null,3,"Sinus venosus-vénás öböl",147,1726,50,78);
INSERT INTO kepadat VALUES(null,4,"Pitvar",148,1487,50,78);
INSERT INTO kepadat VALUES(null,5,"Kamra",146,1250,50,78);

INSERT INTO kepadat VALUES(null,1,"Vese",692,128,40,79);
INSERT INTO kepadat VALUES(null,2,"Szaporítószervek",778,129,40,79);
INSERT INTO kepadat VALUES(null,3,"Főverőér",860,124,40,79);
INSERT INTO kepadat VALUES(null,4,"Gyomor",941,126,40,79);
INSERT INTO kepadat VALUES(null,5,"Csigolya",1020,121,40,79);
INSERT INTO kepadat VALUES(null,6,"Gerincvelő",1107,119,40,79);
INSERT INTO kepadat VALUES(null,7,"Orrlyuk",1595,839,40,79);
INSERT INTO kepadat VALUES(null,8,"Szem",1514,844,40,79);
INSERT INTO kepadat VALUES(null,9,"Légcső",1431,850,40,79);
INSERT INTO kepadat VALUES(null,10,"Nyelőcső",1184,1052,40,79);
INSERT INTO kepadat VALUES(null,11,"Tüdő",1102,1055,40,79);
INSERT INTO kepadat VALUES(null,12,"Szív",1018,1054,40,79);
INSERT INTO kepadat VALUES(null,13,"Máj",938,1055,40,79);
INSERT INTO kepadat VALUES(null,14,"Vékonybél",856,1054,40,79);
INSERT INTO kepadat VALUES(null,15,"Végbél",464,1069,40,79);
INSERT INTO kepadat VALUES(null,16,"Cloaca",379,1064,40,79);

INSERT INTO kepadat VALUES(null,12,"Közelítőizmok billentyűje: elülső",1191,94,45,80);
INSERT INTO kepadat VALUES(null,13,"Közelítőizmok billentyűje: hátsó",1306,180,45,80);
INSERT INTO kepadat VALUES(null,14,"Száj",1423,269,45,80);
INSERT INTO kepadat VALUES(null,15,"Köpönyeg",1539,347,45,80);
INSERT INTO kepadat VALUES(null,16,"Fog",1344,1220,45,80);
INSERT INTO kepadat VALUES(null,17,"Bél ",1197,1221,45,80);
INSERT INTO kepadat VALUES(null,18,"Kagyló",1044,1220,45,80);
INSERT INTO kepadat VALUES(null,19,"Kopoltyú",892,1220,45,80);
INSERT INTO kepadat VALUES(null,20,"Végbélnyílás",341,165,45,80);
INSERT INTO kepadat VALUES(null,21,"Csuklóspánt",490,101,45,80);

INSERT INTO kepadat VALUES(null,19,"Orrüreg",1545,962,45,81);
INSERT INTO kepadat VALUES(null,20,"Szemüreg",1432,1006,45,81);
INSERT INTO kepadat VALUES(null,21,"Méregfog",1317,1054,45,81);
INSERT INTO kepadat VALUES(null,22,"Normál fog",1196,1097,45,81);
INSERT INTO kepadat VALUES(null,23,"Állkapocs",1070,1144,45,81);
INSERT INTO kepadat VALUES(null,24,"Négyszögletes csont",943,1191,45,81);

INSERT INTO kepadat VALUES(null,25,"Méregmirigy",590,219,45,82);
INSERT INTO kepadat VALUES(null,26,"Izom",707,191,45,82);
INSERT INTO kepadat VALUES(null,27,"Szemüreg",832,161,45,82);
INSERT INTO kepadat VALUES(null,28,"Méregvezeték",947,127,45,82);
INSERT INTO kepadat VALUES(null,29,"Méregfog",1066,97,45,82);
INSERT INTO kepadat VALUES(null,30,"Orrlyuk",1186,64,45,82);
INSERT INTO kepadat VALUES(null,31,"Nyelv",1198,1182,45,82);
INSERT INTO kepadat VALUES(null,32,"Normál fog",1076,1191,45,82);
INSERT INTO kepadat VALUES(null,33,"Állkapocscsont",960,1201,45,82);
INSERT INTO kepadat VALUES(null,34,"Izületi szalag",841,1205,45,82);

INSERT INTO kepadat VALUES(null,17,"Pitvar",144,1478,100,83);
INSERT INTO kepadat VALUES(null,18,"Kamra",142,1734,100,83);

INSERT INTO kepadat VALUES(null,1,"Végtagok (karok)",1582,378,45,85);
INSERT INTO kepadat VALUES(null,2,"Szellőztető cső",1580,519,45,85);
INSERT INTO kepadat VALUES(null,3,"Tapogatócsáp",1581,654,45,85);
INSERT INTO kepadat VALUES(null,4,"Vesevezeték",1582,786,45,85);
INSERT INTO kepadat VALUES(null,5,"Nemzőszerv nyílás",1487,933,45,85);
INSERT INTO kepadat VALUES(null,6,"Vesék",1339,1021,45,85);
INSERT INTO kepadat VALUES(null,7,"Tintazacskó",1201,1105,45,85);
INSERT INTO kepadat VALUES(null,8,"Máj",218,454,45,85);
INSERT INTO kepadat VALUES(null,9,"Kopoltyú",350,357,45,85);
INSERT INTO kepadat VALUES(null,10,"Végbélnyílás",483,256,45,85);
INSERT INTO kepadat VALUES(null,11,"Köpenyüreg és perem",630,162,45,85);

INSERT INTO kepadat VALUES(null,25,"Gége",1389,637,60,87);
INSERT INTO kepadat VALUES(null,26,"Hyoid",1469,798,60,87);
INSERT INTO kepadat VALUES(null,27,"Nyelőcső",1563,958,60,87);
INSERT INTO kepadat VALUES(null,28,"Oldalkamra",1654,1123,60,87);
INSERT INTO kepadat VALUES(null,29,"Kopoltyú lemezek",177,875,60,87);
INSERT INTO kepadat VALUES(null,30,"Operculum (fedél)",228,677,60,87);

INSERT INTO kepadat VALUES(null,17,"Levegővezető",946,188,55,88);
INSERT INTO kepadat VALUES(null,18,"Úszóhólyag",1049,186,55,88);
INSERT INTO kepadat VALUES(null,19,"Bél",1160,187,55,88);
INSERT INTO kepadat VALUES(null,20,"Végbélnyílás",1268,188,55,88);
INSERT INTO kepadat VALUES(null,21,"Gyomorkapu",366,1226,55,88);
INSERT INTO kepadat VALUES(null,22,"Gyomor",270,1113,55,88);
INSERT INTO kepadat VALUES(null,23,"Nyelőcső",173,997,55,88);
INSERT INTO kepadat VALUES(null,24,"Kopoltyú",71,882,55,88);

INSERT INTO kepadat VALUES(null,1,"Karcsont",774,605,35,89);
INSERT INTO kepadat VALUES(null,2,"Singcsont",778,493,35,89);
INSERT INTO kepadat VALUES(null,3,"Orsócsont",776,378,35,89);
INSERT INTO kepadat VALUES(null,4,"Carpo-Metacarpus",1220,219,35,89);
INSERT INTO kepadat VALUES(null,5,"Metacarpus-Kézközépcsontok",1300,289,35,89);
INSERT INTO kepadat VALUES(null,6,"Ujjpercek",1388,365,35,89);
INSERT INTO kepadat VALUES(null,7,"Lapocka",1601,1664,35,89);
INSERT INTO kepadat VALUES(null,8,"Farokcsont",1513,1722,35,89);
INSERT INTO kepadat VALUES(null,9,"Csipőcsont",1408,1784,35,89);
INSERT INTO kepadat VALUES(null,10,"Ülőcsont",1307,1847,35,89);
INSERT INTO kepadat VALUES(null,11,"Combcsont",1215,1910,35,89);
INSERT INTO kepadat VALUES(null,12,"Tibiotarsus",1117,1973,35,89);
INSERT INTO kepadat VALUES(null,13,"Tarsometatarsal",1115,2090,35,89);
INSERT INTO kepadat VALUES(null,14,"Lábujjak",1117,2209,35,89);
INSERT INTO kepadat VALUES(null,15,"Borda",81,1460,35,89);
INSERT INTO kepadat VALUES(null,16,"Mellcsont",73,1350,35,89);
INSERT INTO kepadat VALUES(null,17,"Kulcscsont",73,1233,35,89);
INSERT INTO kepadat VALUES(null,18,"Coracoidea",78,1116,35,89);
INSERT INTO kepadat VALUES(null,19,"Csigolyák",72,1005,35,89);
INSERT INTO kepadat VALUES(null,20,"Orrlyuk",74,887,35,89);

INSERT INTO kepadat VALUES(null,26,"Nyelőcső",1660,247,50,90);
INSERT INTO kepadat VALUES(null,27,"Begy",1663,396,50,90);
INSERT INTO kepadat VALUES(null,28,"Mirigyes gyomor",1662,559,50,90);
INSERT INTO kepadat VALUES(null,29,"Zúzó gyomor",1666,707,50,90);
INSERT INTO kepadat VALUES(null,30,"Hasnyálmirigy",1384,1965,50,90);
INSERT INTO kepadat VALUES(null,31,"Végbél",1296,2088,50,90);
INSERT INTO kepadat VALUES(null,32,"Kloáka",1187,2198,50,90);
INSERT INTO kepadat VALUES(null,33,"Vékonybél",142,829,50,90);
INSERT INTO kepadat VALUES(null,34,"Máj",136,674,50,90);

INSERT INTO kepadat VALUES(null,1,"Nyak",769,226,35,91);
INSERT INTO kepadat VALUES(null,2,"Hát",865,280,35,91);
INSERT INTO kepadat VALUES(null,3,"Válltollazat",955,331,35,91);
INSERT INTO kepadat VALUES(null,4,"Nagyszárny fedőtoll",1048,386,35,91);
INSERT INTO kepadat VALUES(null,5,"Karevezők",1135,437,35,91);
INSERT INTO kepadat VALUES(null,6,"Felső farokfedők",1226,501,35,91);
INSERT INTO kepadat VALUES(null,7,"Faroktollak",1353,1027,35,91);
INSERT INTO kepadat VALUES(null,8,"Lábszár",1120,954,35,91);
INSERT INTO kepadat VALUES(null,9,"Csűd",1073,1034,35,91);
INSERT INTO kepadat VALUES(null,10,"Ujjak",1017,1118,35,91);
INSERT INTO kepadat VALUES(null,11,"Elsődleges fedőtollak",344,883,35,91);
INSERT INTO kepadat VALUES(null,12,"Másodlagos fedőtollak",281,797,35,91);
INSERT INTO kepadat VALUES(null,13,"Mell",222,711,35,91);
INSERT INTO kepadat VALUES(null,14,"Torok",167,633,35,91);
INSERT INTO kepadat VALUES(null,15,"Áll",117,551,35,91);
INSERT INTO kepadat VALUES(null,16,"Csőr",61,480,35,91);
INSERT INTO kepadat VALUES(null,17,"Orrnyílás",146,139,35,91);
INSERT INTO kepadat VALUES(null,17,"Fejtető",150,44,35,91);

INSERT INTO kepadat VALUES(null,35,"Légcső",1614,242,50,92);
INSERT INTO kepadat VALUES(null,36,"Légzsák",1608,395,50,92);
INSERT INTO kepadat VALUES(null,37,"Légzsák a felkarban",1615,572,50,92);
INSERT INTO kepadat VALUES(null,38,"Tüdő",1575,1422,50,92);
INSERT INTO kepadat VALUES(null,39,"Elülső Légzsák",1569,1585,50,92);
INSERT INTO kepadat VALUES(null,40,"Hátulsó légzsák",1562,1752,50,92);
INSERT INTO kepadat VALUES(null,41,"Hasi légzsák",1562,1907,50,92);

INSERT INTO kepadat VALUES(null,21,"Gerincvelő és Csigolyák",779,1003,40,93);
INSERT INTO kepadat VALUES(null,22,"Jugularis vénák",872,1001,40,93);
INSERT INTO kepadat VALUES(null,23,"Jugularis vénák",960,999,40,93);
INSERT INTO kepadat VALUES(null,24,"Bordák",1053,999,40,93);
INSERT INTO kepadat VALUES(null,25,"Szaporítószervek",1142,995,40,93);
INSERT INTO kepadat VALUES(null,26,"Vese",1231,998,40,93);
INSERT INTO kepadat VALUES(null,27,"Vizeletrendszer",1324,997,40,93);
INSERT INTO kepadat VALUES(null,28,"Cloaca",1397,2053,40,93);
INSERT INTO kepadat VALUES(null,29,"Hasnyálmirigy",1295,2053,40,93);
INSERT INTO kepadat VALUES(null,30,"Bél",1198,2047,40,93);
INSERT INTO kepadat VALUES(null,31,"Gyomor",1114,2051,40,93);
INSERT INTO kepadat VALUES(null,32,"Máj",264,2077,40,93);
INSERT INTO kepadat VALUES(null,33,"Szív",201,1980,40,93);
INSERT INTO kepadat VALUES(null,34,"Fő verőér (Aorta)",129,1890,40,93);
INSERT INTO kepadat VALUES(null,35,"Begy",62,1800,40,93);
INSERT INTO kepadat VALUES(null,36,"Nyelőcső",73,694,40,93);
INSERT INTO kepadat VALUES(null,37,"Légcső",77,582,40,93);
INSERT INTO kepadat VALUES(null,38,"Bőrlebeny",77,461,40,93);
INSERT INTO kepadat VALUES(null,39,"Orrlyuk",77,333,40,93);
INSERT INTO kepadat VALUES(null,40,"Tarély",80,216,40,93);

INSERT INTO kepadat VALUES(null,19,"Csírakorong",1653,245,70,94);
INSERT INTO kepadat VALUES(null,20,"Lég kamra",1647,492,70,94);
INSERT INTO kepadat VALUES(null,21,"Pergamen hártya",1656,756,70,94);
INSERT INTO kepadat VALUES(null,22,"Tojás",1653,1011,70,94);
INSERT INTO kepadat VALUES(null,23,"Tojás sárgája",96,882,70,94);
INSERT INTO kepadat VALUES(null,24,"Jégzsinór",92,630,70,94);
INSERT INTO kepadat VALUES(null,25,"Tojásfehérje",91,361,70,94);
