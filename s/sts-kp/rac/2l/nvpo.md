---
layout: document
title: NVPO • 2. letnik • Računalnikar • STŠ Koper
---

# NVPO

Ukazi za skripte v Linuxu. Celotno kodo lahko najdeš spodaj. Tu so najprej posamično razloženi deli kode. Nekateri deli so razloženi preveč natančno ampak dokumentacijo se piše tako da jo lahko razume tudi tisti ki nima pojma o stvari.

## Razlaga po delih

### Struktura kode

#### Osnovna struktura

Na začetku vsake skripte mora bit vrstica kjer je napisano kateri "interpreter" naj bo uporabljen za to skripto. Prva dva znaka te vrstice sta `#!` za njimi pa pot do interpreterja. V našem primeru je to `/bin/bash` ker pišemo bash skripto. Brez te vrstice skripta ne bo delala.

```bash
#!/bin/bash

```

#### Struktura select komande

```bash
PS3='Izpis'
options=("opcija 1" "opcija 2" "opcija 3")
select opt in "${options[@]}"
do
  case $opt in
    "opcija 1")
      echo "1"
      ;;
    "opcija 2")
      echo "2"
      ;;
    "opcija 3")
      echo "3"
      ;;
    *) echo "invalid option";;
  esac
done

```

Kar se tiče `select` komand `PS3` je kar se prikaže medtem ko skripta čaka na vnos oz izbor opcije.

`options` je seznam opcij ki jih lahko izbereš in za katere je spodaj napisano v `do case` kaj naredijo.

`select opt in "${options[@]}"` je komanda ki ti da izbiro izmed opcij v `options`.

`do case $opt in` je koda ki potem odvisno kar si izbral to naredi - kar je napisano v tisti opciji spodaj.

`"opcija 1")` je definicija opcije (v `options` so samo naštete). Kar temu sledi je koda ki se izvrši v primeru da izbereš to opcijo (v tem primeru je to `echo "1"`). Na koncu je še `;;` kar pomeni konec kode od te opcije. Te tri dele lahko napišemo v eno vrsto ali v več (kot je vidno v primeru zgoraj npr. `*) echo "invalid option";;` je napisano v eni vrstici).

<br><br>

### Razlaga primerov

Vsi primeri so opcije iz skripte na koncu tega dokumenta.

#### Ustvari besedila

```bash
"Ustvari besedila")
  mkdir -p /Shramba/Vaja/Besedila
  touch /Shramba/Vaja/Besedila/MaticekSeZeni{1..350}.txt
  chmod -R 757 /Shramba/Vaja
  ;;

```

`mkdir` je komanda za ustvarjanje map. `-p` naredi vse manjkajoče podmape. `/Shramba/Vaja/Besedila` je pot do mape ki jo želimo naredit.

`touch` je komanda za ustvarjanje datotek. `/Shramba/Vaja/Besedila/` je pot kjer želimo narediti datoteke. `MaticekSeZeni` je ime datoteke. `{1..350}` pomeni da bo narejenih 350 datotek. Ker je to znotraj imena datoteke pomeni da bojo te datoteke imenovane `MaticekSeZeni1`, `MaticekSeZeni2` in tako naprej do `MaticekSeZeni350`. `.txt` je končnica datoteke.

`chmod` je komanda za spreminjanje pravic za datoteke in mape. Pravice lahko spremenimo posamičnim uporabnikom, skupinam ali vsem skupaj. `-R` pomeni da bo spremenilo pravice tudi vsem podmapam in datotekam. `757` je kako bodo pravice nastavljene. Prva številka so pravice za lastnika datoteke, druga za pripadnike tvoji skupini, tretja pa za vse ostale (ugo - user group others). Vsaka od teh številk (npr 7) pove kakšne so pravice. Te številke so sestavljene iz 0, 1, 2 in 4.

| Številka |  Pravica   |
| -------- | ---------- |
| 0        | Ni pravice |
| 1        | Execute    |
| 2        | Write      |
| 4        | Read       |

S kombinacijo teh števil povemo kakšne pravice ima posamična oseba ali skupina. Npr. 7 pomeni da ima vse pravice (1+2+4=7). Če želimo npr dat pravico za Read in Execute ne pa Write mu damo 5. (1+0+2=5)

#### Premakni datoteke

```bash
"Premakni datoteke")
	mkdir -p /Shramba/datoteke/skrivnosti
	mv ~/test/datoteke/skrivnosti{1..200}.txt /Shramba/datoteke/skrivnosti
	;;

```

`mv` je komanda za premik datotek in map. V tem primeru bo premaknila prvih 200 datotek skrivnosti (`skrivnosti{1..200}.txt`) iz mape `~/test/datoteke/` v mapo `/Shramba/datoteke/skrivnosti`.

#### Dodaj uporabnika

```bash
"Dodaj uporabnika")
	useradd jure
	passwd jure
	123
	123
	groupadd osebe
	useradd -G osebe jure
	;;

```

`useradd` je komanda za ustvarjanje uporabnika in dodajanje uporabnikov v skupine. `useradd jure` doda uporabnika z imenom `jure`. S `passwd jure` mu spremenimo geslo (v tem primeru v `123` - geslo dvakrat zapišemo ker drugič je za potrditev).

`groupadd` je komanda za ustvarjanje skupin.

