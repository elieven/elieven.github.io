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

- *Programski jezik*
- Začetek nastajanja **1991**
- **James Gosling** in sodelavci v **SUN Microsystems**
- Konkurenca C++

<br>

- **JRE** – programsko orodje omogoča izvajanje prevedenih javanskih programov
- **JDK** – razvojno orodje za ustvarjalce programske opreme (*JRE included*)

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

```javascript
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

- kje je podatek?
	- v spremenljivki spremenljivka
	- tip podatka je String (niz)

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
> tudi  nevem

<br>

### Pretvorbe med tipi

- pri vnosu podatkov - ponavadi iz String v int, long, double, float
- med izvajanjem programa - med številskimi tipi ali pri tvorjenju niza številk

| Začetni pod. tip        | Končni pod. tip | Način spremembe                               |
|:------------------------|:----------------|:----------------------------------------------|
| `String`                | `int`           | `Integer.parseInt(spremelnjivka)`             |
| `int`                   | `String`        | `Integer.toString(spremelnjivka)`             |
| `String`                | `Double`        | `Double.valueOf(spremelnjivka).doubleValue()` |
| `Double`                | `String`        | `Double.toString(spremelnjivka)`              |
| Ostali tipi (ne String) | `int`           | `(int)spremelnjivka`                          |


<br>

### Primerjalni operatorji

- pri preverjanju pogojev (pogojni stavki, zanke)

| znak | pogoj              | primer |
|------|--------------------|--------|
| `>`  | večje              | `a>b`  |
| `>=` | večje ali enako    | `a>=b` |
| `<`  | manjše             | `a<b`  |
| `<=` | manjše ali neenako | `a<=b` |
| `==` | enako              | `a==b` |
| `!=` | ni enako           | `a!=b` |

<br>

- če preverjamo več pogojev

| Znak  | Pogoj     | Primer         |
|:------|:----------|:---------------|
| `&&`  | IN (AND)  |  `a==b && b<c` |
| `||`  | ALI (OR)  |  `a==b || b<c` |

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
(pogoj) ? čeJePogojIzpolnjen:čePogojNiIzpolnjen
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

> DN: simulacija meta (bacanja) kock - zaženeš program in izpiše pattern od kocke iz *

```javascript
* *   * *
* *    *
* *   * *
```
>  in tko naprej

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

`int i=0;` in `int i=kolikokratSeZankaIzvede;` - deklariramo spremenljivko (števec)  ki ga običajno nastavimo na min ali max vrednost. 

`i<kolikokratSeZankaIzvede;` in  `i>0;` - pogoj za izvedbo ukazov - se preveri pred vsako izvedbo zanke. 

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

#### Vaja 1

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

#### Vaja 2

Napiši program, ki sprejme 2 naravni števili, in nam pove koliko večkratnikov števila sedem je vmes.

```java
import java.io.*;

public class VeckratnikiSedmice {
  public static void main(String[] args) throws IOException {
    
    // dev inputa
    BufferedReader vhod = new BufferedReader(new InputStreamReader(System.in));
    
    // vprasa za stevili
    System.out.println("Vnesite prvo naravno število");
    int st1 = Integer.parseInt(vhod.readLine());
    
    System.out.println("Vnesite drugo naravno število");
    int st2 = Integer.parseInt(vhod.readLine());
    
    // definiramo spremelnjivko za shranit razliko med stevili
    int vmes = 0;
    
    // preverimo če sta števili različni, če niso opozorimo
    if ( st1 != st2 ) {
      // pogledamo katero št je večje in od njega odštejemo manjše
      if ( st1 > st2 ) {
        vmes = st1 - st2;
      }
      else {
        vmes = st2 - st1;
      }
    } else {
      System.out.println("Števili ne smeta biti enaki");
    }
    
    // od št odstranimo nedeljivi ostanek in potem delimo in dobimo točno število
    int stsed = (vmes - vmes % 7) / 7;
    System.out.println("Med temi števili je " + stsed + " večkratnikov števila 7.");
    
  }
}
```

V tej nalogi bi `vmes` lahko definirali kot double in delili normalno, potem pa pretvorili v **int** kar bi odstranilo ostanek.




[if]: https://res.cloudinary.com/solamona/image/upload/v1537456195/zvs/sts-kp/rac/5l/programiranje/if_statement.jpg
[ifelse]: https://res.cloudinary.com/solamona/image/upload/v1537456152/zvs/sts-kp/rac/5l/programiranje/if_else_statement.jpg
