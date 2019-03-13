---
layout: document
title: RSA • 2. letnik • Računalniški Tehnik • STŠ Koper
---

# Razvoj spletnih aplikacij

## JavaScript

### Operatorji

Operatorji v JavaScriptu nam omogočajo primerjanje vrednosti. JavaScript ima __ operatorjev.



#### Aritmetični operatorji

Uporabi se jih za vršenje računskih / aritmetičnih operacij na vrednostih oz. spremenljivkah.

| Operator |    Opis     |   Primer    |
| :------: | ----------- | ----------- |
|    `+`     | Prištevanje | `2 + 3 = 5`   |
|    `-`     | Odštevanje  | `3 - 2 = 1`   |
|    `*`     | Množenje    | `3 * 2 = 6`   |
|    `/`     | Deljenje    | `3 / 2 = 1.5` |
|    `%`     | Ostanek     | `3 / 2 = 1`   |
|    `++`    | Zvišanje    | `3++ = 4`     |
|    `--`    | Znižanje    | `3-- = 2`     |



#### Dodelitveni operatorji

Uporabi se jih za dodelit spremenljivkam vrednost. Če za primer vzamemo **x = 10** in **y = 15** nam spodnja tabela razloži uporabo teh operatorjev.

| Operator |  Primer  |  Enako kot  | Rezultat x |
| :------: | -------- | ----------- | ---------- |
|   `=`    | `x = y`  | `x = y`     | `x = 5	`    |
|   `+=`   | `x += y` | `x = x + y` | `x = 15	`   |
|   `-=`   | `x -= y` | `x = x - y` | `x = 5`    |
|   `*=`   | `x *= y` | `x = x * y` | `x = 50`   |
|   `/=`   | `x /= y` | `x = x / y` | `x = 2	`    |
|   `%=`   | `x %= y` | `x = x % y` | `x = 0`    |



#### Operatorji nizov

Operator `x` in operator `+=` se lahko tudi uporabi za združevanje nizov.

| Operator |       Primer       |    niz1    |  niz2   |    niz3    |
| :------: | ------------------ | :--------: | :-----: | :--------: |
|   `+`    | `niz3 = niz1 + niz2` |   `"Ja "`    | `"fino!"` | `"Ja fino!"` |
|   `+=`   | `niz1 += niz2`       | `"Ja fino!"` | `"fino!"` |     `""`     |



#### Primerjalni operatorji

Če definiramo **x = 5** spodnja tabela prikazuje operatorje:

| Operator | Opis                           | Primerjava                 | Vrne                |
|:--------:|--------------------------------|----------------------------|---------------------|
|   `==`   | Enako                          | `x == 8` <br> `x == 5`     | `false` <br> `true` |
|  `===`   | Enaka vrednost in pod. tip     | `x === "5"` <br> `x === 5` | `false` <br> `true` |
|   `!=`   | Ni enako                       | `x != 8`                   | `true`              |
|  `!==`   | Ni enaka vrednost ali pod. tip | `x !== "5"` <br> `x !== 5` | `true` <br> `false` |
|   `>`    | Večje                          | `x > 8`                    | `false`             |
|   `<`    | Manjše                         | `x < 8`                    | `true`              |
|   `>=`   | Večje ali enako                | `x >= 8`                   | `false`             |
|   `<=`   | Manjše ali enako               | `x <= 8`                   | `true`              |



#### Logični operatorji

Za primer vzamemo **x = 6** in **y = 3**.

| Operator | Opis | Primer |
|:----:|---------|--------------------------------|
| `&&` | In      | `(x < 10 && y > 1) //true`     |
| `||` | Ali     | `(x === 5 || y === 5) //false` |
| `!`  | Ni / ne | `!(x === y) //true`            |

Obstaja še operatorjev, kot so bitni operatorji, typeof operatorji, delete operator...





### Selektorji

Štirje osnovni selektorji, ki nam vrnejo HTML elemente so `getElementById`, `getElementsByClassName`, `querySelector` in `querySelectorAll`. So metode na document elementu, zato jih pokličemo tako: `document.querySelector('a');`



#### getElementById()

Sprejme String ki je id od elementa ki ga želimo najti.

```javascript
document.getElementById('ime'); // vrne: element z id="ime"
```



#### getElementsByClassName()

