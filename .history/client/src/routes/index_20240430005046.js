import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import NotFoundPage from "../pages/NotFoundPage";
import Favourite from "../pages/Favourite";
import LoginPage from "../components/LoginPage";

export const routes =  [
    {
        path : "/",
        page : HomePage,
        isShowHeader : true,
        isShowFooter : true
    },
    {
        path : "/search",
        page : SearchPage,
        isShowHeader : true,
        isShowFooter : true

    },
    {
        path : "/favourite",
        page : Favourite,
        isShowHeader : true,
        isShowFooter : true
    },
    {
        path : "/login",
        page : LoginPage,
        isShowHeader : true,
        isShowFooter : true
    },
    {
        path : "*",
        page : NotFoundPage,
    }
]