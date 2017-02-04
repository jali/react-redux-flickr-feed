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
    this.photos = []
  }

  componentDidMount() {
    this.props.dispatch(fetchPublicPhotos())
  }

  render() {
    const data = this.props;
    for(var k in data.data.items){
      this.photos.push(<div className="col-lg-3 col-xs-6 col-sm-4" key={k.toString()}>
        <div className="thumbnail">
        <div className="caption">{(data.data.items[k].title).slice(0,40)} </div>
        <div className="border-class">
          <img className="thumbnail img-thumbnail" src={data.data.items[k].media.m} />
        </div>
        <p>{(data.data.items[k].tags).split(" ").map((tag) => <button key={tag} className="btn btn-default">{tag}</button>)}</p>
        </div>
        </div>);
    }
    
    return (
      <div className="container">
        <h1>Flickr latest images</h1>
        <h3>{data.data.title}</h3>
        <div className="row">
          {this.photos}
        </div>
      </div>
      )
  }
}
