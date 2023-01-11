import React, { Component } from "react";
import { searchFirstName } from "./SearchHelper";
import { useEffect } from "react";

class Search extends React.Component {
  state = {
    data: [],
    per: 100,
    page: 1,
    total_pages: null,
    results: [{"gender":"male","name":{"title":"Mr","first":"Mason","last":"Walker"},"location":{"street":{"number":7436,"name":"Woodland St"},"city":"Los Lunas","state":"South Carolina","country":"United States","postcode":28568,"coordinates":{"latitude":"16.1075","longitude":"-111.5074"},"timezone":{"offset":"+11:00","description":"Magadan, Solomon Islands, New Caledonia"}},"email":"mason.walker@example.com","login":{"uuid":"aefbf8c3-279a-4998-81ff-278dbb702758","username":"yellowzebra256","password":"aaron","salt":"lDJNMMIa","md5":"825b151513e0a1b4784e34fdb34be515","sha1":"85305bc0e9574b4f454d2501c8a9fba54967404d","sha256":"b41a7aa58b9327a7fba1c8569c169f9ffbbb9dedf549609ed5c7570efbb33502"},"dob":{"date":"1970-04-11T07:16:23.265Z","age":52},"registered":{"date":"2013-03-15T11:26:37.873Z","age":9},"phone":"(774) 214-3506","cell":"(550) 936-2913","id":{"name":"SSN","value":"749-62-6267"},"picture":{"large":"https://randomuser.me/api/portraits/men/83.jpg","medium":"https://randomuser.me/api/portraits/med/men/83.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/83.jpg"},"nat":"US"},],
    searchWasMade: false
  };

  // useEffect(() => {
  //   loadDataOnlyOnce();
  // }, []);

