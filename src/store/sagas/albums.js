import api from 'services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as AlbumsActions } from 'store/ducks/albums';

export function* getAlbums() {
  console.log('init');
  try {
    const respose = yield call(api.get, '/albums');

    console.log(respose);

    yield put(AlbumsActions.getAlbumsSuccess(respose.data));
  } catch (err) {
    console.log(err);
    yield put(AlbumsActions.getAlbumsFailure('Erro ao buscar álbuns da API'));
  }
}
