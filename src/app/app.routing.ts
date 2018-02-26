import { MoviesComponent } from "./movies/movies.component";
import { CreateComponent } from "./create/create.component";

export const AvailableRoutes: any = [
    { path: "", component: MoviesComponent },
    { path: "create", component: CreateComponent }
];