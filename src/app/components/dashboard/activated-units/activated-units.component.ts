import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/services/data-base.service';
import { Unit } from 'src/app/models/unit_interface';

@Component({
  selector: 'SE-activated-units',
  templateUrl: './activated-units.component.html',
  styleUrls: ['./activated-units.component.scss'],
})
export class ActivatedUnitsComponent implements OnInit {
  constructor(private data_base: DataBaseService) {}

  units: Unit[] = [];

  ngOnInit(): void {
    this.getActiveUnits();
  }

  getActiveUnits() {
    this.data_base.getUnits().subscribe((result) => {
      this.units = result.filter((unit) => unit.ativo);
    });
  }
}
