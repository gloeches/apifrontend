import { ApplicationConfig, provideZoneChangeDetection, provideAppInitializer, inject } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { RuntimeConfigService } from './core/services/runtime-config-service';
import { lastValueFrom } from 'rxjs';

function initializeApp() {
  const configService = inject(RuntimeConfigService);
  const http = inject(HttpClient);
  return lastValueFrom(http.get('/config.json')).then(config => {
    configService.config = config;
  });
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    RuntimeConfigService,
    provideAppInitializer(initializeApp),
  ]
};
