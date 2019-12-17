import { setCurrentPage, setTotal } from '../actions/pagingAction'

const currentPage = 2;
const totalValue = 1000;

describe('>>> TEST ACTION: pagingAction', () => {
    it('>> Test setCurrentPage', () => {
        const page = setCurrentPage(currentPage);
        expect(page).toEqual({ type: "SET_CURRENT_PAGE", currentPage: currentPage });
    });
    it('>> Test setTotal', () => {
        const total = setTotal(totalValue);
        expect(total).toEqual({ type: "SET_TOTAL", total: totalValue });
    });
});