import reducer from '../reducers/pagingReducer'

const currentPage = 2;
const totalValue = 1000;

describe('>>> TEST REDUCER: moviesreducer', () => {
    it('>> Test SET_CURRENT_PAGE', () => {
        const testAction = {
            type: "SET_CURRENT_PAGE",
            currentPage: currentPage
        };
        expect(reducer({}, testAction)).toEqual({ currentPage: currentPage });
    });
    it('>> Test SET_TOTAL', () => {
        const testAction = {
            type: "SET_TOTAL",
            total: totalValue
        };
        expect(reducer({}, testAction)).toEqual({ total: totalValue});
    });
});