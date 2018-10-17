---
layout: document
title: IEKI • 1. letnik • Računalnikar • STŠ Koper
---

# Izdelava Elektronskih Komunikacijskih Inštalacij
{: .no_toc}

## Vsebina:
{: .no_toc}

- TOC
{:toc}

<br><br>

---

<br><br>

## Omrežja

### LAN omrežja (Local Area Network)

- lokalno krajevno omrežje, imenovano tudi računalniško omrežje
- omrežja, ki omogočajo povezovanje računalnikov na **ožjem področju**, to je npr. v isti pisarni, stavbi ali manjšem kraju
- omejeno število uporabnikov
- omogočajo izmenjavo velikih količin informacij z visoko hitrostjo
- so relativno poceni

![Slika zgradbe LAN omrežja][lan]

<br>

### WAN omrežja (Wide Area Network)

- širokorazsežno (prostrano) omrežje
- omrežja, ki omogočajo priključitev na širokem geografskem področju
- neomejeno število uporabnikov
- omogočajo izmenjavo velikih količin informacij z visoko hitrostjo
- WAN omrežja pogosto povezujejo **več LAN omrežij v eno** samo

![Slika zgradbe WLAN omrežja][wlan]


<br><br>

## Prenosni mediji

Poznamo več vrst prenosnih medijev:

### Parični kabel (parica)

#### UTP kabel

Je najbolj uporabljen tip paričnih kablov in je postal najbolj popularen v lokalnih omrežjih. **Najdaljša razdalja**, ki jo podpirajo kabli UTP, je približno **100 metrov**. Tradicionalni kabel UTP je sestavljen iz **dveh izoliranih bakrenih žic**. V Severni Ameriki je UTP kabel najbolj uporabljen za telefonske linije in je inštaliran v večini stavb. Pogosto so za računalniška omrežja uporabili kar obstoječe telefonske kable.

Ena izmed možnih težav vseh vrst paričnih kablov je **presluh**. UTP je zelo občutljiv na presluh. **Več kot je zavojev na meter žice, manjša je možnost presluha**. Pri kablih FTP in STP z oklopi dodatno zmanjšamo možnost presluha.

![Slika zgradbe UTP kabla][utp]

#### STP kabel

STP kabel je sestavljen iz **bakrenega opleta**, ki da večjo **zaščito** in višjo kvaliteto kot ovoj kabla pri UTP. STP uporablja folijo za zaščito med paricami in oplet pred zunanjimi motnjami. To da STP odlično zaščito prenesenim podatkom pred zunanjimi motnjami, kar omogoča, da lahko z STP prenašamo **višje hitrosti na daljšo razdaljo kot pri UTP**.

![Slika zgradbe STP kabla][stp]

#### FTP kabel

FTP kabel je sestavljen iz **aluminijeve (in bakrene) folije okoli paric**, ki da večjo zaščito in višjo kvaliteto kot ovoj kabla pri UTP. FTP **ne uporablja folije za zaščito med paricami**. FTP dovolj dobro ščiti prenesene podatke pred zunanjimi motnjami. Sama zgradba je preprostejša in posledično zato tudi montaža. To je tudi razlog, da se pogosteje uporabljajo kot STP.

![FTP kabel prerez][ftp]

<br>

### Optični kabel

Optični kabli lahko prenašajo digitalne podatkovne signale v obliki pulzov oziroma **svetlobe**. To je relativno varen način pošiljanja podatkov, za razliko od bakrovega jedra, ki prenaša podatke v obliki električnih signalov in ne v obliki električnih impulzov. To pomeni, da se ob prenosu podatkov prek optičnega kabla, **ne more prisluškovati prenosu**.

Optični kabel je dober za zelo hiter prenos podatkov za velike količine podatkov, saj je **neobčutljiv na elektro–magnetne motnje**. Prenos podatkov beležimo od nekje **100 Mb/s** do demonstriranih **100 gigabitov na sekundo** (Gb/s). Lahko prenašajo signal - svetlobni impulz **nekaj sto kilometrov daleč**.

Vsa optična vlakna izkoriščajo za vodenje svetlobe prav **pojav popolnega notranjega odboja**, zato so konstruirana tako, da imajo **valjasto obliko**. **Osrednji del** optičnega vlakna je **stržen ali jedro**, ki je izdelan iz optično gostečega sredstva (večji lomni količnik). Stržen obdaja optično redkejša obloga z nižjim lomnim količnikom. Stržen in optična obloga sta najpogosteje izdelana iz **zelo čistega stekla**, možna pa je tudi kombinacija **steklenega stržena in plastične (polimerne) obloge**. Le pri plastičnih optičnih vlaknih so vsi elementi izdelani iz polimernih snovi. Površina optičnih vlaken mora biti zaščitena pred mehanskimi in drugimi vplivi okolja, zato jo prevlečemo s plastjo primarne zaščite, običajno iz polimernega ovoja.

