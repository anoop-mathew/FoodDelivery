import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  signupForm: FormGroup;

  constructor(
    private router: Router,
    public fb: FormBuilder,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.mainForm();
  }

  mainForm() {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      moblie: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
        ]
      ],
      password: ['', [Validators.required]]
    });
  }
}