  uppercase = word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  loadData = () => {
    console.log("loading data");
    const { per, page, data } = this.state;
    const endpoint = `https://randomuser.me/api/?nat=us&results=${per}&page=${page}`;
    fetch(endpoint)
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: [...data, ...json.results],
          scrolling: false,
          total_pages: json.info.results
        });
      });
    console.log("loadData: "+JSON.stringify(this.state.data));

  };

  updateDataTemp(){
    this.state.searchWasMade = true;
    console.log("searchWasMade was set to true.");

    console.log("data: : "+JSON.stringify(this.state.data));
    // this.state.data = "empty";
    // console.log("empty data?: "+JSON.stringify(this.state.data));

    this.state.results = this.state.data;
    console.log("Results data: "+JSON.stringify(this.state.results));
    this.render();
    // this.loadData();

  }

  search(searchWord, data) {
    console.log("SEARCHING");

    searchFirstName(searchWord, data);
    this.updateDataTemp();
    this.render();
  }

  handleSubmit = (e) => { 
    e.preventDefault();
    alert('You searched for: ' + e.target[0].value);
    console.log(e.target[0].value);
    console.log(e.target.SearchInput.value+"...");

    console.log("---Searchword? = "+`${e.target[0].value}`+"---");
    this.search(e.target[0].value,this.state.data);
  }


  // loadData2 = () => {
  //   console.log("loading data2");
  //   const { per, page, data } = this.state;
  //   const endpoint = `https://randomuser.me/api/?nat=us&results=${per}&page=${page}`;
  //   fetch(endpoint)
  //     .then(response => response.json())
  //     .then(json => {
  //       this.setState({
  //         data: [json.results],
  //         scrolling: false,
  //         total_pages: json.info.results
  //       });
  //     });
  //   console.log(this.state.data);

  // };

  // loadMore = () => {
  //   this.setState(
  //     prevState => ({
  //       page: prevState.page + 1,
  //       scrolling: true
  //     }),
  //   );
  //   this.loadData();
  // };

  

  componentDidMount() {
    this.loadData();
  }

  clearData= () => {
    console.log("clear data");
    console.log(this.state.data);

    this.setState(prevState => ({
      data: {},
      per: 9,
      page: 1,
      total_pages: null
      }));
      this.loadData();
    console.log(this.state.data);

     };

  // prevState => ({
  //   page: prevState.page + 1,
  //   scrolling: true
  // }),

  // clearData= () => {
  //   this.setState({
  //     data: [{}]
  //   });
  //   console.log("clear data/state");
  //   this.loadData();
  // };

  render() {
    let searchMade = this.state.searchWasMade;
    let tempUserData = [{"gender":"male","name":{"title":"Mr","first":"Mason","last":"Walker"},"location":{"street":{"number":7436,"name":"Woodland St"},"city":"Los Lunas","state":"South Carolina","country":"United States","postcode":28568,"coordinates":{"latitude":"16.1075","longitude":"-111.5074"},"timezone":{"offset":"+11:00","description":"Magadan, Solomon Islands, New Caledonia"}},"email":"mason.walker@example.com","login":{"uuid":"aefbf8c3-279a-4998-81ff-278dbb702758","username":"yellowzebra256","password":"aaron","salt":"lDJNMMIa","md5":"825b151513e0a1b4784e34fdb34be515","sha1":"85305bc0e9574b4f454d2501c8a9fba54967404d","sha256":"b41a7aa58b9327a7fba1c8569c169f9ffbbb9dedf549609ed5c7570efbb33502"},"dob":{"date":"1970-04-11T07:16:23.265Z","age":52},"registered":{"date":"2013-03-15T11:26:37.873Z","age":9},"phone":"(774) 214-3506","cell":"(550) 936-2913","id":{"name":"SSN","value":"749-62-6267"},"picture":{"large":"https://randomuser.me/api/portraits/men/83.jpg","medium":"https://randomuser.me/api/portraits/med/men/83.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/83.jpg"},"nat":"US"},];
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
            <label >Search</label>
            <div className="SearchDiv" style={{fontSize:"large"}}> </div>
            <input type="text" id="SearchInput" name="Search" placeholder="Enter Text here" />
            <button>Search</button>
          </form> 

          <input type="text" id="fname" name="fname"/>
          <button onClick={e => {
            console.log("set state");
            // this.clearData();
            // this.clearData();
            // this.setState();
            // this.setState({data: [{}]});

            // this.clearData();
            this.state.data = [];
            this.loadData();

            // this.render();
          }}>Search</button>
          <button onClick={e => {
            console.log("UPDATE DATA BTN CLICKED");
            this.updateDataTemp();
          }}>UPDATE DATA</button>

        <div >
          <ul>
          { searchMade ?
          this.state.data.map(data => (
            <li key={data.id.value} style={{padding:"1em"}}>
              <div key={data.id.value}>

                <div style={{  alignItems: "center",display:"flex", borderRadius:"10px", border:"1px solid black",justifyContent: "space-between"}}>
                  <div >
                    <img
                      src={data.picture.large}
                       height="50%"
                      alt="profile"
                      style={{borderRadius:"10px"}}
                    />
                  </div>
                  <h5 >
                    {this.uppercase(data.name.first) +
                      " " +
                      this.uppercase(data.name.last)}
                  </h5>
                  <p >
                    {data.location.city +
                      ", " +
                      this.uppercase(data.location.state)}
                    <br />
                    <span >{data.phone}</span>
                  </p>
                </div>

            </div>
            </li>))

            : 
            this.state.results.map(data => (
              <li key={data.id.value} style={{padding:"1em"}}>
                <div key={data.id.value}>
  
                  <div style={{  alignItems: "center",display:"flex", borderRadius:"10px", border:"1px solid black",justifyContent: "space-between"}}>
                    <div >
                      <img
                        src={data.picture.large}
                         height="50%"
                        alt="profile"
                        style={{borderRadius:"10px"}}
                      />
                    </div>
                    <h5 >
                      {this.uppercase(data.name.first) +
                        " " +
                        this.uppercase(data.name.last)}
                    </h5>
                    <p >
                      {data.location.city +
                        ", " +
                        this.uppercase(data.location.state)}
                      <br />
                      <span >{data.phone}</span>
                    </p>
                  </div>
  
              </div>
              </li>))
            }
          </ul>

        </div>
        {/* <button
          onClick={e => {
            this.loadMore();
          }}
        >
          Load More Users
        </button> */}
      </div>
    );
  }
}

