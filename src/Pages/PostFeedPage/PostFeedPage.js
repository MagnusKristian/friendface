import "./PostFeedPageCss.css";
// import "./PFPCSS.css";

//https://www.bootdey.com/snippets/view/profile-timeline#html
//<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

const PostFeedPage = () => {
  return (
    <>
      {/* <h1>Post Feed Page: under construction...</h1> */}
      <div className="container">
    <div className="col-lg-8">
        <div className="panel profile-cover">
            <div className="profile-cover__img">
                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" />
                <h3 className="h3">Henry Foster</h3>
            </div>
            <div className="profile-cover__action bg--img" data-overlay="0.3">
                <button className="btn btn-rounded btn-info">
                    <i className="fa fa-plus"></i>
                    <span>Follow</span>
                </button>
                <button className="btn btn-rounded btn-info">
                    <i className="fa fa-comment"></i>
                    <span>Message</span>
                </button>
            </div>
            <div className="profile-cover__info">
                <ul className="nav">
                    <li><strong>26</strong>Projects</li>
                    <li><strong>33</strong>Followers</li>
                    <li><strong>136</strong>Following</li>
                </ul>
            </div>
        </div>
        <div className="panel">
            <div className="panel-heading">
                <h3 className="panel-title">Activity Feed</h3>
            </div>
            <div className="panel-content panel-activity">
                <form action="#" className="panel-activity__status">
                    <textarea name="user_activity" placeholder="Share what you've been up to..." className="form-control"></textarea>
                    <div className="actions">
                        <div className="btn-group">
                            <button type="button" className="btn-link" title="" data-toggle="tooltip" data-original-title="Post an Image">
                                <i className="fa fa-image"></i>
                            </button>
                            <button type="button" className="btn-link" title="" data-toggle="tooltip" data-original-title="Post an Video">
                                <i className="fa fa-video-camera"></i>
                            </button>
                            <button type="button" className="btn-link" title="" data-toggle="tooltip" data-original-title="Post an Idea">
                                <i className="fa fa-lightbulb-o"></i>
                            </button>
                            <button type="button" className="btn-link" title="" data-toggle="tooltip" data-original-title="Post an Question">
                                <i className="fa fa-question-circle-o"></i>
                            </button>
                        </div>
                        <button type="submit" className="btn btn-sm btn-rounded btn-info">
                            Post
                        </button>
                    </div>
                </form>
                <ul className="panel-activity__list">
                    <li>
                        <i className="activity__list__icon fa fa-question-circle-o"></i>
                        <div className="activity__list__header">
                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" />
                            <a href="#">John Doe</a> Posted the question: <a href="#">How can I change my annual reports for the better effect?</a>
                        </div>
                        <div className="activity__list__body entry-content">
                            <p>
                                <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipisicing elit. Voluptatibus ab a nostrum repudiandae dolorem ut quaerat veniam asperiores, rerum voluptatem magni dolores corporis!
                                <em>Molestiae commodi nesciunt a, repudiandae repellendus ea.</em>
                            </p>
                        </div>
                        <div className="activity__list__footer">
                            <a href="#"> <i className="fa fa-thumbs-up"></i>123</a>
                            <a href="#"> <i className="fa fa-comments"></i>23</a>
                            <span> <i className="fa fa-clock"></i>2 hours ago</span>
                        </div>
                    </li>
                    <li>
                        <i className="activity__list__icon fa fa-question-circle-o"></i>
                        <div className="activity__list__header">
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                            <a href="#">John Doe</a> Posted the question: <a href="#">How can I change my annual reports for the better effect?</a>
                        </div>
                        <div className="activity__list__body entry-content">
                            <blockquote>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ab a nostrum repudiandae dolorem ut quaerat veniam asperiores, rerum voluptatem magni dolores corporis! Molestiae commodi nesciunt a,
                                    repudiandae repellendus ea.
                                </p>
                            </blockquote>
                        </div>
                        <div className="activity__list__footer">
                            <a href="#"> <i className="fa fa-thumbs-up"></i>123</a>
                            <a href="#"> <i className="fa fa-comments"></i>23</a>
                            <span> <i className="fa fa-clock"></i>2 hours ago</span>
                        </div>
                    </li>
                    <li>
                        <i className="activity__list__icon fa fa-image"></i>
                        <div className="activity__list__header">
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                            <a href="#">John Doe</a> Uploaded 4 Image: <a href="#">Office Working Time</a>
                        </div>
                        <div className="activity__list__body entry-content">
                            <ul className="gallery">
                                <li>
                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                                </li>
                                <li>
                                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" />
                                </li>
                                <li>
                                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
                                </li>
                                <li>
                                    <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" />
                                </li>
                            </ul>
                        </div>
                        <div className="activity__list__footer">
                            <a href="#"> <i className="fa fa-thumbs-up"></i>123</a>
                            <a href="#"> <i className="fa fa-comments"></i>23</a>
                            <span> <i className="fa fa-clock"></i>2 hours ago</span>
                        </div>
                    </li>
                    <li>
                        <i className="activity__list__icon fa fa-question-circle-o"></i>
                        <div className="activity__list__header">
                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" />
                            <a href="#">John Doe</a> Posted the question: <a href="#">How can I change my annual reports for the better effect?</a>
                        </div>
                        <div className="activity__list__body entry-content">
                            <blockquote>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ab a nostrum repudiandae dolorem ut quaerat veniam asperiores, rerum voluptatem magni dolores corporis! Molestiae commodi nesciunt a,
                                    repudiandae repellendus ea.
                                </p>
                            </blockquote>
                        </div>
                        <div className="activity__list__footer">
                            <a href="#"> <i className="fa fa-thumbs-up"></i>123</a>
                            <a href="#"> <i className="fa fa-comments"></i>23</a>
                            <span> <i className="fa fa-clock"></i>2 hours ago</span>
                        </div>
                    </li>
                    <li>
                        <i className="activity__list__icon fa fa-lightbulb-o"></i>
                        <div className="activity__list__header">
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                            <a href="#">John Doe</a> bookmarked a page: <a href="#">Awesome Idea</a>
                        </div>
                        <div className="activity__list__footer">
                            <a href="#"> <i className="fa fa-thumbs-up"></i>123</a>
                            <a href="#"> <i className="fa fa-comments"></i>23</a>
                            <span> <i className="fa fa-clock"></i>2 hours ago</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
    </>
  );
};

export default PostFeedPage;