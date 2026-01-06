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
import { ApiResponse } from '../../core/models/api-response';

@Component({
  selector: 'app-cube-form',
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
  templateUrl: './cube-form.html',
  styleUrl: './cube-form.scss',
})
export class CubeFormComponent {
  private fb = inject(FormBuilder);
  private apiService = inject(Api);

  public isLoading = signal(false);
  public apiResponse = signal<ApiResponse | undefined>(undefined);
  public error = signal<string | undefined>(undefined);

  form = this.fb.group({
    value: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
  });

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading.set(true);
    this.apiResponse.set(undefined); // Clear previous results
    this.error.set(undefined); // Clear previous errors
    
    const value = parseInt(this.form.value.value!, 10);
    this.apiService.getCubeData(value).pipe(
      finalize(() => this.isLoading.set(false))
    ).subscribe({
      next: (response) => {
        this.apiResponse.set(response);
      },
      error: (err) => {
        this.error.set('An error occurred while fetching data.');
        console.error('API Error:', err);
      }
    });
  }
}