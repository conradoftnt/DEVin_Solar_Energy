import { Component, OnInit } from '@angular/core';
import { Generation } from 'src/app/models/generation_interface';
import { DataBaseService } from 'src/app/services/data-base.service';

@Component({
  selector: 'SE-average-energy',
  templateUrl: './average-energy.component.html',
  styleUrls: ['./average-energy.component.scss'],
})
export class AverageEnergyComponent implements OnInit {
  constructor(private data_base: DataBaseService) {}

  generations: Generation[] = [];

  ngOnInit(): void {
    this.getGenerations();
  }

  getGenerations() {
    this.data_base.getGenerations().subscribe((result) => {
      this.generations = result;
    });
  }
}
