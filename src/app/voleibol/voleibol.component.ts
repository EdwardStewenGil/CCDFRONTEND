import { Component, OnInit } from '@angular/core';
import { UsuarioDto } from '../modelo/usuario-dto';
import { UserServiceService } from '../services/user-service.service'
import { empty, Observable } from "rxjs";
import Swal from 'sweetalert2'


@Component({
  selector: 'app-voleibol',
  templateUrl: './voleibol.component.html',
  styleUrls: ['./voleibol.component.css']
})
export class VoleibolComponent implements OnInit {
  usuarioDto: UsuarioDto[] = [];
  nuevoUsuario: UsuarioDto = { nombreA: '', identificacionA: '', edadA: 'nn ', generoA: '', etniaA: 'nn', celularA: '', correoA: '', comunaA: '', nombreb: 'nn', identificacionB: '', laborB: 'nn', evento: 'voleibol' };
  terminos = ""

  constructor(
    private userServiceService: UserServiceService) { }

  ngOnInit(): void { }


  public crearUsuario() {



    if (this.nuevoUsuario.nombreA == "") {
      Swal.fire('nombre no diligenciado')
    }
    else if (this.nuevoUsuario.identificacionA == "") {

      Swal.fire('Identificacion  no diligenciada')

    }
    else if (this.nuevoUsuario.generoA == "") {

      Swal.fire('Genero no diligenciada')

    }
    else if (this.nuevoUsuario.celularA?.length != 10) {

      Swal.fire('El celular es de 10 digitos')

    } else if (this.nuevoUsuario.correoA == "") {

      Swal.fire('Correo no diligenciado')

    } else if (this.nuevoUsuario.comunaA == "") {

      Swal.fire('Comuna no diligenciada')

    } else if (this.nuevoUsuario.identificacionB == "") {

      Swal.fire('Total de boletas no diligenciada')

    } else if (this.nuevoUsuario.identificacionB != "1" && this.nuevoUsuario.identificacionB != "2" &&
      this.nuevoUsuario.identificacionB != "3" && this.nuevoUsuario.identificacionB != "4" &&
      this.nuevoUsuario.identificacionB != "5" && this.nuevoUsuario.identificacionB != "6" &&
      this.nuevoUsuario.identificacionB != "7" && this.nuevoUsuario.identificacionB != "8" &&
      this.nuevoUsuario.identificacionB != "9") {

      Swal.fire('El total de boletas debe ser menor a 10 ')

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
