const fs = require('fs');
const dbAutos = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'))

const autos = {
    index: (req, res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write('Lista de todos los Autos disponibles'+'\n\n')
        let autosA = []
        let cantidadAutos = 0;
        dbAutos.forEach((car)=>{
            car.autos.forEach(car=>{
                autosA.push(car)
            })
        })
        autosA.forEach(car=>{
            res.write('Marca: ' + car.marca + '\n');
            res.write('Modelo: ' + car.modelo + '\n');
            res.write('Año: ' + car.anio + '\n');
            res.write('Color: ' + car.color + '\n');
            res.write('****************************' + '\n\n');
            cantidadAutos++;
        })
        res.write('***************************************'+'\n\n')
        res.write('**ToTal De AuTos DiSpOnibles: '+cantidadAutos + '\n\n')    
        res.write('***************************************' + '\n\n')
        res.end()
    },
    marca: (req, res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        let id = req.params.id;
        res.write('Marca Seleccionada: ' + id + '\n\n')
        let autosM = []
        let cantidadAutos = 0;
        dbAutos.forEach((car)=>{
            car.autos.forEach(car=>{
                autosM.push(car)
            })
        })
        autosM.forEach(car=>{
            if(car.marca == id){
                res.write('Modelo: ' + car.modelo + '\n')
                res.write('Año: ' + car.anio + '\n')
                res.write('Color: ' + car.color + '\n')
                res.write('***********************************' + "\n")
                cantidadAutos++;
                
            }
        })
        res.write('***************************************'+'\n\n')
        res.write('**ToTal De AuTos DiSpOnibles: '+cantidadAutos + '\n\n')    
        res.write('***************************************' + '\n\n')
        res.end()
    },

    datos:(req, res) => {
        res.set({'content-type':'text/plain;charset=utf-8'})
        let datos = [];
        let id = req.params.id;
        let cantidad = 0;

        res.write('Datos Especificos: ' + id + '\n\n')

        dbAutos.forEach(marc=>{
            marc.autos.forEach(marc=>{
                datos.push(marc)
            })
        }) 

        datos.forEach(marc => {
            if(id == marc.anio){
                res.write('Marca: ' + marc.marca + '\n\n')
                res.write('Modelo: ' + marc.modelo + '\n\n')
                res.write('Color: ' + marc.color + '\n\n')
                res.write('*************************************'+'\n\n')
                cantidad++
            }
            if(id == marc.color){
                res.write('Marca: ' + marc.marca + '\n\n')
                res.write('Modelo: ' + marc.modelo + '\n\n')
                res.write('Año: ' + marc.anio + '\n\n')
                res.write('**************************************'+ '\n\n')
                cantidad++
            }
        }) 
        res.write('***************************************'+'\n\n')
        res.write('**ToTal De AuTos DiSpOnibles: '+cantidad + '\n\n')    
        res.write('***************************************' + '\n\n')
        res.end()

    }


}

module.exports = autos