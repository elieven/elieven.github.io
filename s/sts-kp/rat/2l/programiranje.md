---
layout: document
title: Programiranje • 2. letnik • Računalniški Tehnik • STŠ Koper
---

# Programiranje

Programer ustvarja nove programe ali sestavne dele programa po dogovorjenih pravilih. Razvijajo programsko opremo. Programiranju rečemo tudi **kodiranje**. Za reševanje določenih problemov uporabljamo **programske jezike**.

<br>

Vključujejo tudi interdisciplinarna območja kot:

- **Matematika**
- **Ekonomija**
- **Umetnost**
- **Tehnika**

<br>

**Program** = izvorna koda določenega programskega jezika. Preveden program je zaporedje ukazov v strojni kodi. Prevajalnik program ki prevede izvorno kodo nekega programskega jezika v strojno kodo. **Strojno kodo** razume računalnik. En ukaz izvorne kode lahko pomeni več ukazov v strojni kodi.

<br><br>

## Algoritem

- Je navodilo za reševanje problema
- Je seznam korakov do končnega rezultata
- Zapisan v naravnem jeziku, diagramu poteka, psevdo kodi, programskem jeziku

<br>

- **Lastnosti:** ima podatke, vrne rezultat, natančno določen, končen, izvedljiv
- **Izvajalec:** človek, stroj, el. Naprava

<br><br>

## Razvoj programske opreme

**FAZE**:

1. Opis problema
2. Analiza problema
3. Načrtovanje algoritma
4. Kodiranje
5. Preizkušanje, vzdrževanje

<br>

- **Sintaksa** – pravila kako more bit sestavljen program, napake odkrije in javi prevajalnik
- **Semantika** – sintaksa pravilna, napačen program -> nerazumevanje problema, slaba tehnika priprave programa
- **Strukturirano načrtovanje** - problem razdelimo na podprobleme in jih rešimo
- **Ekstremno načrtovanje** - pripravimo testne primere in pričakovane rezultate
- **Čimveč preverjanja** – ne moremo preverit če program dela prav, lahko pa ugotovimo, če ne dela prav

<br><br>

## Java

- _Programski jezik_
- Začetek nastajanja **1991**
- **James Gosling** in sodelavci v **SUN Microsystems**
- Konkurenca C++

<br>

- **JRE** – programsko orodje omogoča izvajanje prevedenih javanskih programov
- **JDK** – razvojno orodje za ustvarjalce programske opreme (_JRE included_)

 <br>

- **Shranjevanje**: `ime.java`
- **Preveden program**: `ime.class`
- **Javac** (**Java Compiler**) - ukaz za predvajanje javanske kode
- **Java** – ukaz za zagon prevedenega program

<br>

#### Glavna metoda

```java
Public static void main(String[] args){
    // code goes here :)
}
```

<br>

- `\t` tabulator
- `\n` nova vrstica
- `\'` izpis enojnega narekovaja
- `\''` izpis dvojnega narekovaja
- `\\` izpis backslash-a (leve poševnice)

#### Komentarji

- `//` do konca vrstice se ne upošteva kot program
- `/* vse vrstice tu vmes se ne upoštevajo kot program */`

```java
//System.out.println("Danes je "lep"dan");
System.out.println("Danes je lep dan");
/*System.out.println(""-to je dvojni narekovaj);
System.out.println()*/
```

<br>

### Vnašanje podatkov

#### Vnos z argumenti

```javascript
public statuc void main(String[]args)
```

`args` - tabela, ki shranjuje vhodne podatke

```javascript
java imePrograma 1756 2347
```

`imePrograma` - zagon programa
`1756` - prvi podatek
`2347` - drugi podatek

#### Razred scanner

- najprej ga uvozimo: `import java.util.Scanner;`
- v programu:

