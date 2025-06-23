import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; // ✅ Add this

import { AppComponent } from './app.component';
import { UserListComponent } from './app/components/user-list/user-list.component';

@NgModule({
  declarations: [AppComponent, UserListComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([]) // ✅ Add RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
