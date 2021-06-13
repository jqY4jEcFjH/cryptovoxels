parcel.on('playerenter',e=>{  
 
let badAccount = e.player.wallet
let url = 'https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x3845badAde8e6dFF049820680d1F14bD3903a5d0&address='  + badAccount + '&tag=latest&apikey=YourApiKeyToken'

fetch(url)
  .then(r => r.json())
  .then( r=> {
 
   if (r.result > 0)    {
     
    } else {
      e.player.teleportTo('W@65E,458S,1U')
    }

  })
 
})
