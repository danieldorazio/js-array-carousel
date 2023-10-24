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

**MILESTONE1**
Ciclo for con condizione da soddisfare arrey.length {
    prelevare le singole immagini 
    associare una variabile globale al template literal 
}

Inserire la variabile al Dom 
Inizializzare una variabile a 0 e usarla come indice dell'array
Dare la classe active all'ellemeto dell'array presento all'indice 0 cosi da farsi mostrare 

**MILESTONE2**
richiamare la class(".prev) e assocciargli un evento al click
- quando clicclo 
    - se l'indice dell'immagine > 0 
        - rimuovi la classe active all'elemento corrente 
        - decrementa indice di 1 
        - assegna classe active all'elemento corrente 


richiamare la class(".next) e assocciargli un evento al click
- quando clicclo 
    - se l'indice dell'immagine < al numero degli elementi all'inetno dell'array -1 
        - rimuovi la classe active all'elemento corrente 
        - incrementa indice di 1 
        - assegna classe active all'elemento corrente 





