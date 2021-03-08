import React, { Component } from 'react';
import PostItem from './PostItem';
import $ from 'jquery'; 

class ListPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            currentPage: 1,
            todosPerPage: 7,
            upperPageBound: 3,
            lowerPageBound: 0,
            isPrevBtnActive: 'disabled',
            isNextBtnActive: '',
            pageBound: 3
        };
        this.handleClick = this.handleClick.bind(this);
        this.btnDecrementClick = this.btnDecrementClick.bind(this);
        this.btnIncrementClick = this.btnIncrementClick.bind(this);
        this.btnNextClick = this.btnNextClick.bind(this);
        this.btnPrevClick = this.btnPrevClick.bind(this);
        // this.componentDidMount = this.componentDidMount.bind(this);
        this.setPrevAndNextBtnClass = this.setPrevAndNextBtnClass.bind(this);
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            todos: nextProps.listDataPost
        });
    }
    
    

    componentDidUpdate() {
        $("ul li.active").removeClass('active');
        $('ul li#'+this.state.currentPage).addClass('active');
    }
    handleClick(event) {
        let listid = Number(event.target.id);
        this.setState({
        currentPage: listid
        });
        $("ul li.active").removeClass('active');
        $('ul li#'+listid).addClass('active');
        this.setPrevAndNextBtnClass(listid);
    }
    setPrevAndNextBtnClass(listid) {
        let totalPage = Math.ceil(this.state.todos.length / this.state.todosPerPage);
        this.setState({isNextBtnActive: 'disabled'});
        this.setState({isPrevBtnActive: 'disabled'});
        if(totalPage === listid && totalPage > 1){
            this.setState({isPrevBtnActive: ''});
        }
        else if(listid === 1 && totalPage > 1){
            this.setState({isNextBtnActive: ''});
        }
        else if(totalPage > 1){
            this.setState({isNextBtnActive: ''});
            this.setState({isPrevBtnActive: ''});
        }
    }
    btnIncrementClick() {
        this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
        this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
        let listid = this.state.upperPageBound + 1;
        this.setState({ currentPage: listid});
        this.setPrevAndNextBtnClass(listid);
    }
    btnDecrementClick() {
        this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
        this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
        let listid = this.state.upperPageBound - this.state.pageBound;
        this.setState({ currentPage: listid});
        this.setPrevAndNextBtnClass(listid);
    }
    btnPrevClick() {
        if((this.state.currentPage -1)%this.state.pageBound === 0 ){
            this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
            this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
        }
        let listid = this.state.currentPage - 1;
        this.setState({ currentPage : listid});
        this.setPrevAndNextBtnClass(listid);
    }
    btnNextClick() {
        if((this.state.currentPage +1) > this.state.upperPageBound ){
            this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
            this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
        }
        let listid = this.state.currentPage + 1;
        this.setState({ currentPage : listid});
        this.setPrevAndNextBtnClass(listid);
    }
    
    render() {
        const { todos, currentPage, todosPerPage,upperPageBound,lowerPageBound,isPrevBtnActive,isNextBtnActive } = this.state;
        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

        //render data
        const renderTodos = currentTodos.map((value, key)=>{
            return(
                <PostItem 
                    key={key}
                    tinId={value.id}
                    title={value.title}
                    point={value.point}
                    author={value.author}
                    time={value.time}
                    link={value.link}
                    commentNumber={value.commentNumber}
                />
            )
        })
        //end render data

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
          pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            if(number === 1 && currentPage === 1){
                return(
                    <li key={number} className='page-item active' id={number}><a href="#" className="page-link" id={number} onClick={this.handleClick}>{number}</a></li>
                )
            }
            else if((number < upperPageBound + 1) && number > lowerPageBound){
                return(
                    <li className="page-item" key={number} id={number}><a href="#" className="page-link" id={number} onClick={this.handleClick}>{number}</a></li>
                )
            }
        });
        let pageIncrementBtn = null;
        if(pageNumbers.length > upperPageBound){
            pageIncrementBtn = <li className="page-item"><a href="#" className="page-link" onClick={this.btnIncrementClick}> &hellip; </a></li>
        }
        let pageDecrementBtn = null;
        if(lowerPageBound >= 1){
            pageDecrementBtn = <li className="page-item"><a href="#" className="page-link" onClick={this.btnDecrementClick}> &hellip; </a></li>
        }
        let renderPrevBtn = null;
        if(isPrevBtnActive === 'disabled') {
            renderPrevBtn = <li className={isPrevBtnActive + " page-item"}><span className="page-link" id="btnPrev"> Prev </span></li>
        }
        else{
            renderPrevBtn = <li className={isPrevBtnActive +" page-item" }><a href="#" className="page-link" id="btnPrev" onClick={this.btnPrevClick}> Prev </a></li>
        }
        let renderNextBtn = null;
        if(isNextBtnActive === 'disabled') {
            renderNextBtn = <li className={isNextBtnActive + " page-item"}><span id="btnNext" className="page-link"> Next </span></li>
        }
        else{
            renderNextBtn = <li className={isNextBtnActive + " page-item"}><a href="#" className="page-link" id="btnNext" onClick={this.btnNextClick}> Next </a></li>
        }

        return (
            <div className="list-post pt-2">
                <div className="container">
                    <div className="row">
                        {renderTodos}
                    </div>
                    <div className="row mt-3">
                        <div className="col-sm-12 ">
                            <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center">
                                
                                {renderPrevBtn}
                                {pageDecrementBtn}
                                {renderPageNumbers}
                                {pageIncrementBtn}
                                {renderNextBtn}
                            </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ListPost;