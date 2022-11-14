import React, { Component } from "react";
import Spinner from "./Spinner";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";



export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase()+ string.slice(1);
  }
  constructor(props) {
    super(props);
    console.log("hello");
    this.state = {
      articles: [],
      laoding: false,
      page: 1,
      totalResults: this.totalResults
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)}-"Newsmonkey"`
  }

  async updateNews() {
      this.props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      this.props.setProgress(30);
      let parsedData = await data.json();
      this.props.setProgress(70);

      console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loading: false,
        totalResults: parsedData.totalResults
      });
      this.props.setProgress(100);
    }
  
  async componentDidMount() {
    this.updateNews();
  }

//   handleNextClick = async () => {
//    this.setState({ page: this.state.page + 1});
   
    
//     this.updateNews();
//   };
//   handlePrevClick = async () => {
   
//     this.setState({
//  page: this.state.page - 1})
//     this.updateNews();
  
    
  // }
  
  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
     
      let data = await fetch(url);
      let parsedData = await data.json();

      console.log(parsedData);
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        page: this.state.page + 1,
       
        totalResults: parsedData.totalResults
      });
    
  };
  render() {
    return (
      <div>
      
        <h1 className="text-center">NewsMonkey - Top  {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        
        {this.state.loading && <Spinner/>}  
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
          {
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageurl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        </div>
        
        </InfiniteScroll>
        </div>
        /* <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            &rarr; Next
          </button>
        </div> */
      
    );
  }
}
