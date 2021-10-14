TEST J1.1

.container{
	max-width: 960px;
	margin: auto;
	border: 1px solid #ccc;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
		
	Aggiunta la proprietà "display:flex", consente attraverso "flex-direction: row" di giustificare al meglio i diretti figli del container.
	
	
.container::after{
			content: '';
			display: block;
			clear: both;
}
		
.container > .flyouts-container > ul.flyouts{
	padding: 1px 3px 0px 0px
}
		
	Rimosso il primo css, usato invece il padding sull'oggetto di classe "flyouts". E' necessario specificarlo in modo preciso, così da sovrascrivere il css acquisito in precedenza, in base alla gerarchia di css.


.container ul{
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: row;
}

	Anche qui usato flex per giustificare gli "il".


.container > .logo-container{
	position:relative;
	display
	text-align: left;
	margin-right: 10px;
	padding: 1px 0px 0px 3px
}

	Aggiunto padding e margin opportuno.
	
.container > .nav-container{
	position: relative;
	width: auto;
}

	Larghezza cambiata ad "auto", float rimosso a favore dell'uso di flex nel container.

.container .nav-container > ul.nav > li{
	border: 1px solid pink;
	width: 100px;
	padding: 10px 0;
	text-align: center;
	margin: 0px 2px 0px 2px
}
	
	Aggiunti i margini.
	
	
@media only screen and (max-width: 900px) {
	.container > .nav-container > ul{
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 10px;
	}
}
@media only screen and (max-width: 730px) {
	.container > .nav-container > ul{
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 10px;
	}
}
@media only screen and (max-width: 630px) {
	.container > .nav-container > ul{
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
	}
}
@media only screen and (max-width: 530px) {
	.container > .nav-container > ul{
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 10px;
	}
}
@media only screen and (max-width: 350px) {
	.container > .nav-container > ul{
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 10px;
	}
}	

	CSS aggiunto per rendere responsive la pagina.
	

	
Note conclusive:
Il container andava, secondo la mia prospettiva, giustificato con le prorietà "float", "position: relative"  e dimensioni percentuali.
Tuttavia, sempre al favore del paradigma responsive, ho utilizzato la proprietà "display:flex" sul padre, di conseguenza ho potuto allineare i figli e ordinali per riga.
Il logo stesso ed il carrello/cuore sono stati ridimensionati e opportunamente tarati il padding ed il margin.
Per ridurre il problema del overfitting degli elementi, al ridimensionarsi dello schermo, ho sostituito nel ".container > .nav-container > ul" la proprietà "display:flex" in "display:grid". 
Poi ho percentualizzato gli elementi del conteiner (proprietà width).
Le modifiche apportate sono state fatte nell'ottica di rendere indipendente la demnsione degli elementi dallo schermo e dalla loro mutua presenza.

Note correttive:
"ul.flyouts-container" aveva proprietà "float:left", sarebbe dovuta essere "right".
L'HTML in basso è stato rimosso, in qaunto l'immagine non è presente: "<li> <img src="./Test nav_files/648969-star-ratings-512.png" width="25px" alt=""> </li>"

