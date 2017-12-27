export const CHANGE_ROUTE = 'CHANGE_ROUTE';

export function changeRoute({ route }) {
    return {
        type: CHANGE_ROUTE,
        route: route
    }
}