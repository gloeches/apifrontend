import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { Api} from '../../core/services/api';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-api-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './api-form.html',
  styleUrl: './api-form.scss',
})
export class ApiForm {
  private fb = inject(FormBuilder);
  private apiService = inject(Api);
  public apiResponse = signal<any | undefined>(undefined);

  form = this.fb.group({
    value: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
  });

  onSubmit() {
    if (this.form.valid) {
      const value = parseInt(this.form.value.value!, 10);
      this.apiService.getData(value).subscribe(response => {
        console.log('API Response:', response);
        // Handle the response
         this.apiResponse.set(response);
      });
    }
  }
}
