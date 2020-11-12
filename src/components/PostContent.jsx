import UserInfo from './UserInfo';
import PostDate from './PostDate';

const PostContent = (props) => {
    return (
        <article className="card mb-3" key={props.chirp.user.id}>
            <div className="card-header p-0">
                <UserInfo user={props.chirp.user} />
            </div>
            <div className="card-body p-2">
                <p className="card-text" id="chirper-text">{props.chirp.post.content}</p>
                <PostDate date={props.chirp.post.date} />
            </div>
        </article>
    )
}

export default PostContent;