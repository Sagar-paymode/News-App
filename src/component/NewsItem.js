import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className=" my-3">
        <div className="card" style={{ width: "18rem" }}>
          <div  style = {{
            display : `flex`,
            justifyContent: `flex-end`,
            position: `absolute`,
            right: '0'
          }}  >
          <span
            class=" badge rounded-pill bg-danger"
            // style={{ left: "90%", zIndex: 1 }}
          >
            {source}
          </span>
          </div>
          <img
            src={
              imageurl
                ? imageurl
                : "https://techcrunch.com/wp-content/uploads/2022/09/07edb091bb329145ee3f3f01476adb40acc6457b.jpg?resize=1200,675"
            }
            className="card-img-top"
            alt="..."
            imageurl="https://cdn.24.co.za/files/Cms/General/d/1384/a04050b4b93b4341a9438c053014301e.jpg"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>

            <p className="card-text">{description}...</p>
            <p class="card-text">
              <small className="text-muted">
                By {author ? author : "unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
