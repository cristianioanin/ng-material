import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EditCourseComponent } from './edit-course/edit-course.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'ng-material';
	isChecked = true;
	colors = [ { id: 1, name: 'Red' }, { id: 2, name: 'Green' }, { id: 3, name: 'Blue' } ];
	preselectedColor = 2;
	minDate = new Date(2018, 12);
	maxDate = new Date(2019, 8);
	categories = [ { name: 'Beginner' }, { name: 'Intermediate' }, { name: 'Advanced' } ];
	progress = 0;
	timer;
	isLoading = false;

	constructor(private dialog: MatDialog) {
		this.timer = setInterval(() => {
			this.progress++;
			if (this.progress === 100) {
				clearInterval(this.timer);
			}
		}, 20);

		this.getCourses().subscribe(() => (this.isLoading = false));
	}

	onChange($event) {
		console.log($event);
	}

	selectCategory(category) {
		this.categories.filter((c) => c != category).forEach((c) => (c['selected'] = false));

		category.selected = !category.selected;
	}

	getCourses() {
		this.isLoading = true;
		return timer(3000);
	}

	openDialog() {
		this.dialog
			.open(EditCourseComponent, {
				data:
					{
						courseId: 1
					}
			})
			.afterClosed()
			.subscribe((result) => console.log(result));
	}
}
