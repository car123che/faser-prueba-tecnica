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
}