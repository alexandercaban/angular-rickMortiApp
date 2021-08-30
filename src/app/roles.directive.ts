import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRoles]'
})
export class RolesDirective implements OnInit{
  private permissions = [];

  constructor(private templateRef : TemplateRef<any>, private viewContainer : ViewContainerRef) { }
  
  ngOnInit():void{}

  @Input()
  set appRoles(val: Array<string>){
    this.permissions = val;
    this.updateView();
  }

  private updateView(): void{
    this.viewContainer.clear();
    if(this.checkPermission()){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  private checkPermission(): boolean {
    let hasPermission = false;
      for(const checkPermission of this.permissions){
        hasPermission = true;
        break;
      }
    return hasPermission;
  }

}
