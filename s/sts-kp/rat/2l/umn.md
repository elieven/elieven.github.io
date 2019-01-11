---
layout: document
title: UMN • 2. letnik • Računalniški Tehnik • STŠ Koper
---

# Uporaba Mikroprocesorskih Naprav

# UMN

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

