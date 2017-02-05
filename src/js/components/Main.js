import React from 'react';
import { connect } from 'react-redux';
import { fetchPublicPhotos } from '../actions/flickrActions';

@connect((store) => {
  return {
    data: store.data,
  };
})

export default class Main extends React.Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchPublicPhotos())
  }

  handleSearch(e) {
    e.preventDefault();
    const term = this.refs.tags.value;
    this.props.dispatch(fetchPublicPhotos(term))
  }

  render() {
    const photos = [];
    for(var k in this.props.data.items){
      photos.push(<div className="col-lg-3 col-xs-6 col-sm-6" key={k.toString()}>
          <div className="thumbnail">
            <div className="caption">{(this.props.data.items[k].title).slice(0,60)} </div>
            <div className="border-class">
              <img className="thumbnail img-thumbnail" src={this.props.data.items[k].media.m} />
            </div>
            <p>{(this.props.data.items[k].tags).split(" ").map((tag) => <button key={tag} className="btn btn-default">{tag}</button>)}</p>
          </div>
        </div>);
    }
    
    return (
      <div className="container">
        <h1>Flickr latest images</h1>
        <input type="text" ref="tags" placeholder="Search tags" />
        <button onClick={this.handleSearch}>Go</button>
        <h3>{this.props.data.title}</h3>
        <div className="row">
          {photos}
        </div>
      </div>
      )
  }
}

