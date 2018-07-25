import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public bikes;

  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.getBikes();
  }

  getBikes(){
    this.crudService.getBikes().subscribe(
      data => { this.bikes = data},
      err => console.error(err),
      () => console.log('bikes loaded')
    );
  }

}
