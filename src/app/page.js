import Counter from "./components/Counter/Counter";
  export const metadata = {
  title: "Home"
 
};

const HomePage = () => {

  return (
    <div className='ms-10'>
      <h1>This is Next App</h1>
      <Counter/>
     
      
    </div>
  );
};

export default HomePage;