---
layout: document
title: UMN • 2. letnik • Računalniški Tehnik • STŠ Koper
---

# TEORIJA

Spremenljivke - `int`, `Long`, `String`, `boolean`, `double`, `char`.

```c
void setup() {
    vhodi, izhodi -> pinMode(pin, mode)
    // mode = INPUT, OUTPUT, INPUT_PULLUP
}

void loop() {
    // program
    digitalRead(pin);
    digitalWrite(pin, val); // val = LOW, HIGH
    delay(1000) // time in ms (1000ms = 1s)
}
```



#### Vaja 1

Dioda ki utripa

```c
int dioda = 4;

void setup() {
    pinMode(dioda, OUTPUT)
}

void loop() {
    digitalWrite(dioda, HIGH);
    delay(500);
    digitalWrite(dioda, LOW);
    delay(500);
}
```

<br>

---

<br>

UMN preverjanje rešitev (zna bit uporabno za test samo hoi znat kaj bo dau novega not oz kako bo zakomplicirau zadevo ... ce bo).

---

# PRAKSA

## Arduino - Gumb

### Gumb

- Push down button ali gumb na pritisk je eden izmed najbolj uporabljenih komponent v svetu nasploh
- Gumb je večino časa v stanju **LOW** – brez napajanja, ob pritisku vzpostavimo kratek stik med **5V** ter digitalnem vhodu na Arduinu.

### Povezava

- Spodnja leva nogica se povezuje na **5V** napajanje ([RDEČA](red))
- Spodnja desna na rezistor povezan na **GND** (**ČRNA**)
- Vzporedna nogica je povezana na izbrani digitalni vhod ([MODRA](blue))

> Slika

### Branje Stanja Gumba

- Gumb uporabimo za pošiljanje signalov, ki posledično aktivirajo funkcijo – zaporedje ukazov v programu.
- Poznamo več različnih načinov branja signala, najbolj pogost je z definiranjem spremenljivke »stanjegumba«, katero izvaja branje vhoda – digitalRead, ob pritisku se vrednost **0** spremeni v **1** in sproži ukaz.
- Preverjanje lahko izvajamo z **IF** stavkom.

### Možne Napake Pri Branju

- _1._ Zamujena prekinitev
- Kadar ima koda izvajanja več funkcij – metod, skozi katere se program vrti (loopa), obstaja možnost, da bo GUMB pritisnjen ob izvajanju določene funkcije in ne točno ob branju stanja

### Denoiser – Debouncer

- _2._ bouncer – ob pritisku na gumb, se membrana znotraj gumba zatrese večkrat na sekundo. V določenih primerih se lahko zgodi, da je število tresljajev sodo, takrat je izhodni signal **GND**.
- Pojavu, ko pride do šum-motnja oz. napačne interpretacije pritiska gumba pravimo noise.

### Prikazovalnik – delovanje

- Proces pisanja na LCD prikazovalnik poteka tako, da prenesemo podatke o neki obliki – pisavi, katero želimo prikazati v register ter vnesti navodila kako te podatke prikazati.
- Ker si želimo olajšati pisanje uporabimo LiquidCrystal knjižnico – library, katera nam olajša uporabo.

### Povezave – izhodi na LCDju

- Pin register select (RS) kontrolira kam v LCD-jev spomin bomo zapisovali vrednosti,
- Uporabljaš lahko data register, ki izpiše kar napišemo vanj ali instruction register, kamor LCD pogleda, kaj narediti naslednje,
- Bralno pisalni pin – READ WRITE (R/W),
- Enable pin Kateri omogoča pisanje v register,
- 8 podatkovnih pinov (D0 – D7). Stanja omejenih priključkov, zapišejo bite (**0** ali **1**), katere shranjujemo v register ko pišemo na zaslon,
- Kontrast displeja – PIN(vo),
- Napajanje(+5V ter Gnd),
- LED Backlight – osvetlitev ozadja (bklt+ and Bklt-)

### Povezave

> Slika

> Slika

### Potenciameter

- Potenciameter je povezan na `+`, `-` ter analogni vhod.
- Z obračanjem ročice, spremenimo upor med poloma.
- V skrajno desni poziciji je potenciameter povezan zgolj na **GND**, tako da izpisuje vrednost `0`, kadar ga zarotiramo za 360 stopinj v skrajno levo pozicijo je povezan z 5V, kar beremo kot `1023`.
- Vmesna stanja branja – `analogRead()` vrne vrednost med `0` in `1023`, v odvisnosti od voltaže, katero dosega.

### Programska koda

```c
#include <LiquidCrystal.h> 
```