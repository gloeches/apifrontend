import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize } from 'rxjs';

// Material Module Imports
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

import { Api } from '../../core/services/api';

@Component({
  selector: 'app-api-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './api-form.html',
  styleUrl: './api-form.scss',
})
export class ApiFormComponent {
  private fb = inject(FormBuilder);
  private apiService = inject(Api);

  public isLoading = signal(false);
  public apiResponse = signal<any | undefined>(undefined);

  form = this.fb.group({
    value: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
  });

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading.set(true);
    this.apiResponse.set(undefined); // Clear previous results
    
    const value = parseInt(this.form.value.value!, 10);
    this.apiService.getData(value).pipe(
      finalize(() => this.isLoading.set(false))
    ).subscribe(response => {
      this.apiResponse.set(response);
    });
  }
}