Sprejme String ki je razred oz class od elementov, ki jih želimo najti. Vrne nam HTMLCollection objekt, ki je tabeli (array) podobna zbirka HTML elementov. Naprimer prvi element v HTMLCollection objektu lahko dostopamo enako kot v tabeli (array).

```javascript
document.getElementsByClassName('gumb'); // vrne: HTMLCollection elementov s class="gumb"
```



#### querySelector()

Sprejme String ki je kakeršenkoli CSS selektor, vrne **prvi** element ki ustreza temu selektorju.

```javascript
document.querySelector('ul li a.navlink');
// vrne prvi linke s class="navlink" ki so v li elementu, ki je v ul elementu
```



#### querySelectorAll()

Sprejme String ki je kakeršenkoli CSS selektor, vrne **vse** elemente ki ustrezajo temu selektorju.

```javascript
document.querySelectorAll('ul li a.navlink');
// vrne vse linke s class="navlink" ki so v li elementu, ki je v ul elementu
```








### Metode na nizu (String)

Na začetku definiramo niz, na kateremu potem kličemo metode in spodaj prikaženo rezultat. V vsakem primeru je uporabljen začetni string, nikoli ni uporabljen rezultat katere druge metode. Metoda console log, ki je uporabljena v spodnjih primerih samo zapiše kar je znotraj oklepajev v konzolo. V brskalniku jo lahko najdemo s klikom na gumb <kbd>F12</kbd> in potem kliknemo na zavihek console.

```javascript
var niz = "Ne se hojsat!";
```



#### length

To je lastnost niza, kjer je shranjena dolžina tega niza.

```javascript
console.log( niz.length ); // rezultat: 13
```

[English documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)



#### charAt()

Vrne črko ki je na n-1 mestu. To zato ker se kot v večini drugih programskih jezikih šteti začne od 0.

```javascript
console.log( niz.charAt(1) ); // rezultat: "e"
```

[English documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)



#### indexOf()

Vrne nam število ki nam pove na katerem mestu v nizu je črka (v tem primeru) c. S tem da nam **ta metoda vrne mesto kjer se ta znak prvič pojavi**. Enak znak se lahko pojavi večkrat kot tudi v spodnjem primeru, vendar nam bo vrnilo samo mesto prvega. V primeru da se znak ne nahaja v tem nizu nam metoda vrne `-1`.

```javascript
console.log( niz.indexOf("e") ); // rezultat: 1
```

Ta metoda lahko sprejme še en argument, ki ji pove kje naj začne iskat. Torej če damo v drugi argument npr. število `2` bo nam vrnila index od lokacije kjer se prvič pojavi ta znak od tretjega znaka naprej.

```javascript
console.log( niz.indexOf("e", 2) ); // rezultat: 4
```

[English documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)



#### toUpperCase()

To je metoda, ki pretvori vse znake v nizu v velike črke če obstajajo.

```javascript
console.log( niz.toUpperCase() ); // rezultat: "NE SE HOJSAT!"
```



#### toLowerCase()

To je metoda, ki pretvori vse znake v nizu v majhne črke če obstajajo.

```javascript
console.log( niz.toLowerCase() ); // rezultat: "ne se hojsat!"
```



#### replace()

Je metoda, ki vrne enak niz kot tisti na katerem je bil klican, s tem da je beseda oz kombinacija znakov w1 zamenjana s kombinacijo znakov w2. Zamenja kjerkoli se pojavi ta kombinacija ne samo prvi pojav.

```javascript
console.log( niz.replace("hojsat", "guncat") ); // rezultat: "ne se guncat!"
```



#### slice()

Slice vrne "izvleček" oz. določen del niza brez spreminjanja originalnega niza. Sprejme št. kjer začne "rezati" in lahko damo tudi drugo število ki pove kje konča rezat. V primeru da damo samo eno število bo vrnilo niz od začetnega znaka do konca niza.

```javascript
console.log( niz.slice(1) ); // rezultat: "e se hojsat!"
```

```javascript
console.log( niz.slice(1,5) ); // rezultat: "e se"
```



#### substring()

