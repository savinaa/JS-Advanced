function timeToWalk(distanceInSteps, footprintInM,speed){
    let distanceInM=distanceInSteps*footprintInM
    //path=speed*time
    //time=path/speed
    let speedMperSec=speed*1000/3600
    let timeNeeded=distanceInM/speedMperSec
    let mForRests=Math.floor(distanceInM/500)
    let h=(timeNeeded/3600)>>0
    let mForWalking=~~(timeNeeded/60)
    let m=mForWalking+mForRests
    let s=~~(Math.round(timeNeeded)%60)
    console.log(`${('00'+h).slice(-2)}:${('00'+m).slice(-2)}:${('00'+s).slice(-2)}`)
}
timeToWalk(2564,0.70,5.5)