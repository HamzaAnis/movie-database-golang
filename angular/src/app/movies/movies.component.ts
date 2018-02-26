import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/map'


@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

    public movies: any;

    public constructor(private http: Http, private router: Router, private location: Location) {
        this.movies = [];
    }

    public ngOnInit() {
        this.location.subscribe(() => {
            this.refresh();
        });
        this.refresh();
    }

    private refresh() {
        this.http.get("http://localhost:12345/movies")
            .map(result => result.json())
            .subscribe(result => {
                this.movies = result;
            });
    }

    public search(event: any) {
        let url = "http://localhost:12345/movies";
        if(event.target.value) {
            url = "http://localhost:12345/search/" + event.target.value;
        }
        this.http.get(url)
            .map(result => result.json())
            .subscribe(result => {
                this.movies = result;
            });
    }

    public create() {
        this.router.navigate(["create"]);
    }

}
