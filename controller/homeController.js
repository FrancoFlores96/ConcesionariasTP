const fs = require('fs');

const bdConcs = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'))

const homeC = {

    index:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write('Bienvenidos a cotinuacion ver la lista de concesionarias ' + '\n\n') 
        res.write('******************************************'+ '\n\n')   
        bdConcs.forEach((concesionaria)=>{            
            res.write(concesionaria.sucursal + '\n\n');
            
        })
        
        res.write('******************************************')   

        res.end()
    },

}    

module.exports = homeC;