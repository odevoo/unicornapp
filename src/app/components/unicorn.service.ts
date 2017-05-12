import { Injectable } from '@angular/core';

import { Unicorn } from './unicorn';
import { UNICORNS } from './unicorns';

@Injectable()
export class UnicornService {
  getUnicorns(): Promise<Unicorn[]> {
    return Promise.resolve(UNICORNS);
  }

  // See the "Take it slow" appendix
  getUnicornsSlowly(): Promise<Unicorn[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getUnicorns()), 2000);
    });
  }
}