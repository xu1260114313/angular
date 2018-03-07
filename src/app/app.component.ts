import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor(){
    this.articles = [
      new Article("Angular4","http://angular.io",11),
      new Article("爱奇艺","http://www.iqiyi.com",20),
      new Article("百度","http://www.baidu.com",12)
    ];
  }

  addArticle(title:HTMLInputElement,link:HTMLInputElement):boolean{
    console.log(`title:${title.value}；link:${link.value}`);
    if(title.value != '' && link.value != ''){ //判断title和link输入框中有内容
      this.articles.unshift(new Article(title.value,link.value,0));
    };
    title.value = '';
    link.value = '';
    return false;
  }

}
