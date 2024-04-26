import { Component, OnInit } from '@angular/core';
import { CarDetailService } from '../../services/car-detail.service';
import { CarDetailDto } from '../../models/carDetailDto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.css'
})
export class CarDetailComponent implements OnInit {
  defaultImagePath="assets/images/default.png"
  localhostImagePath="http://localhost:5197/Uploads/Images/";
  carDetail:CarDetailDto={carId:0,brandName:"",colorName:"",dailyPrice:0,images:[]}
  constructor(private carDetailService:CarDetailService,
    private activatedRoute:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetail(params["carId"])
      }
    })
  }

  getCarDetail(carId:number){
    this.carDetailService.getCarDetail(carId).subscribe(response=>{
      this.carDetail=response.data
      console.log(response.data)
    })
  }

  setCarouselItemActive(index:number,item:number){
    if(index==item){
      return "carousel-item active"
    }else{
      return "carousel-item"
    }
  }
  setImage(imagePath:string){
    return this.localhostImagePath+imagePath
  }
}
