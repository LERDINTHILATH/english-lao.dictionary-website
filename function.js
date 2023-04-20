const word = document.querySelector('.word')
    const bunttunEL = document.querySelector(".wordbtn");
    const  wordlao = document.querySelector(".wordlao ")
     const description = document.querySelector(".description")
    const senten = document.querySelector(".senten");
    const soundw = document.getElementById("soundep");
    const count = 0;
   
    


   
 
  
 
 const randomword = () => {
    let ranobj = words[Math.floor(Math.random() *words.length)];
    let engword = ranobj.word;
    word.innerText = engword;
    wordlao.innerText = ranobj.wordlao;
    description.innerText = ranobj.description;
    senten.innerText = ranobj.senten;
    console.log(ranobj);


    soundw.addEventListener("click", ()=>{

      let voice = speechSynthesis.getVoices();
      let utterance = new SpeechSynthesisUtterance(word.innerText);
      utterance.voice = voice[2];
      utterance.land = 'en-US'
      ;
      
      speechSynthesis.speak(utterance);
      
    })}

   randomword();
    bunttunEL.addEventListener('click',randomword);


   