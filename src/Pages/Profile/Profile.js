const Profile = () => {
  return (
    <>
      <h1>Profile</h1>
      <div className="container bootstrap-snippet header-container">
    <div className="bg-white">
      <div className="container py-5">
        <div className="media col-md-10 col-lg-8 col-xl-7 p-0 my-4 mx-auto">
          <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="pic" className="d-block ui-w-100 rounded-circle"/>
          <div className="media-body ml-5">
            <h4 className="font-weight-bold mb-4">John Doe</h4>
            <div className="text-muted mb-4">
              Lorem ipsum dolor sit amet, nibh suavitate qualisque ut nam. Ad harum primis electram duo, porro principes ei has.
            </div>
            <a href="#" className="d-inline-block text-dark">
              <strong>234</strong>
              <span className="text-muted">followers</span>
            </a>
            <a href="#" className="d-inline-block text-dark ml-3">
              <strong>111</strong>
              <span className="text-muted">following</span>
            </a>
          </div>
        </div>
      </div>
      <hr className="m-0"/>
      <ul className="nav nav-tabs tabs-alt justify-content-center">
        <li className="nav-item">
          <a className="nav-link py-4 active" href="#">Posts</a>
        </li>
        <li className="nav-item">
          <a className="nav-link py-4" href="#">Likes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link py-4" href="#">Followers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link py-4" href="#">Following</a>
        </li>
      </ul>
    </div>
</div>
    </>
  );
};

export default Profile;