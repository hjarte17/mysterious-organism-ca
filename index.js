// Returns a random DNA base.
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases.
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory function for creating many objects.
const pAequorFactory = (number, dnaStrand) => {
  return {
    specimenNum: number,
    dna: dnaStrand,
    // Changes a random base in the mockup strand to a new random base.
    mutate () {
      let randIndex = Math.floor(Math.random() * this.dna.length);
      let randBase = returnRandBase();
      
       console.log( `${randIndex}   -- ${this.dna[randIndex]} -- ${randBase}` );
      
      if (this.dna[randIndex] !== randBase){
         this.dna[randIndex] = randBase;
       
      }
       return this.dna;
    },
    compareDNA(pAequor){
      let commonElement = 0;
      for(let i = 0; i < this.dna.length; i++){
        if(this.dna[i] === pAequor.dna[i]){
          commonElement++;
        }
      }
      let identicalBasePercentage = ((commonElement / this.dna.length) *100).toFixed(2);
      console.log(`specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${commonElement} elements which is  ${identicalBasePercentage}% DNA in common`);
    },
    willLikelySurvive () {
      let counter= 0;
      for(let i = 0; i < this.dna.length; i++){
        
        if(this.dna[i] === 'C' || this.dna[i] ==='G'){
           counter++
           }
      }
      let likelySurvive = ((counter / this.dna.length) *100).toFixed(2);
      
      return likelySurvive >= 60 ? true : false;
      
    } //end willLikelySurvive
    
  }
};
let Create30 = () => {
let pAequorInstances = [];
let i = 0;
while(pAequorInstances.length < 30){
  let instance = pAequorFactory(i, mockUpStrand());
    if(instance.willLikelySurvive() === true){
      i++;
      pAequorInstances.push(instance)
    }
  }
  return pAequorInstances;
}

let thirtyInstances = Create30(); 
// console.log(thirtyInstances[25].willLikelySurvive());
for (let i = 0; i < thirtyInstances.length; i++){
  console.log(`${thirtyInstances[i].dna}--- ${thirtyInstances[i].specimenNum}--- ${thirtyInstances[i].willLikelySurvive()}`);
}





// let test = pAequorFactory(1, mockUpStrand());
// let pAequor = pAequorFactory(8, mockUpStrand());
// console.log(`${test.dna.length}`);
// console.log(`unmutated ${test.specimenNum} -- ${test.dna}`);

// test.mutate();

// console.log(`mutated   ${test.specimenNum} -- ${test.dna}\n\n`);

// console.log(`test ${test.specimenNum} -- ${test.dna}`);
// console.log(`pAequor   ${pAequor.dna} \n\n`);

// test.compareDNA(pAequor);


// console.log(test.willLikelySurvive());

// console.log(pAequor.willLikelySurvive());
