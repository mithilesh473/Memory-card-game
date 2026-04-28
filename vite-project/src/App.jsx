import { useEffect, useState } from "react";
import { Card } from "./components/card";
import { GameHeader } from "./components/GameHeader";

const cardValues=[
  "🍎","🍌","🍇","🍉","🍍", "🍓", "🥭", "🍒","🍎","🍌","🍇","🍉","🍍", "🍓", "🥭", "🍒",
];


function App() {
  const [cards,setCards]=useState([])

  const initalizeGame=()=>{
    //shuffle the cards

    const finalCards=cardValues.map((value,index)=>(
      {
        id:index,
        value,
        isFlipped:false,
        isMatched:false,
      }

    ));
    setCards(finalCards);
  };
  useEffect(()=>{
    initalizeGame();
  },[]);

  const handleCardClick=(card)=>{
    //Don't allow clicking  if card is alread flipped,matched
    if(card.isFlipped||card.isMatched){
      return;
    }
    //Update the card flipped state
    const newCards=cards.map((c)=>{
      if(c.id === card.id) {
        return{...c,isFlipped:true};
      }else{
        return c;
      }
      });
      setCards(newCards);
    
  }
  return(
    <div className="app">
      <GameHeader score={3} moves={10}/>
      <div className="cards-grid">
        {cards.map((card)=>(
          <Card card={card} onClick={handleCardClick}></Card>
        )
      )}
      </div>
    </div>
    


  );

 

}

export default App
