import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class FiltersService {
  static getPath(p, o) {
    const result = p.reduce(
      (xs, x) => (xs && typeof xs[x] !== "undefined" ? xs[x] : null),
      o
    );
    return result;
  }
}
