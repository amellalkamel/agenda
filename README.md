# Calendrier d'événements 
Calendrier d'événements est une application web développer avec React, CSS, Javascirpt ES6, qui permet au utilisateur de visualiser les événements ont évité les événements qui se chevauchent.
## Comment ça marche
Pour tester l'application en ligne : 
[cliquer ici](https://agenda-ecru.vercel.app/)

Les événements affiches sont un fichier "data.json" sous format :

[{id : 1, start : "10:30", duration : 30}, ...]

## 🛠️ Installation
1. Installer 
[NodeJs](https://nodejs.org/en/)
         LTS sur votre machine.
2. Telecharger le fichier ZIP ou bien clonner le projet depuis 
[Github](https://github.com/amellalkamel/agenda)
3. Dans la racine du projet, vous ouvrer le terminal puis vous lancer la commande :
```bash
npm install
```
## Utilisation
Pour lancer l'application :
```bash
npm start
```
Pour lancer les tests :
```bash
npm run test
```
## Organisation des fichiers :
```bash
|___src
    |_____assets
          |____Calender.css
    |_____components
          |____tests__
          |______DivEvents.test.js
          |____DivEvents.js
    |_____data
          |____data.json
    |_____pages
          |____tests__
          |______Calender.test.js
          |____Calender.js
    |_____utils
          |____tests
               |____formatDate.test.js
               |____structureData.test.js
               |____utils.test.js
          |____formatDate.js
          |____structureData.js
          |____utils.js
    |_____app.css
    |_____app.js
    |_____index.css
    |_____index.js
|...configFiles
 ```
## Séquencement d'execution du code :
1. index.js fait appele au composant App.js

```js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
2. le composant App fait appele au composant Calender et DivEvent :
```js
function App() {
  return (
    <div className="App">
      <Calender/>
      <DivEvent/>
    </div>
  );
}
```
- le composant Calender qui affiche les heures de 09:00 am a 09:00 pm
```js
    const hours = ['9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm', '9 pm'];
    return (
        <div className='body-calender'>
            {hours.map((hour, index) =>
            (
                <div key={index} className="hourContainer">
                    <div className="hours" >
                        {hour}
                    </div>
                    <div className="separator"></div>
                </div>
            )
            )}
        </div>
    )
```
- le composant DivEvent qui affiche les événements pose sur le  composant calender.
```js
                            {
                                divParent[parseInt(Object.keys(divParent).join())].flat().map((divFils, j) => {
                                    const isLargeNumber = (element) => element.id === divFils.id;
                                    /**
                                     * recupiration des positions des div
                                     */
                                    const widthLength = divParent[parseInt(Object.keys(divParent).join())].length
                                    const leftLength = divParent[parseInt(Object.keys(divParent).join())].findIndex(isLargeNumber)
                                    const { top, left, width, height } = getPosition(divFils, widthLength, leftLength);
                                    return (
                                        <div
                                            data-key={divFils.id}
                                            key={divFils.id}
                                            className="floatenDiv"
                                            ref={el => (divRefs.current[divFils.id] = el)}
                                            style={{
                                                top: top,
                                                left: left,
                                                width: width,
                                                height: height,
                                                backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}70`,
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                        >
                                            {divFils.id}
                                        </div>
                                    )
                                })
                            }
               
```
        
        
        


        
        
        
    
        

        
    
        
        
