import  { CanActivate , ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import  { Observable } from "rxjs/Rx";

export class authGuard implements CanActivate{
    
    canActivate(route : ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
        if(localStorage.getItem("username")){
            return true;
        }
    }
}