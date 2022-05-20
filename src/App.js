import './App.css';

function App() {
  return (
    <div className="App">
     <div className="main">
       <div className='center'>
       <div className="menu">
         <div className='logo'>
           <h3>WEBSITE</h3>
         </div>
         <div className='item-menu'>
           <a href>LOGIN</a>
         </div>
       </div>
       </div>
       <div className='form'>
       <h3>Entre em contato</h3>
         <form>
          <div className='item-form'>
            <input type='text'/>
            <input type='text'/>
            <input type='text'/>
            <input type='text'/>
            <input type='submit'/>

          </div>
         </form>
       </div>
      </div>
      
    </div>
  );
}

export default App;
