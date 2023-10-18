import data from '../data/Wine-Data.json'

export const alcoholList = data.reduce((result,alcohol)=>{
    const alcoholClass = alcohol.Alcohol
    if(!result[alcoholClass]){
      result[alcoholClass] =[]
    }
    result[alcoholClass].push(alcohol)
    return result
},{})

function getAlcoholProperty(alcohol,property){
  console.log("issue");
    alcohol[property] = (alcohol.Ash * alcohol.Hue)/alcohol.Magnesium
    return alcohol[property]
}

export function getMean (keyprop,index,property){
    let result
    Object.entries(alcoholList).map((key)=>{
      if(key[0]===keyprop){
        let ap = key[1].map((alcohol)=>{
           if(alcohol[property]=== undefined || null){
            return getAlcoholProperty(alcohol,property)
           }
           return alcohol[property]
        })
        
        result = ap.reduce((result,ap)=>{
          if (ap[0]==="."){
            ap =Number( 0 + ap)
          }
          result+=ap
          return result
        })
      }
      
    })
    return result.toFixed(3)
}
export function getMedian (keyprop,index,property){
    let result
    Object.entries(alcoholList).map((key)=>{
      if(key[0]===keyprop){
        let ap = key[1].map((alcohol)=>{
            if(alcohol[property]=== undefined){
                return getAlcoholProperty(property)
            }
            return alcohol[property]
        })
        let sortedAP = ap.sort((a,b)=>a-b)
        const middleValue = Math.floor(sortedAP.length / 2);
        if(sortedAP.length %2 ===0){
          result = (sortedAP[middleValue] + sortedAP[middleValue -1])/2
        } else{
          result = sortedAP[middleValue];
        }
      }
    })
    return result.toFixed(3)
}
export function getMode (keyprop,index,property){
    let result = {}
    let maximumVal =0
    let count = 0
    Object.entries(alcoholList).map((key)=>{
      if(key[0]===keyprop){
        let ap = key[1].map((alcohol)=>{
            if(alcohol[property]=== undefined){
                return getAlcoholProperty(property)
            }
            return alcohol[property]
        })
        for(let i=0;i<ap.length;i++){
          const number = ap[i]
          if(result[number]){
            result[number]++
          } else{
            result[number] = 1
          }
          if(count < result[number]){
            maximumVal = number
            count = result[number];
          } 
        }
        
        
      }
    })
    return maximumVal.toFixed(3)
}