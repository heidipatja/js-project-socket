## Available Scripts

### `npm install`

Installs dependencies.

### `npm start`

Runs the app.



## Redovisning krav 3: Realtid

För att hantera realtidsinformationen har jag använt micro-servicen socket.io. Med hjälp av socket.io kan vi skicka information mellan klienten och servern i realtid och denna kommunikation kan ske åt båda hållen. När klienten ansluter eller kopplar från skickar den information om det till socketen. Socketen kan i sin tur skicka aktuell prisinformation till klienten, som tar emot den och presenterar den på ett trevligt sätt för användaren. Den simulerade prisinformationen är satt att skickas var tredje sekund.

Realtidsinformationen visas upp i en graf, samt i tabellform tillsammans med användardata och knappar för köp och sälj. All denna information är samlad på samma sida för att kunna bevaka utvecklingen och ta snabba beslut. Socket.io passar bra för detta ändamål och känns snabbt och stabilt.

Jag har i stort sett utgått från kakexemplet, men har justerat formeln så att den inte ska skena iväg så mycket. Om kursen faller under 10 ökar jag på så att den inte ska hamna på minus och på samma sätt försöker jag dämpa om kursen stiger över 50, annars kunde det gå oväntat snabbt att nå upp till kurser på 100000, vilket inte kändes hållbart i längden. Jag hade från början tänkt koppla ihop realtidsbiten med databasen och implementera köphistorik, men prioriterade bort det under resans gång. Istället sparas och uppdateras antal och inköpsvärde, vilket sedan kan jämföras med realtidsdata för att se värdeutvecklingen.
