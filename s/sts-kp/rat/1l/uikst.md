---
layout: document
title: UIKSt • 1. letnik • Računalniški Tehnik • STŠ Koper
latex: true
---

# UIKSt
{: .no_toc}

## Vsebina:
{: .no_toc}

- TOC
{:toc}


<br><br>

---

<br><br>

## Osnove računalniškega omrežja

> Računalniško omrežje tvorita najmanj dve napravi ki sta med seboj **povezani** in **neodvisni**.

<br>

#### Elementi rač. omrežja:

- **Naprave** (telefon, računalnik, tablica)
- **Ruter** (usmerjevalnik - rabimo ga za internet)
- **Switch** (stikalo)
- **Modem** (pretvori signal iz digitalnega v analogni in obratno, komunikacijski kanal razdeli na dva dela -  upload in download)
- **Prenosna sredstva** (parica, koaksialni kabel, optika)
- **Internetni ponudnik**
- **Paketki**
- **Protokol TCP/IP**
- **RFC dokumenti**

<br>

### Delitev omrežja glede na geografski obseg

- **Osebno omrežje (PAN)** je vezano na en prostor (stream, povezava mobilnih naprav na računalnik)
- **Lokalno omrežje (LAN)** je osnovni gradnik vsakega rač. omrežja. (doma, šolsko omrežje, mobilno omrežje...) To so zasebna omrežja, ki se nahajajo znotraj neke stavbe ali območja na razdalji nekaj metrov.
- **Mestno omrežje (MAN)** primer je kabelska TV
- **Širokopodročno omrežje (WAN)**
- **Globalno omrežje (Internet)**

<br>

## Dostop do omrežja

### Modemski dostop

- Je iz 90-ih let, zastarel, ponekod še vedno uporabljen. Ima hitrost 56kbps (Kilobitov na sekundo)

<br>

### Širokopasovni dostop

#### Tehnologija DSL

- To je tehnologija, ki omogoča dostop do interneta preko telefonskih žic.
- **Delovanje:** Komunikacijski kanal je razdeljen na 3 frekvenčne obsege (kanal za prevzem podatkov oz. download, kanal za oddajo podatkov oz. upload in navaden dvosmerni telefonski kanal).
Zanjo je značilna neposredna povezava med končnim uporabnikom in internetnim ponudnikom, zato hitrost ostane stalna.

#### Tehnologija HFC (hibridno omrežje)

- Kombinacija optičnega in koaksialnega kabla. To je tehnologija, ki omogoča dostop do interneta preko kabelskega omrežja.
- **Delovanje:** Tri točke (glavna postaja, razdelilne postaje in hiše). Razdelilne postaje so postavljene ob večjih naseljih. Na vsako je lahko povezano od 500 do 5000 hiš. Optični kabel povezuje glavno postajo in razdelilne postaje, hiše pa so z razdelilnimi postajami povezane s koaksialnimi kabli.

#### Tehnologija FTTH (Optika do doma - Fiber To The Home)

- Optično vlakno poteka direktno od ponudnika do uporabnika.

<br>

### Dostop preko satelitske povezave

- (do 1 Mbps)

<br>

### Brezžični dostop

#### Brezžično lokalno omrežje (WiFi)

- Uporabniki si podatke izmenjujejo z "dostopno točko". Premer je nekaj deset metrov in dostopna točka je na internet povezana z žico. To omrežje uporabljamo doma, v šoli, tovarni...

#### Brezžični dostop širokega spektra

- Podatki se prenašajo po mobilni infrastrukturi, pri čemer bazno postajo nadzoruje posrednik za telekomunikacijske storitve. To omrežje se uporablja "zunaj". Domet je nekaj 10km.

<br>

## Prenosna sredstva

### Parica

- Najenostavnejša oblika parice sta dve izolirani bakreni žici, ki sta med seboj prepleteni. Dve vzporedni žici tvorita anteno, s prepletom pa se možnost oddajanja signalov zmanjša.
- Parice se povezujejo v snope. Najpogosteje se parice uporabljajo v telefonskih omrežjih in za LAN. Parice so lahko dolge do 16Km in za prenos podatkov niso potrebni ojačevalniki / obnavljalniki. Hitrost prenosa je odvisna od razdalje.

