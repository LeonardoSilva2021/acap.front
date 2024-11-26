import { Route, Routes } from "react-router-dom"
import { MainPage } from "../view/page/private/main/main-page"
import { HomePage } from "../view/page/private/home/home-page"
import { DownloadsPage } from "../view/page/private/downloads/downloads-page"
import { SobreNosPage } from "../view/page/private/sobre-nos/sobre-nos-page"

export const RouterMain = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={
                    <MainPage>
                        <HomePage />
                    </MainPage>
                } />
                <Route path="/home" element={
                    <MainPage>
                        <HomePage />
                    </MainPage>
                } />
                <Route path="/downloads" element={
                    <MainPage>
                        <DownloadsPage />
                    </MainPage>
                } />
                <Route path="/sobre-nos" element={
                    <MainPage>
                        <SobreNosPage />
                    </MainPage>
                } />
            </Routes>
        </>
    )
}