import * as CharactersActionCreators from './characters';
import * as WatchListActionCreators from './watchlist';

export default {
    ...CharactersActionCreators,
    ...WatchListActionCreators
}