<br>

### Koaksialni kabel

- **Zgradba:** Na sredini poteka bakrena žica, ki je ovita z izolacijo. Temu sledi sloj prepletene kovine ter ovojna zaščita. Bakreni žici potekata koncentrično (isto središče, različni polmer) kar omogoča velike hitrosti prenosa. Funkcija prepletene mreže je absorpcija šuma., ta pa se nato ne prenaša na podatke, ki potekajo po bakreni žici. Izolacija med bakreno žico in slojem pletene kovine je potrebna, da ne pride do kratkega stika.
- Najpogosteje se uporabljajo v kabelskih sistemih (TV, Internet). Obstajata 2 tipa koaksialnih kablov (tanek in debel). Za katerega se odločimo je odvisno odpotreb konkretne mreže.

<br>

### Optični kabel

- **Zgradba:** sestavljen je iz optičnih vlaken. Optična vlakna so sestavljena iz jedra in stržena (tanko stekleno središče vlakna), obloge ki obdaja jedro in svetlobo odbija nazaj v njega, zunanja plastna zaščita, ki ščiti optično vlakno pred poškodbami in vlago.
- Optična vlakna uporabljajo za vodenje svatlobe (pojav popolnega notranjega odboja) zato so konstruirani tako, da imajo valjasto obliko.Omogočajo prenos podatkov na veliko razdaljo in z visoko hitrostjo.

<br>

## Večplastna arhitektura

![diagram večplastne arhitekture][plasti-diagram]{: .imgc}

Komunikacijski sloji tvorijo tako imenovane komunikacijske sklade. Vsakemu sloju je prirejen sklop opravil, vsak sloj komunicira s soležnim slojem na oddaljeni napravi. Komunikacija ni direktna in vključuje podrejene in nadrejene sloje, ki komunicirajo med sabo preko vmesnikov. Vsak sloj nudi storitev sloju nad sabo.

> Zaporedje se vedno gleda od spodaj navzgor - tako je tudi v maturi.

<br>

### Referenčni model OSI

