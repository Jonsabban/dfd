import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dfd';

  private http: HttpClient;
  public joke: any;

  public fizzBuzzArray: any[] = []
  public toggleFizzBuzz: boolean = false;
  public reverseText: string = "";
  public reversedText: string = "";
  public toggleJoke: boolean = false;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public fizzBuzz() {
    this.fizzBuzzArray = [];
    this.toggleFizzBuzz = !this.toggleFizzBuzz;
    for (let index = 1; index <= 100; index++) {
      if (index % 3 === 0 && index % 5 === 0 ) {
        this.fizzBuzzArray.push("FizzBuzz");
      } else if (index % 3 === 0) {
        this.fizzBuzzArray.push("Fizz");
      } else if (index % 5 === 0) {
        this.fizzBuzzArray.push("Buzz");
      } else {
        this.fizzBuzzArray.push(index);
      }
    }
  }

  public reverse() {
    this.reversedText = this.reverseText.split("").reverse().join("");
  }

  public async getJoke() {    
    this.joke = await this.http.get("https://official-joke-api.appspot.com/random_joke").toPromise().then((data) => data )
    console.log("ey", this.joke)
  }
}
