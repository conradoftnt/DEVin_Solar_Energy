import { Component, OnInit } from '@angular/core';
import { Unit } from 'src/app/models/unit_interface';
import { DataBaseService } from 'src/app/services/data-base.service';

@Component({
  selector: 'SE-total-units',
  templateUrl: './total-units.component.html',
  styleUrls: ['./total-units.component.scss'],
})
export class TotalUnitsComponent implements OnInit {
  constructor(private data_base: DataBaseService) {}

  units: Unit[] = [];

  ngOnInit(): void {
    this.getUnits();
  }

  getUnits() {
    this.data_base.getUnits().subscribe((result) => {
      this.units = result;
    });
  }
}
