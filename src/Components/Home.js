import React, { Component } from 'react';
import FilterSearch from './FilterSearch';
import ListPost from './ListPost';
import {DataPost} from './firebaseConnect';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
          dataFirebase: [],
          textSearch: '',
          sortType: this.props.sortPoint
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
    componentDidMount() {
      var result = [];
      this.state.dataFirebase.forEach((item) => {
        if(item.title.toLowerCase().includes(this.props.searchData.toLowerCase())){
            result.push(item);
        }
        else if(item.author.toLowerCase().includes(this.props.searchData.toLowerCase())){
          result.push(item);
        }
        else if(item.link.toLowerCase().includes(this.props.searchData.toLowerCase())){
          result.push(item);
        }
      })
      this.setState({
        dataFirebase: result
      });
    }
    


    
    
    
    render() {
        const {dataFirebase, sortType} = this.state;
        dataFirebase.sort((a,b)=>{
            if(sortType === 'pointAsc'){
                const isReserved = (sortType === 'pointAsc') ? 1 : -1;
                return isReserved * ( parseInt(a.point)  - parseInt(b.point));
            }
            else if(sortType === 'pointDesc'){
                const isReserved = (sortType === 'pointDesc') ? 1 : -1;
                return isReserved * ( parseInt(b.point)  - parseInt(a.point));
            }
        })


        return (
            <div>
                <FilterSearch/>
                <ListPost listDataPost={this.state.dataFirebase}/>
            </div>
        );
    }
}

export default Home;