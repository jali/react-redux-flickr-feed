import React from 'react';
// import Grid from './Grid';
import { connect } from 'react-redux';
import { fetchPublicPhotos } from '../actions/flickrActions';


@connect((store) => {
  return {
    data: store.data,
  };
})

export default class Layout extends React.Component {
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
      this.photos.push(<div className="col-xs-6"><div className="thumbnail">
  <div className="caption">{data.data.items[k].title} </div>
  <div className="border-class"><img className="img-thumbnail" src={data.data.items[k].media.m} /></div><p>{data.data.items[k].tags}</p></div></div>);
    }
    console.log(this.photos)
    return (
      <div className="container">
        <h1>Flickr latest images</h1>
        <h3>{data.data.title}</h3>
        <div className="list-group">
          {this.photos}
        </div>
      </div>
      )
  }
}
