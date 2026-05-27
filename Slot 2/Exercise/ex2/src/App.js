import logo from './logo.svg';
import './App.css';

function App() {
  // khai bao ham chao1 
  // ten do o console
  let chao1 = (name) => console.log(`Xin chao, ${name}!`);
  let person = {
    id: 1,
    name: "Bob",
    age: 30,
    address: "123 HT"
};
  return (
    <>
    <h1> Xin chao, day la btv ham trong React</h1>
    <h2> toi la Phdum</h2>
    <button onClick={ () => chao1("Phdum")}>Goi ham chao</button>
    <div className="card">
       <h3> Thong tin Person: </h3>
      <p> ID: {person.id}</p> 
      <p> Name: {person.name}</p> 
      <p> Age: {person.age}</p> 
      <p> Address: {person.address}</p> 
    </div>
     
     </>

  
  );
}

export default App;
