---
layout: document
latex: true
title: OED • 2. letnik • Računalnikar • STŠ Koper
---

# Osnove Elektrodinamike

## Električni naboj - Q

\$$ Q = I \times{t} $$

Enota je \\(As\\) (amper sekunda).



__Osnovni naboj:__

\$$ e_0 = ^+_- 1,6 \times{ 10^{-19} As } $$

Naboj telesa je odvisen od __razlike__ med __številom elektronov__ (e<sup>-</sup>) in  __števila protonov__ (p<sup>+</sup>) na telesu in je vedno večkratnik osnovnega naboja.

> __Primer:__
> Koliko e<sup>-</sup> potrebujemo, da dobimo naboj 1As?



![krizni racun zacetek][r1d1]



\$$ x = \frac{ 1e^- \times{ As } }{ 1,6 \times{ 10^{-19} As } } $$



\$$ x = \frac{ 1e^- \times{ 10^{-19}} }{ 1,6 } $$



\$$ 1As = 62,5 \times{ 10^{17}e^- } $$



## Električni potencial - V

Potencial zemlje je enak 0. Potencial nekega telesa je enak napetosti med zemljo in telesom. Napetost med dvema telesoma je enaka razliki potenciala teh dveh teles.

![elektricni potencial slika][slika-el-potencial]

\$$ U_{12} = V_2 - V_1 $$



## Gostota toka - J

\$$ J = \frac{I}{A} $$

> slika

Gostota električnega toka nam pove kako na gosto grejo e<sup>-</sup> skozi vodnik. __Dopustna gostota__ je največja gostota toka, ki lahko teče skozi material brez da bi se ta stalil.



## Električna napetost - U

Enota je \\( V \\) (volt). Električno napetost dobimo tako, da ločimo e<sup>-</sup> in p<sup>+</sup>. Električna napetost je "želja" p<sup>+</sup> in e<sup>-</sup>, da bi vzpostavili ravnovesje nabojev. Nastane med različno nabitimi telesi. Je pritisk, ki poganja el. tok. Elektroni gredo od presežka do primanjkljaja.



### Izvori napetosti

Izvori napetosti so naprave, ki proizvajajo stalno napetost. Delujejo kot črpalke za elektrone. Črpajo jih na primanjkljaju in jih pošiljajo na presežek.



## Tok v plinih

Prevajajo samo ionizirani plini. Ioniziramo jih tako, da jih priključimo na zelo visoko napetost. Med prevajanjem visoka napetost ni potrebna, takrat začne tok zelo hitro naraščat, zato ga je treba omejevat. Primer je neonska žarnica.

> slika



## Jakost električnega toka - I

\$$ I = \frac{Q}{t} $$

Enota je \\( A \\) (amper)

> slika

Jakost el. toka je enaka količini naboja, ki gre skozi prerez vodnika v določenem času.



## Električna upornost - R

\$$ R = \frac{\rho \times{l} }{A} $$

Enota je \\( \Omega \\) (ohm).



![Električna upornost slika][slika-el-upornost]

\\( l \\) in \\( A \\) so geometrijske lastnosti, \\( \rho \\) pa je snovna lastnost.

Elektroni ne grejo skozi material naravnost, ampak se na svoji poti zaletavajo v atome. Tako se zmanjšuje njihova količin in hitrost. Rečemo, da se material upira el. toku. To je električna upornost. Odvisna je od dimenzij prevodnika in materiala.



## Električna prevodnost - G

\$$ G = \frac{1}{R} $$

Enota je \\( S \\) (simens).

Prevodnost je lastnost materiala, da prevaja električni tok. Je nasprotje upornosti. Material, ki dobro prevaja ima majhno upornost, tisti, ki slabo prevaja, pa veliko upornost.



## Vpliv temperature na upornost

\$$ R = R_0( 1 + \propto \triangle T) $$

| Znak                | Pomen                                                |
|---------------------|------------------------------------------------------|
| \\( R \\)           | Upornost pri temperaturi                             |
| \\( R_0 \\)         | Upornost pri 20°C                                    |
| \\( \propto \\)     | Temperaturni koeficient materiala (+ ali -)          |
| \\( \triangle T \\) | Sprememba temperature  |

\\( \triangle T = T - 20°C \\)

Pove nam za koliko se spremeni upornost, če se __T__ spremeni za **1°C**. Če je \\( \propto^+ \\) se s povečanjem temp. poveča tudi upornost, če je pa \\( \propto^- \\) pa se zmanjša.





[slika-el-upornost]: https://res.cloudinary.com/solamona/image/upload/v1536846569/zvs/sts-kp/rac/2l/oed/elektricna-upornost-slika.svg
[slika-el-potencial]: https://res.cloudinary.com/solamona/image/upload/v1536858731/zvs/sts-kp/rac/2l/oed/el-potencial.svg

[r1d1]: https://res.cloudinary.com/solamona/image/upload/v1536856835/zvs/sts-kp/rac/2l/oed/krizni-racun-1.svg
