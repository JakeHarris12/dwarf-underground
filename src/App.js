import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import Ad from './Ad'
import Article from './Article'
import ArticleTitle from './ArticleTitle'
import Footer from './Footer'

class ClickBait extends Component {
  render(){
    return(
      <div>
        <div className="small-6 medium-3 columns other-article">
          <a href="#">
            <img src={this.props.pic} alt={this.props.alts} />
            <p>{this.props.title}</p>
          </a>
        </div>
      </div>
    );
  }
}

// class Comments extends Component {
//   render(){
//     return(
//       <li>{this.props.comment}</li>
//     );
//   }
// }

class CommentBox extends Component {

  constructor() {
      super()
      
      this.state = {
          comments: [],
      }
  }

  render() {
      return(
          <div>
              <form className="commentForm" onSubmit={(event) => {this.comment(event)}}>
                  <input type="text" name="comment" placeholder="Enter a comment" />
                  <button type="submit" onClick={(event) => {this.comment(event)}}>Comment</button>
              </form>
          </div>
      );
  }

  comment(event) {
    event.preventDefault()
    const f = event.target.closest('.commentForm')
    if(f.comment.value === ""){
      return
    }else{
        const copy = [...this.state.comments]
        copy.push(f.comment.value)
        this.setState({ comments: copy })
        console.log(this.state.comments)
    }
  }
}

class App extends Component {

  constructor() {
    super()
    
    this.state = {
      clickbait: [
        {title: 'Single Orcs in Indianapolis',
          pic: 'https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif',
          alts: 'orc'},
        {title: 'You won\'t believe what\'s under this mountain',
          pic: 'https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg',
          alts: 'mountain'},
        {title: 'Mine 20% more gold with One Weird Trick',
          pic: 'http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg',
          alts: 'gold'},
        {title: 'Surprise for Indiana Hobbits born before 1999',
          pic: 'http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg',
          alts: 'hobbit'},
      ],
    }
  }

  render() {
    return (
      <div className="App">
        <Header />

      <main className="expanded row">
        <div className="large-8 medium-12 columns article">
          <ArticleTitle />

          <Article />
          
          <div className="article-links">
            <a className="article-link" href="#">
              <i className="fa fa-comments-o"></i>
              <span className="article-link-text">Comments</span>
            </a>
            <a className="article-link" href="#">
              <i className="fa fa-share"></i>
              <span className="article-link-text">Share Post</span>
            </a>
          </div>
        </div>

        <Ad />

        <div className="comments">
          <CommentBox />

          {/* <ul>
            {CommentBox.state.comments.map(comments => <Comments comment={comments} />)}
          </ul> */}
        </div>

        <div className="small-12 columns other-articles">
          <h2>From around the Realm</h2>

          {this.state.clickbait.map(clickbait => 
              <ClickBait 
                title={clickbait.title} 
                pic={clickbait.pic} 
                alts={clickbait.alts} 
              />
            )
          }

        </div>
      </main>

      <Footer />
      
      </div>
    );
  }
}

export default App;
