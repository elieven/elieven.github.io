---
layout: document
title: RSA • 2. letnik • Računalniški Tehnik • STŠ Koper
---

# Razvoj spletnih aplikacij
{: .no_toc}

## Vsebina:
{: .no_toc}

- TOC
{:toc}

<br><br>

---

<br><br>

## JavaScript

### Metode na Stringu (nizu)

Na začetku definiramo niz, na kateremu potem kličemo metode in spodaj prikaženo rezultat. V vsakem primeru je uporabljen začetni string, nikoli ni uporabljen rezultat katere druge metode. Metoda console log, ki je uporabljena v spodnjih primerih samo zapiše kar je znotraj oklepajev v konzolo. V brskalniku jo lahko najdemo s klikom na gumb `F12` in potem kliknemo na zavihek console.

```javascript
var niz = "Ne se hojsat!";
```

<br>

#### length

To je lastnost niza, kjer je shranjena dolžina tega niza.

```javascript
console.log( niz.length ); // rezultat: 13
```

[English documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)

<br>

#### charAt(n)

Vrne črko ki je na n-1 mestu. To zato ker se kot v večini drugih programskih jezikih šteti začne od 0.

```javascript
console.log( niz.charAt(1) ); // rezultat: "e"
```

[English documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)

<br>

#### indexOf(c)

Vrne nam število ki nam pove na katerem mestu v nizu je črka (v tem primeru) c. S tem da nam **ta metoda vrne mesto kjer se ta znak prvič pojavi**. Enak znak se lahko pojavi večkrat kot tudi v spodnjem primeru, vendar nam bo vrnilo samo mesto prvega. V primeru da se znak ne nahaja v tem nizu nam metoda vrne `-1`.

```javascript
console.log( niz.indexOf("e") ); // rezultat: 1
```

Ta metoda lahko sprejme še en argument, ki ji pove kje naj začne iskat. Torej če damo v drugi argument npr. število `2` bo nam vrnila index od lokacije kjer se prvič pojavi ta znak od tretjega znaka naprej.

```javascript
console.log( niz.indexOf("e", 2) ); // rezultat: 4
```

[English documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)

<br>

#### toUpperCase()

To je metoda, ki pretvori vse znake v nizu v velike črke če obstajajo.

```javascript
console.log( niz.toUpperCase() ); // rezultat: "NE SE HOJSAT!"
```

<br>

#### toLowerCase()

To je metoda, ki pretvori vse znake v nizu v majhne črke če obstajajo.

```javascript
console.log( niz.toLowerCase() ); // rezultat: "ne se hojsat!"
```

<br>

#### replace(w1, w2)

Je metoda, ki vrne enak niz kot tisti na katerem je bil klican, s tem da je beseda oz kombinacija znakov w1 zamenjana s kombinacijo znakov w2. Zamenja kjerkoli se pojavi ta kombinacija ne samo prvi pojav.

```javascript
console.log( niz.replace("hojsat", "guncat") ); // rezultat: "ne se guncat!"
```

<br>

#### slice(n)

Slice vrne "izvleček" oz. določen del niza brez spreminjanja originalnega niza. Sprejme št. kjer začne "rezati" in lahko damo tudi drugo število ki pove kje konča rezat. V primeru da damo samo eno število bo vrnilo niz od začetnega znaka do konca niza.

```javascript
console.log( niz.slice(1) ); // rezultat: "e se hojsat!"
```

```javascript
console.log( niz.slice(1,5) ); // rezultat: "e se"
```

<br>

#### substring

Zelo podobno metodi slice. Podrobne razlike so razložene [tukaj](https://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring). V zgornjih primerih bi substring deloval enako kot slice.

<br>

#### substr

Metoda `substr` se od metode `substring` razlikuje v tem da `substring` sprejme do 2 argumenta - start in stop position, `substr` pa strt in length.

```javascript
console.log( niz.substring(4,8) ); // rezultat: "e ho"
console.log( niz.substr(4,8) );    // rezultat: "e hojsat"
```

Drugi argument metode `substr` je koliko znakov po začetnem naj vzame, od `substring` pa na katerem znaku naj se ustavi.

<br><br>

### Vaje s nizi (stringi)

Napiši kodo ki iz imena ("ime priimek") ne glede na to kako je napisano spremeni da so velike začetnice, druge črke pa male. To naj deluje tudi če ima nekdo srednje ime in ali 2 priimka (torej do 4 imena).

Vsak problem ima miljon rešitev, tukaj je pa demonstrirana samo ena in to je **rešitev z metodo forEach() in split()**.

```javascript
var ime = "JAneZ vajkaRD VaLVasoR";

var deliImena = ime.split(" ");

deliImena.forEach(function(del, index){
  deliImena[index] = del.charAt(0).toUpperCase() + del.substring(1).toLowerCase();
});

console.log( deliImena.join(" ") ); // rezultat: "Janez Vajkard Valvasor"
```

Metoda `forEach()` ni podprta v vseh verzijah brskalnikov - naprimer internet explorer je ne podpira razen v tazadnji verziji. Podobno rešitev se da naredit s tem da namesto `forEach()` uporabimo zanko `for`. Razlika je v vrstici kode ali dveh.

<br>

### If stavek

