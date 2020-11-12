import PostContent from './PostContent';
import Posts from './Posts';
const { Component } = require("react");

class Chirps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postCount: Posts.length,
            needRefresh: false
        }
    }

    listPosts(posts) {
        let list = posts.map((chirp) => <PostContent chirp={chirp} />);
        return list;
    }

    render() {
        setInterval(() => {
            if(this.state.postCount < Posts.length) {
                this.setState({postCount: Posts.length});
            }
        }, 500);
        return this.listPosts(Posts);
    }
}
export default Chirps;