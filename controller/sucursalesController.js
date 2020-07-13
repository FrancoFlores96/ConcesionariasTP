const fs = require('fs');
const dbSucursales = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'))

const sucursales = {
    index:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write('==========================LOS SUCURSALES========================' + '\n\n');
        dbSucursales.forEach((concesionaria)=>{
            res.write('Sucursal: ' + concesionaria.sucursal + '\n\n');
            res.write('Direccion: ' + concesionaria.direccion + '\n\n');
            res.write('Telefono: ' + concesionaria.telefono + '\n\n');
            res.write('=============================================================' + '\n\n');
        })
        res.end()
    },
    sucursal:(req, res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        
        let idSucursal = req.params.idSucursal;

        dbSucursales.forEach((concesionaria)=>{
            if(idSucursal == concesionaria.sucursal){
                res.write('Sucursal: ' + concesionaria.sucursal + '\n\n');
                res.write('Direccion: ' +concesionaria.direccion + '\n\n');
                res.write('Telefonos: ' + concesionaria.telefono + '\n\n');
                concesionaria.autos.forEach(concesionaria=>{
                    res.write('Marca: ' + concesionaria.marca + "\n");
                    res.write('Modelo: ' + concesionaria.modelo + "\n");
                    res.write('Año: ' + concesionaria.anio + "\n");
                    res.write('=============================================================' + '\n\n');
                })

                res.write('Total de vehiculos Disponibles: ' + concesionaria.autos.length)
                res.end()
            }
        })
        res.end("Sucursal no existente.")
    }
}

module.exports = sucursales