import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  localStorage: Storage;

  constructor() {
    this.localStorage = window.localStorage;
  }

  get(key: string): any {
    if (!this.isLocalStorageSupported) {
      return null;
    }

    const item = this.localStorage.getItem(key)

    if (item === null) {
      return null
    }

    return JSON.parse(item);
  }

  set(key: string, value: any): boolean {
    if (this.isLocalStorageSupported) {
      this.localStorage.setItem(key, JSON.stringify(value));

      return true;
    }

    return false;
  }

  remove(key: string): boolean {
    if (this.isLocalStorageSupported) {
      this.localStorage.removeItem(key);

      return true;
    }

    return false;
  }

  getKeys() {
    if (!this.isLocalStorageSupported) {
      return null;
    }

    return Object.keys(this.localStorage);
  }

  get isLocalStorageSupported(): boolean {
    return !!this.localStorage
  }
}
