const fs = require('fs');
const dbMarcas = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'))

const marcas ={
    index:(req, res) => {
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write('Todas las  marcas' + '\n\n')
        
        let marcaA = [];

        dbMarcas.forEach(marc=>{
            marc.autos.forEach(marc=>{
                marcaA.push(marc.marca)
            })
        }),
        marcaA = marcaA.filter((a, b) =>marcaA.indexOf(a) === b),
        marcaA.forEach(marcas=>{
            res.write('>>> ' + marcas +"\n\n")
        }),
        res.end()
    },
    marca:(req,res) => {
        res.set({'content-type':'text/plain;charset=utf-8'})
        let marcaB = [];
        let id = req.params.id;
        let cantidadAutosPorMarca = 0;

        res.write('Marca Seleccionada: ' + id + '\n\n')

        dbMarcas.forEach(marc=>{
            marc.autos.forEach(marc=>{
                marcaB.push(marc)
            })
        })
        
        
        marcaB.forEach(marc => {
            if(marc.marca == id ) {
                res.write('Modelo: ' + marc.modelo + '\n\n')
                res.write('Año: ' + marc.anio + '\n\n')
                res.write('****************'+'\n')
                cantidadAutosPorMarca++;
            } 
        
        }),
        res.write('***************************************'+'\n\n')
        res.write('**ToTal De AuTos DiSpOnibles: '+cantidadAutosPorMarca + '\n\n')    
        res.write('***************************************' + '\n\n')
        res.end()

    },
    
}
module.exports = marcas;