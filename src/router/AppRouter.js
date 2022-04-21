import React, { Suspense, lazy } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Login'));
const Menu = lazy(() => import('../pages/Menu'))

const AppRouter = () => {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Suspense fallback={<div>Loading!!!</div>}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/menu' element={<Menu />}/>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </QueryClientProvider>
    )
}
export default AppRouter;