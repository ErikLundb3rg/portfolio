import React from 'react';
import ReactDOM from 'react-dom';
import Radium, {StyleRoot} from 'radium';
import Card from "./card.js"
import FadeIn from 'react-fade-in';

function Page2() {

  return (
    <div style = {{ padding: "30px", textAlign: "center"}}>
        <h1 style = {{textDecoration: "underline", textDecorationThickness: "3px"}}> Projekt </h1>
        <div>
            <Card 
                tag = "Socket Io chat app"
                description = "En simpel live chatapp byggd med hjälp av MongoDB, Express, Node och React js!. 
                                Kul projekt för att bli lite vassare i backend!"
                hasPage = {false}            
                github = "https://github.com/ErikLundb3rg/MERNchatapp"
            />
            <Card 
                tag = "Coronastatistik.nu"
                description = "Ett större projekt som jag gav mig an i somras. Använde diverse api-er och bibliotek  
                                för att sätta ihop och kartlägga data över covid statistik. Till skillnad från FMHs
                                hemsida kan man t.ex jämföra länder. Hemsidan är inte den mest responsiva..."
                hasPage = {true}
                link = "https://coronastatistik.nu/ "
                github = "https://github.com/ErikLundb3rg/Coronastatistik"
            />
            <Card
                tag = "Flappy bird AI"
                description = "Klassiska flappybird kodat i python! Men nu med en med ett evolutionärt
                                neuralt nätverk där fågeln kan lära sig spela spelet själv."
                hasPage = {false}
                github = "https://github.com/ErikLundb3rg/flappyBirdAI"
            />
            <Card
                tag = "Gymnasiearbete: Självkörande bil"
                description = "Jag och en kompis byggde en bil som skulle lära sig att köra genom ett neuralt
                                nätverk som tränades i en simulering. Projektet var inte helt lyckat. Men vi kom långt! "
                hasPage = {false}
                github = "https://github.com/Lucketyp/gymnasiearbete"
            />
            <Card
                tag = "Slutprojekt Programmeringsteknik"
                description = "Avslutande projekt för våran programmeringskurs där jag kodade en bank i språket Scala!
                                Programmet har funktioner såsom att skriva till filer och gå tillbaka till ett
                                tidigare tillstånd genom att ange ett datum. "
                hasPage = {false}
                github = "https://github.com/ErikLundb3rg/Programmeringsteknik-Bank"
            />
            <Card
                tag = "Den här sidan!"
                description = ""
                hasPage = {false}
                github = "https://github.com/ErikLundb3rg/portfolio"
            />
            
        </div>
    </div>
  );
}

export default Page2;
