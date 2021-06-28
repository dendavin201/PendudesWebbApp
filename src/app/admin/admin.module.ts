import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material';
import { ImageComponent } from './image/image.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { TentangComponent } from './tentang/tentang.component';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'product',
        component:ProductComponent
      },
      {
        path:'tentang',
        component:TentangComponent
      },
      {
        path:'image',
        component:ImageComponent
      },
    ]
  }
]

@NgModule({
  declarations: [AdminComponent, DashboardComponent, ImageComponent, ProductComponent, ProductDetailComponent, TentangComponent, FileUploaderComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    FormsModule
  ]
})
export class AdminModule { }
