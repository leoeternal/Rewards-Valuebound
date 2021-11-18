import './App.css';
import './style/appStyle.css';
import Body from './components/BodyComponent';
import Header from './components/HeaderComponent';
import Pagination from './components/PaginationComponent';
import {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react-router-dom';

function App() {

  const duplicateData=[
    {
      id: 1,
      rewardType: "Birthday",
      assignee: "Raymond Tech. Pvt. Ltd.",
      rewardDate: "12/02/2020",
    },
    {
      id: 2,
      rewardType: "Vimal K",
      assignee: "Vimal & Co",
      rewardDate: "12/02/2020",
    },
    {
      id: 3,
      rewardType: "Harsha Bendi",
      assignee: "Bend Solutions",
      rewardDate: "12/02/2020",
    },
    {
      id: 4,
      rewardType: "Employee",
      assignee: "Assignee Dummy A",
      rewardDate: "12/02/2020",
    },
    {
      id: 5,
      rewardType: "Reward Type Dummy",
      assignee: "Not Decided",
      rewardDate: "12/02/2020",
    },
    {
      id: 6,
      rewardType: "Best HR",
      assignee: "Dummy C",
      rewardDate: "12/02/2020",
    },
  ]

  const[data,updateData]=useState(duplicateData);

  const getSearchData = (e) => {
    const value=e.target.value;
    const updated=duplicateData.filter((d)=>{
      if(d.rewardType.search(value)===-1){
        return false;
      }
      return d;
    })
    updateData(updated);
  }
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/rewards" element={<Body/>} />
    //   </Routes>
    // </Router>

    <div className="wrapper">
      <Header getSearchData={getSearchData} />
      <Body data={data} />
      <Pagination />
    </div>
  );
}

export default App;