Ker vsako stekleno vlakno prenaša signal samo v eno smer, **vsebuje kabel vsaj dve vlakni**. Eno vlakno se uporablja za sprejem, drugo za oddajo. Ovoj okoli vsakega steklenega vlakna je kevlar, ki zagotavlja trdnost. **Vlakna so povezana v svežnje**, ki jih imenujemo optični kabli in jih uporabljamo za prenos svetlobnih signalov na velike razdalje.

![Slika zgradbe optičnega kabla][optika]

<br>

### Koaksialni kabel

Še do pred kratkim so bili koaksialni kabli zelo razširjeni in pogosti v večini omrežij. Bilo je kar nekaj razlogov za njihovo pogosto uporabo: so relativno poceni, so upogljivi, enostavni za uporabo in malo občutljivi na elektro–magnetne motnje.

**Zgradba koaksialnega kabla:**

**Jedro** koaksialnih kablov je sestavljeno iz **bakrene žice**, obdane z **izolacijo**, in iz **prepletenega kovinskega oklopa in zunanjega zaščitnega plašča**. Slika prikazuje sestavo koaksialnih kablov. Oklop varuje prenesene podatke tako, da vsrkava motnje električnih signalov, imenovanih **šum**, tako, da ne pridejo do kabla in ne motijo prenosa podatkov.

Jedro koaksialnih kablov prenaša električne signale, ki tvorijo podatke. To jedro je lahko trdo ali gibko, če je trdo, je običajno bakreno.

Jedro obdaja električno neprevodni sloj, ki loči jedro od mrežne žice. Prepletena mrežna žica služi kot zaščita jedra pred električnimi motnjami in pred **presluhom** (presluh je nezaželen signal iz sosednje žice).

**Jedro in mrežna žica morata biti vedno ločena. Če se dotakneta, bo v kablu prišlo do kratkega stika in šuma ali motnje signala na oklopu**. Električni signali bodo šli z bakrene žice. Ob dotiku dveh prevodnih žic pride do kratkega stika električnega tokokroga. Ta kontakt povzroči nezaželene razmere v valovodu.

Koaksialni kabel je bolj odporen proti motnjam kot sukane parice.

![Slika zgradbe koaksialnega kabla][koaksialni]

<br>

### Tanki ethernetni kabel

Tanki (angl. thin) eternetni kabel je **fleksibilen koaksialni kabel**, je debel približno **0,64 centimetrov** (četrtina palca). Običajno je črne barve. Ker je ta vrsta koaksialnih kablov fleksibilna in enostavna za uporabo, so lahko uporabljeni skoraj v vseh tipih omrežnih inštalacij. Tanki eternetni koaksialni kabel lahko prenaša signal do približno **185 metrov**.

<br>

### Debeli ethernetni kabel

Debeli koaksialni kabel je koaksialen kabel premera **1,27 centimetrov** (polovica palca). Običajno je rumene barve in ima na 2,5 metra označena mesta za priklop postaj. Debeli koaksialni kabel je včasih imenovan kot **standardni eternetni kabel**, ker je bil prvi tip kablov uporabljen v omrežnih arhitekturah eternet. Debeli koaksialni kabli imajo bakrena jedra, ki so debelejša kot jedra pri tankem koaksialnem kablu. Z debelejšim bakrenim jedrom lahko prenašamo signal na daljše razdalje. To pomeni, da **debeli koaksialni kabel lahko prenaša signal dlje kot tanki koaksialni kabel**. Debeli koaksialni kabli lahko prenašajo signal **do 500 metrov**. Lahko prenašajo tudi več signalov in tudi različnih vrst.



[lan]: https://res.cloudinary.com/solamona/image/upload/v1537114304/zvs/sts-kp/rac/1l/IEKI/lan.svg
[wlan]: https://res.cloudinary.com/solamona/image/upload/v1537114609/zvs/sts-kp/rac/1l/IEKI/wlan.svg
[utp]: https://4.imimg.com/data4/GR/SC/MY-462071/utp-cable-500x500.png
[ftp]: https://res.cloudinary.com/solamona/image/upload/v1537116188/zvs/sts-kp/rac/1l/IEKI/FTP_Ethernet_Cable.jpg
[stp]: http://www.siemon.com/share/products05/cable_category-6a-f-ftp-cable-ls0h-int.jpg
[optika]: http://www.fokab.si/media/k2/items/src/787ae9ec9023a82f5aa7e4c1a64f73cb_2.jpg
[koaksialni]: https://res.cloudinary.com/solamona/image/upload/v1537115090/zvs/sts-kp/rac/1l/IEKI/koakislni.png