[Kratka razlaga celotnega modela OSI](https://www.youtube.com/watch?v=vv4y_uOneC0) (pozor: težek indijski naglas).

![diagram referenčnega modela osi][model-osi]{: .imgc}

**PREDSTAVITVENI SLOJ**: kodiranje, šifriranje in stiskanje podatkov.

**SEJNI SLOJ**: sinhronizacija in ločevanje podatkov z uporabo določenih znakov.

<br>

#### Referenčni model TCP/IP

![diagram referenčnega modela TCP/IP][model-tcpip]{: .imgc}

<br>

## Aplikacijski sloj

Naloga aplikacijskega sloja je izvajanje različnih aplikacij. Mrežne aplikacije so po zgradbi lahko odjemalec - odjemalec (P2P) ali odjemalec - strežnik.

Za aplikacije, ki so po zgradbi odjemalec - odjemalec velja, da komunikacija poteka med dvema enakopravnima računalnikoma, ki si med sabo izmenjujeta vlogo odjemalca in strežnika. Ta zgradba ne potrebuje administratorja sistema. IP naslovi (naprav) so lahko statični ali dinamični. Ta zgradba ne zahteva visokih stroškov vzdrževanja. Primer: BitTorrent, Skype...

Za aplikacijo, ki je po zgradbi odjemalec - strežnik obstaja vedno dostopen računalnik, imenovan strežnik, katerega storitve uporabljajo drugi računalniki, imenovani uporabniki. Ta zgradba potreuje administratorja in zahteva visoke stroške vzdrževanja. Strežnik mora imeti statičen IP naslov. Primer: Splet, e-pošta, prenos datotek, DNS... Mrežne aplikacije (procesi, programi) med sabo komunicirajo z izmenjevanjem sporočil.

![diagram izmenjave sporočil][izmenjava-sporocil]{: .imgc}

Procesi pošiljajo (v mrežo) in prejemajo sporočila (iz mreže) preko programskega vmesnika - poimenujemo ga "socket".

Protokoli aplikacijskega sloja definirajo kako si procesi neke mrežne aplikacije izmenjujeta sporočila (ali gre za zahtevo ali za odgovor, zapis zahteve ali odgovora, pravila kako in gdaj nek proces pošlje sporočilo oz. odgovori). Vsa ta pravila (protokoli) so zapisana v FRC dokumentih.

<br>

### Splet (Aplikacija Web)

Je aplikacija **odjemalec - strežnik** ki uporabnikom omogoča dostop do podatkov na zahtevo. Komponente, ki sestavljajo aplikacijo so: HTML, spletni brskalnik, spletni strežniki (apache), MS serverji in protokol aplikacijskega sloja (HTTP).

Protokol HTTP definira obliko in zaporedje sporočil, ki si jih med sabo izmenjujeta spletni brskalnik in spletni strežnik. Definiran je v RFC dokumentu št. 1945 in 2616. Spletna stran je zgrajena iz objektov, ki jih je mogoče znotraj dokumenta nasloviti z URL naslovi. URL naslov je sestavljen iz imena strežnika in poti do dokumenta.

<br>

### Piškotki

Uporabljajo se za identifikacijo uporabnika na spletu (omeji dostop, ponuja vsebino). Definirani so v RFC 2109.

**Delovanje**: ko zahteva (po neki spletni strani) pride do strežnika, ta izdela ID uporabnika (shrani se v bazi podatkov na strežniku), ki jo v odgovoru na zahtevo pošlje uporabniku (`set-cookie: 1678`). Brskalnik podatek shrani v posebno datoteko. V primeru obiska iste spletne strani brskalnik v zahtevo doda podatek o uporabniku (`cookie: 1678`). Na ta način strežnik lahko sledi kaj uporabnik "počne". V primeru da uporabnik na spletni strani vnese še svoje osebne podatke, strežnik te podatke vnese v svojo bazo in jih poveže z ID številko.

<br>

### Proxy strežnik

Je sestavni del mreže, ki odgovarja na HTTP zahteve (namesto / v imenu spletnega strežnika). Proxy strežnik ima lastne diske za shranjevanje **kopij** pogosto obiskanih objektov. Spletni iskalnik se konfigurira tako, da gredo vse HTTP zahteve najprej do proxy strežnika. V primeru, da se kopija objekta ne nahaja na strežniku (proxy strežniku), le-ta vzpostavi povezavo z izvornim strežnikom. Pomembno pri temu je, da je proxy strežnik tako strežnik kot odjemalec (uporabnik). Razloga za uporabo proxy strežnika sta čas in zmanjšanje intenzivnosti prometa na povezavi do interneta (varnost).

<br>

### Eleketronska pošta

Aplikacija je po zgradbi odjemalec - strežnik.

**Sestava**: uporabniški program (bralnik e-pošte), strežnik za spletno pošto in protokol SMTP.

SMTP je osnovni protokol aplikacijskega sloja za spletno pošto. Slabost protokola SMTP je 7-bitno ASCII kodiranje. Protokoli za prejemanje pošte (prenos pošte od strežnika za pošto do lokalnega računalnika) :

- POP3
- IMAP
- HTTPS

![diagram prenosa pošte][prenos-poste]{: .imgc}

<br>

### Aplikacija prenos datotek

Po zgradbi je odjemalec - strežnik. Protokol FTP prenaša datoteko od oddaljenega računalnika oz. "nalaga" datoteko na oddaljen računalnik. Pri prenosu aplikacija uporabi dve vzporedni povezavi, kontolno in podatkovno. Kontrolna povezava se uporablja za prenos uporabniškega imena, gesla in ukazov (`PUT`, `DELETE`, `GET`...). Podatkovna povezava pa se uporablja za prenos datotek.

<br>

### Aplikacija DNS

- Storitev DNS (storitve uporabljajo protokoli HTTP, SMTP, FTP...)
- Protokol DNS

Računalniki se na mreži identificirajo z imenom in IP naslovom. Delovanje na primer:

> `http://www.sts.si/mat/vaje.doc`

Da se lahko pošlje zahteva na strežnik (sts) more uporabnik poznati IP naslov strežnika. Spletni brskalnik iz URL naslova "razbere" ime strežnika in ga "preda" procesu aplikacije DNS, ki se izvaja na računalniku uporabnika. Proces aplikacije DNS pošlje zahtevo na DNS strežnik  (zahteva po IP naslovu) in v odgovoru dobi IP naslov.

<br>

## Transportni sloj

![diagram transportnega sloja][transportni-sloj]{: .imgc}

Naloga transportnega sloja je zagotavljanje **logične** komunikacije med procesi. Storitev transportnega sloja: Aplikacijskemu sloju nudi logično komunikacijo med procesi. Na oddajni strani transportni sloj sporočilo (zahteva) aplikacije "pretvori" v paket transportnega sloja, imenovan **segment** in ga pošlje v mrežo.

![diagram pošiljanja segmenta iz aplikacijskega v aplikacijski sloj preko transportnega][posiljanje-segmenta]{: .imgc}

Na prejemni strani transportni sloj iz segmenta "izvleče" sporočilo (zahteva) in ga preda ustreznemu procesu aplikacije.

Izvajata se dva protokola: **TCP** in **UDP**. Osnovni nalogi obeh sta multipleksiranje (in demultipleksiranje) podatkov in odkrivanje napak.

- **TCP**: aplikacijam nudizanesljivo storitev z vzpostavitvijo povezave (nadzor pretoka podatkov / paketkov, številčenje paketkov, potrditev prejema, časovniki).
- **UDP**: aplikacijam nudi nezanesljivo storitev brez vzpostavitve povezave, in hitrost.

Aplikacije, ki se izvajajo v realnem času (videokamere, prenos glasu) uporabljajo protokol UDP. Vse ostale aplikacije (razen aplikacije DNS) uporabljajo protokol TCP. Za multipleksiranje (demultipleksiranje) je potrebna identifikacijska številka vmesnika (št. porta), in da vsak segment vsebuje polje za vnos te ID številke (port pošiljatelja, port prejemnika).

Št. porta je 16-bitni zapis, ki prinese 2<sup>16</sup> (65536) različnih ID številk (različnih št. portov). 2<sup>16</sup>-1 (ker se začne z 0). Št. od 0 do 1023 so rezervirane za protokole poznanih aplikacij:

| Port  | Protokol |                       Aplikacija                        |
| :---: | :------: | ------------------------------------------------------- |
|  `80`   |   HTTP   | Splet                                                   |
|  `25`   |   SMTP   | Spletna pošta                                           |
|  `110`  |   POP3   | Spletna pošta                                           |
|  `143`  |   IMAP   | Spletna pošta                                           |
|  `20`   |   FTP    | Prenos datotek (podatkovna povezava)                    |
|  `21`   |   FTP    | Prenos datotek (kontrolna povezava)                     |
|  `53`   |   DNS    | DNS                                                     |
|  `443`  |   SSL    | Nadgradnja TCP (vidna na aplikacijskem sloju kot HTTPS) |

<br>

### Kontrola napak
Preveri se , da se biti tekom prenosa niso spremenili. Protokola UDP in TCP na strani pošiljatelja seštejeta bite in naredita komplement (sešteva se 16 bitne podatke, v primeru prekoračitve se višek zavrže). Dobljeni biti se vrnejo v polje kontrole.

![diagram kontrolnih bitov v segmentu][kontrolni-biti]{: .imgc}

<br>

#### Postopek računanja kontrolnih bitov

Začnemo s številom, ki mu želimo izračunati kontrolne bite in s številom `k`, ki nam pove na kako velike dele razdelimo število.

V tem primeru je `št = 110110001111000` in `k = 3`. Najprej razdelimo število na dele velikosti `k` in dobimo `110 110 001 111 000`. Napišemo si jih tako, od desne proti levi in od zgoraj navzdol. Zraven si napišemo št. 2 saj bomo z njim delili vsa števila.

$$
\newcommand{\RAC}[1]{\phantom{a}\\[0pt]\mathrm{#1}\\[0pt]\phantom{a}}

\RAC{
\begin{array}{cccccc}

& & 0 & 0 & 0 & \\
& & 1 & 1 & 1 & \\
& & 0 & 0 & 1 & \\
& & 1 & 1 & 0 & \\
& & 1 & 1 & 0 & _2 \\
\hline
& & & & & \\

\end{array}
}
$$

Seštejemo prvi stolpec (začnemo na desni in nadaljujemo levo). Seštevek delimo s št. 2 in ostanek napišemo pod stolpec, celi del rezultata pa prenesemo naprej. `2 : 2 = 1, ost. 0` torej pod stolpec napišemo 0 in 1 prenesemo naprej.

$$
\RAC{
\begin{array}{cccccc}

& & 0 & 0 & 0 & \\
& & 1 & 1 & 1 & \\
& & 0 & 0 & 1 & \\
& & 1 & 1 & 0 & \\
& & 1 & 1_1 & 0 & _2 \\
\hline
& & & & 0 & \\

\end{array}
}
$$

To ponavljamo dokler nam ne ostane nič več.

$$
\RAC{
\begin{array}{cccccc}

& & 0 & 0 & 0 & \\
& & 1 & 1 & 1 & \\
& & 0 & 0 & 1 & \\
& & 1 & 1 & 0 & \\
_1 & _2 & 1_2 & 1_1 & 0 & _2 \\
\hline
1 & 0 & 1 & 0 & 0 & \\

\end{array}
}
$$

Potem zadnje `k` bitov **negiramo** (dobimo `011`) in jih dodamo na konec prvega števila `110 110 000 111 000 011`. Še enkrat seštejemo števila in preverimo, če so zadnji `k` biti enice, ker na strani prejemnika protokola (UDP, TCP) med sabo seštejeta bite podatkov in bite v polju kontrole. Seštevek mora vsebovati same enice. V primeru, da seštevek vsebuje ničlo, vemo, da je med prenosom prišlo do napake.

$$
\RAC{
\begin{array}{cccccc}

& & 0 & 0 & 0 & \\
& & 1 & 1 & 1 & \\
& & 0 & 0 & 1 & \\
& & 1 & 1 & 0 & \\
& & 1 & 1 & 0 & \\
& _3 & \color{#00e}{0}_2 & \color{#00e}{1}_1 & \color{#00e}{1} & _2 \\
\hline
& & 1 & 1 & 1 & \\

\end{array}
}
$$

> Naprej ne rabimo računat ker nas zanima samo prvih **k** števil.

<br><br>

## Mrežni sloj

Je eden izmed najbolj pomembnih slojev v referenčnem modelu TCP/IP.

![diagram mrežnega sloja][mrezni-sloj]{: .imgc}

<br>

### Naslavljanje IPv4

Vmesnik imenujemo del med napravo in fizično povezavo.

Zahteva IP protokola je, da ima vsaka naprava (njen vmesnik), ki sprejema in pošilja IP datagrame (paketki v mrežnem sloju), svoj edinstvani IP.

IP naslov je sestavljen iz 32 bitov, kar prinese 2<sup>32</sup> možnih IP naslovov. Vsak bajt je zapisan v decimalni obliki in ločen od ostalih bajtov s piko.

> `11000001 00100000 11011000 00001001`

> `193 . 32 . 216 . 9`

![SLika omrežja][omrezje]{: .imgc}

Povezava vmesnikov štirih naprav (3 računalniki 1 usmerjevalnik) tvori omrežje. Naslov omrežja je `223.1.2.0/24`, kjer je zapis `/24`, imenovan maska omrežja označuje, da prvih 24 bitov od vseh 32 bitov definira naslov omrežja.

Definicija IP naslova:
>  IP naslov je 32 mestno število, ki označuje pripadnost naprave v omrežju, ter identificira napravo znotraj tega omrežja.

IP naslovi so razdeljeni v 5 razredov:

| Razred | Razmerje (b,B) - omrežje:naprave |      Obseg IP naslova       |
| :----: | :------------------------------: | --------------------------: |
| **A**  |          `8b:24b` - `1B:3B`          |   `1.0.0.0` - `127.255.255.255` |
| **B**  |         `16b:16b` - `2B:2B`          | `128.0.0.0` - `191.255.255.255` |
| **C**  |          `24b:8b` - `3B:1B`          | `192.0.0.0` - `223.255.255.255` |
| **D**  |           Multicasting           | `224.0.0.0` - `239.225.225.225` |
| **E**  |       Rezervirani naslovi        | `240.0.0.0` - `247.255.255.255` |

vendar pa vseh naslovov ne moremo uporabljati.

Naslovi:

| Razred |            Razpon             |
| :----: | ----------------------------- |
| **A**  | `10.0.0.0` - `10.255.255.255`     |
| **B**  | `172.16.0.0` - `172.31.255.255`   |
| **C**  | `192.168.0.0` - `192.168.255.255` |

Ti naslovi sestavljajo privatni naslovni prostor (npr. za domačo uporabo) in se jih ne usmerja iz omrežja.

![Slika povezave omrežja][povezave-omrezja]{: .imgc}

Definicija **maske omrežja**:

> Maska omrežja opisuje kolikšen del IP-naslova pripada omrežju / napravam.

Dolžina maske je enako dolga kot dolžina IP-naslova (32 bitov). Enice (1) so na mestih, ki so del naslova omrežja ničle (0) pa so na mestih, ki so del naslova naprave.

Masko omrežij lahko napišemo na 3 različne načine:

|   Zapis   |               Primer                |
| --------- | ----------------------------------- |
| dvojiški  | `11111111.00000000.00000000.00000000` |
| desetiški | `255.0.0.0`                           |
| CIDR      | `10.0.0.0/8`                          |

Definicija **broadcast naslova**:

> IP broadcast naslov je naslov oblike `255.255.255.255`. Naprava, ki pošlje datagram, pri tem pa uporabi IP naslov `255.255.255.255` kot IP naslov prejemnika, zagotovi, da vse naprave v tem omrežju dobijo ta datagram.

<br>

**VAJA**

**Primer 1**: naprava, ki ima IP naslov `118.71.0.2` ima broadcast naslov `118.255.255.255`, ker je razreda A in ima torej 8 bitov za naslov omrežja, ostalo pa za naslov naprave.

**Primer 2**: Naprava z IP naslovom `221.0.0.1` želi poslati datagram vsem napravam v omrežju. Naslov omrežja je `221.0.0.0`, maska omrežja v CIDR obliki je `221.0.0.0/24`, broadcast naslov pa `221.0.0.255`.







[plasti-diagram]: https://image.ibb.co/epAE88/Untitled_Diagram.png
[model-tcpip]: https://image.ibb.co/f36J1T/Untitled_Diagram.png
[izmenjava-sporocil]: https://image.ibb.co/eNHjRT/sporocilo.png
[prenos-poste]: https://image.ibb.co/bKHb6T/protokoli_eposte.png
[transportni-sloj]: https://image.ibb.co/m59PrT/Untitled_Diagram2.png
[posiljanje-segmenta]: https://image.ibb.co/gu8W5o/spli_tran_vmes.png
[kontrolni-biti]: https://image.ibb.co/k3Gqy8/Untitled_Diagram.png
[mrezni-sloj]: https://image.ibb.co/cKkfWT/Untitled_Diagram.png
[omrezje]: https://image.ibb.co/cuKM5o/5_22_18_1_22_pm_office_lens.jpg
[model-osi]: https://image.ibb.co/k1f6o8/Untitled_Diagram.png
[povezave-omrezja]: https://image.ibb.co/bUUZt8/omrezje1.png
