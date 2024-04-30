import { Component } from '@angular/core';

interface menuItem{
  name:string,
  route:string
}

@Component({
  selector: 'map-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})

export class SideMenuComponent {
  public menuItems:menuItem[]=[
    {route:'/maps/fullscreen',name:'Full-Screen'},
    {route:'/maps/zoomrange',name:'Zoom-Range'},
    {route:'/maps/markers',name:'Markes'},
    {route:'/maps/properties',name:'Houses'},
  ]
}
