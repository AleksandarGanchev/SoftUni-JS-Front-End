function solve (Yield) {
    let totalAmountSpecies = 0;
    let consumedByCrew = 26;
    let yieldDrop = 10;
    let daysMineOperated = 0;

   while ( Yield >= 100) {
       daysMineOperated += 1;

       totalAmountSpecies += Yield - consumedByCrew;
       Yield -= yieldDrop;
   }
   
   if (daysMineOperated > 0) {
       totalAmountSpecies -= consumedByCrew;
   }
   
   console.log(`${daysMineOperated}`);
   console.log(`${totalAmountSpecies}`);
}
