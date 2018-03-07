import { Component, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  inputs: ['article'],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host:{
    class: "row"
  }
})
export class ArticleComponent implements OnInit {
  article: Article;
  ngOnInit() {
  }
  voteUp():boolean{
    this.article.votes ++;
    return false;
  }

  voteDown():boolean{
    this.article.votes --;
    return false;
  }
}
