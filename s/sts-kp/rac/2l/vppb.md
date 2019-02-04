---
title: VPPB • 2. letnik • Računalnikar • STŠ Koper
layout: document
latex: true
---

# Vzdrževanje in Postavitev Podatkovnih Baz

## Osnove

Podatki so organizirani v tabele oz. sezname vrstic in stolpcev, ki spominjajo na delovni list. Vsaka **vrstica** se imenuje **zapis**, vsak **stolpec** pa **polje**.

Zapis združuje podatke tako, da so smiselni in usklajeni medtem ko polje predstavlja le en element podatkov, npr. v tabeli `Dijak` so v vsaki vrstici (zapisu) podatki o enem dijaku. V vsakem stolpcu (polju) pa je neka vrsta podatkov o vseh dijakih npr. priimek.



**Tabela 1: Dijak**

| ID_dijak | ime       | priimek | naslov                |
|:--------:|:----------|:--------|:----------------------|
| 1        | Lucija    | Gržin   | 217 Wayside Lane      |
| 2        | Dino      | Lazar   | 2157 Central Avenue   |
| 3        | Jaroslava | Firant  | 4196 Mutton Town Road |
| 4        | Aleksej   | Maglica | 3325 Pineview Drive   |




## Postopek načrtovanja podatkovnih baz

1. **Določanje namena zbirke podatkov**
2. **Iskanje in organiziranje zahtevanih podatkov**
3. **Razporejevanje podatkov v tabele** (v tabeli naj bodo shranjeni samo podatki o tej tabeli - npr v Dijak samo o dijakih)
4. **Navajanje primarnih ključev** (Vsaki tabeli je potrebno določiti primarni ključ; to je polje, ki enolično določa posamezen zapis - npr. emšo ali davčna št.
5. **Nastavljanje relacij tabel** (Določiti je potrebno kako so podatki v eni tabeli povezani s podatki v drugih tabelah).



### Načrtovanje tabel

Novo tabelo se ustvari v zavihku **Ustvari** v skupini **Tabele**, kjer se izbere možnost **Načrt tabele**. V načrtu se tabeli določi ime polja, podatkovni tip, opis polj ter lastnosti polj, ki jih nastavimo tako, da nadzirajo značilnosti in delovanje celotne tabele.

> VAJA - tabela dijak (ime, priimek, datum rojstva, naslov, emšo,/ID, spol)

Vsakemu polju v tabeli se določi podatkovni tip. Pri določitvi podatkovnega tipa zbiramo iz spustnega seznama (besedilo, število, da/ne, datum, ura, valuta... ).



## Uporaba lastnosti polj

### Podatkovni tip: BESEDILO

- **Velikost polja:** največ 255 (znakov v besedilu) lahko omejimo naprimer na 20 znakov.
- **Oblika:** znak manjše (`<`) besedilo zapiše z malimi črkami, znak (`>`) pa z velikimi.
- **Vnosna maska:** s pomočjo vnosne maske lahko sami oblikujemo vzorec na podlagi katerega, se bojo podatki vnašali v polje. Pri izdelavi se uporablja posebne znake:

| Znak | Pomen znaka                                  | Obvezen vnos |
|:----:|----------------------------------------------|:------------:|
| `0`  | cifra med 0 in 9 (0 - 9)                     |      ✔️      |
| `9`  | cifra ali presledek                          |      ❌      |
| `L`  | črka med A in Z                              |      ✔️      |
| `?`  | črka med A in Z                              |      ❌      |
| `A`  | črka ali cifra                               |      ✔️      |
| `A`  | črka ali cifra                               |      ❌      |
| `\`  | na tem mestu se samodejno vnese sledeči znak |      ✔️      |

#### Privzeta vrednost

To je vrednost, ki bo samodejno vnešena v polje, za nove zapise. Zapis v polje zapišemo v navednicah (`""`).

#### Veljavnostno pravilo

Je izraz za omejevanje vrednosti, ki jih je mogoče vnesti v to polje. Ukaz je beseda `Like " "`. `?` je en znak, `*` pa poljubno št. znakov.

#### Veljavnostno besedilo

Je besedilo, ki se izpiše v primeru napačnega / neveljavnega vnosa.

> VAJA - napiši ukaz, ki za vnos zahteva besede, ki se končajo s črko a in imajo dolžino 4 znake. `Like "???a"`

> VAJA - zahteva poljubno dolžine katere imajo drugo črko e četrto a in se končajo s črko b. `Like "?e?a*b"`



### Podatkovni tip: ŠTEVILO

#### Oblika

Dodaten znak k številu se piše z ukazom `&"meter"`.

#### Veljavnostno pravilo

Je izraz za omejevanje vrednosti, ki jih je mogoče vnesti v polje. Tej znaki so `=`, `<`, `>`, `<=`, `>=`, `And`, `Or`.

#### Veljavnostno besedilo

Besedilo, ki se izpiše v primeru napačnega / neveljavnega vnosa.

> VAJA - napiši vkaz ki omeji vnos št med 50 in 100 razen 60 - `>=50 And <60 Or >60 And <=100`.



### Podatkovni tip: DATUM

#### Veljavnostno pravilo

Je izraz za omejevanje vrednosti, ki jih je mogoče vnesti v polje (`=`, `<`, `>`, `<=`, `>=`, `And`, `Or`).

`#1.4.2000#` - datum. `>= 1.1.2013 And <= 31.12.2018`.



## Povezovanje tabel (relacije)

Kadar želimo hkrati na voljo informacije iz več različnih tabel jih je smiselno med samo povezati. Na voljo je več vrst povezav (relacij) - povezava **ena:mnogo** \\(1:\infty\\), **mnogo:mnogo** \\(\infty:\infty\\) in **ena:ena** \\(1:1\\).

![Relacije tabel][rel1]

> slika

**Tuj ključ:** je primarni ključ neke druge tabele

> VAJA

1. izpiši imena pacientov zdravnika (ime zdravnika)
2. pogoj ki izpiše priimke pacientov rojenih po letu 1998, njhihov zdravnik pa se piše (priimek)
3. izpiši ime in priimek zdravnika ki je izdal recept za lekadol




[rel1]: https://res.cloudinary.com/solamona/image/upload/v1538827449/zvs/sts-kp/rac/2l/vppb/accdbrel1.png
