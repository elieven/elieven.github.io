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

$$
\newcommand{\RAC}[1]{\phantom{a}\\[0pt]\mathrm{#1}\\[0pt]\phantom{a}}
$$

## Električni tok (I)

Električni **tok** merimo v **Amperih** (**A**). Električni **naboj** je označen s črko **e** in njegova enota je **Columb** (**C**). **Čas** je označen s črko **t**. \\(\mathbb{Z}\\) je **realno število**. \\(\mathrm{e_0}\\) je **osnovni naboj**.

$$
\RAC{
  I = \frac{e}{t} \qquad e = I \cdot t \qquad As = A \cdot s
  \\[16pt]
  e = \mathbb{Z} \cdot e_0 \qquad e_0 = 1,6 \cdot 10^{-19}As
}
$$

**Amper sekunda** in **Columb** sta enaki enoti - \\(\mathrm{1As = C}\\).

<br>

### Vaja 1: izračunaj čas

$$
\RAC{
  I = 20mA \qquad 
  e = 200mAh \qquad 
  t = ?
}
$$

> Treba najt kaj je navodilo naloge da ni tko pusto "izračunaj čas" ...

$$
\require{cancel}
\RAC{
  t = \frac{e}{I} \quad 
  = \quad \frac{200\cancel{mA}h}{20\cancel{mA}} \quad 
  = \quad 10h
}
$$

<br>

### Vaja 2: izračunaj število elektronov, ki preteče v 1s

$$
\RAC{
  I = 20mA \qquad
  e = 200mAh \qquad
  t = 1s \qquad
  \\[8pt]
  \mathbb{Z} = ?
}
$$

Začnemo z **enačbo za** izračunat **električni tok (I)**.

$$
\RAC{
  I = \frac{\color{fuchsia}{e}}{t} \quad  = \quad \frac{\color{fuchsia}{\mathbb{Z} \cdot e_0 }}{t}
}
$$

Potem jo obrnemo, da dobimo enačbo za \\(\mathbb{Z}\\)

$$
\RAC{
  \begin{align}
  \mathbb{Z} & = \frac{\color{#06f}{I} \cdot \color{#c0c}{t}}{ \color{#093}{e_0} } 
  \\[12pt]
  \mathbb{Z} & = \frac{ \color{#06f}{20 \cdot 10^{-3} A} \cdot \color{#c0c}{1s} }{ \color{#093}{1,6 \cdot 10^{-19}As} } 
  \\[16pt]
  \mathbb{Z} & = 0,02
  \end{align}
}
$$

<br>

> Vaje: učbenik "Svet elektronov in atomov 3" stran 62 - naloge 1 - 8

<br><br>

## Električna napetost (U)

$$
\RAC{
  A = F \cdot s \qquad F = m \cdot a
}
$$

**A** je **delo** (merimo ga v **Joulih** - **J**). **F** je **sila** in **s** je **pot**.

V drugi enačbi je **m = masa** in **a = pospešek** (merjen v m/s<sup>2</sup>).

$$
\RAC{
  P \quad = \quad \frac{A}{t} \quad = \quad \frac{J}{s} \quad = \quad W \\[16pt]

  \begin{align}
  A & = U \cdot e \\[8pt]
  A & = U \cdot t \cdot I \\[8pt]
  P & = \frac{U \cdot \cancel{t} \cdot I}{\cancel{t}} \\[8pt]
  P & = U \cdot I
  \end{align}
}
$$

**Električno delo:** 1 Volt = 1 Joul na Amper sekundo

$$
\RAC{
  1V = \frac{J}{As} \qquad J = VAs
}
$$

<br>

### Kirchhoffova zakona

> Iz Wikipedije

#### 1. Kirchhoffov zakon TOKOVNEGA VOZLIŠČA

Vsota tokov, ki pritekajo v neko vozlišče v električnem krogu, je enaka vsoti tokov, ki iz tega vozlišča odtekajo, ali drugače povedano, vsota tokov v vozlišču je enaka 0.

Bolj strokovno povedano: I. Kirchhoffov izrek pravi, da je pri vzporedni vezavi uporov na vseh uporih napetost enaka, tok vira pa se razdeli na posamezne upore.

![Prvi Kirchhoffov izrek](https://upload.wikimedia.org/wikipedia/commons/6/69/KCL.png)

#### 2. Kirchhoffov zakon NAPETOSTNE ZANKE

V sklenjeni tokovni zanki je vsota padcev napetosti na vseh elementih v zanki enaka vsoti napetosti na vseh izvirih napetosti, ki nastopajo v zanki, ali drugače povedano, razlika električnih potencialov v zanki pri zaporedni vezavi upornikov je enaka 0.

![Drugi Kirchhoffov izrek](https://upload.wikimedia.org/wikipedia/commons/e/e3/KVL.png)

<br><br>

## Ohmov zakon

Ohmov zakon pravi da je **tok skozi upornik** pri stalni temperaturi **premo sorazmeren** napetosti med priključkoma upornika.

$$
\RAC{
  U = R \cdot I \qquad R = \frac{U}{I} \qquad I = \frac{U}{R}
}
$$

<br><br>




---







- električni tok (I) ✔
- električna napetost (U) ✔
- električno delo ✔
- ohmov zakon
- vezava uporov
  - zaporedno
  - vzporedno
- merlini obseg ampermetra
- merilni obseg voltmetra
- kompenzacijsko merjenje napetosti
- ohmov zakon za generator
- notranji upor baterije
- elektrostatika
- električno polje
- električna napetost (*spet?*)
- kondenzator
  - vezava kondenzatorja
- gibanje
  - sila
- gibanje naelektrenih delcev v električnem polju
  - dioda
  - trioda
  - elektronski top
- sila na vodnik
- *magnetno polje*










---

> Strani 99, 103 in 104 vse naloge.


$$
\RAC{
  \overrightarrow{F} = I \cdot \overrightarrow{\mathscr{l}} \cdot \overrightarrow{B}
}
$$

**F** je sila, **I** je tok, **l** je dolžina žice in **B** je jakost magnetnega polja.

<br>

#### Vaja: elektromotor s tuljavo v magnetnem polju

![Slika tuljave v magnetnem polju](https://res.cloudinary.com/solamona/image/upload/v1547743798/zvs/sts-kp/rac/5l/fizika/navor_sile1_640_4.jpg){: .imgc}

Imamo elektronsko tuljavo kot na skici. Stranica **a** je dolga 15 cm in **b** 8cm. Ima 50 **navojev** in skozi teče **tok** 1,2 Ampera. Gostota magnetnega polja je 0,8T. Vrti se s 1500 vrtljaji na minuto.

$$
\RAC{
  \begin{array}{ccc|c}
    a & = & 15cm \\
    b & = & 8cm \\
    N & = & 50 \\
    I & = & 1,2A \\
    B & = & 0,8N \\
    \nu & = & 1500/min \\
    \hline
    M & = & \\
    P & = &
  \end{array}
}
$$

Najprej izračunamo **M**. Enačba za **M** od **enega** navoja je:

$$
\RAC{
  M_1 \quad = \quad r \cdot F \quad = \quad \frac{b}{2} \cdot F_1 + \frac{b}{2} \cdot F_2
}
$$

Za **celoten M** od vseh **50** navojev:

$$
\RAC{
  \begin{align}

  M & = N \cdot \color{#0a0}{b} \cdot I \cdot \color{#0a0}{a} \cdot B \\[12pt]

  M & = \color{#e40}{N} \cdot \color{#919}{I} \cdot \color{#0a0}{S} \cdot \color{#04f}{B} \\[8pt]

  M & = \color{#e40}{50} \cdot \color{#919}{1,2\cancel{A}} \cdot \color{#0a0}{15 \cdot 8 \cdot 10^{-4}m^{\cancel{2}}} \cdot \color{#04f}{0,8\frac{N}{\cancel{A}\cancel{m}}} \\[8pt]

  M & = 50 \cdot 1,2 \cdot 15 \cdot 8 \cdot 10^{-4}m \cdot 0,8N \\[16pt]

  M & = 0,57Nm

  \end{align}
}
$$