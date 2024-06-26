import { Injectable } from '@nestjs/common';

@Injectable()
export class InMemoryStorage<T> {
  private readonly store: T[];

  constructor() {
    this.store = [];
  }

  set(data: T) {
    this.store.push(data);
  }

  get(index: number): T {
    return this.store[index];
  }

  getAll(): T[] {
    const copy = [];
    this.store.forEach((v: T) => {
      copy.push(v);
    });
    return copy;
  }
}