```javascript
System.out.println("Vpiši podatek");
Scanner podatek = new Scanner(System.in);
String  spremenljivka = podatek.next();
String spremenljivka = podatek.nextLine();
podatek.close();
```

`podatek.next()` je za eno besedo
`podatek.nextLine()` pa za več besed

- kje je podatek? - v spremenljivki spremenljivka - tip podatka je String (niz)

#### Razred bufferedReader

- `iport java.io.*`
- `public static void main(String[] args) throws IOException`

```javascript
system.out.println("Vpiši podatek");
BufferedReader podatek = new BufferedReader(new InputStreamReader(System.in));
String spremenljivka = podatek.readLine();
podatek.close();
```

<br>

### Generiranje naključnega števila

- `Math.random()` - vrača decimalne vrednosti med0 in 1 (0,999...)
- Kaj vrača spodnji stavek?

```javascript
int x = (int)(Math.random()*7)
```

> nevem

- in naslednji stavek?

```javascript
int x = (int)(Math.random()*6+5)
```

> tudi nevem

<br>

### Pretvorbe med tipi

- pri vnosu podatkov - ponavadi iz String v int, long, double, float
- med izvajanjem programa - med številskimi tipi ali pri tvorjenju niza številk

| Začetni pod. tip        | Končni pod. tip | Način spremembe                               |
| :---------------------- | :-------------- | :-------------------------------------------- |
| `String`                | `int`           | `Integer.parseInt(spremelnjivka)`             |
| `int`                   | `String`        | `Integer.toString(spremelnjivka)`             |
| `String`                | `Double`        | `Double.valueOf(spremelnjivka).doubleValue()` |
| `Double`                | `String`        | `Double.toString(spremelnjivka)`              |
| Ostali tipi (ne String) | `int`           | `(int)spremelnjivka`                          |

<br>

### Primerjalni operatorji

- pri preverjanju pogojev (pogojni stavki, zanke)

| znak | pogoj              | primer |
| ---- | ------------------ | ------ |
| `>`  | večje              | `a>b`  |
| `>=` | večje ali enako    | `a>=b` |
| `<`  | manjše             | `a<b`  |
| `<=` | manjše ali neenako | `a<=b` |
| `==` | enako              | `a==b` |
| `!=` | ni enako           | `a!=b` |

<br>

- če preverjamo več pogojev

| Znak | Pogoj    | Primer        |
| :--- | :------- | :------------ |
| `&&` | IN (AND) | `a==b && b<c` |
| `||` | ALI (OR) | `a==b || b<c` |

<br>

### Pogojni stavek

#### if

- preveri izpolnjenost pogoja ali več pogojev (primerja vrednosti spremenljivk)

![Diagram logike if stavka][if]

```javascript
if (pogoj) {
	stavek ali več stavkov
}
```

#### if else

![Diagram logike if else stavka][ifelse]

```javascript
if (pogoj) {
	stavek ali več stavkov
} else {
	stavek ali več stavkov
}
```

#### if else if else

> slika logike if else if elsa

```javascript
if (pogoj) {
	stavek ali več stavkov
} else if (pogoj) {
	stavek ali več stavkov
} else {
	stavek ali več stavkov
}
```

#### if na kratko

```javascript
pogoj ? čeJePogojIzpolnjen : čePogojNiIzpolnjen;
```

Primer:

```javascript
int a = 5;
int b = 3;
int x = (a>b) ? a:b;
System.out.println(x);
```

#### Switch

- Primerjamo vrednost spremenljivke s konstanto - uporaben, če so vrednosti spremenljivke pričakovane

```javascript
switch (spremenljivka) {
case vrednost1:
	stavki;
break;
case vrednost2:
	stavki;
break;
.
.
.
case vrednostN:
	stavki;
break;
default:
	stavki;
}
```

> to treba malo lepše razložit

> DN: simulacija meta (bacanja) kock - zaženeš program in izpiše pattern od kocke iz \*

```javascript
* *   * *
* *    *
* *   * *
```

