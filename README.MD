### ESERCIZIO
**Consegna:**
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot.
**MILESTONE 1**
Rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
**MILESTONE 2**
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
**BONUS:**
Aggiungere il **ciclo infinito** del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

### SVOLGIMENTO 

**Dati**
Creare un arrey con all'interno [tutte le imagini]

**Inserimento dinamico**
Ciclo for con condizione da soddisfare arrey.length {
    prelevare le singole immagini 
    associare una variabile globale al template literal 
}

Inserire la variabile al Dom 