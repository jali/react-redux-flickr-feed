import * as AT from './types';
import $ from 'jquery';

export function fetchPublicPhotos(){
	return (dispatch) => {
		$.ajax({
		  url: 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?&tags=rolex',
		  dataType: 'jsonp'
		}).then((data) => {
			dispatch({type: AT.FETCH_IMAGES, payload: data})

		})
	}
}