import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { MainPage } from "../view/page/private/main/main-page"
import { HomePage } from "../view/page/private/home/home-page"
import { DownloadsPage } from "../view/page/private/downloads/downloads-page"
import { SobreNosPage } from "../view/page/private/sobre-nos/sobre-nos-page"

export const RouterMain = () => {

    const router = createBrowserRouter([
        {
            
            path: '/',
            element: (
                <MainPage>
                    <HomePage />
                </MainPage>
            )
        },
        {
            path: '/home',
            element: (
                <MainPage>
                    <HomePage />
                </MainPage>
            )
        },
        {
            path: '/downloads',
            element: (
                <MainPage>
                    <DownloadsPage />
                </MainPage>
            )
        },
        {
            path: 'sobre-nos',
            element: (
                <MainPage>
                    <SobreNosPage />
                </MainPage>
            )
        }
    ], {
        basename: '/acap.front'
    });

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}