import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { Unit } from 'src/app/models/unit_interface';
import { DataBaseService } from 'src/app/services/data-base.service';

@Component({
  selector: 'SE-units-new',
  templateUrl: './units-new.component.html',
  styleUrls: ['./units-new.component.scss'],
})
export class UnitsNewComponent implements OnInit {
  unit_gen: Unit = {
    apelido: '',
    local: '',
    marca: '',
    modelo: '',
    ativo: false,
  };

  constructor(private data_base: DataBaseService, private route: Router) {}

  ngOnInit(): void {}

  addNewUnit(newUnit: Unit): void {
    this.data_base.addNewUnit(newUnit).subscribe();
    this.returnToUnits();
  }

  returnToUnits() {
    return new Promise(() => {
      setTimeout(() => {
        this.route.navigateByUrl('/content/units');
      }, 500);
    });
  }
}
