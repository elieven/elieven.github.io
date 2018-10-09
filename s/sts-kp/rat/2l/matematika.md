---
layout: document
title: Matematika • 2. letnik • Računalniški Tehnik • STŠ Koper
latex: true
---

# Preface

## Update

Dodan support za [LaTeX](https://en.wikibooks.org/wiki/LaTeX/Mathematics) syntax v dokumentu ([grške črke če jih rabiš](http://web.ift.uib.no/Teori/KURS/WRK/TeX/sym1.html)) - ne rabi se več convertat stvar v sliko in uploadat nikamor. Zdej samo pišeš normalno v dokument. LaTeX sintakso se ovije v `$$`. Na žalost je ta skripta bol počasna in zaradi tega malo text zaglitcha ko prideš na stran ampak usaj stvar dela ful dobro in je dosti lažje kot na roko se prčkljat s slikami. Je pa res da se ne da delat zelo zakompliciranih stvari ampak trenutno jih ne rabimo.

Primer __block__ oz. __display__ računa:

```
$$
A_{m,n} =
 \begin{pmatrix}
  a_{1,1} & a_{1,2} & \cdots & a_{1,n} \\
  a_{2,1} & a_{2,2} & \cdots & a_{2,n} \\
  \vdots  & \vdots  & \ddots & \vdots  \\
  a_{m,1} & a_{m,2} & \cdots & a_{m,n}
 \end{pmatrix}
$$
```

![Slika](https://latex.codecogs.com/svg.latex?%5Cdpi%7B150%7D%20%5Clarge%20%24%24%20A_%7Bm%2Cn%7D%20%3D%20%5Cbegin%7Bpmatrix%7D%20a_%7B1%2C1%7D%20%26%20a_%7B1%2C2%7D%20%26%20%5Ccdots%20%26%20a_%7B1%2Cn%7D%20%5C%5C%20a_%7B2%2C1%7D%20%26%20a_%7B2%2C2%7D%20%26%20%5Ccdots%20%26%20a_%7B2%2Cn%7D%20%5C%5C%20%5Cvdots%20%26%20%5Cvdots%20%26%20%5Cddots%20%26%20%5Cvdots%20%5C%5C%20a_%7Bm%2C1%7D%20%26%20a_%7Bm%2C2%7D%20%26%20%5Ccdots%20%26%20a_%7Bm%2Cn%7D%20%5Cend%7Bpmatrix%7D%20%24%24)

Block računi bodo vdno na sredini, če jih hočeš na levi uporabi inline v svoji vrstici (zgornja in spodnja da so prazne zato da se šteje kot newline).

Za __inline__ račune ki so v sami svoji vrstici (in poravnani na levo) pa tako:

```
\$$ E = mc^2 $$
```

\$$ E = mc^2 $$

Če pa rabiš enačbo al neki znotraj teksta pa tako:

```
Poiščite kot \\( \alpha \\).
```

Poiščite kot \\( \alpha \\).

<br>

## Update 2

Čeprav je dodana podpora za LaTeX enačbe je v primeru ko je dosti računov scroll performance slab. Primer - 40 računov zalega stran tako da se skoraj ne da scrollat. Tipo 3 fps.. tako da bolše dat slike (ki so tudi boljše podprte).

![Slika](https://latex.codecogs.com/svg.latex?%5Cdpi%7B150%7D%20%5Clarge%20%24%24%20A_%7Bm%2Cn%7D%20%3D%20%5Cbegin%7Bpmatrix%7D%20a_%7B1%2C1%7D%20%26%20a_%7B1%2C2%7D%20%26%20%5Ccdots%20%26%20a_%7B1%2Cn%7D%20%5C%5C%20a_%7B2%2C1%7D%20%26%20a_%7B2%2C2%7D%20%26%20%5Ccdots%20%26%20a_%7B2%2Cn%7D%20%5C%5C%20%5Cvdots%20%26%20%5Cvdots%20%26%20%5Cddots%20%26%20%5Cvdots%20%5C%5C%20a_%7Bm%2C1%7D%20%26%20a_%7Bm%2C2%7D%20%26%20%5Ccdots%20%26%20a_%7Bm%2Cn%7D%20%5Cend%7Bpmatrix%7D%20%24%24)

Tako da za zdej pisat enačbe uporabiš [to stran](https://www.codecogs.com/latex/eqneditor.php) (sintaksa je enaka). Tip slike nastaviš na __svg__ , text na Latin modern, velikost pisave na 12pt, resolucija bi mogla bit na 150 in ozadje transparent. Spodaj vidiš neko output kodo in izbereš url encoded. To potem kopiraš in uporabiš za url slike ko jo dajaš v tekst. Če rabiš da je inline naprimer kašen znak al neki pa klikneš inline opcijo. (s tem da ni nujno da rabiš compressed. compressed se uzame kadar je kakšen ulomek al visok račun al neki. če je samo 1 znak je uredu met non compressed).

<br><br>

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

#### Seštevanje in odštevanje

\\( p(x) = 2x^3 - 5x + 4 \\\\ q(x) = x^2 + x - 3 \\)

\\( p(x) + q(x) = 2x^3 - 5x + 4 + x^2 + x - 3 \\\\ = 2x^3 + x^2 - 4x + 1 \\)

Pri seštevanju polinomov lahko dobimo nižjo stopnjo polinoma, nikoli pa višjo od najvišje stopnje polinomov ki jih seštevamo.
