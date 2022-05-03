

					Progettare un interfaccia di nome Smartphone, prevede due variabili d'istanza:

	1)carica: number, e rappresenta il quantitativo di euro disponibile per le chiamate. 
	2) numeroChiamate: number, e rappresenta il numero di chiamate effettuate con il cellulare.

						Classe User che deve:

Xxxxxxx	1)implementare l'interfaccia Smartphone xxxxxxx
	2)definire i seguenti metodi: 
		1)public ricarica(unaRicarica: number): void, che ricarica il telefonino. 
		2) public chiamata(minutiDurata: number): void, che effettua una chiamata di durata in minuti specificata dal parametro esplicito.
			Tale metodo dovra' aggiornare la carica disponibile, ed incrementare la memoria contenente il numero di chiamate effettuate dal telefonino. 
			Si assuma un costo di 0.20 euro per ogni minuto di chiamata,
		3)un metodo public numero404(): number, che restituisce il valore della carica disponibile. 
		4)Un metodo public getNumeroChiamate(): number, che restituisce il valore della variabile d'istanza numeroChiamate. 
		5) public azzeraChiamate(): void , che azzera la variabile contenente il numero di chiamate effettuate dal telefonino.

Le istanze FirstUser-SecondUser-ThirdUser della classe User.

Provare i metodi e verificare il saldo residuo di ogni utente e quante chiamate sono state effettuate.