import { Component, OnInit } from '@angular/core';
import { Generation } from 'src/app/models/generation_interface';
import { Unit } from 'src/app/models/unit_interface';
import { DataBaseService } from 'src/app/services/data-base.service';

@Component({
  selector: 'SE-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'],
})
export class SubscribeComponent implements OnInit {
  generation: Generation = {
    unitSurname: '',
    month_year: '',
    kw_generated: 0,
  };

  units: Unit[] = [];

  constructor(private data_base: DataBaseService) {}

  ngOnInit(): void {
    this.getUnits();
  }

  getUnits() {
    this.data_base.getUnits().subscribe((result) => {
      this.units = result;
    });
  }

  register(newGerenation: Generation) {
    this.data_base.registerGeneration(newGerenation).subscribe();
    alert('Geração lançada com sucesso!');
  }
}
