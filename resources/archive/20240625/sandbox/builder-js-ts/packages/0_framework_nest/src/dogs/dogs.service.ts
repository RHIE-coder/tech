import { Injectable } from '@nestjs/common';

@Injectable()
export class DogsService {
  greeting(name: string): string {
    return `Hello, my dog the name is ${name}`;
  }
}
