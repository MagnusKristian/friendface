import image from "../../Images/404img.JPG";
const NoPage = () => {

  return (
    <>
      <h1>404</h1>
      <img src={image} alt="404" style={{width:"50vw"}}/>
      <p>Sorry, no page here, you might want to go elsewhere...   </p>
    </>
  );
};

export default NoPage;