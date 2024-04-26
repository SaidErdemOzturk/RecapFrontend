import { Component, OnInit } from '@angular/core';
import { RentalService } from '../../services/rental.service';
import { RentalDto } from '../../models/rentalDto';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css'
})
export class RentalComponent implements OnInit {

  rentalsDto:RentalDto[]=[]
  constructor(private rentalService:RentalService){}

  ngOnInit(): void {
    this.getRentalsDto();
  }
  getRentalsDto(){
    this.rentalService.getRentalsDto().subscribe(response=>{
      this.rentalsDto=response.data
    })
  }
}
