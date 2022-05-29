import { Component, OnInit } from '@angular/core';
import { Unit } from 'src/app/models/unit_interface';
import { DataBaseService } from 'src/app/services/data-base.service';

@Component({
  selector: 'SE-units-list',
  templateUrl: './units-list.component.html',
  styleUrls: ['./units-list.component.scss'],
})
export class UnitsListComponent implements OnInit {
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

  deleteUnit(unitID: number | undefined) {
    this.data_base.deleteUnit(unitID).subscribe();
    this.units.forEach((element, index) => {
      if (element.id === unitID) {
        this.units.splice(index);
      }
    });
  }
}
