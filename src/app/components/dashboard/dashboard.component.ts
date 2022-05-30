import { Component, OnInit } from '@angular/core';
import { Unit } from 'src/app/models/unit_interface';
import { DataBaseService } from 'src/app/services/data-base.service';

@Component({
  selector: 'SE-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private data_base: DataBaseService) {}

  units: Unit[] = [];
  totalUnits: number = 0;
  activeUnits: number = 0;
  disableUnits: number = 0;
  avarage_energy: number = 0;

  ngOnInit(): void {
    this.getUnits();
    this.getAvarageEnergy();
  }

  getUnits() {
    this.data_base.getUnits().subscribe((result) => {
      this.units = result;
      this.totalUnits = this.units.length;
      let actives: number = 0;
      let disables: number = 0;
      this.units.forEach((unit) => {
        if (unit.ativo) {
          actives++;
        } else {
          disables++;
        }
      });
      this.activeUnits = actives;
      this.disableUnits = disables;
    });
  }

  getAvarageEnergy() {
    let total: number = 0;
    this.data_base.getGenerations().subscribe((result) => {
      result.forEach((generation) => {
        total += generation.kw_generated;
      });
      this.avarage_energy = total / result.length;
    });
  }
}
