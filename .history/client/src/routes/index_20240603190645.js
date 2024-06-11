
import HomePage from "../pages/HomePage/HomePage.tsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.tsx";
import FavouritePage from "../pages/Favourite/FavouritePage.tsx";
import LoginPage from "../pages/LoginPage/LoginPage.tsx";
import PersonalPage from "../pages/PersonalPage/PersonalPage.tsx";
import RentingRoom from '../pages/RentingRoom/RentingRoom.tsx'
import RentalHouse from '../pages/RentalHouse/RentalHouse.tsx'
import ApartmentRental from '../pages/ApartmentRental/ApartmentRental.tsx'

export const routes =  [
    {
        path : "/",
        page : HomePage,
        isShowHeader : true,
        isShowFooter : true,
        isShowSearch: true
    },
    {
        path : "/favourite",
        page : FavouritePage,
        isShowHeader : true,
        isShowFooter : true,
        isShowSearch: false

    },
    {
        path : "/login",
        page : LoginPage,
        isShowHeader : true,
        isShowFooter : true,
        isShowSearch: false

    },
    {
        path : "/rentingroom",
        page : RentingRoom,
        isShowHeader : true,
        isShowFooter : true,
        isShowSearch: true

    },
    {
        path : "/rentalhouse",
        page : RentalHouse,
        isShowHeader : true,
        isShowFooter : true,
        isShowSearch: true

    },
    {
        path : "/apartmentRental",
        page : ApartmentRental,
        isShowHeader : true,
        isShowFooter : true,
        isShowSearch: true

    },
    {
        path : "*",
        page : NotFoundPage,
    },
    {
        path : "/personal",
        page : PersonalPage,
    }
]
