import { Component, OnInit } from '@angular/core';
import { MiscelaneaService } from 'src/app/core/services/miscelanea.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { defaultData, email } from 'src/app/core/utils/forms';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  results = [];
  cities = [];
  form: FormGroup;
  showAlert = false;
  typeAlert: string;
  message: string;
  loading = false;
  constructor(
    private miscelaneaService: MiscelaneaService,
    private userService: UserService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: defaultData(),
      email: email(),
      state: defaultData(),
      city: defaultData(),
    });

    this.loading = true;

    this.miscelaneaService.getDepartament().subscribe(
      res => ((this.results = res), (this.loading = false)),
      err => (this.loading = false),
    );
  }

  changeSelection($e, value): void {
    const selectedDepartament: any = this.results.find(
      departament => value === departament.name,
    );

    this.cities = selectedDepartament.cities;
  }

  send(): void {
    this.loading = true;
    this.userService.signup(this.form.value).subscribe(
      () => {
        this.showAlertNow('Creado con éxito', 'success');
        this.loading = false;
      },
      err => (
        this.showAlertNow('Ha ocurrido un error', 'danger'),
        (this.loading = false)
      ),
    );
  }

  showAlertNow(message: string, type: string) {
    this.message = message;
    this.showAlert = true;
    this.typeAlert = type;

    setTimeout(() => {
      this.message = '';
      this.showAlert = false;
      this.typeAlert = '';
    }, 4000);
  }
}
