---
layout: document
latex: true
title: OED • 1. letnik • Računalnikar • STŠ Koper
---

# Osnove Elektrodinamike

## Številski sistemi

- __Dvojiški__ (_binarni_) {0,1}
- __Desetiški__ (_decimalni_, _dekadni_) {0,1,2,3...9}
- __Osmiški__ (_oktalni_) {0,1,2,3,4,5,6,7}
- __Šestnajstiški__ (_heksadecimalni_) {0,1,2...9,A,B,C,D,E,F}



### Pretvarjanje

#### DESTIŠKO v DVOJIŠKO (10) → (2)

\$$ 300_{(10)} = $$

```
300:2  = 150  ostanek	0
150:2  = 75   ostanek	0
75:2   = 37   ostanek	1
37:2   = 18   ostanek	1
18:2   = 9    ostanek	0
9:2    = 4    ostanek	1
4:2    = 2    ostanek	0
2:2    = 1    ostanek	0
1:2    = 0    ostanek	1
```

\$$ 300_{(10)} = 100101100_{(2)} $$



#### DVOJIŠKO v DESTIŠKO (2) → (10)

\$$ 100101100_{(2)} = $$

Začneš s številko na desni, ki je \\(2^0\\), naslednja je \\(2^1\\), potem \\(2^3\\) in tako naprej.

```
0 * 2^0  =  0 * 1    = 0
0 * 2^1  =  0 * 2    = 0
1 * 2^2  =  1 * 4    = 4
1 * 2^3  =  1 * 8    = 8
0 * 2^4  =  0 * 16   = 0
1 * 2^5  =  1 * 32   = 32
0 * 2^6  =  0 * 64   = 0
0 * 2^7  =  0 * 128  = 0
1 * 2^8  =  1 * 256  = 256
```

Na koncu samo sešteješ vse produkte.

\$$ 100101100_{(2)} = 300_{(10)} $$



#### DESTIŠKO v OSMIŠKO (10) → (8)

\$$ 300_{(10)} = $$

```
300:8 = 37   ostanek = 4
37:8  = 4    ostanek = 5
4:8   = 0    ostanek = 4
```

\$$ 300_{(10)} = 454_{(8)} $$



#### OSMIŠKO v DESETIŠKO (8) → (10)

\$$ 454_{(8)} = $$

```
  4 * 8^2 + 5 * 8^1 + 4 * 8^0 =
= 4 * 64  + 5 * 8   + 4 * 1   =
= 256 + 44 =
= 300
```

\$$ 454_{(8)} = 300_{(10)} $$



#### DESETIŠKO v ŠESTNAJSTIŠKO (10) → (16)

\$$ 300_{(10)} = $$

```
300:16 =  18 ostanek 12   = C
18:16  =  1  ostanek 2    = 2
1:16   =  0  ostanek 1    = 1
```

Rezultat se prebere od spodaj navzgor.

\$$ 300_{(10)} = 12\mathrm{C_{(16)}} $$



#### ŠESTNAJSTIŠKO v DESETIŠKO (16) → (10)

\$$ 12\mathrm{C_{(16)}} = $$

```
  1 * 16^2 + 2 * 16^1 + 12 * 16^0
= 256 + 32 + 12
= 300
```

\$$ 12\mathrm{C_{(16)}} = 300_{(10)} $$



> bonus: 16v2, 2v16, 2v8 in 8v2



## Logične funkcije

### Negacija

\$$ y = \overline{x} $$

| \\(x\\) | \\(y\\) |
|---------|---------|
| 0       | 1       |
| 1       | 0       |



### Konjunkcija

\$$ y = x_1 \cdot x_2 $$

Druge možne notacije so z znakom `&` in `^`.

| \$$x_1 \phantom{a} x_2$$  | \$$x_1 \times{ x_2 }$$  |
|---------------------------|:-----------------------:|
| 0   0                     |            0            |
| 0   1                     |            0            |
| 1   0                     |            0            |
| 1   1                     |            1            |



### Disjunkcija

\$$ y = x_1 + x_2 $$

