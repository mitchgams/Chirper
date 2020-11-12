import UserInfo from './UserInfo';
import Posts from './Posts';
import PostDate from './PostDate';
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
        let list = posts.map((chirp) => {
            return (
                <article className="card mb-3" key={chirp.user.id}>
                    <div className="card-header p-0">
                        <UserInfo user={chirp.user} />
                    </div>
                    <div className="card-body p-2">
                        <p className="card-text" id="chirper-text">{chirp.post.content}</p>
                        <PostDate date={chirp.post.date} />
                    </div>
              </article>
            );
        });
        return list;
    }

    render() {
        setInterval(() => {
            if(this.state.postCount < Posts.length) {
                this.setState({postCount: PostDate.length});
            }
        }, 500);
        return this.listPosts(Posts);
    }
}
export default Chirps;