import React, { Component } from 'react';
import {DataPost} from './firebaseConnect';

class PostDetail extends Component {
    constructor(props) {
        super(props);
        this.state={
          dataFirebase: []
        }
    }
    componentWillMount() {
        DataPost.on('value', (notes)=>{
          var arrayData = [];
          notes.forEach(element =>{
            const id = element.key;
            const title = element.val().title;
            const point = element.val().point;
            const author = element.val().author;
            const time = element.val().time;
            const link = element.val().link;
            const commentNumber = element.val().commentNumber;
    
    
            var arrayComment = [];
            const commentInfo = element.val().commentInfo;
            Object.values(commentInfo).forEach(wallpapper => {
              const commentName = wallpapper.commentName;
              const commentImage = wallpapper.commentImage;
              const commentDescription = wallpapper.commentDescription;
    
              arrayComment.push({
                commentName: commentName,
                commentImage: commentImage,
                commentDescription: commentDescription
              })
    
            })
    
            const commentInfoData = arrayComment;
                  console.log('Hello');      
            arrayData.push({
              id: id,
              title: title,
              point: point,
              author: author,
              time: time,
              link: link,
              commentNumber: commentNumber,
              commentInfoData: commentInfoData
            })
          })
          this.setState({
            dataFirebase: arrayData
          });
        })
    }
    showTime = (months) => {
        if(parseInt(months) < 12){
            return months + " months ago";
        }
        else if(parseInt(months) >= 12){
            var dur1 = Math.floor(months/12)
            var dur2 = (months/12)-dur1
            var dur3 = Math.floor(dur2*12)
            if(dur3 === 0){
                return dur1+" years ago";
            }
            else{
                return dur1+" years "+dur3+" months ago";
            }
            
        }
            
    }

    render() {
        console.log(this.state.dataFirebase);
        var countComment = 0;
        let listComment = this.state.dataFirebase.map((currentObj) => {
            if(currentObj.id === this.props.match.params.id){
                return currentObj.commentInfoData.map((innerArray,i) =>{
                    countComment++;
                    return(
                        <li key={i} className="d-flex justify-content-between mb-3">
                            <a href="/user" className="comment-avatar">
                                <img src={innerArray.commentImage}  alt="img avatar" className="img-fluid" />
                            </a>
                            <div className="comment-info">
                                <a href="/user" className="comment-name">
                                    <span>{innerArray.commentName}</span>
                                </a>
                                <p className="description">
                                    {innerArray.commentDescription}
                                </p>
                            </div>
                        </li>
                    )
                })
            }
            
        });
        
        return (
            <div className="post-detail mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="jumbotron">
                                {
                                    this.state.dataFirebase.map((value, key)=>{
                                        if(value.id === this.props.match.params.id){
                                            return(
                                                <div key={key} className="col-sm-12"> 
                                                    <h1 className="display-4 text-center title-post mb-4">{value.title}</h1>
                                                    <div className="point row">
                                                        <p className="col-4 col-sm-2">
                                                            <i className="fa fa-book mr-2" aria-hidden="true"></i>
                                                            <label>Point: </label> 
                                                        </p>
                                                        <p className="col-8 col-sm-10">
                                                            <span>{value.point} points</span>
                                                        </p>   
                                                    </div>
                                                    <div className="author row">
                                                        <p className="col-4 col-sm-2">
                                                            <i className="fa fa-user-o mr-2" aria-hidden="true"></i>
                                                            <label>Author: </label> 
                                                        </p>
                                                        <p className="col-8 col-sm-10">
                                                            <span>{value.author}</span> 
                                                        </p> 
                                                    </div>
                                                    <div className="time row">
                                                        <p className="col-4 col-sm-2">
                                                            <i className="fa fa-clock-o mr-2" aria-hidden="true"></i>
                                                            <label>Time: </label> 
                                                        </p>
                                                        <p className="col-8 col-sm-10">
                                                            <span>{this.showTime(value.time)}</span> 
                                                        </p> 
                                                    </div>
                                                    <div className="link row">
                                                        <p className="col-4 col-sm-2">
                                                            <i className="fa fa-link mr-2" aria-hidden="true"></i>
                                                            <label>Link: </label>
                                                        </p>
                                                        <p className="col-8 col-sm-10">
                                                            <a href={value.link}>
                                                                <span>{value.link}</span> 
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            )
                                        }
                                   })
                                }
                                    
                                <div className="comment col-sm-12">
                                    <div className="comment-title row">
                                        <p className="col-5 col-sm-2">
                                            <i className="fa fa-comments-o mr-2" aria-hidden="true"></i>
                                            <label>Comments: </label>
                                        </p>
                                        <p className="col-7 col-sm-10">
                                        <span>{countComment} comments</span> 
                                    </p>
                                    </div>
                                    <ul>
                                        {listComment} 
                                        
                                    </ul>
                                </div>
                                           
                                  
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default PostDetail;