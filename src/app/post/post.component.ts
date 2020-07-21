import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  public posts = []; 
  public post:string; 
  public search:string;
  public searchResults = [];

  /**
   * search a post
   */
  public searchPost()
  {
    let result = this.posts.filter((x) => x.includes(this.search));
    if(result.length > 0)
    {
      this.searchResults.push(result);
    }
    this.search = '';
  }

  /**
   * Add post to
   */
  public addToList() { 
      if (this.post == '') { 
      } 
      else { 
          this.posts.push(this.post); 
          this.post = ''; 
      } 
  } 

  /**
   * deletes a post
   * 
   * @param index 
   */
  public deletePost(index) { 
      this.posts.splice(index, 1); 
  } 

}
