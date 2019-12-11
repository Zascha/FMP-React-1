export function setCurrentPage(currentPage) {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage: currentPage
    }
}

export function setTotal(totalvalue) {
    return {
        type: 'SET_TOTAL',
        total: totalvalue
    }
}