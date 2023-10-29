import Profile from "./components/Profile"
import './App.css';

const profileDetailsList =[
  {
    uniqueNo:1,
    imageUrl: "https://img.freepik.com/free-icon/man_318-233556.jpg",
    name: "John McDoe",
    role: "Sr. Software Engineer"
  },
  {
    uniqueNo: 2,
    imageUrl:
      "https://t3.ftcdn.net/jpg/05/77/38/04/360_F_577380416_94uavP658eMEJve8JhMhsvG4bh7mqlDJ.jpg",
    name: "Stacey Michaels",
    role: "Sr. UX Engineer"
  },
  {
    uniqueNo: 3,
    imageUrl:
      "https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg",
    name: "Michael Deeley",
    role: "Director of Operations"
  },
  {
    uniqueNo: 4,
    imageUrl:
      "https://img.freepik.com/premium-vector/young-man-wearing-smart-glass-vector-illustration_107173-16887.jpg?w=360",
    name: "Rajan Krishnan",
    role: "Director of Sales (APAC)"
  } 
  ,{
    uniqueNo: 5,
    imageUrl:"https://www.pngitem.com/pimgs/s/140-1400554_best-",
    name:"ABR",
    role: "Baba"
  }
]
const App = ()=> {
  return (
    <div className="bg-container">
      <h1 className='title'>Profile List</h1>
      <ul>
        {profileDetailsList.map((eachItem) => (
          <Profile userDetails = {eachItem} />
        ))}
      </ul>
    </div>
  );
}

export default App;
