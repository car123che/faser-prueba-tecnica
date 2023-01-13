import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Tarea } from './tarea';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	tareas: Tarea[];

	titulo: string;
	duracion: number;


	constructor(
        public service: AppService,
	) { }
	
	ngOnInit() {
		this.obtenerTareas();
	}

	async obtenerTareas() {
		this.tareas = await this.service.obtenerTareas();
	}

	agregarTarea(){
		//validamos que no vayan vacios
		if(this.duracion == undefined) this.duracion = 0;
		if(this.titulo == undefined) this.titulo = "---";
		//Llamamos al método del servicio que agrega una tarea nueva
		const salida = this.service.agregarTareas(this.titulo, this.duracion);

		//imprimimos el mensaje 
		console.log(salida);

		//limpiamos los datos
		this.titulo = undefined;
		this.duracion = undefined;
		
	}

	eliminarTarea(id){
		//Llamamos al método del servicio que elimina una tarea 
		const salida = this.service.eliminarTarea(id);

		//imprimimos el mensaje 
		console.log(salida);

	}
}
