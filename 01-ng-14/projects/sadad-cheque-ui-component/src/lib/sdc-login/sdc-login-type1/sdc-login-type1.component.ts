import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SdcButtonTypes } from '../../sdc-button/models/sdc-button-types';
import { SdcDataType } from '../../models/sdc-data-type';
import { SdcLoaderService } from '../../sdc-loader/sdc-loader.service';
import { SdcLoginService } from '../services/sdc-login.service';
import { first } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'sdc-login-type1',
  templateUrl: './sdc-login-type1.component.html',
  styleUrls: ['./sdc-login-type1.component.scss'],
  providers: [{ provide: FormBuilder, useClass: FormBuilder }],
})
export class LoginType1Component {
  @Input()
  public showKeepMe = true;

  @Input()
  public submitByDefault = true;

  @Input()
  showError: boolean = false;

  @Output()
  public enter = new EventEmitter<FormGroup>();

  @Output()
  public clear = new EventEmitter<void>();

  @Output()
  public loginError = new EventEmitter<any>();

  @Output()
  public loginSucces = new EventEmitter<void>();

  usernameTitle = 'نام کاربری';
  passwordTitle = 'گذر واژه';
  enterTitle = 'ورود';
  clearTitle = 'پاک کردن';
  keepMeTitle = 'من را به خاطر بسپار';
  SdcButtonTypes = SdcButtonTypes;
  formGroup!: FormGroup;
  SdcDataType = SdcDataType;

  constructor(
    public loginService: SdcLoginService<any>,
    private fb: FormBuilder,
    private loaderService: SdcLoaderService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.resetForm();
  }

  enterClicked() {
    this.enter.emit(this.formGroup);
  }

  clearClicked() {
    this.resetForm();
    this.clear.emit();
  }

  resetForm() {
    this.formGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      keepLoggedIn: [true],
    });
  }

  onSubmit() {
    if (!this.submitByDefault) {
      return;
    }

    this.checkErrors();

    this.loaderService.open();
    const userName = this.formGroup.controls['username'].value;
    const password = this.formGroup.controls['password'].value;

    this.loginService
      .login(userName, password)
      .pipe(first())
      .subscribe({
        next: () => {
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigate([returnUrl]);
          this.showError = false;
          this.loaderService.close();
          this.loginSucces.emit();
        },
        error: (error) => {
          this.showError = true;
          this.loaderService.close();
          this.loginError.emit(error);
        },
      });
  }

  private checkErrors() {
    this.formGroup.get('username')?.markAllAsTouched();
    this.formGroup.get('password')?.markAllAsTouched();
    this.formGroup.updateValueAndValidity();

    if (!this.formGroup.valid) {
      throw new Error('login form is invalid');
    }
  }
}
