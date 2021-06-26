import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<ProductDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public api:ApiService
  ) { }

  ngOnInit(): void {
  }

  loading:boolean | undefined;
  saveData()
 {
   this.loading=true;
   if(this.data.id == undefined)
   {
    this.api.post('books',this.data).subscribe(result=>{
      this.dialogRef.close(this.data);
      this.loading=false;
    },error=>{
      alert('Tidak dapat menyimpan data!');
      this.loading=false;
    });
   }else{
     this.api.put('books/'+this.data.id,this.data).subscribe((result: any)=>{
       this.dialogRef.close(result);
       this.loading=false;
     },(error: any)=>{
      alert('Tidak dapat memperbarui data!');
      this.loading=false;
     })
   }
   
   
   
 }

}
