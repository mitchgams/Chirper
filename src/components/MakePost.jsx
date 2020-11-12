import { Component } from "react";
import Posts from './Posts';
import React from 'react';

class MakePost extends Component {

    handlePost() {
        let postName = document.getElementById("post-name").value;
        if(postName === "") postName = "Anonymous";
        let postContent = document.getElementById("chirp-content").value;
        let date = new Date();
        let dateFormat = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
        
        if(postContent === "") {
            alert("Please let us know what's on your mind to continue.");
        } else {
           Posts.unshift({user: {id: Math.floor(Math.random() * 1000000), name: postName, avatarUrl: 'https://photos.angel.co/startups/i/7321522-2f2d972bf19df701f2510aef7213264c-medium_jpg.jpg?buster=1574051920'}, post: {content: postContent, date: dateFormat}});
        }
    }

    render() {
        return (
            <React.Fragment>
            <div className="card mb-3 bg-light">
                <div className="row no-gutters">
                    <div className="col-md-2 d-none d-md-block">
                        <img src="https://photos.angel.co/startups/i/7321522-2f2d972bf19df701f2510aef7213264c-medium_jpg.jpg?buster=1574051920" width="150" className="card-img" alt="Avatar" />
                    </div>
                    <div className="col-md-10 col-sm-12">
                        <div className="card-body">
                            <h5 className="card-title">What's on your mind?</h5>
                            <div className="row">
                                <div className="col-xl-1 col-md-2">
                                    <label htmlFor="postname">Name:</label>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" className="form-control" id="post-name" placeholder="Anonymous" />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-sm-12 col-md-8">
                                    <textarea className="form-control" id="chirp-content" rows="1" placeholder="What's up?"></textarea>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <input type="submit" value="Chirp!" onClick={(e) => this.handlePost()} className="btn btn-dark better-font" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default MakePost;