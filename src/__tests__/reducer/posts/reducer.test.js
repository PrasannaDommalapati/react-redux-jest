import postsReducer from '../../../reducers/posts/reducer'
import { types } from '../../../actions/type'

describe('Get posts suite', () => {

    it('should return an empty array(default state)', () => {
        let newState = postsReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('should return new state if receiving type',() => {
        const payload = [{title: "test 1"},{title: "test 2"},{title: "test 3"}];
        let newState = postsReducer(undefined,{
            type: types.GET_POSTS,
            payload
        });

        expect(newState).toEqual(payload);
    })

})
