import { Component, OnInit } from '@angular/core';
import { UsuarioDto } from '../modelo/usuario-dto';
import { UserServiceService } from '../services/user-service.service'
import { empty, Observable } from "rxjs";
import Swal from 'sweetalert2'


@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.css']
})
export class CarreraComponent implements OnInit {
  usuarioDto: UsuarioDto[] = [];
  nuevoUsuario: UsuarioDto = { nombreA: '', identificacionA: '', edadA: '' , generoA: '', etniaA: '', celularA: '', correoA: '', comunaA: '', nombreb: '', identificacionB: '', laborB: '' };
  terminos = ""

  constructor(
    private userServiceService: UserServiceService) { }

  ngOnInit(): void { }


  public crearUsuario() {



    if (this.nuevoUsuario.nombreA == "") {
      Swal.fire('nombre del asistente no diligenciado')
    }
    else if (this.nuevoUsuario.identificacionA == "") {

      Swal.fire('Identificacion del asistente no diligenciada')

    }
    else if (this.nuevoUsuario.edadA == "") {

      Swal.fire('Edad del asistente no diligenciada ')

    } else if (this.nuevoUsuario.generoA == "") {

      Swal.fire('Genero del asistente no diligenciado')

    } else if (this.nuevoUsuario.etniaA == "") {

      Swal.fire('Etnia no diligenciada')

    }
    else if (this.nuevoUsuario.celularA?.length != 10) {

      Swal.fire('El celular es de 10 digitos')

    } else if (this.nuevoUsuario.correoA == "") {

      Swal.fire('Correo no diligenciado')

    }  else if (this.nuevoUsuario.comunaA == "") {

      Swal.fire('Comuna no diligenciada')

    } else if (this.nuevoUsuario.nombreb == "") {

      Swal.fire('Nombre del acompañante no diligenciado')

    } else if (this.nuevoUsuario.identificacionB == "") {

      Swal.fire('identificacion del acompañante no diligenciado')

    } else if (this.nuevoUsuario.laborB == "") {

      Swal.fire('porfavor diligenciar si el acompañante trabaja en la secretaria de deporte')

    } else if (this.terminos == "") {

      Swal.fire('debes aceptar termino y condiciones')

    } else {
      console.log(this.nuevoUsuario)
      this.userServiceService.createUser(this.nuevoUsuario).subscribe(
        (data: any) => {
          if (data.status == 200) {

            Swal.fire('Felicidades ya estas participando')
          } else {

            Swal.fire(data.payload.message)
          }
        }, (error) => {
          console.log(error);
          Swal.fire('error al intentar registrate por favor intentalo mas tarde')

        }
      );


    }







  }
}

