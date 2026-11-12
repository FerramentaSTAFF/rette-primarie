# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Una sola persona: Marica, educatrice in una cooperativa. Usa l'app sul suo telefono Android per gestire le rette mensili e la mensa dei bambini della primaria che segue (pranzo e doposcuola). Nessun altro utente, nessun ruolo, nessun accesso condiviso.

## Product Purpose
Sostituire carta e fogli sparsi: sapere in ogni momento chi ha pagato, chi è in ritardo, quanto contante c'è in cassa e quanti pasti segnare, e mandare promemoria ai genitori su WhatsApp. Il successo è che Marica faccia questi controlli in pochi secondi, senza dover pensare a come funziona l'app.

## Positioning
È fatta su misura per il modo di lavorare di Marica, non è un gestionale generico. Ogni procedura (spunta del pagamento, consegna dei contanti, conteggio dei pasti, eccezioni per bambino) riproduce esattamente come lavora lei.

## Operating Context
- PWA in italiano installata su un solo telefono Android; schede Home, Tutti, Bambino, Mensa, Altro.
- Dati solo in locale (localStorage), niente cloud né account; backup e ripristino tramite file JSON da Altro.
- Le rette scadono il 16 del mese, con eccezioni per singolo bambino; ci sono pacchetti diversi, agevolazioni (bambini che non pagano), fratelli con pagamento unico e quote divise tra due genitori.
- La versione pubblicata (index.html nel repository) è offuscata; il sorgente leggibile non va nel repository.

## Capabilities and Constraints
- I metodi sono precisi e voluti da Marica: le procedure e i flussi esistenti non si cambiano senza una sua richiesta.
- Funzioni proposte prese da gestionali simili (pagamenti parziali, ricevute, solleciti, iscrizioni) sono state rifiutate: non riproporle se non richieste.
- Nessun dato reale dei bambini nel repository.

## Brand Commitments
Nessuno. L'estetica non è una priorità: conta che l'app resti semplice e veloce.

## Evidence on Hand
Nessuna testimonianza, cliente o metrica: è uno strumento personale. Non inventarne.

## Product Principles
1. Velocità prima di tutto: le azioni frequenti (segnare un pagamento, vedere chi è scaduto, contare i pasti) si fanno in uno o due tocchi.
2. Semplicità: niente funzioni, schermate o scelte in più di quelle che Marica usa.
3. I metodi di Marica sono la specifica: si adatta l'interfaccia, non il suo modo di lavorare.
4. I dati restano sul telefono; ogni modifica deve rispettare il backup e il ripristino esistenti.
5. Leggerezza: l'app deve restare un solo file che si apre subito anche offline.

## Accessibility & Inclusion
Nessuna esigenza particolare segnalata (vista, uso a una mano, telefono lento).
