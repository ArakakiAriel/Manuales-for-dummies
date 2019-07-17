const fs = require("fs");

let crearArchivo = (base, limite, flag) => {
    return new Promise((resolve, reject) => {

        if(!Number(base) || !Number(limite)){
            reject(`El valor ingresado "${base}" o "${limite}" no es numérico`); 
            return;
        } 

        let tabla = "";
            for(let i = 1; i <= limite; i++){
                tabla += (`${base} * ${i} = ${base * i} \n`);
            }

            if(flag === 'listar'){
                resolve(tabla); 
                return;
            }
            
            fs.writeFile(`./tablas/tabla-${base}.txt`, tabla, (err)=>{
                if(err){
                    reject(err);
                } 
                else {
                    resolve(`tabla-${base}.txt`);
                }
            })
        
    })
}

function crearTabla(base, tabla){}

module.exports = {
    crearArchivo

}