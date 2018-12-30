import React, { Component } from 'react';
import axios from 'axios';
import Gif from './Gif';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      woofs: [],
      gifs: [],
      isClicked: false
    }

    this.clickHandler = this.clickHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }  

    changeHandler(props){
      const name = props.target.name;
      const value = props.target.value;
      this.setState({
        [ name ] : value
      });
      }
  
    clickHandler(){
      let search_term = `${this.state.mood} ${this.state.character}`;

      axios
        .get("https://random.dog/woof.json")
        .then(response => response.data)
        .then(woofs => this.setState({ woofs }));

      axios
        .get('/api', {params: {searchTerm: search_term}})
        .then(response => response.data.results)
        .then(gifs => this.setState({ gifs }))

        this.setState({
          isClicked: true,
          })
      }
  
  render() {

    return (
      <div className='App'>
        <div className='container'>
          <div className='page-header text-center'>
            <h1>Hackathon</h1>
            <p>Meme Getter With A Surprise!</p>
          </div>
          <div>
            <img className="image" src={this.state.woofs.url}/>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="panel panel-default">
                <div className="panel-heading text-center"><h4>Enter Search Terms</h4></div>
                  
                <div className="panel-body">
                  <div className="form-group">
                    <label for="character">Who is your favorite character?</label>
                    <input name="character" onChange={this.changeHandler} className="form-control" placeholder="Michael Scott"></input>
                  </div>    

                  <div className="form-group">
                    <label for="mood">What is your current mood?</label>
                    <select name="mood" onChange={this.changeHandler} className="form-control" defaultValue='null'>
                      <option value="Select One">Select One</option>
                      <option value="happiness">Happiness</option>
                      <option value="surprise">Surprise</option>
                      <option value="fear">Fear</option>
                      <option value="anger">Anger</option>
                      <option value="sadness">Sadness</option>
                      <option value="disgust">Disgust</option>
                    </select>
                  </div> 
                </div>

                <div className="panel-footer">
                  <button className="btn btn-default btn-block" onClick={this.clickHandler} name="findMeme">Find Meme's!! Also Fetch Dog, because why not?</button>
                </div>

            </div>
            </div>

            <div className="col-sm-8">
              <div className="panel panel-default">
                <div className="panel-heading text-center"><h3>What Meme's will you look for today?</h3></div>              
                    <Gif
                      data = {this.state.gifs}
                      clicked = {this.state.isClicked}
                    />         
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
