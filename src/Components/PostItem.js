import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostItem extends Component {
    chuyenDoiURL = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();     
    
        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
    
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
    
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');
    
        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');
    
        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');
    
        // return
        return str;
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
        return (
            <div className="col-sm-12 mt-3 list-item">
                <Link to={"/post-detail/" + this.chuyenDoiURL(this.props.title) + "." + this.props.tinId + ".html"} className="title-post">
                    <h3>{this.props.title}</h3>
                </Link>
                <ul>
                    <li>{this.props.point + " points"}</li>
                    <li>{this.props.author}</li>
                    <li>{this.showTime(this.props.time)}</li>
                    <li>{this.props.commentNumber + " comments"}</li>
                    <li>{"("+ this.props.link+ ")"}</li>
                </ul>
            </div>
        );
    }
}

export default PostItem;