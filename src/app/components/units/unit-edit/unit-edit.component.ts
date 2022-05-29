import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataBaseService } from 'src/app/services/data-base.service';
import { Unit } from 'src/app/models/unit_interface';

@Component({
  selector: 'SE-unit-edit',
  templateUrl: './unit-edit.component.html',
  styleUrls: ['./unit-edit.component.scss'],
})
export class UnitEditComponent implements OnInit {
  constructor(private data_base: DataBaseService, private route: Router) {}

  ngOnInit(): void {
    new Promise(() => {
      this.getId();
      setTimeout(() => {
        this.getUpdateUnit();
      }, 1000);
    });
  }

  idUnitToEdit: number = 0;

  unit_edit: Unit = {
    apelido: '',
    local: '',
    marca: '',
    modelo: '',
    ativo: false,
  };

  returnToUnits() {
    return new Promise(() => {
      setTimeout(() => {
        this.route.navigateByUrl('/content/units');
      }, 500);
    });
  }

  getId() {
    this.data_base.getUnitToEdit().subscribe((result: any) => {
      this.idUnitToEdit = result.value;
    });
  }

  getUpdateUnit() {
    this.data_base.getUnitWithId(this.idUnitToEdit).subscribe((result) => {
      this.unit_edit.apelido = result.apelido;
      this.unit_edit.ativo = result.ativo;
      this.unit_edit.local = result.local;
      this.unit_edit.marca = result.marca;
      this.unit_edit.modelo = result.modelo;
    });
  }

  updateUnit() {
    this.data_base.updateUnit(this.idUnitToEdit, this.unit_edit).subscribe();
    this.returnToUnits();
  }
}
