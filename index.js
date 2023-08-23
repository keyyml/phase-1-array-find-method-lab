
console.log(superbowlWin(record))
function superbowlWin(record){
    const winRecord = record.find((object) =>{
   return (object.result === "W")
})
console.log(winRecord);
    if(winRecord){
        return winRecord.year
    }
    else {
        return undefined
    }
}
console.log(superbowlWin(record))