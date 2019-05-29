import React  from 'react';

import '../css/Word.css'

const Words =Array.from("alau")

export const WordToFind =['_','_','_','_'] 

const Word = ({word}) => (
 
       <div className="Word">
{ word.map((e)=>(<span >{e}</span>))
    }
    </div>
        
    
)

export function WordLetter() {
    const WordToFind = this.state
    return WordToFind
}
                                                
export function WordTest (value) {
 var number = 0 
  if (Words.indexOf(value) >= 0 ) {
   
    Words.forEach((e)=>{
        if(e === value){
            WordToFind[number]=value
            
        }
      number++
        
    }
                   
) 
  console.log(WordToFind)   
}
    
}

export default Word