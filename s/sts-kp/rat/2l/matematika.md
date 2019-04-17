---
layout: document
title: Matematika • 2. letnik • Računalniški Tehnik • STŠ Koper
latex: true
---

# Matematika

---

manjka se kr stvari

---

## Polinomi

Predpis za polinome:

\\( p(x) = a_nx^n + a_{n-1}x^{n-1} + a_{n-2}x^{n-2} + \phantom{a}\cdots\phantom{a} a_2x^2 + a_1x + a_0 \\)

<br>

Stopnja polinoma je \\(n\\) - število ki je na največji stopnji (potenci) je stopnja polinoma.

\\(f(x) = 2x + 3\\) - polinom prve stopnje

\\(f(x) = x^2 -2x -3\\) - polinom druge stopnje

\\(f(x) = 2x^4 - 3x^2 + x - 1\\) - polinom četrte stopnje

<br>

Tam kjer manjka člen (npr. 3. enačba nima \\(x^3\\) ima ta člen koeficient 0).

\\( f(x) = 2x^4 - 3x^2 + x - 1 \\) členi te funkcije so \\(a_4 = 2 , a_3 = 0 , a_2 = -3 , a_1 = 1 , a_0 = -1\\)

<br>

\\(a_n\\) se imenuje vodilni koeficient (št. pred x-om)
\\(a_nx^n\\) je vodilni člen
\\(a_0\\) je prosti člen

#### Vaje:

> 1) zapiši dele funkcije

\\( p(x) = 6x^3 - 5x^2 + x + 5 \\)

- koeficienti = 6, -5, 1, 5
- stopnja = tretja (\\(n = 3\\))
- vodilni koeficient = 6 (\\(a_3 = 6\\))
- vodilni člen = \\(6x^3\\) (\\(a_nx^n = 6x^3\\))

<br>

### Računanje s polinomi

#### Seštevanje

\\( p(x) = 2x^3 - 5x + 4 \\\\ q(x) = x^2 + x - 3 \\)

\\( p(x) + q(x) \\\\ = 2x^3 - 5x + 4 + x^2 + x - 3 \\\\ = 2x^3 + x^2 - 4x + 1 \\)

Pri seštevanju polinomov lahko dobimo nižjo stopnjo polinoma, nikoli pa višjo od najvišje stopnje polinomov ki jih seštevamo.

#### Odštevanje

\\( p(x) = 2x^3 - 5x + 4 \\\\ q(x) = x^2 + x - 3 \\)

\\( p(x) - q(x) \\\\ = (2x^3 - 5x + 4) - (x^2 + x - 3) \\\\ = 2x^3 - 5x + 4 - x^2 + x - 3 \\\\ = 2x^3 - x^2 - 6x + 7 \\)

#### Množenje

\\( p(x) = x^2 + x - 2 \\\\ q(x) = 2x + 3 \\)

\\( p(x) \cdot q(x) \\\\ = (x^2 + x - 2)(2x + 3) \\\\ = 2x^3 + 3x^2 + 2x^2 + 3x - 4x - 6 \\\\ = 2x^3 + 5x^2 - x - 6 \\)

Pri množenju se stopnja polinoma sešteva (ker se potence pri množenju seštevajo).

#### Deljenje

> wtf kako da to nardim u mathjaxu ??? tipo 1 mesec rabi da skontam zaprau lol

> Manjka se kr stvari



## Adicijski izreki

