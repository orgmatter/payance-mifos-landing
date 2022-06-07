import { Homepage, Services, Products, Learn, About } from '../views';


export const pageRoutes = [
    {
        name: "Home",
        routeUrl: "/",
        component: ({pageRoute, dialogComponentProps}) => <Homepage {...pageRoute} dialogComponentProps={dialogComponentProps} />,
    },
    {
        name: "Services",
        routeUrl: "/services",
        component: ({pageRoute, dialogComponentProps}) => <Services {...pageRoute} dialogComponentProps={dialogComponentProps} componentName={'service-types'} />,
        subRoutes: [
            {
                subRouteUrl: "/services/mifos",
                name: "Mifos",
                hashname: "#mifos",
                component: ({pageRoute, dialogComponentProps}) => <Services {...pageRoute} dialogComponentProps={dialogComponentProps} componentName={'mifos'} />,
            },
            {
                subRouteUrl: "/services/mifos",
                name: "Infoware",
                hashname: "#infoware",
                component: ({pageRoute, dialogComponentProps}) => <Services {...pageRoute} dialogComponentProps={dialogComponentProps} componentName={'infoware'} />,
            },
        ]
    },
    {
        name: "Products",
        routeUrl: "/products",
        component: ({pageRoute, dialogComponentProps}) => <Products {...pageRoute} dialogComponentProps={dialogComponentProps} />,
        subRoutes: [
            {
                subRouteUrl: "/products",
                name: "Mifos",
                hashname: "#mifos",
                subComponent: "",
            }
        ]
    },
    {
        name: "Learn",
        routeUrl: "/learn",
        component: ({pageRoute, dialogComponentProps}) => <Learn {...pageRoute} dialogComponentProps={dialogComponentProps} />,
        subRoutes: [
            {
                sublink: "",
                subComponent: "",
            },
            {
                sublink: "",
                subComponent: "",
            },
            {
                sublink: "",
                subComponent: "",
            },
            {
                sublink: "",
                subComponent: "",
            },
            {
                sublink: "",
                subComponent: "",
            },
            {
                sublink: "",
                subComponent: "",
            },
            {
                sublink: "",
                subComponent: "",
            },
        ]
    },
    {
        name: "About Us",
        routeUrl: "/about",
        component: ({pageRoute, dialogComponentProps}) => <About {...pageRoute} dialogComponentProps={dialogComponentProps} />,
    },
    {
        name: "Our Works",
        routeUrl: "/works",
        component: ({pageRoute, dialogComponentProps}) => <About {...pageRoute} dialogComponentProps={dialogComponentProps} />,
    }
]