const csvFilePathMatch='matches .csv'
const csvFilePathDelivery='deliveries.csv'

const csv=require('csvtojson')

let matches=[];
let deliveries=[];


    csv()
    .fromFile(csvFilePathMatch)
    .then((jsonObj1)=>{
         matches=jsonObj1;
         csv()
        .fromFile(csvFilePathDelivery)
        .then((jsonObj2)=>{
            deliveries=jsonObj2;
            let matchyr;
            matchyr=matches.filter(data=>data.season==2008 &&( data.team1=="Royal Challengers Bangalore" ||data.team2=="Royal Challengers Bangalore"));
          //  console.log(matchyr);
            let count=0;
            let matchids=[];
               for(let i in matchyr){
                matchids.push(matchyr[i].id)
               }
             
                for(let j in deliveries){
                  if(matchids.includes(deliveries[j].match_id) ){
                    if(deliveries[j].wide_runs>0 && deliveries[j].bowling_team=="Royal Challengers Bangalore"){
                        count+= Number(deliveries[j].wide_runs);
                    }
                } 
            }
            console.log("Wide Runs given by Royal challengers Bangalore in 2008 - "+ count);
         
    })
   })
    
    


