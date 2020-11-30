import React from 'react';
import ReactDOM from 'react-dom';
import Library from './Library'
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

//----------------------- 1. Create React Component --------------------------------------------

// class Message extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1 style={{color: this.props.color}}>
//           {this.props.msg}
//         </h1>
//     <p> I'll be back in {this.props.minutes} minutes</p>
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <Message color="blue" msg="Hello World!" minutes={5}/>,
//   document.getElementById('root')
// );

 //-----------------------  2. Create custom functions for the React component ---------------------

// let skiData = {
//   total:50,
//   powder: 20,
//   backcountry: 10,
//   goal:100
// }

// class SkiDataCounter extends React.Component {
//   getPercent = decimal => {
//     return decimal * 100 + '%'
//   }
//   calcGoalProgress =(total,goal) => {
//     return this.getPercent(total/goal)
//   }
//   render () {
//     const {total, powder, backcountry, goal} = this.props
//     return (
//       <section>
//         <div>
//           <p>
//             Total Days: {total}
//           </p>
//         </div>
//         <div>
//           <p>
//             Powder Days: {powder}
//           </p>
//         </div>
//         <div>
//           <p>
//             Backcountry Days: {backcountry}
//           </p>
//         </div>
//         <div>
//           <p>
//             Goal Progress: {this.calcGoalProgress(total,goal)}
//           </p>
//         </div>
//       </section>
//     )
//   }
// }

// ReactDOM.render(
//   <SkiDataCounter 
//     total={skiData.total}
//     powder={skiData.powder}
//     backcountry={skiData.backcountry}
//     goal={skiData.goal}/>,
//   document.getElementById('root')
// );

// ----------------------------- 3. Create function components --------------------------------------

// let skiData = {
//   total:50,
//   powder: 20,
//   backcountry: 10,
//   goal:100
// }

// const getPercent = decimal => {
//   return decimal * 100 + '%'
// }
// const calcGoalProgress =(total,goal) => {
//   return getPercent(total/goal)
// }

// const SkiDataCounter = ({total, powder, backcountry, goal}) => {
//     return (
//       <section>
//         <div>
//           <p>
//             Total Days: {total}
//           </p>
//         </div>
//         <div>
//           <p>
//             Powder Days: {powder}
//           </p>
//         </div>
//         <div>
//           <p>
//             Backcountry Days: {backcountry}
//           </p>
//         </div>
//         <div>
//           <p>
//             Goal Progress: {calcGoalProgress(total,goal)}
//           </p>
//         </div>
//       </section>
//     )
// }

// ReactDOM.render(
//   <SkiDataCounter 
//     total={skiData.total}
//     powder={skiData.powder}
//     backcountry={skiData.backcountry}
//     goal={skiData.goal}/>,
//   document.getElementById('root')
// );

// --------------------------- 4. Compose Components -------------------------------------

// let bookList = [
//   {"title": "White Teeth", "author": "Zadie Smith", "pages": 200},
//   {"title": "Think like a Monk", "author": "Jay Shetty", "pages": 200},
//   {"title": "2 states", "author": "Chetan Bhagat", "pages": 200}
// ]

// const Book = ({title, author, pages}) => {
//   return (
//     <section>
//       <h2>{title}</h2>
//       <p>By: {author}</p>
//       <p>Pages: {pages} pages</p>
//     </section>
//   )
// }

// const Library = ({books}) => {
//     return (
//       <div>
//         {
//           books.map(
//             (book, i) => 
//             <Book 
//               key = {i}
//               title={book.title}
//               author={book.author}
//               pages={book.pages} />
//           )
//         }
//       </div>
//     )
// }

// ReactDOM.render(
//   <Library books={bookList}/>,
//   document.getElementById('root')
// );

// ------------------------- 5. Introducing state while composing components and conditional component rendering, fetching data in component lifecycle ---------------------

let bookList = [
  {"title": "White Teeth", "pages": 200},
  {"title": "Think like a Monk", "author": "Jay Shetty", "pages": 200},
  {"title": "2 states", "author": "Chetan Bhagat", "pages": 200}
]

ReactDOM.render(
  <Library books={bookList}/>,
  document.getElementById('root')
);


// ---------------------------------------- 5.4. React Forms --------------------------------------------------

/*class FavoriteColorComponent extends React.Component {

  state = { value: ''}
  
  newColor = e => {
      this.setState({ value: e.target.value })
  }

  submit = e => {
    console.log(`New color: ${this.state.value}`)
    e.preventDefault()
  }
  render() {
    return (
      <form onSubmit={this.submit}>
        <label> Favorite color:
          <input
            type="color"
            onChange={this.newColor} />
        </label>
        <button>Submit</button>
      </form>
    )
  }
}

ReactDOM.render(
  <FavoriteColorComponent />,
  document.getElementById('root')
);
*/

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
