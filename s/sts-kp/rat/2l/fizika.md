---
layout: document
latex: true
title: Fizika • 2. letnik • Računalniški Tehnik • STŠ Koper
desc: Snov fizike za 2. letnik Računalniškega tehnika (oz. 5 letnik izobraževanja v računalniški smeri).
---

# Fizika

## Cheap shit

| Oznaka                                                       | Enota                         |
|--------------------------------------------------------------|-------------------------------|
| Napetost - \\( U \\)                                         | Volt - \\( V \\)              |
| Upornost - \\( R \\)                                         | Ohm - \\( \Omega \\)          |
| El. tok - \\( I \\)                                          | Amper - \\( A \\)             |
| Moč - \\( P \\)                                              | Watt - \\( W \\)              |
| Specifični upor materjala - \\( \zeta \\)                    | \\( \Omega \frac{mm^2}{m} \\) |
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





[ohmov-trikotnik]: https://image.ibb.co/fUZ48e/ohm_law_triangle.jpg
[zaporedna-vezava]: https://www.kitronik.co.uk/wp/wp-content/uploads/2014/01/resistors_in_series_1.png
[vzporedna-vezava]: https://www.kitronik.co.uk/wp/wp-content/uploads/2014/01/resistors_in_series_6.png
