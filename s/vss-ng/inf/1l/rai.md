# Računalništvo in informatika

## 3. vaja

Koliko velika je slika velikosti 100x100 slikovnih točk, če jo natisnemo s tiskalnikom z ločljivostjo 600dpi?

| velikost | 100 | pik | 0,1667 | inča | 0,42 | cm  |
| -------- | --- | --- | ------ | ---- | ---- | --- |
|          |     |     |        |      |      |     |

$$
$$

### 2. naloga

Na računalniku je skenirana slika velikosti 900x600 slikovnih točk. Skener bere 300 pik na palec. Kakšnih dimenzij je bila originalna slika?

$$
600 \div 300 = 2 \qquad 900 \div 300 = 3 \\
3 \times 2,54 = 7,62cm \qquad 2 \times 2,54 = 5,08cm
$$

### 3. naloga

Koliko prostora zasede fotografija velikosti 15x10 cm, če uporabimo skener s 300 dpi, za zapis barve pa uporabimo model True Color?

> Najprej pretvorimo dimenzije slike v pike z uporabo podatka 1inch = 2.54cm in rezolucija = 300dpi.

$$
15cm = 5,906inch \qquad 5,906 \times 300 = 1771,65 \\
10cm = 3,937inch \qquad 3,937 \times 300 = 1181,10
$$

> Ker je barvna globina 3byte (24bit)

$$
1771,65 \times 1181,10 \times 3 = 6.277.512,56
$$

> Potem to samo še pretvorimo iz byte v MB

> 1 **byte** = 8 bits.
>
> 1 kilobyte (K / Kb) = 2^10 **bytes** = 1,024 **bytes**.
>
> 1 **megabyte** (M / **MB**) = 2^20 **bytes** = 1,048,576 **bytes**.
>
> 1 gigabyte (G / GB) = 2^30 **bytes** = 1,073,741,824 **bytes**.
>
> 1 terabyte (T / TB) = 2^40 **bytes** = 1,099,511,627,776 **bytes**.
>
> 1 petabyte (P / PB) = 2^50 **bytes** = 1,125,899,906,842,624 **bytes**.

$$
\frac{6.277.512,56 \ \mathrm{b}}{1,048,576 \ \mathrm{b}} = 5,986702 \ \mathrm{MB}
$$

▬

### 4. naloga

> za prepisat

### 5. naloga

Izračunaj velikost nestisnjene slikovne datoteke za zapis slike velikosti **800x600** pik v različnih barvnih globinah (v byte).

| Barvna globina | Velikost slike v pikah | Velikost slike v b (byte) |
| -------------- | ---------------------- | ------------------------- |
| 8-bitna        | 800x600px              | 480.000 byte              |
| 16-bitna       | 800x600px              | 960.000 byte              |
| 24-bitna       | 800x600px              | 1.440.000 byte            |
| 32-bitna       | 800x600px              | 1.920.000 byte            |

### 8. naloga

> za nardit

### 9. naloga

Vzemimo primer zaslonske slike, grafična ločljivost zaslona je **600 x 500** slikovnih pik. Zapiši **velikost datoteke** (zaslonskega posnetka celega zaslona) v **byte**-ih, če vsako piko opišemo z ustreznim številom bitov.

| Število bitov | Število barv    | Velikost datoteke |
| ------------- | --------------- | ----------------- |
| 1             | 2 barvi         | 37.500 bytes      |
| 4             | 16 barv         | 150.000 bytes     |
| 8             | 256 barv        | 300.000 bytes     |
| 16            | 65.636 barv     | 600.000 bytes     |
| 24            | 16.777.216 barv | 900.000 bytes     |

### 10. naloga

Ko bitno sliko transformiramo (povečamo, zavrtimo, raztegnemo itd.), postane grafika <u>**večja**</u>, s tem pa pokvarimo pa tudi <u>**kvaliteto**</u> slike.

### 11. naloga

Naštej lastnosti bitne slike:

**Prednosti**:

- Enostaven prikaz katerega koli motiva (vektorske težje prikazujejo zelo kompleksne motive)

**Slabosti**:

- Enostavni motivi vseeno zavzamejo dosti prostora
- Kvaliteta je omejena na količino pik

### 12. naloga

Velikost datoteke bitne slike lahko skrčimo tako, da jih pretvorimo v drug format. Na kratko opiši znane
formate za zapis slik (dobre in slabe lastnosti, kdaj jih uporabljamo):

- **gif** (_Graphic Interchange Format_) podpira animacije,
- **jpg** ali **.jpeg** (_Joint Photographic Experts Group_)
- **bmp** (_Windows Device Independent Bitmap_)
- **png** (_Portable Network Graphics_)

### 13. naloga

### 14. naloga

Enobarven kvadrat je vektorsko opisan z naslednjimi podatki: (v SVG) x, y, height, width, fill.

### 15. naloga

Zapiši velikost slikovne datoteke dimenzije 1024x768 v True Color barvni globini v MB.

> Truecolor ima 24 bitno globino (3B)

$$
\frac{1024 \times 768 \times 3 \ \mathrm{B}}{1,048,576 \ \mathrm{B}} = 2,25 \ \mathrm{MB}
$$

> Pazi! bytes != b ampak == B

### 16. naloga

Če vektorske slike transformiramo (povečamo, vrtimo, raztegnemo itd), se ločljivost slike <u>**ne spremeni**</u>. Ali je mogoče transformirati tudi vsako posamezno komponento vektorske slike? **<u>Načeloma ja</u>**

### 17. naloga

Naštej lastnosti vektorske slike:

**Prednosti**:

- Majhna velikost za nezakolplčicirane stvari
- Transformacija

**Slabosti**:

-
