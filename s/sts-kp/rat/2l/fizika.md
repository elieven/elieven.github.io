---
layout: document
latex: true
title: Fizika • 2. letnik • Računalniški Tehnik • STŠ Koper
desc: Snov fizike za 2. letnik Računalniškega tehnika (oz. 5 letnik izobraževanja v računalniški smeri).
---

# Fizika
{: .no_toc}

## Vsebina:
{: .no_toc}

- TOC
{:toc}

<br><br>

---

<br><br>

## Električni tok

**Električni tok je usmerjeno gibanje električnih delcev** (npr. elektronov). V snovi je električni tok možen le, če je snov prevodnik (vsebuje proste negativne elektrone). *Primer so kovine, raztopine elektrolita, plin z ioniziranimi molekulami*.

Da delci stečejo, potrebujemo sklenjen **električni krog**. Sestavljajo ga **izvir napetosti** (baterija ali generator), **vodnik** in **porabnik**. Vodnik je snov po kateri tečejo naboji (žica...). V električnem krogu je število nosilcev naboja konstantno - **Zakon o ohranitvi naboja**.

> Primer: v časovnem intervalu \\(\Delta\\)**t** preteče skozi prečni prerez **S** naboj \\(\Delta\\)**e**. **Električni tok I** defniramo s kvocientom naboja \\(\Delta\\)**e** in časovnega intervala \\(\Delta\\)**t**, v katerem naboj preteče:

$$ I = \frac{\Delta e}{\Delta t} $$

Električni tok = električni naboj (**C**) v določenem času (**t**) - enota je **amper** (**A**).

**1A = 1C/s** oz **1As = 1C**

Enoto **C** imenujemo tudi **ampersekunda** (**As**).

Električni tok se meri z **ampermetrom**. Ampermeter tako meri celoten tok, ki teče skozi porabnik, in ga moramo vedno vezati v električni krog s porabnikom **zaporedno**. Ampermeter pa ima tako kot vsak del električnega kroga tudi lasten upor, ki je zelo majhen.

<br>

### Specifična upornost

Specifična upornost je fizikalna količina, določena kot sorazmerni koeficient med električnim uporom vodnika (**R**) in razmerjem med dolžino  (**l**) in presekom vodnika (**S**).

$$ \rho = \frac{RS}{l} $$

Enota specifične upornosti je \\( \Omega \phantom{a} mm^2/m \\), znak pa je \\(\zeta\\).

<br><br>

## Električna napetost

Vzrok, da električni tok teče po električnem krogu, je **električna napetost**. Enota električne napetosti je volt (**V**). Napetost izvira imenujemo gonilna napetost, ker poganja električni tok.

Električni tok lahko primerjamo s tokom vode. Višinska razlika med gladino vode v posodi in mestom, kjer ta izteka, povzroči, da voda steče iz posode. Večja je višinska razlika, tem hitreje voda izteka. Podobno velja tudi za električni tok. **Električni izviri** ustvarjajo tisto gonilno razliko, ki poganja električni tok po električnem krogu.

> Električni viri ustvarjajo električno napetost. Ta je vzrok, da električni tok teče po električnem krogu.

Električno napetost merimo z **voltmetrom**.Ta lahkko meri napetost na porabniku ali izviru. Za razliko od ampermetra, voltmeter vežemo v električni krog **vzporedno**. Vežemo ga na dveh točkah med katerima želimo meriti napetost.

**Gonilna napetost** je napetost **vira**. Kadar vežemo več enakih virov električne napetosti v električni krog vzporedno, je napetost v krogu enaka napetosti posameznega vira. Ko pa jih vežemo zaporedno, je treba sešteti gonilne napetosti.

<br><br>

## Ohmov zakon

Ohmov zakon nam pove, da sta napetost in tok premo sorazmerna. Za kolikokrat povečamo napetost, tolikokrat se poveča tok. Zapis ohmovega zakona:

$$ U = R \cdot I $$

**U** je napetost, **I** je tok in **R** je sorazmernostni faktor, imenovan **upor**. Enota za upor je **ohm** (\\(\Omega\\)).