export default Search;

// import React, { useEffect, useState } from 'react';

// const Search = () => {
//   const [myState, mySetState] = useState([{
//     data: [],
//     per: 9,
//     page: 1,
//     total_pages: null
//   }]);



//   const uppercase = word => {
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   };

  // const loadData = () => {
  //   const { per, page, data } = state;
  //   const endpoint = `https://randomuser.me/api/?nat=us&results=${per}&page=${page}`;
  //   fetch(endpoint)
  //     .then(response => response.json())
  //     .then(json => {
  //       setState({
  //         data: [...data, ...json.results],
  //         scrolling: false,
  //         total_pages: json.info.results
  //       });
  //     });
  // };

//   const LoadMore = () => {
//     mySetState(
//       prevState => ({
//         page: prevState.page + 1,
//         scrolling: true
//       }),
//     );
//   };



//       console.log("hmmm");

//   useEffect(() => {
//     const LoadData = () => {
//       const { per, page, data } = myState;
//       console.log("json.results");

//           const endpoint = `https://randomuser.me/api/?nat=us&results=${per}&page=${page}`;
//           fetch(endpoint)
//             .then(response => response.json())
//             .then(json => {
//           console.log(json.results);
//           console.log("json.results");

//               mySetState({
//                 data: [...data, ...json.results],
//                 scrolling: false,
//                 total_pages: json.info.results
//               });

//             });

//           }
//     LoadData();
//   },[]);

//   return (
//     <>
//       <h1>Search</h1>
//       <nav style={{fontSize:"xx-large", float: "left"}}>
//         <ul>
//           <li>
//             1
//           </li>
//           <li>
//             2
//           </li>
//           <li>
//             3
//           </li>
//           <li>
//             4
//           </li>
//           <li>
//             4
//           </li>
//           <li>
//             5
//           </li>
//           <li>
//             6
//           </li>
//         </ul>
//       </nav>

//       <div className="clearfix Extra">
//         <div className="row">
//           {myState.data.map(data => (
//             <div className="col-md-4 animated fadeIn" key={data.id.value}>
//               <div className="card">
//                 <div className="card-body">
//                   <div className="avatar">
//                     <img
//                       src={data.picture.large}
//                       className="card-img-top"
//                       alt=""
//                     />
//                   </div>
//                   <h5 className="card-title">
//                     {uppercase(data.name.first) +
//                       " " +
//                       uppercase(data.name.last)}
//                   </h5>
//                   <p className="card-text">
//                     {data.location.city +
//                       ", " +
//                       uppercase(data.location.state)}
//                     <br />
//                     <span className="phone">{data.phone}</span>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button
//           className="btn btn-light btn-block w-50 mx-auto"
//           onClick={e => {
//             LoadMore();
//           }}
//         >
//           Load More Users
//         </button>
//       </div>

//     </>
//   );
// };

// export default Search;









/*
render() {
    return (
      <div className="clearfix Extra">
        <div className="row">
          {this.state.data.map(data => (
            <div className="col-md-4 animated fadeIn" key={data.id.value}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={data.picture.large}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    {this.uppercase(data.name.first) +
                      " " +
                      this.uppercase(data.name.last)}
                  </h5>
                  <p className="card-text">
                    {data.location.city +
                      ", " +
                      this.uppercase(data.location.state)}
                    <br />
                    <span className="phone">{data.phone}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="btn btn-light btn-block w-50 mx-auto"
          onClick={e => {
            this.loadMore();
          }}
        >
          Load More Users
        </button>
      </div>
    );
  }
}

*/