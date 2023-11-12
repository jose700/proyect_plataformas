import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const sesionG = (): boolean =>{
    const router = inject(Router)
    if (localStorage.getItem('tokens')) {
      return true;
    } else {
      router.navigate(['/home']);
      return false;
    }
}