Zelo podobno metodi slice. Podrobne razlike so razložene [tukaj](https://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring). V zgornjih primerih bi substring deloval enako kot slice.




#### substr()

Metoda `substr` se od metode `substring` razlikuje v tem da `substring` sprejme do 2 argumenta - start in stop position, `substr` pa strt in length.

```javascript
console.log( niz.substring(4,8) ); // rezultat: "e ho"
console.log( niz.substr(4,8) );    // rezultat: "e hojsat"
```

Drugi argument metode `substr` je koliko znakov po začetnem naj vzame, od `substring` pa na katerem znaku naj se ustavi.





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



### If stavek

**If stavek** uporabljamo za definirat kodo, ki se izvrši v primeru da je določen pogoj `true`. **If else** se uporabi za preverit nov pogoj, v primeru da je prejšnji `false`. **Else** se uporabi za primer, da so vsi predhodnji pogoji in if / if else stavki `false`.

```javascript
const g = document.querySelector('#gender-input').value;

if ( g == 0 ) {
  console.log("It's a boy!");
} else if ( g == 1) {
  console.log("It's a girl!");
} else {
  console.log("It's an Apache helicopter!"");
}
```

V zgornjem primeru se najprej preveri, če je vrednost inputa `0`. V primeru da je to res se izvrši koda definirana v **if**. V primeru da je prvi pogoj `false` torej input ni `0` se preveri ali je vrednost `1`. V primeru da je se izvrši koda definirana v **else if**. Če sta pa oba pogoja `false` se izvrši kode definirana v **else**.

Najprej se preveri **if**. **If else** se preveri **SAMO** če je predhodnji pogoj false. **Else** se pa izvrši **SAMO** v primeru da so vsi prejšnji pogoji false.

**Obstaja krajša verzija if stavka**:

```javascript
pogoj ? koda_ce_je_true : koda_ce_je_false
```

Primer realne uporabe:

```javascript
arr.length > 0 ? console.log('Array has items') : console.log('Array is empty');
```





### Metoda addEventListener()

Metodo addEventListener() lahko pokličemo na kateremukoli html elementu. Sprejme dogodek katerega želimo spremljati, funkcijo ki se izvrši po temu dogodku in useCapture (več o tem kasneje). Ta metoda potem doda elementu **event handler** za določen dogodek (brez da prekine druge), kot je naprimer **click**, **keydown**, **resize**, **focus**, **blur**... Elementu lahko dodamo več event handlerjev za določen dogodek. [Event handler je funkcija, ki se bo izvršila ko se zgodi določen dogodek](green).

V spodnjem primeru dodamo elementu z idjem `warning` funkcijo, ki nam bo sporočila da smo žrtev virusa, v primeru da kliknemo na ta element.

```javascript
document.querySelector('#warning').addEventListener('click', function(){
  window.alert('POZOR! STE ŽRTEV VIRUSA');
})
```

Nu nujno da definiramo funkcijo ki jo želimo izvršiti znotraj parametra - uporabimo lahko tudi zunaj definirano funkcijo.

```javascript
document.querySelector('#warning').addEventListener('click', alertUser)
```

[POZOR!](red-light) v JavaScriptu funkcije, ki so dodane v parameter neke druge funkcije ne smejo imeti `()` na koncu saj se v tem primeru izvršijo takoj ko brskalnik prebere to vrstico kode.

#### POVEZAVE

- [seznam vseh eventov in kdaj so sproženi](https://developer.mozilla.org/en-US/docs/Web/Events)
- [dokumentacija metode addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [razlaga tretjega parametra (useCapture) in tega koncepta](https://stackoverflow.com/questions/7398290/unable-to-understand-usecapture-parameter-in-addeventlistener)

#### useCapture

Kot zanimivost in če bo komu gdaj rablo si lahko pogledaste `useCapture` (drugi parameter `addEventListener` funkcije). Na kratko povedano odloča o vrsnemu redu izvrševanja event handlerjev.

[Mozilla MDN dokumentacija](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener), [vprašanje na StackOverflow](https://stackoverflow.com/questions/7398290/unable-to-understand-usecapture-parameter-in-addeventlistener).

<br>

**ŠE ZA DODAT**

> event listener za keypress - razlika med [keyCode, charCode in which](https://css-tricks.com/snippets/javascript/javascript-keycodes/)




### Misc functions / methods

- click
- value (bol property)
- innerHTML



---



## PHP

### XAMPP

### Povezava z bazo

> finally