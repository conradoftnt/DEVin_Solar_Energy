import { Component, OnInit } from '@angular/core';
import { Unit } from 'src/app/models/unit_interface';
import { DataBaseService } from 'src/app/services/data-base.service';

@Component({
  selector: 'SE-disabled-units',
  templateUrl: './disabled-units.component.html',
  styleUrls: ['./disabled-units.component.scss'],
})
export class DisabledUnitsComponent implements OnInit {
  constructor(private data_base: DataBaseService) {}

  units: Unit[] = [];

  ngOnInit(): void {
    this.getDisableUnits();
  }

  getDisableUnits() {
    this.data_base.getUnits().subscribe((result: Unit[]) => {
      this.units = result.filter((unit) => !unit.ativo);
    });
  }
}
