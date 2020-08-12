import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  imports: [
    // Angular reactive forms
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
  ],
  exports: [
    // Angular reactive forms
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
  ],
  providers: [],
  declarations: [HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
