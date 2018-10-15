---
layout: document
title: UMN • 2. letnik • Računalniški Tehnik • STŠ Koper
---

# Uporaba Mikroprocesorskih Naprav

Pri tem predmetu večinoma samo delamo vaje programiranja arduinota.

<br>

## Vaje

#### Vaja 1:

8 diod se prižiga ena za drugo, ko so vse prižgane se pa vse hkrati ugasnejo.

```c
void setup() {
  for (int i=0; i<8; i++) {
    pinMode(i, OUTPUT);
  }
}

void loop() {
  for (int i=0; i<8; i++) {
    digitalWrite(i, HIGH);
    delay(500);
  }
  for (int i=0; i<8; i++) {
    digitalWrite(i, LOW);
  }
}
```

#### Vaja 2:

Vaja prišla brez navodila tko da ni lih sigurno kaj naj bi nardila stvar.

```c
void setup() {
  for (int i=0; i<9; i++) {
    pinMode(i, OUTPUT);
  }
}

void loop() {
  for (int j=o; j<5; j++) {
    for (int k=0; k<=j; k++) {
      digitalWrite(j+k, HIGH);
    }
    delay(500);
    digitalWrite(j, LOW);
  }

  for (int l=5; l<9; l++) {
    digitalWrite(l, LOW);
  }
}
```

#### Vaja 3:

Imamo 2 diodi in 2 tipki. Če je katerakoli tipka pritisnjena sveti ena dioda, sicer druga.

```c
void setup() {
  pinMode(0, OUTPUT);
  pinMode(1, OUTPUT);
  pinMode(2, INPUT_PULLUP);
  pinMode(3, INPUT_PULLUP);
}

void loop() {
  while (digitalRead(2) == digitalRead(3)) {
    digitalWrite(1, HIGH);
    digitalWrite(2, LOW);
  }
  digitalWrite(2, HIGH);
  digitalWrite(1, LOW);
}
```