> in tko naprej

<br><br>

### Vaje

#### Potovanje vlaka

Napiši program, ki sprejme čas odhoda in čas prihoda vlaka, ter nam izpiše trajanje potovanja.

```java
import java.io.*;

public class PotovanjeVlakov {

  public static void main(String []args) throws IOException {

    BufferedReader vhod = new BufferedReader(new InputStreamReader(System.in));

    // vnos odhoda
    System.out.println("Vnesite cas odhoda: (npr. - 4.20)");
    String[] odhod = vhod.readLine().split("\\.");

    // vnos prihoda
    System.out.println("Vnesite cas prihoda: (npr. - 16.19)");
    String[] prihod = vhod.readLine().split("\\.");

    // pretvorba v minute
    int mo = Integer.parseInt(odhod[0]) * 60 + Integer.parseInt(odhod[1]);
    int mp = Integer.parseInt(prihod[0]) * 60 + Integer.parseInt(prihod[1]);

    int potovanje = 0;

    // logika in racunanje
    if (mo != mp) {
      // ce sta odhod in priod razlicna
      if (mo > mp) {
        // pomeni da je prihod naslednji dan
        potovanje = (24 * 60 - mo) + mp;
      } else {
        // pomeni da je prihod isti dan
        potovanje = mp - mo;
      }

      // pretvorba v lepsi format za izpis
      String trajanjePotovanja = "" + (int)(potovanje / 60) + "h " + (potovanje % 60) + "m";

      // Izpis rezultata
      System.out.println("Trajanje potovanje je " + trajanjePotovanja);

      } else {
        System.out.println("Fizično nemogoče");
    }
  }
}
```

> Vredno je omeniti da ta program ne preveri ali je vpis podatkov pravilen (npr. 1 bi bil napačen vnos in sesul program). V tem primeru je vredu saj to ni bil del naloge, načeloma pa se tudi to vgradi.

<br><br>

### Zanke

Stavek ali skupino stavkov izvedemo večkrat zaporedoma.

#### Zanka for

