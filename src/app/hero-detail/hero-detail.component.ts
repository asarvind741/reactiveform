import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { states } from '../models/data-models';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  /* heroForm = new FormGroup ({
    name: new FormControl(),
    password: new FormControl()
  }); */

  heroForm: FormGroup;
  states = states;
  user:any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4),
      Validators.maxLength(10)]],
      email: [null, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required]
    });

  }

  onSubmitForm(){
    if(this.heroForm.valid){
      this.user = this.heroForm.value;
      console.log(this.user);
    }
  }

  get email() {
    return this.heroForm.get('email');
  }

  get name(){
    return this.heroForm.get('name');
  }

  get street(){
    return this.heroForm.get('street');
  }

  get city(){
    return this.heroForm.get('city');
  }

  get state(){
    return this.heroForm.get('state');
  }
}
