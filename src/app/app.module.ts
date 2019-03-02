import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { MatComponentsModule } from './mat-components.module';

@NgModule({
	declarations: [ AppComponent, EditCourseComponent ],
	entryComponents: [ EditCourseComponent ],
	imports: [ BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule, MatComponentsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