Druga možna notacija je z znakom `˅`.

| \$$x_1 \phantom{a} x_2$$  | \$$ x_1 + x_2 $$  |
|---------------------------|:-----------------:|
| 0   0                     |         0         |
| 0   1                     |         1         |
| 1   0                     |         1         |
| 1   1                     |         1         |




## Zakonitosti

### Zakon o zamenjavi

\$$ x_1 \cdot x_2  = x_2 \cdot x_1  $$

\$$ x_1 + x_2 = x_2 + x_1 $$



### Zakon o združevanju

![Zakon o združevanju](https://cdn.rawgit.com/elieven/b16f38d57d55b06b326883363af6e5ea/raw/1e8aede70845e4f6b6a84e52abcacfd611d5a12b/zaoz1.svg)

![Zakon o združevanju 2](https://cdn.rawgit.com/elieven/6295e030df19f40946939dad1b7df099/raw/74634ea9308bd2c5d30d135c4ea8f587a275bae3/zaoz2.svg)



### Zakon o razčlenjevanju

\$$ x_1 \cdot (x_2 + x_3) = x_1 \cdot x_2  + x_1 \cdot x_3 $$




## Teoremi

![Teoremi](https://cdn.rawgit.com/elieven/fa4c76a917de3d0d99a978e762ce46a8/raw/6bd8931bafcb05d478f62b0e7e2021095a183b90/teoremi.svg)



| \$$ x_1 \phantom{a} x_2 $$  | \$$ \overline{x_1} \phantom{a} \overline{x_2} $$  |  \\(x_1 \cdot x_2\\) |  \\(\overline{x_1}\cdot\overline{x_2}\\) | \\(\overline{x_1 \cdot x_2}\\)  | \\(x_1 + x_2\\)  |  \\(\overline{x_1} + \overline{x_2}\\) | \\(\overline{x_1 + x_2}\\)  |
|:-------:|:-------:|:---:|:---:|:---:|:---:|:---:|:---:|
| 0  0  |  1  1 |  0  | 1   |  1  |  0  |  1  | 1   |
| 0  1  |  1  0 |  0  | 0   |  1  |  1  |  1  | 0   |
| 1  0  |  0  1 |  0  | 0   |  1  |  1  |  1  | 0   |
| 1  1  |  0  0 |  1  | 0   |  0  |  1  |  0  | 0   |

__Četrti__ in __osmi__ stolpec sta si enaka, tako kot tudi __peti__ in __sedmi__ stolpec.

\$$ \overline{x_1} \times{\overline{x_2}} = \overline{x_1 + x_2} $$

\$$ \overline{x_1} + \overline{x_2} = \overline{ x_1 \cdot x_2 } $$




## Antivalenca
### Ekskluzivna ALI vrata (EX-OR vrata)

> slika EX-OR vrat

$$ y = \overline{x_1} \cdot x_2 + x_1 \cdot \overline{x_2} $$

| \\(x_1 \phantom{a} x_2\\) | \\(y\\) |
|:-------------------------:|---------|
|           0  0            | 0       |
|           0  1            | 1       |
|           1  0            | 1       |
|           1  1            | 0       |

Izhod je 1 takrat, ko sta na vhodih različni vrednosti.

| \\(x_1 \phantom{a} x_2 \phantom{a} x_3\\) | \\(y\\) |
|:-----------------------------------------:|---------|
|                  0  0  0                  | 0       |
|                  0  0  1                  | 1       |
|                  0  1  0                  | 1       |
|                  0  1  1                  | 0       |
|                  1  0  0                  | 1       |
|                  1  0  1                  | 0       |
|                  1  1  0                  | 0       |
|                  1  1  1                  | 1       |

Ko je liho število enic je y = 1.



## Ekvivalenca
### Ekskluzivna NE-ali vrata (EX-NOR gate)

> slika vrat

$$ y = \overline{x_1} \cdot \overline{x_2} + x_1 \cdot x_2 $$

| \\(x_1 \phantom{a} x_2\\) | \\(y\\) |
|:-------------------------:|---------|
|           0  0            | 1       |
|           0  1            | 0       |
|           1  0            | 0       |
|           1  1            | 1       |

Izhod je ena kadar sta vhodni vrednosti enaki.

| \\(x_1 \phantom{a} x_2 \phantom{a} x_3\\) | \\(y\\) |
|:-----------------------------------------:|---------|
|                  0  0  0                  | 0       |
|                  0  0  1                  | 1       |
|                  0  1  0                  | 1       |
|                  0  1  1                  | 0       |
|                  1  0  0                  | 1       |
|                  1  0  1                  | 0       |
|                  1  1  0                  | 0       |
|                  1  1  1                  | 1       |

Ta tabela je enaka kot EX-OR.



## STIKALA

### Delovno stikalo

![delovno stikalo][delst]

- Vklopi = tok teče skozi
- Izklopi = ni toka



### Mirovno stikalo

![mirovno stikalo][mirst]

- Izklopi = tok teče skozi
- Vklopi = ni toka



### Menjalno stikalo

![menjalno stikalo][menst]

- Vklopi = tok po eni poti
- Izklopi = tok po drugi poti




## LOGIČNA VRATA S STIKALI

### Negator

![Negator][negator]

### ALI vrata

![ALI vrata][ali]

### IN vrata

![IN vrata][in]

### NE-IN vrata

$$ \overline{ x_1 \cdot x_2 } = \overline{x_1} + \overline{x_2} $$

![NE-IN vrata][nein]

### NE-ALI vrata

$$ \overline{ x_1 + x_2 } = \overline{x_1} \cdot \overline{x_2} $$

![NE-ALI vrata][neali]

### EX-OR vrata

$$ y = \overline{x_1} \cdot x_2 + x_1 \cdot \overline{x_2} $$

![EX-OR vrata][exor]

### EX-NOR vrata

$$ y = \overline{x_1} \cdot \overline{x_2} + x_1 \cdot x_2 $$

![EX-NOR vrata][exnor]



> vaje realiziranja vezij
>
> in risanja teh vezij v raznih
>
> diagramskih stilih




## LOGIČNA VEZJA

- __KOMBINACIJSKA VEZJA:__ Stanje izhoda je odvisno samo od trenutne kombinacije stanj vhodnih spremenljivk.
- __SEŠTEVALNIK:__ je vezje, ki tvori vsoto dveh binarnih števil
- __POLOVIČNI SEŠTEVALNIK:__ sešteje dve enomestni števili (binarni)





[negator]: https://res.cloudinary.com/solamona/image/upload/v1537542041/zvs/sts-kp/rac/1l/oed/negator.svg
[ali]: https://res.cloudinary.com/solamona/image/upload/v1537542041/zvs/sts-kp/rac/1l/oed/ali-vrata.svg
[in]: https://res.cloudinary.com/solamona/image/upload/v1537542041/zvs/sts-kp/rac/1l/oed/in-vrata.svg
[nein]: https://res.cloudinary.com/solamona/image/upload/v1537542043/zvs/sts-kp/rac/1l/oed/ne-in-vrata.svg
[neali]: https://res.cloudinary.com/solamona/image/upload/v1537542041/zvs/sts-kp/rac/1l/oed/ne-ali-vrata.svg
[exor]: https://res.cloudinary.com/solamona/image/upload/v1537542041/zvs/sts-kp/rac/1l/oed/ex-or-vrata.svg
[exnor]: https://res.cloudinary.com/solamona/image/upload/v1537542041/zvs/sts-kp/rac/1l/oed/ex-nor-vrata.svg

[delst]: https://res.cloudinary.com/solamona/image/upload/v1537535750/zvs/sts-kp/rac/1l/oed/delovno-stikalo.png
[mirst]: https://res.cloudinary.com/solamona/image/upload/v1537535750/zvs/sts-kp/rac/1l/oed/mirovno-stikalo.png
[menst]: https://res.cloudinary.com/solamona/image/upload/v1537535750/zvs/sts-kp/rac/1l/oed/menjalno-stikalo.png