$$ 1\Omega = 1 \frac{V}{A} $$

S povečanjem preseka upornika se upor zmanjša, s podaljševanjem upora pa se upor poveča. To se zapiše z enačbo:

$$ R = \zeta \frac{l}{S} $$

<br><br>

## Vezava uporov

### Vzporedna vezava

<br>

### Zaporedna vezava

<br><br>

## Merilni obseg ampermetra

<br><br>

## Merilni obseg voltmetra

<br><br>

## Kompenzacijsko merjenje napetosti

<br><br>

## Ohmov zakon za generator (notranji upor baterije)



<br><br>

---

<br><br>

## Cheat sheet

| Oznaka                                                       | Enota                         |
|--------------------------------------------------------------|-------------------------------|
| Napetost - \\( U \\)                                         | Volt - \\( V \\)              |
| Upornost - \\( R \\)                                         | Ohm - \\( \Omega \\)          |
| El. tok - \\( I \\)                                          | Amper - \\( A \\)             |
| Moč - \\( P \\)                                              | Watt - \\( W \\)              |
| Specifični upor materjala - \\( \zeta \\)                    | \\( \Omega \phantom{a} mm^2/m \\) |
| Dolžina - \\( l \\)                                          | ponavadi \\( m \\)            |
| Presek - \\( s \\)                                           | ponavadi \\( mm^2 \\)         |
| El. naboj - \\( e \\)                                        | \\( As \\)                    |
| Množica števil - \\( \mathbb{N} \\) ( nasplošno je \\(n\\) ) | Število                       |

> Ta fancy N naj bi biu število elektronov

<br>

## Osnovne formule

#### Osnovni el. naboj

\\( e_0 = 1,6 \cdot 10^{-19}As \\)

#### Ohmov zakon

\\( U = R \cdot I \\)

Pri ohmovem zakonu si lahko pomagamo s tem:

![Ohmov zakon - trikotnik][ohmov-trikotnik]

\\( P = U \cdot I \\)

Za pospešit zadevo lahko združimo te dve enačbi

$$ R = \frac{U^2}{P} $$

\\( P = R \cdot I^2 \\)

$$ R = \zeta \frac{l}{s} $$

$$ I = \frac{e}{t} $$

> objasnilo od spodnje zadeve

\\(e = \mathbb{N} \cdot e_0 \\)

> mogoce brez cdot pa da objasnimo da je n število kirokoli

$$ I = \frac{\mathbb{N} \cdot e_0}{t} $$

> temp


<br>

## Zaporedna in vzporedna vezava

### Zaporedna vezava

![Zaporedna vezava][zaporedna-vezava]

Je kadar vežemo en upor za drugim.

Napetost (\\(U\\)) se razdeli na 2 dela. El. tok \\(I\\) je enak (se ne spreminja). Upor \\(R\\) se izračuna tako, da sešteješ upore skupaj.

\\( U_{1,2} = U_1 + U_2 \\)

\\( I = I \\)

__Računanje uporov__:

\\( R_{1,2,3} = R_1 + R_2 + R_3 \phantom{a} ... \\)

<br>

### Vzporedna vezava

![Vzporedna vezava][vzporedna-vezava]

Je kadar je en upor pod drugim.

Pri vzporedni vezavi je napetost (\\(U\\)) enaka (se ne spreminja). El. tok \\(I\\) se razdeli na 2 dela.

\\( U = U \\)

\\( I_{1,2} = I_1 + I_2 \\)

__Računanje uporov__:

$$ \frac{1}{R} = \frac{1}{R_1} + \frac{1}{R_2} \phantom{a} ... $$

<br><br>

## Primeri / Vaje

> Vaje so iz učbenika

Izračunaj upor, tok,


---

Vaja zajebana ena za dodat


[ohmov-trikotnik]: https://image.ibb.co/fUZ48e/ohm_law_triangle.jpg
[zaporedna-vezava]: https://www.kitronik.co.uk/wp/wp-content/uploads/2014/01/resistors_in_series_1.png
[vzporedna-vezava]: https://www.kitronik.co.uk/wp/wp-content/uploads/2014/01/resistors_in_series_6.png
