import { Injectable } from '@angular/core';
import { Tarea } from './tarea';

@Injectable()
export class AppService { 
    constructor(
        
    ) { }

    //se saco la varibale tareas para que fuera global
    tareas: Tarea[] = [];

    public async obtenerTareas() {
        try {
            this.tareas.push(new Tarea(1, 'Sacar a pasear al perro', 15));
            this.tareas.push(new Tarea(2, 'Sacar la basura', 5));
            this.tareas.push(new Tarea(3, 'Cocinar la cena', 30));
            this.tareas.push(new Tarea(4, 'Lavar la ropa', 50));
            this.tareas.push(new Tarea(5, 'Regar las plantas', 20));
            return this.tareas;
        } catch (error) {
            return null;
        }
    }

    //Creacion de método para guardar tareas
    public agregarTareas(titulo, tiempo): string{
        //creamos el id a partir del número de tareas 
        const id = this.tareas.length + 1;
        try{
            //creamos una tarea nueva
            this.tareas.push( new Tarea(id,titulo, tiempo ));
            return "Tarea agregada con éxito"
        }
        catch(error){
            console.error(error);
            //retornamos mensaje de error
            return "Error al agregar tarea";
        }

    }

    //Creación del método para eliminar tareas
    public eliminarTarea(id): string{
        try{
            //eliminado tarea del arreglo, id es la posicion en el arreglo de la tarea
            this.tareas.splice(id,1);
            return "Tarea eliminada exitosamente";
        }catch(error){
            console.error(error);
            return "Error al eliminar tarea";
        }
    }

    //Creación del método de ordenar listado
    public ordenarListaTareas(tipo):string{
        try {
            if(tipo == 0 ){//ascendente
                //ordenamos la lista respecto a los minutos
                const listaOrdenada = this.tareas.sort( function (tareaA, tareaB) {
                    return tareaA.minutos - tareaB.minutos;
                });
                
                this.tareas = listaOrdenada;
            }else{ //descendente
                //ordenamos la lista respecto a los minutos
                const listaOrdenada = this.tareas.sort( function (tareaA, tareaB) {
                    return tareaB.minutos - tareaA.minutos;
                });

                this.tareas = listaOrdenada;
            }
        } catch (error) {
            console.error(error);
            return "Error al ordenar listado";
        }
    }

    //Creación del método para cambiar el estado de marcado
    public cambiarEstadoMarcado(id):string{
        try{
            //eliminado tarea del arreglo, id es la posicion en el arreglo de la tarea
            this.tareas[id].marcada = !this.tareas[id].marcada;
            return "Estado de marcado cambiado exitosamente";
        }catch(error){
            console.error(error);
            return "Error en el cambio de Estado de marcado"
        }
    }
}