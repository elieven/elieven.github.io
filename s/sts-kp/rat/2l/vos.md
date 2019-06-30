---
layout: document
title: VOS • 2. letnik • Računalniški Tehnik • STŠ Koper
latex: true
---

# Vzpostavitev Omrežnih Servisov

[Windows 7 VirtualBox image (developer edition al neki tazga)](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/) link za pobrat image za virtualbox ki ga rabis samo odpret preko menuja v virtual boxu.

[Windows 7 Ultimate SP1 (Eng) iso download link](https://software-download.microsoft.com/db/Win7_Ult_SP1_English_x64.iso?t=d65928fd-20a4-414b-979c-f456c2db9af7&e=1554077275&h=548e09cb19d97ccb15cb4679f38f2e30)



---

### Temporary



[Prijava na server stacionarno](pink)

1. Prvo na serverju spremenis ime (*control panel* ▸ *computer* ▸ *computer name*)

2. Reset pcja in ponovna prijava stacionarno

3. Start ▸administrative tools ▸ services

   - **dns client** (*nastimas na automatic*) 

   - **function discovery resource** (*automatic*)

   - **SSDP discovery** (*automatic*)

   - **upnp device host** (*automatic*)

4. Grem na server manager ▸ roles (*desni klik*) ▸  **add role** ▸ next ▸ DNS server ▸ next install-close

5. Roles kliknes dva + da prides do serverja do konca

6. Kliknes na **forwarders** kliknes **edit** in dodas `193.2.1.66` in `193.2.1.72`

Control panel ▸ network amd shering center ▸ spremenit ip izklopis ipv6 in nastavimo na ipv4 en ip `192.168.1.11` maska `255.255.255.0` in gateway od routerja od sole... Dns server `127.0.0.1` ▸ ok ▸ close ▸ close

V start napisemo `dcpromo` ▸ next ▸ next ▸ create a new domain ▸ next ▸ novak.si ▸ next ▸ izberemo **windows server 2008** ▸ next ▸ next ▸ yes ▸ next ▸ nastavis geslo ▸ next ▸ obkljukas **reboot on completion** ▸restart

<br>

[Prijava na administratorja stacionarno](green)

Active directory users and comouters ▸ kliknes na **novak.si** (desni klik) **new** ▸ organization unit ▸ Domain Users poimenujes ▸ si v mapi (desni klik) **new user** ▸ `kiki@novak.si` ▸ mu nastavis password 

Na namizju nardis mapo `profiles` ▸ (desni klik) **propreties** ▸ share ▸ kliknes **find** ▸ Domain Users ▸ check names ▸ nastavis co-owner kliknes **share** ▸ done ▸ potem gres **advanced sharing** ▸ share this folder ▸ permissions ▸ removas everyone in **add domain users** ▸ in klikneš **full control** ▸ potem **close** in ▸ kopiras pot do te mape

Odpres ponovno **active directory users and computers** ▸ domain users ▸ kliknes na uporabnika ▸ profile ▸ profile path prilepis pot ki si jo naredu do mape in na koncu dodas `\%username%` ▸ in potem kliknes **ok**

Se prijavim u clienta in gres v start ▸ in poisces **services** kliknes na

- **dns client** (*nastimas na automatic*) 
- **function duscovery resource** (*automatic*)
- **SSDP discovery** (*automatic*)
- **upnp device host** (*automatic*)

Potem gres za spremenit IP ▸ izklopis ipv6 ▸ gres na ipv4 ▸ in pod **dns server** `192.168.1.11`... 


Gres pod **computer** ▸ change propreties ▸ change name ▸ in dodas domeno vpises `novak.si`

In zdj se prijavis `kiki@novak.si` in geslo

Restart


Na strezniku na programu oracle kliknes **naprave** ▸ omrezje ▸ omrezne nastavitve ▸ in dolocis povezan vmesnik (bridged)... 

switch user

Kiki@novak.si in geslo