$$
\newcommand{\RAC}[1]{\phantom{a}\\[0pt]\mathrm{#1}\\[0pt]\phantom{a}}

\sin 75^o \neq \sin 30^o + \sin 45^o \\[8pt]
\sin 75^o = \sin (30^0 + 45^o)
$$

$$
\RAC{
  \color{#090}{\pm \pm} \quad \sin (\alpha \pm \beta) = \sin \alpha \cdot \cos \beta \pm \cos \alpha \cdot \sin \beta \\[8pt]

  \color{#090}{\pm \mp} \quad \cos (\alpha \pm \beta) = \cos \alpha \cdot \cos \beta \mp \sin \alpha \cdot \sin \beta
}
$$

$$
\RAC{
\begin{array}{c|ccccc}

\alpha & 0^o & 30^o & 45^o & 60^o & 90^o \\
\hline
\sin \alpha & 0 & \frac{1}{2} & \frac{\sqrt{2}}{2} & \frac{\sqrt{3}}{2} & 1 \\
\cos \alpha & 1 & \frac{\sqrt{3}}{2} & \frac{\sqrt{2}}{2} & \frac{1}{2} & 0


\end{array}
}
$$



## Obrestni račun

| Spremenljivka               | Kaj pomeni                              |
| --------------------------- | --------------------------------------- |
| **G** - glavnica            | Znesek, ki se nam obrestuje             |
| **o** - obresti             | Znesek, za kateregase glavnica poveča   |
| **p** - obrestna mera       | V %, banke računajo letno obrestno mero |
| **r** - obrestovalni faktor | \\( \mathrm{r} = 1 + \frac{p}{100} \\)  |
| **n** - obrestovalna doba   |                                         |



### Navadno obrestovanje

Glavnica ostaja enaka, obresti so enake.


$$
\RAC{
    o = \frac{G \cdot p}{100} \qquad o_n = \frac{G \cdot p \cdot n}{100} = \text{obresti po n letih}
}
$$

> Primer: Miha si od banke sposodi...



### Obrestno obrestovanje

Glavnica se po računanju obresti veča, zato se tudi obresti s časom večajo.


$$
\RAC{
    G_0 = 1000 \\
    G_1 = 1030 \\
    G_2 = 1060,9 \\
    G_3 = 1090,73
}
$$





## Odvod

Odvod funkcije `f(x)` v točki `T(x, y)` je enak smernemu koeficientu tangente na graf te funkcije v tej točki. Označimo ga `f'(x)`.  


$$
f'(x_0) = k_t
$$


![Odvod funkcije slika](https://res.cloudinary.com/solamona/image/upload/v1555364958/zvs/sts-kp/rac/5l/matematika/odvod_1.jpg){: width="300px" align="center"}



### Pravila za odvajanje

- Produkt funkcije in konstante 

$$
\big(c \cdot f(x)\big)' = c \cdot f'(x)
$$



- Vsota in razlika funkcij 

$$
\big( f(x) \pm g(x) \big)' = f'(x) \pm g'(x)
$$



- Produkt funkcij 

$$
\big( f(x) \cdot g(x) \big)' = f'(x) + g(x) + f(x) + g'(x)
$$



- Kvocient funkcij 


$$
\bigg( \frac{f(x)}{g(x)} \bigg)' = \frac{f'(x) \cdot g(x) - f(x) \cdot g'(x)}{g^2(x)}
$$




### Odvodi elementarnih funkcij

| FUNKCIJA `f(x)` | ODVOD `f(x)'`             |
| --------------- | ------------------------- |
| \\( c \\)       | \\( 0 \\)                 |
| \\( x \\)       | \\( 1 \\)                 |
| \\( x^n \\)     | \\( nx^{n-1} \\)          |
| \\( e^x \\)     | \\( e^x \\)               |
| \\( a^x \\)     | \\( a^xlna \\)            |
| \\( lnx \\)     | \\( \frac{1}{x} \\)       |
| \\( log_ax \\)  | \\( \frac{1}{xlna} \\)    |
| \\( sinx \\)    | \\( cosx \\)              |
| \\( cosx \\)    | \\( -sinx \\)             |
| \\( tanx \\)    | \\( \frac{1}{cos^2x} \\)  |
| \\( cotx \\)    | \\( -\frac{1}{sin^2x} \\) |





## Kombinatorika

Kombinatorika je področje matematike, ki se ukvarja s tem, na koliko načinov je možno razporediti neko množico elementov ali na koliko načinov je možno izbrati elemente iz neke množice.



### Kombinatorično drevo

S kombinatoričnim drevesom grafično prikažemo proces

Izbiranja odločitev. Drevo vseh možnosti narišemo tako, da vsako vozlišče razvejimo na toliko vozlišč, kolikor izbir imamo na voljo v danem koraku.

![Kombinatorično drevo](https://res.cloudinary.com/solamona/image/upload/v1554756069/zvs/sts-kp/rac/5l/matematika/kombinatorika_drevo.png)

[Pravilo produkta](pink) ali [osnovni izrek kombinatorike](pink): Če imamo na voljo ***m*** možnosti iz prve skupine in ***n*** možnosti iz druge skupine, izbrati pa želimo eno možnost iz prve **in hkrati** eno iz druge skupine, potem imamo na izbiro skupno **m · n** možnosti.

**Primer**:  Pripravljamo darilo za rojstni dan. Najprej izberemo eno od daril (čokolada, igrača, knjiga, darilni bon), potem darilo zavijemo v eno od možnosti (škatla, darilna vrečka, darilni papir) in na koncu dodamo pentljo ene izmed barv (rdeča, modra, rumena). Koliko različnih daril imamo na voljo?

> Rešitev: N = 4 · 3 · 3 = 36

<br>

[Pravilo vsote](pink): Če imamo na voljo ***m*** možnosti iz prve skupine in ***n*** možnosti iz druge skupine, izbrati pa želimo točno eno možnost iz prve **ali** iz druge skupine, potem imamo na izbiro skupaj **m + n** možnosti.

**Primer**: Na kosilo gremo lahko picerijo, ki ponuja 5 vrst pic, v mehiško restavracijo ki ponuja 3 vrste tortilj ali v italijansko restavracijo ki ponuja 4 vrste testenin. Koliko različnih kosilo imamo na voljo?

> Rešitev: N = 5 + 3 + 4 = 12



### Permutacije

Permutacije so razporeditve danih n elementov na n prostih mest. Če so vsi elementi med seboj različni, so to **permutacije brez ponavljanja**. Število permutacij brez ponavljanja izračunamo po formuli:


$$
\RAC{
    P_n = n \cdot (n - 1) \cdot (n - 2) \cdot \dots \cdot 3 \cdot 2 \cdot 1 = n!
}
$$


To računsko operacijo imenujemo **n fakulteta** ali **n faktorsko**.

Primer: Koliko različnih petmestnih števil lahok zapišemo iz števk 1, 2, 3, 4, 5?

> Rešitev: P<sub>5</sub> = 5! = 120



### Variacije

**Variacije brez ponavljanja** so razporeditve n različnih elementov na r prostih mest. Pri tem je r < n, zato ostane nekaj elementov nerazporejenih. Število variacije brez ponavljanja izračunamo po formuli:


$$
\RAC {
    V^r_n = \frac{n!}{(n - r)!}
}
$$


Primer: Koliko različnih trimestnih števil lahko sestaviš iz števk 1, 2, 3, 4, 5?

> Rešitev: V<sup>3</sup><sub>5</sub> = 5! : 3! = 20



### Kombinacije

Če pri variacijah zanemarimo vrstni red in opazujemo samo, kateri elementi so izbrani, dobimo **kombinacije**. **Kombinacije brez ponavljanja** so izbire ***r*** (različnih) elementov izmen ***n*** različnih elementov, ki so na voljo. Število kombinacij brez ponavljanja izračunamo po formuli:


$$
\RAC {
    C^r_n = \frac{n!}{r! \cdot (n - r)!}
}
$$


Izraz, ki nastopa na desni strani zgornje formule, lahko označimo tudi z binomskim simbolom:


$$
\RAC {
    \binom{n}{r} = C^r_n = \frac{n!}{r! \cdot (n - r)!}
}
$$


Primer: Na koliko načinov lahko izberem iz razreda z 20 dijaki 3 predstavnike?

> Rešitev: C<sup>3</sup><sub>20</sub> = 20! / 3! · 17! = 1140

 