let worlds = ["pick up" ,"kick back", "tidy up" , "pop in tiny", "polyglot" , "pop in tiny" ]

let whole = worlds.reduce((acc,word)=>    {  
if (acc[word]){
     acc[word]=acc[word]+1
}

else {
     acc[word] =1
}
return acc ;
 } ,{} 
)
console.log(whole);

// acc hia l bag ta3na 
//word hia kl klma 
// اذا الكراس تعني فيه هذي الكلمة  الكلمة = الكلمة +1 pop in tiny 2 اذا الكلمة شافها الكراس خطرا زيدلها 1
//else اذا الكلمة جديدة مكانتش منقبل خليها 1
//return acc رجعلي الكراس
