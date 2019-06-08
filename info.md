---
layout: document
title: Info
latex: true
---

>  *Zapiski za maturo iz **VIO** predmeta. (Začasno v infotu ma jbg)*

<br>

# Številski sistemi

## Uvod v številske sisteme

**Številski sistem** je sistem v katerem so urejena števila. Za predstavitev podatkov in naslovov v računalništvu uporabljamo 4 številske sisteme - **dvojiški** oz. binarni, **šestnajstiški** oz. heksadecimalni (HEX), **desetiški** in **osmiški**.

Binarni sistem je uporabljen v rač. ker so tranzistorji zmožni beležiti oz. prekljapljati se med dvemi stanji - vrednost 1 in 0.

**Kodiranje** je pretvorba iz ene oblike zapisa v drugo (splošno ime).



### Desetiški številski sistem
Posamezno mesto v desetiškem (dekadnem) sistemu imanujemo **dekada**. Če imamo na razpolago $n$ dekad, lahko zapišemo $10^n$ različnih števil (npr. 3 dekade ${10}^3$ št = 1000 različnih števil).
Če zapisujemo pozitivna števila (brez - spredaj) je največje število, ki ga lahko zapišemo z $n$ dekadami ${10}^n -1$ (npr 3 dekade = 999).

Za označiti, da je število desetiško dodamo na konec (10) npr. ${1762}_{(10)}$



### Dvojiški številski sistem
Je številski sistem z osnovo 2. Edini vrednosti možni sta 0 in 1. Posamezno mesto v številu imenujemo bit. Tak zapis uporabljajo rač. ker vezja lahko ponazorijo signal samo z 1 (električni tok je) in 0 (toka ni). Je zelo zanesljiv zapis in manj občutljiv na motnje pri prenosu, zato se ga vedno več uporablja (glasba, telefonija...)

Da jih lahko razlikujemo od desetiških, moramo dvojiška števila ustrezno označiti s tem, da na koncu spodaj dodamo (2) npr. $101_{(2)}​$



### Šestnajstiški številski sistem

Imenujemo ga tudi heksadecimalni (HEX). V računalnikih so vsa števila shranjena v dvojiškem zapisu, vendar so ti nepregledni, zato jih pogosto prikažemo v HEX zapisu, ker štirje dvojiški biti predstavljajo eno HEX cifro. Npr. ${1011000101101110}_{(2)}​$ je enako kot **B16E** v HEX.

Decimalni zapis pozna le 10 različnih cifer (0 - 9), HEX pa 16, zato moramo vrednosti od 10 do 15 zapisati z drugačnimi znaki (A, B, C, D, E, F).

Kot druga moramo tudi HEX števila označiti, s (16) na koncu npr. ${1100}_{(16)}$



## Pretvarjanje med številskimi sistemi

$$
\cdots
$$



## Seštevanje dvojiških števil

$$
\cdots
$$



## Predznačena in nepredznačena števila

$$
\cdots
$$



## Druge matematične operacije v dvojiškem sistemu

$$
\cdots
$$



## Mere in enote v računalništvu

Bit je najmanjša možna informacija (0 ali 1), ki se združuje v večje enote

| Enota              | Vrednost / opis                              |
| ------------------ | -------------------------------------------- |
| Četverka (nibble)  | 4 biti (npr 1100)                            |
| Zlog, oktet (Byte) | 1B = 8b (npr. 11010011)                      |
| Beseda (Word)      | Načeloma je pomnilniška beseda dolga 8 bitov |

Bit označimo z **b** in zlog (Byte) z **B**. Zapis večjih količin bitov je nepregleden, zato uporabljamo predpone (kilo K, mega M, giga G...)

| Zapis predpone | Vrednost v desetiškem sistemu         | Vrednost v dvojiškem sistemu              |
| -------------- | ------------------------------------- | ----------------------------------------- |
| k (kilo)       | 10<sup>3</sup> = 1.000 b              | 2<sup>10</sup> = 1.024 b                  |
| M (mega)       | 10<sup>6</sup> = 1.000.000 b          | 2<sup>20</sup> = 1.048.576 b ali 1.024 kb |
| G (giga)       | 10<sup>9</sup> = 1.000.000.000 b      | 2<sup>30</sup> = 1.024 Mb                 |
| T (tera)       | 10<sup>12</sup> = 1.000.000.000.000 b | 2<sup>40</sup> = 1.024 Gb                 |
| P (peta)       | 10<sup>15</sup> = 1.000 Tb            | 2<sup>50</sup> b                          |
| E (exa)        | 10<sup>18</sup> = 1.000 Pb            | 2<sup>60</sup> b                          |
| Z (zetta)      | 10<sup>21</sup> = 1.000 Eb            | 2<sup>70</sup> b                          |
| Y (yotta)      | 10<sup>24</sup> = 1.000 Zb            | 2<sup>80</sup> b                          |

V desetiškem sistemu povečujemo vrednosti predpon za 1000 oz. $10^3​$. V dvojiškem sistemu je najbližja vrednost $2^{10}​$ = 1024, zato so jo določili kot ekvivalent predponi kilo.

Če želimo **poudariti uporabo določene vrednostne predpone** jo zapišemo spodaj desno brez oklepajev npr. 50GB<sub>10</sub> in 4GB<sub>2</sub>.

[Dvojiško vrednost predpone](green) uporabljamo pri določanju kapacitete pomnilnika DRAM, SRAM, predpomnilnika v mikroprocesorju... [desetiško vrednost predpone](green) pa pri določanju kapacitete trdih diskov, diskov SSD in diskov FLASH.

> Razlika med USB velikostjo na pakiranju in v resnici - zaradi vrednosti kapacitete (na pakiranju piše desetiška, računalnik pa uporablja dvojiško).





# Uvod

## Zgodovina

Računalnik je bil izumljen, da je prevzel monotono, dolgočasno ponavljajoče se računanje, pri čem so ljudje storili mnogo napak.



### Praobdobje

[Abakus (abak)](pink) je najstarejša računska naprava ohranjena do danes. Iznašli so jo v babilonu nekje med 3000 in 2000 pr.n.št. 

![Abacus - abac slika](https://upload.wikimedia.org/wikipedia/commons/e/ea/Boulier1.JPG){: width="300px"}



[Logaritemsko računalo](pink) (izumljeno 1620 - 1630) je najpreprostejše logaritmično računalo, ki omogoča množenje in deljenje na podlagi logaritmiranja. Ta pravila je odkril škotski matematik John Napier.

![Logaritemsko računalo](http://4.bp.blogspot.com/-oEqjh6jXeXo/VTjZLHaySAI/AAAAAAAAEsI/62e-c7vrivI/s1600/sliderule20-web.jpg){: width="600px"}



