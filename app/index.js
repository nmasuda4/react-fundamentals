import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass'

const root = document.getElementById('root');
class App extends React.Component {

  state = {
     isSelected: '',
     results: [],
     results2:[],
  };

 //  handleClick = () =>  {
 //     console.log('this is', this)
 // }

 consoleOut (pokeType) {
   console.log(pokeType);
   let typed= pokeType
   const api = `https://pokeapi.co/api/v2/type/${typed}`
   fetch(api)
   .then(response => response.json())
   .then(data => this.setState({ results2: data.pokemon}));

   return(
     <ul className='pokemonList'>
       {this.state.results2.map(d => {
          return (
             <li key={d.name}>{d.name}</li>
          )
       })}
     </ul>
   )
 }

  fetchPokeData () {
     const api = `https://pokeapi.co/api/v2/type/`
     fetch(api)
     .then(response => response.json())
     .then(data => this.setState({ results: data.results}))
  }

  // fetchPokeData2 (pokeType) {
  //    let typed= pokeType
  //    const api = `https://pokeapi.co/api/v2/type/${typed}`
  //    fetch(api)
  //    .then(response => response.json())
  //    .then(data => this.setState({ results2: data.pokemon}))
  // }


  // fetchData () {
  //    const api = `https://jsonplaceholder.typicode.com/users`
  //    fetch(api)
  //    .then(response => response.json())
  //    .then(data => this.setState({ results: data}))
  // }


  componentDidMount() {
     this.fetchPokeData();
  }

  render() {

    return (
      <div className='container'>
         <ul className='typeList'>
         {this.state.results.map(d => {
            return (
               <li key={d.name} onClick={() => this.consoleOut(d.name)}>{d.name}</li>
            )
         })}
         </ul>
         <div onClick={this.consoleOut}>Click</div>
      </div>
    )
  }

}

ReactDOM.render(<App />, root)


// class Welcome extends React.Component {
//
//    state = {
//       isLoading: true,
//       selection: 'Flying',
//       items: []
//    }
//
//    componentDidMount() {
//       this.fetchData();
//    }
//
//    fetchData() {
//
//       fetch(`https://pokeapi.co/api/v2/type/`)
//       .then(response => response.json())
//       // .then(myJson => myJson.map(function(d) {
//       //    return d.results;
//       // }))
//       .then(d =>
//          this.setState({
//             items: d.results,
//             pokemon: null,
//             isLoading: false
//       )
//          })
//       .catch(error => console.log('parsing failed', error))
//    }
//
//    fetchData2() {
//
//       fetch(`https://pokeapi.co/api/v2/type/${selection}`)
//       .then(response => response.json())
//       // .then(myJson => myJson.map(function(d) {
//       //    return d.results;
//       // }))
//       .then(d =>
//          this.setState({
//             items: d.results,
//             isLoading: false
//          })
//       )
//       .catch(error => console.log('parsing failed', error))
//    }
//
//
//    updateSelection(d) {
//       this.setState({
//          selection: d
//       })
//    }
//
//    render() {
//       const pokeTypes = ['Flying', 'Grass', 'Fire', 'Water'];
//       window.yay = this.state.items.map(function(d) { return d.name});
//       console.log(name);
//
//       return (
//          <div>
//             <ul className='types'>{pokeTypes.map(d => <li key={d} onClick={() => this.updateSelection(d) }> {d} </li>)}</ul>
//             <p>Selection: {this.state.selection}</p>
//             {this.state.isLoading
//                ? <p>Loading</p>
//                : <ul>
//                   {yay.map(d => <li key={d}  onClick={() => this.updateSelection(d) }> {d} </li>)}
//                  </ul>
//             }
//
//             {/* {this.state.isLoading
//                ? <p>Loading</p>
//                : <ul>this.state.items.map(function(d) { return <li>{items.name}</li>})</ul>
//
//             } */}
//          </div>
//       )
//    }
// }
//
// const rootElement = document.getElementById('root')
//
// ReactDOM.render(
//    <Welcome />, rootElement
// );
