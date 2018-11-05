---
layout: document
latex: true
title: UIKS • 2. letnik • Računalniški Tehnik • STŠ Koper
---

# Upravljanje IK Sistemov
{: .no_toc}

## Vsebina:
{: .no_toc}

- TOC
{:toc}

<br><br>

---

<br><br>

## Ustvarjanje podomrežij

Če je razred omrežja prevelik, se omrežje lahko deli na podomrežja (kar je dobro tudi za varnost). IP naslov je sestavljen iz 32 bitov in za ustvariti podomrežje vzamemo nek del bitov namenjen napravam in te bite uporabimo za zapis omrežja. S tem se poveča število omrežij in hkrati zmanjša število naprav, ki so lahko v posamičnem podomrežju.

![](http://quicklatex.com/cache3/96/ql_e12691760baa822d81e572e19993b596_l3.png)

$$
\underbrace{
  \phantom{|}\_\phantom{|}\_\phantom{|}\_\phantom{|}\_\phantom{|}\_\phantom{|}\_\phantom{|}\_\phantom{|}\_
}_{\mathrm{biti\phantom{a}omrežja}}

\phantom{|}.\overbrace{\phantom{|}\_\phantom{|}\_\phantom{|}\_}^{\mathrm{b.\phantom{a}pod.}}

\underbrace{\phantom{|}\_\phantom{|}\_\phantom{|}\_\phantom{|}\_\phantom{|}\_\phantom{|}.
\phantom{|}\_\phantom{|}\_\phantom{|}\_\phantom{|}\_\phantom{|}\_\phantom{|}\_\phantom{|}\_\phantom{|}\_\phantom{|}.
\phantom{|}\_\phantom{|}\_\phantom{|}\_\phantom{|}\_\phantom{|}\_\phantom{|}\_\phantom{|}\_\phantom{|}\_}_{\mathrm{biti\phantom{a}naprav}}
$$

<br>

$$
\underbrace{\color{dodgerblue}{11111111.11111111.11111111}}_{\mathrm{biti\phantom{a}omrežja}}.00000000
$$

<br><br>

### Primeri

Omrežje `192.168.0.0` želimo razdeliti na 2 podomrežji.

Omrežje je razreda **C** torej imamo **24 bitov** za zapis omrežja in **8 bitov** za naprave (v **cidr** obliki: `192.168.0.0/24`). Število `/24` na koncu pomeni da je 24 bitov uporabljenih za **zapis omrežja**.

`192.168.0` je fiksni del (*ne moremo ga spreminjat*) ker je za omrežje. Za ustvariti podomrežje moramo vzeti bite napravam. 

> podčrtaji (_) so biti za zapis naprav

$$
192.168.0.\phantom{|}\_\phantom{|}\_\phantom{|}\_\phantom{|}\_\phantom{|}\_\phantom{|}\_\phantom{|}\_\phantom{|}\_
$$

Ker želimo 2 podomrežji moramo vzeti dovolj bitov, da lahko zapišemo 2 različni števili. Vzamemo torej 1 bit (ima lahko **2<sup>1</sup>** različnih vrednosti - torej **2** kar je ravno prav za ta primer).

$$
192.168.0.\phantom{|}\_\phantom{|}|\phantom{|}\_\phantom{|}\_\phantom{|}\_\phantom{|}\_\phantom{|}\_\phantom{|}\_\phantom{|}\_
$$

<br>

### Dodeljevanje IP naslovov napravam

Administrator mreže navadno dodeli IP naslov usmerjevalniku, medtem ko se za dodeljevanje ostalih naprav uporablja **DHCP** (Dynamic Host Configuration Plug and play protocol).

Administrator mreže lahko nastavi DHCP tako, da naprava vedno ko se poveže v mrežo dobi isti IP oziroma lahko dobi vsakič različen IP naslov. Poleg IP naslova naprava "izve" tudi določene informacije o sebi:

- masko omrežja
- naslov prvega usmerjevalnika (default gateway)
- naslov lokalnega DNS strežnika

#### Delovanje

Naloga naprave, ki se želi povezati v mrežo je da poišče DHCP strežnik. To naredi z uporabo **DHCP discover message**, ki ga pošlje na port **67** s protokolom **UDP**. IP naslov pošiljatelja (svoj naslov) nastavi na `0.0.0.0`, IP naslov prejemnika pa na `255.255.255.255`. DHCP strežnik pošlje "odgovor" in pri tem IP naslov prejemnika nastavi na `255.255.255.255`, IP naslov pošiljatelja pa na svoj IP naslov. V odgovoru navede **IP naslov uporabnika**, **masko omrežja** in **čas veljavnosti IP naslova**.

<br>

### NAT sistem

NAT (Network Adress Translation) privatne IP naslove domačega omrežja pretvarja v javni IP naslov in obratno.

![slika]()

Na transportnem sloju določimo TCP/UDP __[NEKI MANJKA]__

#### NAT tabela

|        WAN        |       LAN        |
| ----------------- | ---------------- |
| `138.76.297,5001` | `10.0.0.1,3345`  |
| `138.76.297,6000` | `10.0.0.1,2000`  |
| `138.76.297,7111` | `10.0.0.1,20004` |
| `138.76.297,8001` | `10.0.0.1,2502`  |

**ICMP** je namenjen komunikaciji med napravami na mrežnem sloju. Najpogosteje se uporablja za obveščanje o napakah (*PING*). (Datagram ima ponavadi znotraj sebe zapis o protokolu nad sabo, kateremu naj bi se podatki predali TCP/UDP/ICMP).

### IPv6

Struktura naslavljanja je 128 bitna. Zaradi lažjega polnjenja in večje preglednosti se za zapis uporablja šestnajstiški zapis.

#### Primer:

Zapis lahko poenostavimo (to lahko storimo samo enkrat).

`ABFC:BEFE:0000:0000:0000:0075:00B4:F023`

__[NEKI MANJKA]__

\\(2^4 = 16\\)

\\(2^3 = 8\\)

`ABFC:BEFE::0075:00B4:F023`

> Vaja

<br>

## Metoda usmerjanja in posredovanja

Naloga mrežnega sloja je prenos paketkov (datagram) od pošiljatelja k prejemniku, s pomočjo **metode posredovanja** (forwarding) in **metode usmerjanja** (routing).

- **Posredovanje** je metoda, ki je vezana na dogajanje znotraj enega samega usmerjevalnika (usmerjanje paketka med vhodnimi in izhodnimi porti).

- **Usmerjanje** pa je metoda, ki s pomočjo usmerjevalnih algoritmov določi pot od pošiljatelja do prejemnika.

Vsak **usmerjevalnik** ima **usmerjevalno tabelo**, s pomočjo katere **usmerja podatke** na izhodne porte. Usmerjevalnik vrednosti v usmerjevalni tabeli nastavi s pomočjo sporočil (routing protocol messages), ki mu jih posreduje usmerjevalni algoritem.

<br>

Primer usmerjevalnega algoritma: Dijksta?

- ideja izhaja iz teorije grafov
- usmerjevalniki in razdalje med usmerjevalniki so predstavljeni kot grafi
- graf definiramo kot `G=(V,P)`. `V` - vozlišča, `P` - povezave med vozlišči. V našem primeru so vozlišča usmerjevalniki, povezave med vozlišči pa čas, ki ga porabimo za prenos podatka iz enega usmerjevalnika na drug usmerjevalnik.

![Djiksta diagram][djiksta-diagram]

<br>

### Algoritem Dijksta

1. **korak:** Začetno vozlišče nastavimo na 0, vsa ostala vozlišča nastavimo na neskončno

![Djiksta diagram 1][djiksta-1]

2. **korak:** Na vsakem koraku pogledamo vse poti iz začetnega vozlišča

3. **korak:** Pot nadaljujemo v vozlišču, ki ima najmanjšo vrednost, v primeru, da obstajata dve vozlišči ali več z enakimi vrednostmi je izbira poljubna.

> vaja

<br><br>

## Linijski sloj

### Povezovalni sloj

Gre za prenos __okvirjev__ (paket) med dvema sosednjima napravama.

Naloga linijskega sloja (oz. protokolov linijskega sloja) je **tvorjenje okvirjev**, **dostop do povezave** in **nujenje zanesljivega prenosa podatkov** (odkrivanje in popravljanje napak).

Linijski sloj je implementiran v mrežni kartici. Večina storitev, ki jih linijski sloj nudi je del strojne opreme, obstajajo pa tudi storitve, ki so del programske opreme.

<br>

### Tehnike odkrivanja in odpravljanja napak

1. **Preverjanje parnosti**

Je najenostavnejša oblika napak. Obstajata soda in liha parnost. Pri **sodi parnosti** pošiljatelj vrednost dodanega bita določi tako, da je skupno število bitov z vrednostjo 1 sodo. **Zgled**:

![Soda parnost](https://www.latex4technics.com/imgtemp/z7akdb-4.png?1541357645){: .imgc}

<br>

Pri **lihi parnosti** pa se vrednost dodatnega bita določi tako, da je skupno število bitov z vrednostjo 1 liho. **Zgled**:

![Liha parnost](https://www.latex4technics.com/imgtemp/zlmkuj-1.png?1541358722){: .imgc}

<br>

Prejemnik prešteje bite z vrednostjo 1 katerih vsota mora biti sodo število, v primeru sode parnosti in liho število, v primeru lihe parnosti.

Ta tehnika omogoča samo odkrivanje napake.

Pri matrični oziroma dvodimenzionalni uporabi tehnike preverjanja parnosti, se lahko napako, ki se pojavi na enem bitu tudi popravi.

Pri tej tehniki so biti razdeljeni v I-te vrstice in J-te stolpce. Vrednost dodatnega bite se določi za vsako vrstico in vsak stolpec posebaj.

**Primer** (napaka se je zgodila na {2,2} - označeno z rdečo):

![kontrolni biti računanje][cont-biti]{: .imgc}

1. **Izračun enostavne kontrolne vsote**
2. **Izračun internetne kontrolne vsote** (izračun kontrolnih bitov na transportnem sloju)
3. **CRC koda**


<br><br>

## Dostop do povezav in protokoli

Obstajata **dve vrsti povezave**, povezava **od točke do točke** in **razpršena povezava (broadcast)**. Pri povezavi od točke do točke sta en pošiljatelj in en prejemnik. Pri razpršeni povezavi pa je več pošiljateljev in več prejemnikov, ki si delijo komunikacijski kanal (tehnologija Ethernet, tehnologija WLAN)

Pri razpršeni povezavi lahko naenkrat oddaja več naprav, zato je **možnost trkov povečana**. Potrebna je dobra koordinacija, za kar poskrbijo protokoli, ki jih delimo v **tri skupine**. Protokoli, ki **razdelijo komunikacijski kanal**, protokoli **naključnega dostopa** in **izmenični protokol**.

Protokoli, **ki razdelijo komunikacijski kanal**: **TDM** (časovno multipleksiranje), **FDM** (frekvenčno multipleksiranje), **CDMA** (mobilna tehnologija - code division multiple access).

Protokoli **naključnega dostopa**: **ALOHA**, **CSMA** (Carrier-sense multiple access), **CSMA/CD** (CSMA with colision detection).

**Izmenični protokoli**: **POLLING** protokol (Bluetooth), **TOKEN-PASSING** protokol (802.5 token ring protokol).


<br><br>

## Lokalno omrežje (LAN)

### Najavljanje na linijskem sloju

#### MAC naslov

Naprave in usmerjevalniki imajo poleg mrežnega naslova (IP) tudi fizični naslov oziroma MAC naslov (naslov mrežne kartice). Usmerjevalniki imajo več fizičnih naslovov (vsak umesnik ima svojega), medtem ko stikala nimajo fizičnih naslovov.

**Zgradba MAC naslova:** MAC naslov je 6 Bajten zapis, zapisan v šestnajstiški obliki (`AA-13-BC-4A-CD-F3`). MAC naslov je stalen in se z menjavo lokacije ne spremeni (mobilni telefon ima v šoli in doma isti MAC naslov, medtem ko se IP naslov telefona spremeni). Stalnost je dosežena z načinom njegove konfiguracije. Organizacija **IEEE fiksira prvih 24 bitov**, proizvajalec pa lahko potem poljubno določa ostalih 24 bitov in si tako zagotovi 2<sup>24</sup> različnih MAC naslovov.

**Posebnosti:** MAC naslov `FF-FF-FF-FF-FF-FF` je naslov za razpršeno oddajo (**Broadcast**). Uporablja se ga v primeru, da želimo okvir poslati vsem napravam, ki se nahajajo v istem lokalnem omrežju.

V realnem življenju lahko MAC naslov enačimo z EMŠO, davčno številko...

#### ARP protokol (adress resolution protocol)

Arp protokol IP naslovom dodeli vstrezen MAC naslov. Lahko ga primerjamo z DNS protokolom. Protokola se razlikujeta v rem, da protokol DNS dodeljuje IP naslove vsem napravam v internetu, protokol ARP pa le napravam v istem lokalnem omrežju.

Vsaka naprava ima v **svojem spominu ARP tabelo**, ki vsebuje **IP naslove**, pripadajoče **MAC naslove** in **čas trajanja zapisa** (**20 min**). Ni nujno, da tabela vsebuje zapise vseh naprav, ki se nahajajo v istem omrežju.

<br>

### Pošiljanje znotraj istega omrežja

> VAJA: zapišite ARP tabele naprave C

|     IP naslov     |     MAC naslov      |
| ----------------- | ------------------- |
| `222.222.222.220` | `1A-23-F9-CD-06-9B` |
| `222.222.222.223` | `5C-66-AB-90-70-B1` |
| `222.222.222.222` | ``                  |
| `222.222.222.221` | `88-B2-2F-54-1A-OF` |

<br>

Naprava katere IP naslov je `222.222.222.220` želi poslati datagram napravi z naslovom `222.222.222.222`. Ker tabela ne vsebuje zapisa o pripadajočem MAC naslovu, ARP protokol pošlje **ARP paket** (zahteva po MAC naslovu na podlagi IP naslova prejemnika).

**ARP zahteva:**

```
222.222.222.220, 1A-23-F9-CD-06-9B, 222.222.222.222, FF-FF-FF-FF-FF-FF
```

**ARP odgovor:**

```
222.222.222.222, 49-BD-D2-C7-56-2A, 222.222.222.220, 1A-23-F9-CD-06-9B
```

Potem zapiše v svojo ARP tabelo in potem pošlje normalno zahtevo

**Zahteva:**

```
222.222.222.220, 1A-23-F9-CD-06-9B, 222.222.222.222, 49-BD-D2-C7-56-2A
```

**Odgovor:**

```
222.222.222.222, 49-BD-D2-C7-56-2A, 222.222.222.220, 1A-23-F9-CD-06-9B
```

> slika od vaje

<br>

### Pošiljanje v drugo omrežje

> slika

Naprava katere IP naslov je `111.111.111.111` želi poslati datagram napravi z IP naslovom `222.222.222.222`. Naprava **pogleda v svojo ARP tabelo**, katera ne vsebuje podatka o napravi z IP naslovom `222.222.222.222` (**napravi nista v istem omrežju**), zato **datagram pošlje na usmerjevalnik:**

```
111.111.111.111, 74-29-9C-E8-FF-55, 111.111.111.110, E6-E9-08-17-BB-4B
```


<br><br>

## Fizični sloj

### Topologija omrežja (zgradba)

Poznamo štiri glavne topologije:
- **Vodilo** (hrbtenica)
- **Zvezda**
- **Obroč**
- **Polna** (topologija več poti)


<br>

### Vodilo

![Topologija vodila][vodilo]

**Pošiljanje paketa:** paket se pošlje **vsem napravam** v omrežju, sprejme ga naprava, ki ji je namenjeno, ostale naprave paketek **zavrnejo (terminator)**; Preden naprava pošlje paketek **prisluškuje** omrežju.

**Trki:** So (več naprav lahko istočasno prisluškuje omrežju in istočasno pošljejo paketek).

**Padec mreže:** v primeru, da je poškodba na steblu.

**Slabost:** v primeru povezave več naprav je hitrost mreže manjša.

<br>

### Zvezda

![Topologija zvezde][zvezda]

**Pošiljanje paketa:** paketek prejme samo naprava, kateri je paketek namenjen. Več naprav lahko hkrati pošilja pakatke.

**Trki:** Ne.

**Padec mreže:** V primeru poškodbe stikala.


<br>

### Obroč

![Topologija obroča][obroc]

**Pošiljanje paketa:** V nasprotni smeri urinega kazalca, pošilja lahko le naprava, ki ima v lasti **žeton**, vmesni računalniki ojačajo signal, prejemnik pošiljatelju pošlje **potrditev prejema (ACK)**.

**Trki:** Ne.

**Padec mreže:** V primeru poškodbe obroča.

<br>

### Polna

![Polno povezana topologija - mesh][polna]

V primeru preobremenitve na določeni povezavi (poškodba...) se poišče druga pot do prejemnika.

<br>

### Načini pošiljanja paketkov

1. **Unicast** (pošiljanje sporoćil)

![Unicast][unicast]

2. **Multicast** (kabelska TV)

![Multicast][multicast]

3. **Broadcast** (radio, SLO1, SLO2)

![Broadcast][broadcast]






[djiksta-diagram]: https://res.cloudinary.com/solamona/image/upload/v1536874434/zvs/sts-kp/rac/5l/uiks/djiksta-diagram.svg
[parnost-img-1]: https://res.cloudinary.com/solamona/image/upload/v1536876677/zvs/sts-kp/rac/5l/uiks/parnost-slika-1.svg
[parnost-img-2]: https://res.cloudinary.com/solamona/image/upload/v1536877159/zvs/sts-kp/rac/5l/uiks/parnost-slika-2.svg
[liho-img-1]: https://res.cloudinary.com/solamona/image/upload/v1536877327/zvs/sts-kp/rac/5l/uiks/liho-slika-1.svg
[liho-img-2]: https://res.cloudinary.com/solamona/image/upload/v1536877457/zvs/sts-kp/rac/5l/uiks/liho-slika-2.svg
[cont-biti]: https://www.latex4technics.com/imgtemp/iv369x-1.png?1541365792
[vodilo]: https://res.cloudinary.com/solamona/image/upload/v1536939300/zvs/sts-kp/rac/5l/uiks/vodilo.gif
[zvezda]: https://res.cloudinary.com/solamona/image/upload/v1536939433/zvs/sts-kp/rac/5l/uiks/zvezda.gif
[obroc]: https://res.cloudinary.com/solamona/image/upload/v1536939850/zvs/sts-kp/rac/5l/uiks/obroc.gif
[unicast]: https://res.cloudinary.com/solamona/image/upload/v1536942926/zvs/sts-kp/rac/5l/uiks/unicast.png
[multicast]: https://res.cloudinary.com/solamona/image/upload/v1536942928/zvs/sts-kp/rac/5l/uiks/multicast.png
[broadcast]: https://res.cloudinary.com/solamona/image/upload/v1536942927/zvs/sts-kp/rac/5l/uiks/broadcast.png
[polna]: https://res.cloudinary.com/solamona/image/upload/v1536945488/zvs/sts-kp/rac/5l/uiks/polno-povezana-topologija.gif
[djiksta-1]: https://res.cloudinary.com/solamona/image/upload/v1536960272/zvs/sts-kp/rac/5l/uiks/Dijkstra_Animation.gif
[djiksta-2]: https://res.cloudinary.com/solamona/image/upload/v1536960307/zvs/sts-kp/rac/5l/uiks/djiksta-2.gif
