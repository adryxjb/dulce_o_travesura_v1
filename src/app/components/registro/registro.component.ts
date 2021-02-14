import { Component, OnInit } from "@angular/core";
import { RegistroService } from "../services/registro.service";

@Component({
  selector: "registroComponent",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"],
  providers: [RegistroService]
})
export class RegistroComponent implements OnInit {
  public titulo: string;

  constructor(private _registroService: RegistroService) {
    this.titulo = "Registrate";
  }
}
