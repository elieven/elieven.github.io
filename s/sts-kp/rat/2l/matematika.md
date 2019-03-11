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

<!--

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


<br><br>

-->

> Manjka se kr stvari

<br><br>

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