`useradd -G osebe jure` doda uporabnika jure v skupino osebe. (v komandi useradd `-G` pomeni dodaj uporabnika v skupino)

#### Smeti

```bash
"Smeti")
	mkdir -p /Test/Smeti
	chmod 755 /Test/Smeti
	chown -R jure:osebe /Test/Smeti
	cp ~/test/datoteke/* /Test/Smeti
	;;

```

`cp` je komanda za kopiranje datotek. V tem primeru kopiramo vse datoteke iz `~/test/datoteke` v mapo `/Test/Smeti`.

#### Java

```bash
"Java")
  apt-get install -y python-software-properties debconf-utils
	add-apt-repository -y ppa:webupd8team/java
	apt-get update
	echo "oracle-java8-installer shared/accepted-oracle-license-v1-1 select true" | sudo debcof-set-selections
	apt-get install -y oracle-java8-installer
	;;

```

#### Posodobitev

```bash
"Posodobitev")
	apt-get update
	apt-get upgrade -y
	apt-get install -y members cmus lynx
	;;

```

#### Tools

```bash
"Tools")
      rm -rf /tmp/*
      mkdir /media/vmwarecd
      mount /dev/cdrom /media/vmwarecd
      tar -C /tmp -xzvf /media/vmwarecd/VMwareTools-*.tar.gz
      /tmp/vmware-tools-distrib/vmware-install.pl -d
      rm -rf /tmp/*
    ;;

```

#### Začetno stanje

```bash


```

#### Android

```bash
"Android")
	wget - http://dl.google.com/dl/android/studio/ide-zips/2.1.0.9/android-studio-ide-143.2790544-linux.zip -P /tmp
	apt-get install -y unzip
	tar xvzf /tmp/android-studio*.zip -d /opt
	;;

```

#### USB

```bash
"USB")
	mkdir -p /media/usb
	mount -f /dev/sdc /media/usb
	cp ~/*_skripta.sh /media/usb
	;;

```

`mount` je komanda za montiranje USB ali zunanji disk. USB ki je v računalniku in ga lahko najdemo v `/dev/sdc/` montiramo v mapo `/media/usb`.

#### Quit

```bash
"Quit")
	break
	;;

```

V primeru da izberemo to opcijo `break` konča `select` loop in nas vrže iz skripte.

#### Konec

```bash
*) echo "invalid option";;

```

To naredi da če v izbor vnesemo karkoli razen vnaprej naštetih možnosti nam izpiše `invalid option`.

<br>

## Celotna koda

Celotna koda pa izgleda tako:

```bash

#!/bin/bash

PS3='Izberi ukaz: '
options=("Ustvari besedila" "Premakni datoteke" "Dodaj uporabnika" "Smeti" "Java" "Posodobitev" "Tools" "Zacetno stanje" "Android" "USB" "Quit")
select opt in "${options[@]}"
do
  case $opt in
    "Ustvari besedila")
      mkdir -p /Shramba/Vaja/Besedila
      touch /Shramba/Vaja/Besedila/MaticekSeZeni{1..350}.txt
      chmod -R 757 /Shramba/Vaja
      ;;

    "Premakni datoteke")
      mkdir -p ~/Test/Igre
      mv /Shramba/Vaja/Besedila/MaticekSeZeni{1..125}.txt ~/Test/Igre
      ;;

    "Dodaj uporabnika")
      useradd jure
      passwd jure
      123
      123
      groupadd osebe
      useradd -G osebe jure
      # za videt uporabnike
      # apt-get install members
      ;;

    "Smeti")
      mkdir -p /Test/Smeti
      cp /Shramba/Vaja/Besedila/* /Test/Smeti
      chmod -R 717 /Test
      chown -R jure:osebe /Test/Smeti
      ;;

    "Java")
      # unattended install
      apt-get install -y python-software-properties debconf-utils
      add-apt-repository -y ppa:webupd8team/java
      apt-get update
      echo "oracle-java8-installer shared/accepted-oracle-licence-v1-1 select true" | sudo debconf-set-selection
      sudo apt-get install -y oracle-java8-installer
      ;;

    "Posodobitev")
      apt-get update
      apt-get upgrade -y
      apt-get install moc members calcurse -y
      ;;

    "Tools")
      rm -rf /tmp/*
      mkdir /media/vmwarecd
      mount /dev/cdrom /media/vmwarecd
      tar -C /tmp -xzvf /media/vmwarecd/VMwareTools-*.tar.gz
      /tmp/vmware-tools-distrib/vmware-install.pl -d
      rm -rf /tmp/*
      ;;

    "Zacetno stanje")
      rm -rf /Test /Shramba/Vaja ~/Test
      apt-get purge moc members calcurse
      groupdel osebe
      userdel jure
      ;;

    "Android")
      # link kje ga pobrat
      wget https://dl.google.com/dl/android/studio/ide-zips/2.0.0.20/android-studio-ide-143.2739321-linux.zip -P /tmp
      apt-get install unzip -y
      unzip /tmp/and*.zip -d /opt
      /opt/android-studio/bin/studio.sh
      ;;

    "USB")
      mkdir /media/usb
      mount /dev/sdc /media/usb
      cp ~/*_skripta.sh ~/usb
      umount -l /media/usb
      ;;

    "Quit")
      break
      ;;

    *) echo invalid option;;
  esac
done


```
