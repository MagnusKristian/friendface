import React, { Component } from "react";

class Search extends Component {
  state = {
    data: [],
    per: 9,
    page: 1,
    total_pages: null
  };

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
    console.log(this.state.data);

  };


  loadData2 = () => {
    console.log("loading data2");
    const { per, page, data } = this.state;
    const endpoint = `https://randomuser.me/api/?nat=us&results=${per}&page=${page}`;
    fetch(endpoint)
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: [json.results],
          scrolling: false,
          total_pages: json.info.results
        });
      });
    console.log(this.state.data);

  };

  loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
        scrolling: true
      }),
    );
    this.loadData();
  };

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
    return (
      <div>

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

        <div >
          <ul>
          {this.state.data.map(data => (
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
            </li>))}
          </ul>

        </div>
        <button
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