![Diagram zanke for - ne lih tanajbolši ma kajčeš](https://upload.wikimedia.org/wikipedia/commons/0/06/For-loop-diagram.png)

```
for (int i=0; i<kolikokratSeZankaIzvede; i++)
for (int i=kolikokratSeZankaIzvede; i>0; i--)
```

`int i=0;` in `int i=kolikokratSeZankaIzvede;` - deklariramo spremenljivko (števec) ki ga običajno nastavimo na min ali max vrednost.

`i<kolikokratSeZankaIzvede;` in `i>0;` - pogoj za izvedbo ukazov - se preveri pred vsako izvedbo zanke.

`i++` in `i--` - povečanje ali zmanjševanje števca po vsaki izvedbi zanke.

Primer

```
for (int i=0; i<kolikokratSeZankaIzvede; i++) {
	koda
}
```

#### Zanka while

![Diagram while zanke](https://www.tutorialspoint.com/cprogramming/images/cpp_while_loop.jpg)

Preveri pogoj in ponavlja blok stavkov, dokler je pogoj izpolnjen.

```
while (pogoj) {
	koda
}
```

#### Zanka do while

![Diagram do while zanke](https://www.tutorialspoint.com/cprogramming/images/cpp_do_while_loop.jpg)

**Izvede se blok stavkov, šele potem preveri izpolnjenost pogoja**, kar pomeni da se **izvede vsaj enkrat**.

```
do {
	koda
} while (pogoj)
```

<br><br>

### Vaje

#### 1) množenje števk ki niso 0

napiši program, ki bo prebral naravno število in izračunal produkt njegovih od 0 različnih števk. Torej št 1203 = 1 x 2 x 3 = 6

```java
import java.io.*;

public class MnozenjeRazenNicel {
  public static void main(String[] args) throws IOException {
    // dev inputa
    BufferedReader vhod = new BufferedReader(new InputStreamReader(System.in));
    // vprasa za stevilo
    System.out.println("Vnesite naravno število");
    // st pretvori v int
    int s = Integer.parseInt(vhod.readLine());
    // def produkta
    int p = 1;
    // dokler je st vecje od nic
    while (s > 0) {
      // preveri ce zadnja stevlka ni nic
      if (s%10 != 0) {
        // ce je zmnozi produkt s to stevilko
        p = p * (s%10);
      }
      // potem odstrani zadnjo stevilko iz s
      s = s/10;
    }
    // pokaze koncni produkt
    System.out.println(p);
  }
}
```

<br>

#### 2) večkratniki števila 7 med dvemi števili

Napiši program, ki sprejme 2 naravni števili, in nam pove koliko večkratnikov števila sedem je vmes.

```java
import java.io.*;

// primer: sprejme 5 in 15. vmes sta dva veckratnika (7 in 14)

public class VeckratnikiSedmice {
  public static void main(String[] args) throws IOException {

    BufferedReader vhod = new BufferedReader(new InputStreamReader(System.in));
    // vpraša za število
    System.out.println("Vnesite prvo naravno število");
    int st1 = Integer.parseInt(vhod.readLine());

    System.out.println("Vnesite drugo naravno število");
    int st2 = Integer.parseInt(vhod.readLine());

    int stVec = 0;

    for (int i = st1+1; i < st2; i++ ) {
      if (i%7==0) {
        stVec++;
      }
    }

    System.out.println("Stevilo veckratnikov: "+stVec);
  }
}
```

<br>

#### 3) pretvorba iz desetiškega v dvojiško število

Pretvori desetiško število v dvojiško.

```java
import java.io.*;

// primer: 3 = 00000011

public class DesToDv {
  public static void main(String[] args) throws IOException {

    BufferedReader vhod = new BufferedReader(new InputStreamReader(System.in));

    System.out.println("Vnesite desetiško število");

    int dec = Integer.parseInt(vhod.readLine());
    int ost = 0;
    String bin = "";

    while (rez > 0) {

      ost = dec % 2;
      dec = dec / 2;
      bin = ost + "" + bin;

    }

    System.out.println("Dvojiska verzija stevila je: " + bin);
  }
}
```

<br>

#### 4) pretvorba iz desetiškega v osmiško število

Pretvori desetiško število v osmiško.

```java
import java.io.*;

public class DesToOct {
  public static void main(String[] args) throws IOException {

    BufferedReader vhod = new BufferedReader(new InputStreamReader(System.in));

    System.out.println("Vnesite desetiško število");

    int dec = Integer.parseInt(vhod.readLine());
    int ost = 0;
    String oct = "";

    while (dec > 0) {

      ost = dec % 8;
      dec = dec / 8;
      oct = ost + "" + oct;

    }

    System.out.println("Oktalna verzija stevila je: " + oct);
  }
}
```

<br>

#### 5) pretvorba iz desetiškega v šestnajstiško

Pretvori desetiško število v šestnajstiško.

```java
import java.io.*;

public class DesToHex {
  public static void main(String[] args) throws IOException {

    BufferedReader vhod = new BufferedReader(new InputStreamReader(System.in));

    System.out.println("Vnesite desetiško število");

    int dec = Integer.parseInt(vhod.readLine());
    int ost = 0;
    String hex = "";
    String[] nums = {"0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"};

    while (dec > 0) {

      ost = dec % 16;
      dec = dec / 16;
      hex = nums[ost] + "" + hex;

    }

    System.out.println("Sestnajstiska verzija stevila je: " + hex);
  }
}
```

<br>

#### 6) večkratniki 7 z enicami večjimi kot stoticami

Izpiši vse 3 mestne večkratnike števila 7, ki imajo enice večje kot stotice. Števila naj se izpišejo po 5 v vrsto.

```java
import java.io.*;

public class VeckratnikiSedemVecjeEniceKotStotice {
  public static void main(String[] args) throws IOException {

    BufferedReader vhod = new BufferedReader(new InputStreamReader(System.in));

    int min = 105; // najmanjsi trimestni veckrat
    int max = 999; // najvecje mozno tromestno stevilo

    int maxLineWidth = 5; // najvec stevil kar je lahko v eni vrstici
    int curLinePos = 1; // trenutna pozicija v liniji

    while (min <= max) {

      // preveri ce so enice vecje od stotic
      if (min%10 > min/100) {

        if (curLinePos % maxLineWidth != 0) {
          System.out.print(min + " ");
        } else {
          System.out.println(min + " ");
        }
        curLinePos++;
      }
      min = min + 7;
    }
  }
}
```

<br>

#### 7) računanje točk in zmag v nogometu

Napiši program, ki sprejme število točk od ekipe in število odigranih tekem (nogomet). Izpišite na kakšen način je možno doseči tako število točk.

```java

```

<br>

#### 8) računanje možnosti pakiranja jagod

```java

```

<br><br>

### Nizi

Niz je lahko sestavljen iz znakov, presledkov, ločil.

```java
String niz = "Niz je besedilo.";
String krneki = "E898 z72$:) )?*-_14ffw";
```

<br>

#### OPERACIJE Z NIZI

**Število znakov** v nizu dobimo z `niz.length()`.

**Združevanje nizov:**

```java
String niz1 = "Kosa stari ";
String niz2 = "kaj ti?";

System.out.println(niz1 + niz2); // "Kosa stari kaj ti?"
System.out.println(niz1.concat(niz2)); // "Kosa stari kaj ti?"
```

<br>

#### Zamenjava znakov v nizu

V nizu **zamenjamo** znake oz. dele niza z metodo **replace()**.

```java
String zamenjano = niz.replace("del niza", "nov del niza");
```

Del niza pa **zbrišemo** tako da zamenjao želeni del niza s praznim nizom:

```java
String zamenjano = niz.replace("del niza", "");
```

<br>

#### Nekatere ostale metode za delo z nizi

```java
niz.charAt(index) // vrne znak, ki je na ideksu
```

```java
niz.equals(niz1) // primerja niz in niz1, če sta enaka vrne true
```

```java
niz.indexOf(niz1) // vrne indeks, kjer se niz1 prvič pojavi v nizu, če ne najde vrne -1
```

```java
niz.substring(a,b) // vrne del niza med indeksom a in b, če ne najde vrne -1
```

<br>

#### Cepljenje niza v tabelo

```java
String[] tabela = niz.split("lociloMedElementi")
```

Ločilo med elementi pove, kako so elementi, ki jih vpisujemo v tabelo, ločeni med sabo v nizu. Primer:

```java
String eh = "kaj je s tabo človek kaj si nor?";
String[] = eh.splot(" "); // "kaj", "je", "s" ... "nor?"
```

<br>

**DN:** napiši program, ki prebere niz s tipkovnice, in ga izpiše tako, da vsakoč ko naleti na `a` nadaljuje z izpisom na naslednji vrstici.

```java
"abrakadabra"
> pomeni ena vrstica

>
>abr
>ak
>ad
>ab
>abr
>a
```

<br>

### Tabele

- spremenljivka, ki lahko vsebuje več podatkov
- v eno spremenljivko lahko shranimo več vrednosti

#### Enodimenzionalne tabele

Deklaracija in inicializacija

```java
tip ImeTabele[] = {vrednost1, vrednost2, ..., vrednostN};
tip[] ImeTabele = {vrednost1, vrednost2, ..., vrednostN};
```

Vse vrednosti so istega tipa (določen z deklaracijo).

```java
String[] sadje = {"banana", "jabolko", "hruška"};
int stevilke[] = {1,2,3,4,5,6,7,77,420};
```

Dostop do vrednosti:

```java
System.out.println(sadje[1]); // kaki
```

`[index]` - se začne z 0. Mesto, na katerem se nahaja vrednost, je za eno večja od njegovega indexa.

<br>

**Primer:**

```
String sadje[] = new String[4];
```

-tabela sadje je tipa string in ima 4 mesta

- dokler ne določimo drugače so vse vrednosti tabele `null`
- pri številskih tipih bi bile vrednosti `0`

Določitev vrednosti v tabeli:

```java
sadje[0] = "banana";
sadje[1] = "melona";
sadje[2] = "kivi";
sadje[3] = "lubenica";
```

<br><br>

## Metode

Do sedaj:

```java
main()
System.out.print()
length()
...
```

**Uporaba:** če moramo določeno skupino ukazov večkrat **ponovit**.

**Lastne metode:**

- definiramo jih sami
- zapisane znotraj razreda class, ne pa znotraj glavne metode main
- lahko več lastnih metod v enem razredu
- lahko vračajo podatke ali ne

<br>

### Definiranje metode

```java
public int vsota(int a, int b) {
  int sum = a + b;
  return sum;
}
```

`int` je tip podatka, ki ga vrne (v primeru da ne vrne nič je `void`). Ime metode je `vsota`. Znotraj oklepaja so tipi in imena vhodnih podatkov (v primeru da ne sprejme nič je oklepaj prazen). `return` je kar nam metoda vrne (v tem primeru vrednost spremenljivke **sum**). Če metoda ne vrača podatkov, ne uporabimo ukaza `return`.

<br>

### Klicanje metode

```java
public class Vsota {
  public static void main(String[] args) {
    int st1 = 8;
    int st2 = 5;
    int skupaj = vsota(st1, st2);
  }
  public static int vsota(int a, int b) {
    int sestej = a + b;
    return sestej;
  }
}

// skupaj = 13
```

<br>

**Naloga**

> napiši program ki sprejme tabelo celih stevil, jih izpise, potem jih razvrsti po velikosti in seenkrat izpise

```java
import java.io.*;

public class RazvrscenIzpis {
  public static void main(String[] args) throws IOException {

    // Nacin vnosa podatkov
    BufferedReader vhod = new BufferedReader(new InputStreamReader(System.in));

    // Navodila za uporabnika
    System.out.println("Vnesite števila, ločena z vejicami. (Primer: 1,4,2,6,5,7,3)");

    // Vnos shranjen kot String
    String[] vnesena_stevila = vhod.readLine().split(",");

    // Pretvorba vnesenih stevil v int in polnjenje stevila[]
    int[] stevila = new int[vnesena_stevila.length];

    for (int i=0; i<vnesena_stevila.length; i++) {
      stevila[i] = Integer.parseInt(vnesena_stevila[i]);
    }

    // Izpis neurejenih vnesenih stevil
    System.out.print("Vnesena stevila: ");
    izpis(stevila);
    System.out.println("");

    // Uporaba razvrsti() metode za razvrstit stevila
    int[] razvrscena_stevila = razvrsti(stevila);

    // izpis razvrscenih stevil
    System.out.print("Razvrscena stevila: ");
    izpis(razvrscena_stevila);
    System.out.println("");

  } // konec main() metode

  // Metoda za razvrscanje stevil v tabeli
  public static int[] razvrsti(int[] stevila) {
    // Bubble sort
    for (int i = 0; i < stevila.length-1; i++) {
      for (int j = 0; j < stevila.length-i-1; j++) {
        if (stevila[j] > stevila[j+1]) {
          // menja mesti stevil
          int temp = stevila[j];
          stevila[j] = stevila[j+1];
          stevila[j+1] = temp;
        }
      }
    }
    // vrne tabelo razvrscenih stevil
    return stevila;
  }

  // Metoda za izpis tabele
  public static void izpis(int[] stevila) {
    System.out.print("{");
    for (int i=0; i<stevila.length-1; i++) {
      System.out.print(stevila[i] + ",");
    }
    System.out.print(stevila[stevila.length-1] + "}");
  }
}
```

<br>

**Naloga**

> Vnos: število stranic večkotnika - Izpis: število diagonal v večkotniku. Za izračuna diagonal napiši svojo metodo.

```java
import java.io.*;

public class Diagonale {
  public static void main(String[] args) throws IOException {

    // Nacin vnosa podatkov
    BufferedReader vhod = new BufferedReader(new InputStreamReader(System.in));

    // Navodila za uporabnika
    System.out.println("Vnesite stevilo stranic veckotnika:");

    // Vnos shranjen kot String
    int stranice = Integer.parseInt(vhod.readLine());

    System.out.println(stranice + "-kotnik ima " + diagonale(stranice) + " diagonal.");

  } // konec main() metode

  // Metoda za izpis tabele
  public static int diagonale(int stranice) {
    int diagonale = (stranice * (stranice - 3)) / 2;
    return diagonale;
  }
}
```

---

manjka se in se vaj

---

## Objektno programiranje

Objekt je skupek podatkov in metod za delat z njimi. Izdelan po nekem načrtu, ki je zapisan v svojem
razredu. Lahko je več objektov istega tipa kar pomeni da so izdelani v istem razredu vsak ima pa svoje
stanje, to je vrednosti spremenljivk. Dva objekta istega razreda z enakimi podatki se obnašata enako.
Če je več tipov objektov, mora bit vsak izdelan v svojem razredu. Osnove karakeristike objektov so
stanje in obnašanje. Stanje določajo atributi (spemenljivke) obnašanje pa metode.

[Klasično programiranje](pink): `f(x)` (**f** - kličemo metodo, **x** - podamo podatke ki naj jih obdela)

[Objektno programiranje](pink): `x.f()` (naročimo objektu **x**, da izvede metodo **f**)

Zgradba objektnega razreda

```java
Class Razred {
  atributi,
  konstruktorji,
  metode:
    - nastavljanje atributov
    - vračanje atributov
    - uporabne metode
}
```

#### Primeri

Razred **Osebe**.

```java
public class Osebe {

  private String ime, priimek, datumRojstva;

  public Osebe() {}

  public Osebe(String ime) {
    this.ime = ime;
  }

  public Osebe(String ime, String priimek, String datumRojstva) {
    this.ime = ime;
    this.priimek = priimek;
    this.datumRojstva = datumRojstva;
  }

  public void spremeniIme(String ime) {
    this.ime = ime;
  }

  public void spremeniPriimek(String priimek) {
    this.priimek = priimek;
  }

  public void spremeniDatumrojstva(String datumRojstva) {
    this.datumRojstva = datumRojstva;
  }

  public String vrniIme() {
    return ime;
  }

  public String vrniPriimek() {
    return priimek;
  }

  public String vrniDatumrojstva() {
    return datumRojstva;
  }

  public int vrniStarost(int letnica) {
    int letnicaRojstva = Integer.parseInt(datumRojstva.substring(6));
    return letnica - letnicaRojstva;
  }
}
```

Testiramo razred Osebe:

```javascript
public class TestOsebe {
  public static void main(String[] args) {

    Osebe oseba1 = new Osebe();
    Osebe oseba2 = new Osebe("Matej");
    Osebe oseba3 = new Osebe("Janez", "Novak", "24.12.1980");

    System.out.println(oseba1.vrniIme() + " " + oseba2.vrniIme() + " " + oseba3.vrniIme());
    System.out.println(oseba3.vrniIme() + " " + oseba3.vrniPriimek() + " " + oseba3.vrniDatumrojstva());
    oseba1.spremeniIme("Franc");
    System.out.println(oseba1.vrniIme());
    System.out.println(oseba3.vrniStarost(2019));
  }
}
```

### Preverjanje za test: Objektno programiranje

Preberi kodo in odgovori na vprašanja spodaj.

```java
class Paralelogram {
    private int a, b, alfa, obseg;
    public Paralelogram(a) {
        this.a = a;
        this.b = a;
        this.alfa = 90;
        this.obseg = 4*a;
    }
    public Paralelogram(a, alfa) {
        this.a = a;
        this.b = a;
        this.alfa = alfa;
        this.obseg = 4*a;
    }
    public Paralelogram(a, b, alfa) {
        this.a = a;
        this.b = b;
        this.alfa = alfa;
        this.obseg = 2*a + 2*b;
    }
    public void spremeniA(a) {
        this.a = a;
        this.obseg = 2*a + 2*b;
    }
    public void spremeniB(b) {
        this.b = a;
        this.obseg = 2*a + 2*b;
    }
    public void spremeniAlfa(alfa) {
        this.alfa = alfa;
    }
    public int vrniA() {
        return a;
    }
    public int vrniB() {
        return b;
    }
    public int vrniAlfa() {
        return alfa;
    }
    public int vrniObseg() {
        return obseg;
    }
}
```

```java
class TestParalelogram {
    public static void main(String[]args) {
        Paralelogram paralelogram = new Paralelogram(9, 11, 60);
        Paralelogram kvadrat = new Paralelogram(7);
        Paralelogram romb = new Paralelogram(79, 60);
        Paralelogram pravokotnik = new Paralelogram(8, 10, 90);

        System.out.println(pravokotnik.vrniObseg()); // 1.
        int daljsi = Math.max(kvadrat.vrniB(), pravokotnik.vrniA()); // 2.
        System.out.println(pravokotnik.vrniB(), paralelogram.vrniA()); // 3.
        int ostanek = kvadrat.vrniObseg() % romb.vrniA(); // 4.
        String niz = "" + kvadrat.vrniObseg() + romb.vrniB() + pravokotnik.vrniA() + paralelogram.vrniAlfa(); // 5.

        int stevec = 0;
        while (kvadrat.vrniObseg() > paralelogram.vrniA()) {
            stevec++;
            paralelogram.spremeniA(paralelogram.vrniA() + stevec);
        }
        // 6.
        int stevilo = (int)(Math.random() *4 +5);
        pravokotnik.spremeniB(stevilo);
        int nakljucno = pravokotnik.vrniObseg(); // 7.
    }
}
```

#### Vprašanja:

1. Kaj izpiše stavek? (2t) - [36](pink)
2. Kolikšna je vrednost spremenljivke [daljsi](green)? (2t) - [8](pink)
3. Kaj izpiše stavek? (2t) - [false](pink)
4. Kolikšna je vrednost spremenljivke [ostanek](green)? (2t) - [1](pink)
5. Kaj se zapiše v niz [niz](green)? (2t) - ["289860"](pink) oz. [289860](pink) pač String tip ne številka
6. Kolikšna je vrednost spremenljivke [stevec](green)? (2t) - [6](pink)
7. Kolikšna je največja možna vrednost spremenljivke [nakljucno](green)? (2t) - [8](pink)

- V razredu **Paralelogram** napiši metodo za izračun ploščine. (5t)

  ```java
  public double ploscina() {
      // Koda
  }
  ```

- V razredu **TestParalelogram** napiši stavek, ki izračuna vrednost drugega kota v likih. (3t)

  ```java
  public double ploscina() {
      // Koda
  }
  ```

[if]: https://res.cloudinary.com/solamona/image/upload/v1537456195/zvs/sts-kp/rac/5l/programiranje/if_statement.jpg
[ifelse]: https://res.cloudinary.com/solamona/image/upload/v1537456152/zvs/sts-kp/rac/5l/programiranje/if_else_statement.jpg
