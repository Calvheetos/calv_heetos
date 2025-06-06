import { useLocation } from 'react-router-dom';

export function IsProjectsRoute() {
    const location = useLocation();
    return location.pathname === '/projects' || location.pathname === '/projects/map'
};
